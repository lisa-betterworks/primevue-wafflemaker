<template>
  <div class="home">
    <h1>Welcome</h1>
    <span class="p-float-label">
      <InputText id="txt" type="text" v-model="value" />
    </span>
    <ButtonItem label="Greet" @click="greet" icon="pi pi-user"
      >Submit</ButtonItem
    >
  </div>
</template>

<script setup></script>

<style scoped>
.home {
}
</style>
