<template>
  <div class="ctop">
    <div class="container">
    <div class="card card-header"><b>Company Profile</b></div>
    <div class="mt-2 row justify-content-center">
      <div class="card-body text-danger"><h3>Under Construction</h3></div>
       
    </div>
    </div>
  </div>
</template>
<script>
import CompanyListingService from '@/services/CompanyListingService'
export default {
data() {
  return {
    companies:null,
  }
},  
methods: {
  async getAllCompanies(){
     try{
     this.companies = (await CompanyListingService.getAllCompanies()).data;
        
   }catch(error){
     console.log(error);
   }
   }
},
mounted() {
  this.getAllCompanies();
},
}
</script>
<style scoped>

</style>
    