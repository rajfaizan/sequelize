import subCategory from "../../model/subCategory.js";
import subCategoryResource from "./subCategory.resource.js";
import { Op } from "sequelize";

class SubCategoryService {
  static async store(data, res) {
    const categoryname = data.name;
    const category_id = data.category_id;
    const catgory = await subCategory.create({ name: categoryname, category_id:category_id, tag: null });

    return res.status(200).json({
      success: true,
      data: catgory,
    });
  }

  static async index(data, res) {
    const name = data.search;
    const whereClause = name ? { name: { [Op.like]: `%${name}%` } } : {};
    const category = await Category.findAll({
      where: whereClause,
    });

    // const category = await Category.findAll({
    //   attributes: ["name"],
    //   raw: true,
    // });

    return res.status(200).json({
      success: true,
      data: new CategoryResource(category),
    });
  }
}

export default SubCategoryService;
