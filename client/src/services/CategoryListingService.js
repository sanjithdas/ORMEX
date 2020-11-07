/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:17:55
 * @modify date 2020-11-07 12:18:13
 * @desc [Category Listing Component]
 */
import Api from "@/services/Api";

export default {
  getAllCategories() {
    return Api().get("api/alljobcategory");
  },
};
