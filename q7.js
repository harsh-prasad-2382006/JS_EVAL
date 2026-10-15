"use strict";
class Category {
    categoryId;
    categoryName;
    description;
    constructor(categoryId, categoryName, description) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
    }
    display() {
        console.log(this.categoryId);
        console.log(this.categoryName);
        console.log(this.description);
    }
}
const cat = new Category(1, "CAT", "DATTTTTTTTTTT");
cat.display();
