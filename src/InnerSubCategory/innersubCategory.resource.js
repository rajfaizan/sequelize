class InnerSubCategoryResource {

    constructor(data) {
        return data.map((element) => ({
            _id: element.id,
            sub_category_id: element.sub_category_id,
            name: element.name
        }))
    }
}

export default InnerSubCategoryResource