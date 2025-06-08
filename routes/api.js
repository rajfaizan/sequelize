import express from "express";
// import subCategoryRoter from "../src/subCategory/subCategory.route.js";
import catgoryRouter from "../src/category/category.route.js";
// import innerSubCategoryRouter from "../src/InnerSubCategory/innersubCategory.route.js";
// import subCategory from "../model/subCategory.js";

const router = express.Router();
// console.log("Here 1")
router.use('/',catgoryRouter);
// router.use('/',subCategoryRoter);
// router.use('/',innerSubCategoryRouter);



export default router;

