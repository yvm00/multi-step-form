<template>
    <div class="info q-pl-lg q-pt-lg q-pr-xl full-height" > 
        <div class="q-mb-sm">
            <div class="text-h4 text-primary text-weight-bold">
            Personal Info
            </div>
            <div class="text-body2 text-secondary">
                Please provide your name, email address, and phone number.
            </div>
        </div>  
        <q-form class='flex column justify-between full-height' @submit="onSubmit">
            <div>
                <p class="text-body2 q-mb-sm">Name</p>
                <q-input 
                class="q-mb-sm" 
                outlined v-model="infoStore.name" 
                placeholder="e.g. Sam Smith" 
                dense
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your name']"
                />
            
                <p class="text-body2 q-mb-sm">Email Address</p>
                <q-input 
                class="q-mb-sm" 
                outlined v-model="infoStore.address" 
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
                v-model="infoStore.phone"
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
            </div>  
            <div class="self-end q-my-lg">
                <q-btn class="text-capitalize text-weight-medium" label="Next Step" type="submit" color="primary" unelevated  style="width: 100px"/>
            </div>         
        </q-form>    
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '../stores/menuStore';
import { useInfoStore } from 'src/stores/infoStore';
const menuStore = useMenuStore();
const infoStore = useInfoStore();

const onSubmit = () => {    
    if(infoStore.name && infoStore.address && infoStore.phone) {
        infoStore.isValid = true
        menuStore.navigateTo('Plan')
    }    
}

</script>

<style scoped lang="scss">
.info{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>