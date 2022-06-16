class Product {
    constructor(ID, Title, Price) {
        this.ID = ID;
        this.Title = Title;
        this.Price = Price;
    }
}

class ProductItem {
    constructor(oProduct) {
        this.Product = oProduct;
    }
}

class ProductList {
    Products = [
        new Product("1", "PC", 100),
        new Product("2", "TV", 50)
    ];
}

const oProductItems = new ProductList();