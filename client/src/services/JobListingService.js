/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:19:23
 * @modify date 2020-11-07 12:19:46
 * @desc [All Jobs and search jobs based on the query string]
 */
import Api from "@/services/Api";

export default {
  getAllJobs() {
    return Api().get("api/alljobs");
  },
  searchJob(search) {
    return Api().get(`api/jobs/${search}`);
  },
};
