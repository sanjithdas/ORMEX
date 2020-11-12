<template>
  <div class="ctop">
    <div class="container">
      <div class="card-header text-left">
        <b>Companies Registerd with Us</b>
      </div>
      <div class="mt-2 row justify-content-center">
        <div class="col-md-3 col-sm-12" v-for="company in companies" :key="company.id">
          <div class="card">
            <img width="100" src="../../assets/images/man.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title text-center">{{company.cname}}</h5>
              <center>
                <a href="/" class="btn btn-primary">View Company</a>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CompanyListingService from "@/services/CompanyListingService";
export default {
  data() {
    return {
      companies: null
    };
  },
  methods: {
    async getAllCompanies() {
      try {
        this.companies = (await CompanyListingService.getAllCompanies()).data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getAllCompanies();
  }
};
</script>
<style scoped>
</style>
    