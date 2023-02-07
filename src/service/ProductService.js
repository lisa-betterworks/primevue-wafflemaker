export default class ProductService {
  getProductsSmall() {
    return fetch("./data/product-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
