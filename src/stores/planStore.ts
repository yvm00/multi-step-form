import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import { watch } from 'fs';

export type PlanItem = {
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

    const planList = ref<PlanItem[]>([
        {id: 1, img: arcadeIcon, label: 'Arcade', monthlyCost: 9, yearlyCost: 90},
        {id: 2, img: advancedIcon, label: 'Advanced', monthlyCost: 12, yearlyCost: 120},
        {id: 3, img: proIcon, label: 'Pro', monthlyCost: 15, yearlyCost: 150},
    ])

    const optionList = ref<OptionItem[]>([
        {id: 1, label: 'Online service', title: 'Access to multiplayer games', monthlyCost: 1, yearlyCost: 10},
        {id: 2, label: 'Larger storage', title: 'Extra 1TB of cloud save', monthlyCost: 2, yearlyCost: 20},
        {id: 3, label: ' Customizable Profile', title: 'Custom theme on your profile', monthlyCost: 2, yearlyCost: 20},
    ])

    const version = ref<'montly' | 'yearly'>('yearly')
    const selectedPlan = ref<PlanItem | null>(planList.value[0] || null)
    const selectedOptions = ref<OptionItem[]>([])
    

    const setPlan = (plan: PlanItem ) => {
        selectedPlan.value = plan
    }

    const totalMontly = computed(() => {
        return selectedPlan.value!.monthlyCost + selectedOptions.value.reduce((sum, item) => sum + item.monthlyCost, 0);
    }); 

    const totalYearly = computed(() => {
        return selectedPlan.value!.yearlyCost + selectedOptions.value.reduce((sum, item) => sum + item.yearlyCost, 0);
    });

    return {version, setPlan, selectedPlan, optionList, planList, selectedOptions, totalMontly, totalYearly};
});
