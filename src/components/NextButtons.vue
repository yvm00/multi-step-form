<template>
    <div class="q-my-lg">
        <q-form @submit="onSubmit">                
            <div class="flex justify-between q-mt-xl">
                <q-btn class="text-capitalize text-weight-medium" label="Go Back" @click="router.back()" color="secondary" flat/>
                <q-btn class="text-capitalize text-weight-medium" label="Next Step" type="submit" color="primary" unelevated/>
            </div>            
        </q-form>      
    </div>
</template>

<script setup lang="ts">
import { useMenuStore} from '../stores/menuStore';
import { useRouter } from 'vue-router';

const menuStore = useMenuStore();
const router = useRouter();

const props = defineProps<{
    component: string
}>();

const onSubmit = () => {    
    menuStore.navigateTo(props.component)    
}
</script>