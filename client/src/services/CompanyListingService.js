import Api from '@/services/Api';

export default{
  
  getAllCompanies() {
        return Api().get('api/allcompanies');
      //alljobcategory
  },

   
   
}