import innerSubCategory from "../../model/innerSubCategory.js";
import { Op } from "sequelize";

class InnersubCategoryService {

  static async store(data, res) {

    const categoryname = data.name;
    const sub_category_id = data.subcategory_id;
    const catgory = await innerSubCategory.create({ name: categoryname, category_id:1, sub_category_id:sub_category_id,tag: null });

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

export default InnersubCategoryService;
