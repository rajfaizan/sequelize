import sequelize from "../common/config/database.js";
import sequelizeTransforms from "sequelize-transforms";
// import { baseUrl } from "../src/common/constants/config-constant.js";
import { DataTypes } from "sequelize";
import subCategory from "./subCategory.js";

let Category = sequelize.define('categories',{
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

sequelizeTransforms(Category)

export default Category;
