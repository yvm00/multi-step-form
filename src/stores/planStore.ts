import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export type CardsItem = {
    id: number,
    img: string,
    label: string,
    monthlyCost: number,
    yearlyCost: number
}

export type OptionItem = {
    id: number,
    label: string,
    title: string,   
    monthlyCost: number,
    yearlyCost: number
}

export const usePlanStore = defineStore('plan', () => {
    
    const version = ref<'montly'| 'yearly'>('yearly')
    const selectedPlan = ref('')

    const selectPlan = (label: string) => {
        selectedPlan.value = label
    }

  

    return {version, selectPlan, selectedPlan};
});
