<template>
  <div>
    <h1 class="home">Welcome</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      temporibus voluptas earum quia doloribus aliquam laborum quos, optio
      maiores aperiam repellat eius porro ipsum, tenetur animi, repellendus a
      accusantium beatae?
    </p>
    <ButtonItem label="Greet" @click="greet" icon="pi pi-user"
      >Submit</ButtonItem
    >
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  color: var(--indigo-500);
}
</style>
