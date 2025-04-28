<template>
    <div class="q-pl-lg q-pt-lg q-pr-xl" >
        <div class="text-h4 text-primary text-weight-bold">
            Select your plan
        </div>
        <div class="text-body2 text-secondary" >
            You have the option of monthly or yearly billing.
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
import { useMenuStore, type MenuItem } from '../stores/menuStore';
import { ref } from 'vue';
import { useQuasar } from 'quasar'
const menuStore = useMenuStore();

const name = ref('');
const address = ref('');
const phone = ref('');

const $q = useQuasar()

const onSubmit = () => {    
    if(name && address && phone) {
        menuStore.navigateTo('Plan')
    }    
}

</script>

<style scoped lang="scss">
</style>