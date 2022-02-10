<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let name = '', email = '', password = '';

    $: submit = async () => {
        await axios.post('register', {
            name,
            email,
            password
        });

        await push('/login');
    }
</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 fw-normal">Please register</h1>

        <div class="form-floating">
            <input bind:value={name} class="form-control" placeholder="Name">
            <label>Name</label>
        </div>

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
