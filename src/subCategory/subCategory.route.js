import express from "express";
import asycHandler from "express-async-handler";
import subCategoryController from "./subCategory.controller.js";


const router = express.Router();

router.post('/subcategory',
    asycHandler(subCategoryController.subCategory)
)

router.get('/subcategory',
    asycHandler(subCategoryController.get)
)

export default router;