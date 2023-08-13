import { createApp, nextTick } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import index from './pages/index.vue'
import marathon from './pages/marathon.vue'
import { createPinia } from 'pinia'

const routes = [
  { path: '/', component: index, meta: { title: 'Курс "Мідл UX/UI дизайнер"' } },
  { path: '/marathon', component: marathon, meta: { title: 'Марафон "Пекельний тиждень"' } },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

createApp(App).use(createPinia()).use(router).mount('#app')
