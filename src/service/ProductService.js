import productsSmall from "./data/product-small.json";

export default class ProductService {
  getProductsSmall() {
    return fetch(productsSmall)
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
