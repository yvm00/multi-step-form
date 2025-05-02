<template>
    <div class="q-mt-sm q-mb-lg">
        <q-form @submit="onSubmit">                
            <div class="flex justify-between q-mt-xl">
                <q-btn class="text-capitalize text-weight-medium" label="Go Back" @click="router.back()" color="secondary" flat/>
                <div>
                    <q-btn 
                    class="text-capitalize text-weight-medium" 
                    :label="props.label ? props.label : 'Next Step'" 
                    type="submit"                     
                    :disable="props.label == 'Confirm' ? !infoStore.isValid : false"
                    :color="props.label == 'Confirm' ? 'accent' : 'primary'"
                    unelevated
                    style="width: 100px"
                    /> 
                </div>
                
            </div>            
        </q-form>      
    </div>
</template>

<script setup lang="ts">
import { useMenuStore} from '../stores/menuStore';
import { useInfoStore } from 'src/stores/infoStore';
import { useRouter } from 'vue-router';

const menuStore = useMenuStore();
const infoStore = useInfoStore()
const router = useRouter();

const props = defineProps<{
    component: string
    label?: string    
}>();

const onSubmit = () => {    
    if (props.label == 'Confirm'){        
        menuStore.navigateTo(props.component)
        infoStore.clearInfo()
    } else {
        menuStore.navigateTo(props.component)
    }        
}
</script>