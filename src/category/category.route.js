import express from "express";
import asycHandler from "express-async-handler";
import CatgoryController from "./catgory.controller.js";


const router = express.Router();

router.post('/category',
    asycHandler(CatgoryController.category)
)

router.get('/category',
    asycHandler(CatgoryController.get)
)

export default router;