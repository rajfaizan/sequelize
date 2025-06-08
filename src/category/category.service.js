import Category from "../../model/category.js";
import CategoryResource from "./category.resource.js";
import { Op } from "sequelize";
import db from '../../model/index.js';


class CategoryService {
  static async category(data, res) {
    const categoryname = data.name;
    const catgory = await Category.create({ name: categoryname, tag: null });

    return res.status(200).json({
      success: true,
      data: catgory,
    });
  }

  static async index(data, res) {
    const name = data.search;
    const whereClause = name ? { name: { [Op.like]: `%${name}%` } } : {};
    const category = await db.Category.findAll({
      where: whereClause,
      include: [
        {
          model: db.subCategory,
          as: "subCategory",
          include: [
            {
              model: db.innerSubCategory,
              as: "innerSubCategory",
            },
          ],
        },
      ],
    });
    // console.log(category);
    

    return res.status(200).json({
      success: true,
      data: new CategoryResource(category),
    });
  }
  // const category = await Category.findAll({
  //   attributes: ["name"],
  //   raw: true,
  // });
}

export default CategoryService;
