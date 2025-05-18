
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

export default db
