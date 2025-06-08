import dbConnection from "../common/config/database.js";

// //models
import Category from "./category.js";
import subCategory from "./subCategory.js";
import innerSubCategory from "./innerSubCategory.js";

const db = {};
db.sequelize = dbConnection;

db.Category = Category;
db.subCategory = subCategory;
db.innerSubCategory = innerSubCategory;

db.Category.hasMany(db.subCategory, { as: 'subCategory', foreignKey: 'category_id' });
db.subCategory.belongsTo(db.Category, { foreignKey: 'category_id' });

db.subCategory.hasMany(db.innerSubCategory, { as: 'innerSubCategory', foreignKey: 'sub_category_id' });
db.innerSubCategory.belongsTo(db.subCategory, { foreignKey: 'sub_category_id' });

db.Category.hasMany(db.innerSubCategory, { foreignKey: 'category_id' });
db.innerSubCategory.belongsTo(db.Category, { foreignKey: 'category_id' });

export default db;
