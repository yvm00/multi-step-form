import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export type MenuItem = {
    id: number,
    label: string,
    title: string,
    component: string
}

export const useMenuStore = defineStore('menu', () => {
    const router = useRouter();

    const navigateTo = (component: string) => {
        router.push({name: component});
        console.log(router.currentRoute.value.name)
    }
  

  return {navigateTo};
});
