import SubCategoryResource from "../subCategory/subCategory.resource.js";

class CategoryResource {

    constructor(data) {
        return data.map((element) => ({
            _id: element.id,
            name: element.name,
            sub_categories: element.subCategory ? 
                new SubCategoryResource(element.subCategory) : []
        }));
    }
}

export default CategoryResource