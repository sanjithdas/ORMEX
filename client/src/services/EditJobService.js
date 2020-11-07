/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:19:03
 * @modify date 2020-11-07 12:19:10
 * @desc [Edit Job]
 */
import Api from "@/services/Api";

export default {
  editJob(job, id) {
    console.log(id);
    return Api().put(`api/edit/job/${id}`, job);
  },
};
