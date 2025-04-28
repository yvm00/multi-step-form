<template>
  <q-layout>
    <q-page-container>
      <q-page class="form flex flex-center" >
        <div class="form__container row">
          <StepsMenu/>
          <div class="col-8 q-ma-md">
            <router-view/>
          </div>

        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import StepsMenu from './components/StepsMenu.vue'

</script>

<style scoped lang="scss">
.form{
  background-color: $bg;

    &__container {
    width: 900px;
    min-height: 530px;
    display: flex;
    background-color: $white;
    box-shadow: 0px 5px 20px $purple200;
    border-radius: 15px;
    }
}
</style>
