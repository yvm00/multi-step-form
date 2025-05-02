<template>
    <div class="ons q-pl-lg q-pt-lg q-pr-xl full-height">
        <div>
            <div class="text-h4 text-primary text-weight-bold">
            Pick add-ons
            </div>
            <div class="text-body2 text-secondary">
            Add-ons help enhance your gaming experience.
            </div>
        </div>
        
        <q-list>            
        <q-item    
            class="ons__item q-my-md q-py-md"    
            tag="label"
            v-for="option in planStore.optionList"
            :key="option.id"
            :active="planStore.selectedOptions.some(obj => obj.label === option.label)"
            active-class="ons__item-selected"
        >
            <q-item-section avatar>
            <q-checkbox
                v-model="planStore.selectedOptions"
                :val="option"
                color="accent"
            />
            </q-item-section>
            <q-item-section>
            <q-item-label class="text-primary text-weight-bold">{{
                option.label
            }}</q-item-label>
            <q-item-label class="text-secondary" caption>{{
                option.title
            }}</q-item-label>
            </q-item-section>
            <q-item-section side class="text-right">
            <div v-if="planStore.version == 'yearly'">
                <q-item-label class="text-accent">+${{ option.yearlyCost }}/yr</q-item-label>
            </div>
            <div v-else>
                <q-item-label class="text-accent">+${{ option.monthlyCost }}/mo</q-item-label>
            </div>
            </q-item-section>
        </q-item>
        </q-list>
        <NextButtons :component="'Summary'"/>
  </div>

</template>

<script setup lang="ts">
import NextButtons from '../components/NextButtons.vue';
import { usePlanStore} from '../stores/planStore';

const planStore = usePlanStore();

</script>

<style scoped lang="scss">
.ons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__item{
        border: 1px solid $border;
        border-radius: 5px;

        &-selected{
            border-color: $accent;
            background-color: $blue100;
        }

        &:hover{
            border-color: $accent;
            background-color: $blue100;
        }
    }
}
.ons__item{
    border: 1px solid $border;
    border-radius: 5px;

    &-selected{
        border-color: $accent;
        background-color: $blue100;
    }

    &:hover{
        border-color: $accent;
        background-color: $blue100;
    }
}

</style>