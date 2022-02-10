<script>
    import {onMount} from 'svelte';
    import axios from "axios";
    import {push} from "svelte-spa-router";

    let message = 'You are not logged in';

    onMount(async () => {
        const response = await axios.get('user');

        if (response.status === 200) {
            message = `Hi ${response.data.name}`;
        } else {
            await push('/login');
        }
    });

    $: logout = async () => {
        await axios.post('logout', {}, {withCredentials: true});

        axios.defaults.headers.common['Authorization'] = '';

        await push('/login');
    }
</script>


<div class="container mt-5 text-center">
    <h3>{message}</h3>

    <a href="javascript:void(0)" class="btn btn-lg btn-primary"
       on:click={logout}
    >Logout</a>
</div>
