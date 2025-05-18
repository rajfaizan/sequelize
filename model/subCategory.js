import sequelize from "../common/config/database.js";
import sequelizeTransforms from "sequelize-transforms";
// import { baseUrl } from "../src/common/constants/config-constant.js";
import { DataTypes } from "sequelize";
import Category from "./category.js";


let subCategory = sequelize.define('sub_categories',{
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
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

sequelizeTransforms(subCategory)

// 🔁 Associations
Category.hasMany(subCategory, {
  foreignKey: "category_id",
  as: "subcategories"
});

subCategory.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category"
});

export default subCategory;
