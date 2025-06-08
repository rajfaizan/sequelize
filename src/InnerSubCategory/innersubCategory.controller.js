import InnersubCategoryService from "./innersubCategory.service.js";

class InnerSubCatgoryController {

    /**
     * Register user    
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async innerSubCategory (req,res){
        await InnersubCategoryService.store(req.body,res)
    }
     /**
     * Login user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async get (req,res){
        await InnersubCategoryService.index(req.query,res);
    }
}
export default InnerSubCatgoryController