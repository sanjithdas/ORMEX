<template>
    <div class="site-section bg-light">
      <div class="container ">
        <div class="row">
          <div class="col-md-3">
          <Menubar/>
          </div>
          <div class="col-9 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
            <div class="card">
            <div class="card-header"><b>Recent Jobs</b></div>
              <div class="card-body">
                <div class="rounded border jobs-wrap" 
                v-for="job in jobs" :key="job.id">
                  <router-link  style="color:#000" :to="{name: 'jobs', params:{jobs:job}}" class="job-item d-block d-md-flex align-items-center  border-bottom"
                  :class="job.type">
                    <div class="company-logo blank-logo text-center text-md-left pl-3">
                      <img src="http://www.nadhammelbourne.com.au/jobs/uploads/logo/1566622779.jpeg" alt="Image" class="img-fluid mx-auto">
                    </div>
                    <div class="job-details h-100">
                      <div class="p-3 align-self-center">
                        <h3>{{job.position}}</h3>
                        <div class="d-block d-lg-flex">
                          <div class="mr-3"><span class="icon-suitcase mr-1"></span>{{job.Company.cname}}</div>
                          <div class="mr-3"><span class="icon-room mr-1 "></span> {{job.address}}</div>
                          <div><span class="icon-money mr-1"></span>{{job.salary}}</div>
                           <div><span class="ml-1"></span>{{job.type}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="job-category align-self-center">
                        <div class="p-3">
                          <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" @click.prevent="edit" title="Edit"><i class="fa fa-edit"></i></button>

                          <button class="btn btn-danger btn-sm rounded-0 ml-2" type="button" data-toggle="tooltip" data-placement="top" @click.prevent="deleted(job.id)" title="Delete"><i class="fa fa-trash"></i></button>
                          
                        </div>
                    </div>  
                  </router-link>
                  </div>
                </div>

             <div class="col-md-12 text-center mt-5">
              <router-link to="/dashboard/job/create" class="btn btn-success btn-sm rounded py-3 px-5"><span class="icon-plus-circle"></span> Add More Jobs</router-link>
            </div> 
          </div>
         </div>
        </div> 
      </div>
    </div>
</template>
<script>
import Menubar from '../admin/Menubar'
import JobListingService from '@/services/JobListingService';
import CategoryListingService from '@/services/CategoryListingService'
import DeleteJobService from '@/services/DeleteJobService';
import $ from 'jquery'
export default {
  name: 'Home',
  components: {Menubar}, 
  data() {
  return {
    title:'Recent Jobs',
    jobs:null,
    categories:null,
    search:'',
    find:''

  }
 },
 /**
  * listing all jobs and categories
  */
 methods: {
   async getAllJobs(){

     this.jobs=(await JobListingService.getAllJobs()).data;
   },
   async getAllCategories(){
     this.categories = (await CategoryListingService.getAllCategories()).data;
    // console.log(this.categories);
   },
   
  async  searchJob(){
      this.jobs=[];
      if (this.search.length>1){
       // console.log('fdsdds');
        this.jobs = (await JobListingService.searchJob(this.search)).data
        console.log(this.jobs);
      }
       this.find=this.jobs.length>1 ? true :false
    },
  edit(){
    
  },
  async deleted(id){
    var confirmed = confirm('Do you still want to delte this record?')
    if (confirmed){
    const resp = await ( DeleteJobService.deleteJob(id)) 
    console.log('resp'+resp.data);
    //this.$forceUpdate();
    window.location.reload(true)
    }
   // this.$router.push({name: 'JobsDeleted'})
  }
  },
   
 async mounted(){
   this.getAllJobs();
   this.getAllCategories();
  },
  displayTooltip(){
    $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    });
  }
  
} 


</script>
 
<style scoped>

</style>