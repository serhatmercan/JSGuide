class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }
}

class ProductList {
    products = [
        new Product("1", "PC", 100),
        new Product("2", "TV", 50),
    ];
}

const productItem = new ProductItem();