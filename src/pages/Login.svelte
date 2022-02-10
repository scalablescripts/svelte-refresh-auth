<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let email = '', password = '';

    $: submit = async () => {
        const response = await axios.post('login', {
            email,
            password
        }, {withCredentials: true});

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            await push('/');
        }
    }
</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
            <label>Email address</label>
        </div>

        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
            <label>Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
</main>
