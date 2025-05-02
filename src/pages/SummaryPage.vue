<template>
    <div class="sum q-pl-lg q-pt-lg q-pr-xl full-height " >
        <q-form>
            <div class="text-h4 text-primary text-weight-bold">
                Finishing up
            </div>
            <div class="text-body2 text-secondary" >
                Double-check everything looks OK before confirming.
            </div>
            <div class="sum__form q-my-lg q-py-md">
                <q-item class="justify-between" >
                    <div>
                        <div class="text-primary text-weight-bold">{{ planStore.selectedPlan?.label }} ({{ planStore.version }})</div>
                        <router-link :to="{name: 'Plan'}" class="text-secondary">Change</router-link>
                    </div>
                    <div class="text-primary text-weight-bold">
                        ${{ planStore.version == 'yearly' ?  `${planStore.selectedPlan?.yearlyCost}/yr` : `${planStore.selectedPlan?.monthlyCost}/mo`}}    
                    </div>
                </q-item>
                    <q-separator class="q-ma-md" />
                    <q-item
                    class="q-py-none"
                    v-for="item in planStore.selectedOptions"
                    :key="item.id"
                    dense
                    >
                    <div class="flex row justify-between full-width" >                        
                        <q-item-label class="text-secondary">{{ item.label }}</q-item-label>
                        <q-item-label class="text-primary"> +${{ planStore.version === 'yearly' ? `${item.yearlyCost}/yr` : `${item.monthlyCost}/mo` }} </q-item-label>
                    </div>    
                </q-item>           
            </div>
            <q-item class="justify-between">
                <div class="text-secondary">Total (per {{ planStore.version == 'yearly' ?  'year' : 'month' }})</div>
                <div class="text-body1 text-accent text-weight-bold">+${{ planStore.version == 'yearly' ?  `${planStore.totalYearly}/yr` : `${planStore.totalMontly}/mo` }}</div>
            </q-item>  
        </q-form>
        <NextButtons :label="'Confirm'" :component="'Done'"/>
    </div>

</template>

<script setup lang="ts">
import NextButtons from '../components/NextButtons.vue';
import { usePlanStore } from 'src/stores/planStore';
const planStore = usePlanStore();


</script>

<style scoped lang="scss">
.sum{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__form{
        background-color: $blue100;
        min-height: 100px;
    }
}
</style>