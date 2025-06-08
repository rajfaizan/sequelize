import InnerSubCategoryResource from "../InnerSubCategory/innersubCategory.resource.js";

class SubCategoryResource {

    constructor(data) {
        return data.map((element) => ({
            _id: element.id,
            name: element.name,
            inner_sub_categories: element.innerSubCategory ? 
                new InnerSubCategoryResource(element.innerSubCategory) : []
        }));
    }
}

export default SubCategoryResource