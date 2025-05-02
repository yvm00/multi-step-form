import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useInfoStore = defineStore('info', () => {
    const name = ref('');
    const address = ref('');
    const phone = ref('');
    const isValid = ref(false)

    const clearInfo = () => {
        name.value = ''
        address.value = ''
        phone.value = ''
        isValid.value = false
    }

    return {name, address, phone, isValid, clearInfo};
});
