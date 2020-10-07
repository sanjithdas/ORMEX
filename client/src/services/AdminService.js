import Api from '@/services/Api';

export default{
  // getAllInstructionGuides(){
  //   return Api().get('instructionguides');
  // },


createJob(job) {
  console.log('hi');
    return Api().post('api/jobs/create',job);
},
searchJob(search){
    return Api().get(`api/jobs/${search}`)
}
  
   
}