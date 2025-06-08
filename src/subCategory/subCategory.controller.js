import subCategoryService from "./subCategory.service.js";

class SubCatgoryController {

    /**
     * Register user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async subCategory (req,res){
        await subCategoryService.store(req.body,res)
    }
     /**
     * Login user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async get (req,res){
        await subCategoryService.index(req.query,res);
    }
}
export default SubCatgoryController