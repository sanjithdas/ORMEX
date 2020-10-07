/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-30 23:38:26
 * @modify date 2020-10-01 20:31:51
 * @desc [description]
 */
/**
 * Job seeker user Registration authentication
 */
import Api from '@/services/Api';

export default{
  
  userRegister(credentials){
      return Api().post('api/user/create',credentials)
  },
  userLogin(credentials){
    return Api().post('api/user/login',credentials)
  },
  employerRegister(credentials){
    return Api().post('api/employer/create',credentials)
  }





   
   
}