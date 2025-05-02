<template>
    <div class="q-pa-xl flex column q-gutter-sm justify-center items-center full-height">
        <q-img :src="doneImg" width="15%"/>
        <div class="text-h4 text-primary text-weight-bold">Thank you!</div>
        <div class="text-body2 text-secondary text-center">
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
        </div>
        
    </div>
</template>

<script setup lang="ts">
import doneImg from '../assets/icon-thank-you.svg'

</script>