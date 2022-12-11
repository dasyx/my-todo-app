// Importez le paquet vue-router et le composant App.vue
import VueRouter from 'vue-router';
import App from './App.vue';
import TodoList from './components/TodoList.vue'

// Créez un objet de routeur en utilisant VueRouter
const router = new VueRouter({
  routes: [
    // Définissez les routes de votre application ici
    {
      name: 'home',
      path: '/',
      component: App
    },
    {
        name: 'todolist',
        path: '/',
        component: TodoList
      },

  ]
});

// Instanciez le routeur en utilisant Vue.use
Vue.use(router);

// Exportez l'objet de routeur
export default router;
