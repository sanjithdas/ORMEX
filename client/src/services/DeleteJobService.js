/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:18:43
 * @modify date 2020-11-07 12:18:53
 * @desc [Delete Job]
 */
import Api from "@/services/Api";

export default {
  deleteJob(id) {
    console.log(id);
    return Api().delete(`api/delete/jobs/${id}`);
  },
};
