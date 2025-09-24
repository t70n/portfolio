// Every Vue application starts by creating a new application instance with the createApp function:
import { createApp } from 'vue'

// Import the root component App from a single-file component.
import App from './App.vue'

// Import the router instance from the router configuration file.
import router from './router';

// An application instance won't render anything until its .mount() method is called. 
// It expects a "container" argument, which can either be an actual DOM element or a selector string:
const app = createApp(App);
// The .use() method is used to install plugins, in this case the router plugin.
app.use(router);
// The .mount() method should always be called after all app configurations and asset registrations are done.
app.mount('#app');
