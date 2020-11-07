/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:18:25
 * @modify date 2020-11-07 12:18:36
 * @desc [Company Listing ]
 */
import Api from "@/services/Api";

export default {
  getAllCompanies() {
    return Api().get("api/allcompanies");
    //alljobcategory
  },
};
