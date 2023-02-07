<template>
  <div class="data-table">
    <DataTable :value="products" responsiveLayout="scroll">
      <ColumnView field="code" header="Code"></ColumnView>
      <ColumnView field="name" header="Name"></ColumnView>
      <ColumnView field="category" header="Category"></ColumnView>
      <ColumnView field="quantity" header="Quantity"></ColumnView>
    </DataTable>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductService from "../service/ProductService";

export default {
  setup() {
    onMounted(() => {
      productService.value
        .getProductsSmall()
        .then((data) => (products.value = data));
    });

    const products = ref();
    const productService = ref(new ProductService());

    return { products, productService };
  },
};
</script>

<style>
.data-table {
  margin: 0 3em;
}
</style>
