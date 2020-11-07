/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:16:08
 * @modify date 2020-11-07 12:17:07
 * @desc [api routes call the server ]
 */
import Api from "@/services/Api";

export default {
  createJob(job) {
    return Api().post("api/jobs/create", job);
  },
  searchJob(search) {
    return Api().get(`api/jobs/${search}`);
  },

  adminLogin(credentials) {
    return Api().post("api/admin/login", credentials);
  },

  getComapnyUserID(companyId) {
    return Api().get(`api/admin/company/user/${companyId}`);
  },
};
