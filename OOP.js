class Product {
    constructor(sID, sTitle, iPrice) {
        this.ID = sID;
        this.Title = sTitle;
        this.Price = iPrice;
    }
}

class ProductItem {
    constructor(oProduct) {
        this.oProduct = oProduct;
    }
}

class ProductList {
    constructor() {
        this.aProducts = [
            new Product("1", "PC", 100),
            new Product("2", "TV", 50)
        ];
    }

    addProduct(sID, sTitle, iPrice) {
        this.aProducts.push(new Product(sID, sTitle, iPrice));
    }

    getProducts() {
        return [...this.aProducts];
    }

    getProductByID(sID) {
        return this.aProducts.find(oProduct => oProduct.ID === sID);
    }

    removeProductByID(sID) {
        this.aProducts = this.aProducts.filter(oProduct => oProduct.ID !== sID);
    }

}

const oProductList = new ProductList();
const oFoundProduct = oProductList.getProductByID("2");
const oNewProduct = new Product("3", "Laptop", 150);

oProductList.getProducts();
oProductList.addProduct(oNewProduct.ID, oNewProduct.Title, oNewProduct.Price);
oProductList.removeProductByID("1");
