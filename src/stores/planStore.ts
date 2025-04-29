import { defineStore } from 'pinia';
import { ref } from 'vue';

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

    const optionList = ref<OptionItem[]>([
        {id: 1, label: 'Online service', title: 'Access to multiplayer games', monthlyCost: 1, yearlyCost: 10},
        {id: 2, label: 'Larger storage', title: 'Extra 1TB of cloud save', monthlyCost: 2, yearlyCost: 20},
        {id: 3, label: ' Customizable Profile', title: 'Custom theme on your profile', monthlyCost: 2, yearlyCost: 20},
    ])

    const version = ref<'montly' | 'yearly'>('yearly')
    const selectedPlan = ref('')
    const selectedOptions = ref([])

    const setPlan = (label: string) => {
        selectedPlan.value = label
    }

  

    return {version, setPlan, selectedPlan, optionList, selectedOptions};
});
