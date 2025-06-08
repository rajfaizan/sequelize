import sequelize from "../common/config/database.js";
import sequelizeTransforms from "sequelize-transforms";
// import { baseUrl } from "../src/common/constants/config-constant.js";
import { DataTypes } from "sequelize";
import Category from "./category.js";
import InnerSubCategory from "./innerSubCategory.js";

let subCategory = sequelize.define('sub_categories',{
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

sequelizeTransforms(subCategory)

export default subCategory;
