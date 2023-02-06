import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import InputText from "primevue/inputtext";
import ButtonItem from "primevue/button";
import ToastItem from "primevue/toast";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue);
app.use(ToastService);

app.component("DataTable", DataTable);
app.component("ColumnView", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("RowView", Row);
app.component("ButtonItem", ButtonItem);
app.component("InputText", InputText);
app.component("ToastItem", ToastItem);

app.mount("#app");
