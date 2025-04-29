<template>
    <div class="plan q-pl-lg q-pt-lg q-pr-xl" >
        <div class="text-h4 text-primary text-weight-bold">
            Select your plan
        </div>
        <div class="text-body2 text-secondary" >
            You have the option of monthly or yearly billing.
        </div>
        <div class="row q-gutter-sm justify-around q-my-lg">
            <q-card 
            v-for="card in cards"
            :key="card.id"
            @click="planStore.selectPlan(card.label)"
            class="plan__card"
            :class="{'plan__card-selected': isSelected(card.label)}" 
            flat 
            bordered>        
                <q-card-section class="flex column justify-between" style="height: 100%">
                    <q-img :src="card.img" width="40%"/>
                    <div>
                        <div class="text-subtitle1 text-primary text-weight-bold">{{ card.label }}</div>
                        <div v-if="planStore.version == 'yearly'">
                            <div class="text-secondary">${{ card.yearlyCost }}/yr</div>
                            <div class="text-primary">2 month for free</div>
                        </div>
                        <div v-else>
                            <div class="text-secondary">${{ card.monthlyCost }}/mo</div>
                        </div>                        
                    </div>                    
                </q-card-section>
            </q-card>
        </div>
        <div class="row items-center justify-center">
            <div class="text-weight-bold" :class="{'text-primary': planStore.version == 'montly', 'text-secondary': planStore.version == 'yearly' }">Monthly</div>
                <q-toggle
                v-model="planStore.version"
                true-value="yearly"
                false-value="montly"
                color="primary"
                keep-color
                />
            <div class="text-weight-bold" :class="{'text-primary': planStore.version == 'yearly', 'text-secondary': planStore.version == 'montly' }">Yearly</div>
        </div>

        <div class="q-my-lg">
            <q-form @submit="onSubmit">                
                <div class="flex justify-end q-mt-xl">
                    <q-btn class="text-capitalize text-weight-medium" label="Next Step" type="submit" color="primary" unelevated/>
                </div>            
            </q-form>      
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMenuStore} from '../stores/menuStore';
import { usePlanStore, type CardsItem} from '../stores/planStore';
import { ref } from 'vue';
import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
const menuStore = useMenuStore();
const planStore = usePlanStore();

const cards = ref<CardsItem[]>([
    {id: 1, img: arcadeIcon, label: 'Arcade', monthlyCost: 9, yearlyCost: 90},
    {id: 2, img: advancedIcon, label: 'Advanced', monthlyCost: 12, yearlyCost: 120},
    {id: 3, img: proIcon, label: 'Pro', monthlyCost: 15, yearlyCost: 150},
])

const isSelected = (label: string) => {
  return planStore.selectedPlan === label;
};

const onSubmit = () => {    
    menuStore.navigateTo('Ons')    
}



</script>

<style scoped lang="scss">
.plan__card{
    min-width: 150px;
    min-height: 185px;
    border-radius: 10px;
    transition: all 0.2s ease-out;

    &:hover{
        border-color: $purple600;
        cursor: pointer;
    }

    &-selected{
        border-color: $purple600;
        background-color: $blue100;
    }
}

</style>