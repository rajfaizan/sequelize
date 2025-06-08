import express from "express";
import asycHandler from "express-async-handler";
import InnerSubCatgoryController from "./innersubCategory.controller.js";


const router = express.Router();

router.post('/innersubcategory',
    asycHandler(InnerSubCatgoryController.innerSubCategory)
)

router.get('/innersubcategory',
    asycHandler(InnerSubCatgoryController.get)
)

export default router;