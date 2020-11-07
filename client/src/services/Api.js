/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-20 15:33:45
 * @modify date 2020-11-07 12:17:42
 * @desc [connect to server with below URL and port]
 */

import axios from "axios";

export default () => {
  return axios.create({
    /**
     * connect to server
     */
    baseURL: "http://localhost:8081/",
  });
};
