<script>
	import Login from "./pages/Login.svelte";
	import Register from "./pages/Register.svelte";
	import Home from "./pages/Home.svelte";
	import Router, {link} from 'svelte-spa-router';

	const routes = {
		'/': Home,
		'/login': Login,
		'/register': Register,
	};
</script>

<header class="p-3 bg-dark text-white">
	<div class="container">
		<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
			<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<li><a href="/" use:link class="nav-link px-2 text-white">Home</a></li>
			</ul>

			<div class="text-end">
				<a href="/login" use:link class="btn btn-outline-light me-2">Login</a>
				<a href="/register" use:link class="btn btn-outline-light me-2">Register</a>
			</div>
		</div>
	</div>
</header>

<Router {routes}/>
