import App from './App.svelte';
import './interceptors/axios';

const app = new App({
    target: document.body, props: {
        name: 'world'
    }
});

export default app;
