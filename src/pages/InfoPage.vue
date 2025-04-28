<template>
    <div class="q-pl-lg q-pt-lg q-pr-xl" >
        <div class="text-h4 text-primary text-weight-bold">
            Personal Info
        </div>
        <div class="text-body2 text-secondary" >
            Please provide your name, email address, and phone number.
        </div>
        <div class="q-my-lg">
            <q-form @submit="onSubmit">
                <p class="text-body2 q-mb-sm">Name</p>
                <q-input 
                class="q-mb-sm" 
                outlined v-model="name" 
                placeholder="e.g. Sam Smith" 
                dense
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your name']"
                />
            
                <p class="text-body2 q-mb-sm">Email Address</p>
                <q-input 
                class="q-mb-sm" 
                outlined v-model="address" 
                type="email"
                placeholder="e.g. samsmith@gmail.com"
                dense
                lazy-rules
                :rules="[ 
                    val => val && val.length > 0 || 'Please type your email',
                    val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please enter a valid email'

                ]"/>

                <p class="text-body2 q-mb-sm">Phone Number</p>
                <q-input 
                class="q-mb-sm" 
                outlined
                v-model="phone"
                type="tel"
                placeholder="1 234 567 890"
                prefix="+"
                dense
                lazy-rules
                :rules="[ 
                    val => val && val.length > 0 || 'Please type your phone number',
                    val => /^[0-9]{10}$/.test(val) || 'Please enter a valid phone number'

                ]"
                />
                
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
const menuStore = useMenuStore();

const name = ref('');
const address = ref('');
const phone = ref('');

const onSubmit = () => {    
    if(name && address && phone) {
        menuStore.navigateTo('Plan')
    }    
}

</script>

<style scoped lang="scss">
</style>