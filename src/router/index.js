import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index'),
      redirect: '/film',
      children: [{
        path: '/film',
        name: 'Film',
        component: () => import('@/pages/film/Film')
      },
      {
        path: '/cinema',
        name: 'Cinema',
        component: () => import('@/pages/cinema/Cinema')
      },
      {
        path: '/recommend',
        name: 'Recommend',
        component: () => import('@/pages/recommend/Recommend')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/pages/mine/Mine')
      }]
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/filmDetail',
      name: 'FilmDetail',
      component: () => import('@/pages/filmDetail/FilmDetail')
    },
    {
      path: '/cinemaDetail',
      name: 'CinemaDetail',
      component: () => import('@/pages/cinemaDetail/CinemaDetail')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/components/HelloWorld')
    }
  ],
  mode: 'history'
});
