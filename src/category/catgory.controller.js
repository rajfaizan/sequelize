import CategoryService from "./category.service.js";

class CatgoryController {

    /**
     * Register user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async category (req,res){
        await CategoryService.category(req.body,res)
    }
     /**
     * Login user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async get (req,res){
        await CategoryService.index(req.query,res);
    }
}
export default CatgoryController