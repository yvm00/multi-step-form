<template>
    <div class="menu col q-ma-md">
        <div class="menu__items row items-center q-px-md q-pt-lg"
        v-for="btn in btns"
        :key="btn.id">
        <!-- <div
        class="menu__step-circle q-mr-sm"
        :class="{ 'active': isActive(btn.component) }"
        >
            {{ btn.id }}
        </div> -->
            <q-btn 
            @click="menuStore.navigateTo(btn.component)" 
            class="menu__btn"
            :class="{active: isActive(btn.component)}"   
            size="md" 
            flat
            round
            >
            {{ btn.id }}
            </q-btn>
            <div class="col-md q-px-md">
                <div class="menu__label text-caption text-weight-light"> {{ btn.label }}</div>
                <div class="text-body2 text-weight-bold"> {{ btn.title }} </div>
            </div>            
        </div>
    </div>

</template>

<script setup lang="ts">
import { useMenuStore, type MenuItem } from '../stores/menuStore';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const menuStore = useMenuStore();
const route = useRoute();

const btns = ref<MenuItem[]>([
    {id: 1, label: 'step 1', title: 'your info', component: 'Info' },
    {id: 2, label: 'step 2', title: 'select plan', component: 'Plan'},
    {id: 3, label: 'step 3', title: 'add-ons', component: 'Ons'},
    {id: 4, label: 'step 4', title: 'summary', component: 'Summary'},
])

const isActive = (component: string) => {
  return route.name === component;
};

</script>

<style lang="scss" scoped>
.menu{
    background-size: cover;
    background-position: center;
    width: 100%;
    border-radius: 7px;
    background-image: url('../assets/bg-sidebar-desktop.svg');

    &__items{
        width: 100%; 
        color: $white;
        text-transform: uppercase;
    }
    &__btn{
        border: 1px solid $white;
        transition: all 0.2s ease-out;

        &:hover{
            background-color: $blue200 !important; 
            border-color: $blue200 ; 
            color: $primary; 
        }
    }

    &__step-circle{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid $white;
        background-color: transparent;
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        transition: all 0.2s ease-out;
    }

    &__label{
        opacity: 0.7;
    }
}
.active{
    background-color: $blue200 !important; 
    border-color: $blue200 ; 
    color: $primary; 
}
</style>