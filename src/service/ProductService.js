export default class ProductService {
  getProductsSmall() {
    return fetch("demo/data/product-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
