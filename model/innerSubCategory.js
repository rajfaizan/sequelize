import sequelize from "../common/config/database.js";
import sequelizeTransforms from "sequelize-transforms";
// import { baseUrl } from "../src/common/constants/config-constant.js";
import { DataTypes } from "sequelize";
import Category from "./category.js";
import subCategory from "./subCategory.js";


let innerSubCategory = sequelize.define('inner_sub_categories',{
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: "id"
        },
        allowNull: false
    },
    sub_category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: subCategory,
            key: "id"
        },
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

sequelizeTransforms(innerSubCategory)

// 🔁 Associations
Category.hasMany(innerSubCategory, {
  foreignKey: "category_id",
  as: "innerSubcategories"
});

innerSubCategory.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category"
});

subCategory.hasMany(innerSubCategory, {
  foreignKey: "sub_category_id",
  as: "subcategories"
});

innerSubCategory.belongsTo(subCategory, {
  foreignKey: "sub_category_id",
  as: "innerSubcategories"
});

export default innerSubCategory;
