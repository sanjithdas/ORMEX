import Api from '@/services/Api';

export default{
  // getAllInstructionGuides(){
  //   return Api().get('instructionguides');
  // },

deleteJob(id) {
  console.log(id);
    return Api().delete(`api/delete/jobs/${id}`);
},
// searchJob(search){
//     return Api().get(`api/jobs/${search}`)
// }





   
   
}