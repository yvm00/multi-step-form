<template>
    <div class="plan q-pl-lg q-pt-lg q-pr-xl full-height" >
        <div>
            <div class="text-h4 text-primary text-weight-bold">
                Select your plan
            </div>
            <div class="text-body2 text-secondary" >
                You have the option of monthly or yearly billing.
            </div>  
        </div>        
        <div class="row q-gutter-sm justify-around q-my-lg">
            <q-card 
            v-for="card in planStore.planList"
            :key="card.id"
            @click="planStore.setPlan(card)"
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

        <NextButtons :component="'Ons'"/>
    </div>
</template>

<script setup lang="ts">
import { usePlanStore} from '../stores/planStore';
import NextButtons from '../components/NextButtons.vue';
const planStore = usePlanStore();

const isSelected = (label: string) => {
  return planStore.selectedPlan?.label === label;
};


</script>

<style scoped lang="scss">
.plan{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__card{
    min-width: 150px;
    min-height: 185px;
    border-radius: 10px;
    transition: all 0.2s ease-out;

        &-selected{
            border-color: $accent;
            background-color: $blue100;
        }

        &:hover{
            border-color: $accent;
            cursor: pointer;
        }
    }
}


</style>