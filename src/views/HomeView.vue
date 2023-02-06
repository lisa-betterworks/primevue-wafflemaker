<template>
  <div class="home">
    <h1>Welcome</h1>
    <span class="p-float-label">
      <InputText id="txt" type="text" v-model="value" />
      <label for="username">Username</label>
    </span>
    <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/toast";

const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({ severity: "success", summary: "Alert", detail: text.value });
};
</script>

<style scoped>
.home {
  /* display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; */
}
</style>
