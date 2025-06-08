import sequelize from "../common/config/database.js";
import sequelizeTransforms from "sequelize-transforms";
import Category from "./category.js";
import subCategory from "./subCategory.js";
import { DataTypes } from "sequelize";
// import { baseUrl } from "../src/common/constants/config-constant.js";


let innerSubCategory = sequelize.define('inner_sub_categories', {
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sub_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

sequelizeTransforms(innerSubCategory);

export default innerSubCategory;
