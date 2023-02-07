import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import DataTable from "primevue/datatable";
import ColumnView from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import RowView from "primevue/row";
import ButtonItem from "primevue/button";

import "primeicons/primeicons.css";
import "primevue/resources/themes/tailwind-light/theme.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue);

app.component("DataTable", DataTable);
app.component("ColumnView", ColumnView);
app.component("ColumnGroup", ColumnGroup);
app.component("RowView", RowView);
app.component("ButtonItem", ButtonItem);

app.mount("#app");
