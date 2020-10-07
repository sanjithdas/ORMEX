<template>
  <div class="container mtop">
    <div class="row">
      <div class="col-md-3">
          <Menubar/>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header">Create Job</div>
          <div class="card-body">

            <b-form-group id="title-group" label="Title:" label-for="Title" description=" ">
                <b-form-input id="title" type="text" required placeholder="Enter Title" v-model="$v.frmJob.title.$model" :state="$v.frmJob.title.$dirty ? !$v.frmJob.title.$error : null" 
                aria-describedby="title-feedback" ></b-form-input>
                 
                  <b-form-invalid-feedback id="title-feedback">
                  <span v-if="!$v.frmJob.title.required">Title Required</span>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="description-group" label="Description:" label-for="Description" description=" ">
                <b-form-textarea id="description"   required placeholder="Enter Description" v-model="$v.frmJob.description.$model" :state="$v.frmJob.description.$dirty ? !$v.frmJob.description.$error : null" 
                aria-describedby="description-feedback" ></b-form-textarea>
                 
                  <b-form-invalid-feedback id="description-feedback">
                  <span v-if="!$v.frmJob.description.required">Description Required</span>
                </b-form-invalid-feedback>
            </b-form-group>


            <b-form-group id="role-group" label="Role:" label-for="Role" description=" ">
                <b-form-textarea id="role"   required placeholder="Enter Role" v-model="$v.frmJob.roles.$model" :state="$v.frmJob.roles.$dirty ? !$v.frmJob.roles.$error : null" 
                aria-describedby="role-feedback" ></b-form-textarea>
                 
                  <b-form-invalid-feedback id="role-feedback">
                  <span v-if="!$v.frmJob.roles.required">Role Required</span>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="category-group" label="Category:" label-for="Category" description=" ">
                <b-form-select id="category" v-model="frmJob.CategoryId" :options="this.categorys"  
                aria-describedby="title-feedback"> </b-form-select>
                 
                  <b-form-invalid-feedback id="category-feedback">
                   
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="category-group" label="Company:" label-for="Company" description=" ">
                <b-form-select id="company"    v-model="frmJob.CompanyId" :options="this.company"  
                aria-describedby="title-feedback" > </b-form-select>
                 
                  <b-form-invalid-feedback id="category-feedback">
                   
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="position-group" label="Position:" label-for="Position" description=" ">
                <b-form-input id="position" type="text" required placeholder="Enter Position" v-model="$v.frmJob.position.$model" :state="$v.frmJob.position.$dirty ? !$v.frmJob.position.$error : null" 
                aria-describedby="position-feedback" ></b-form-input>
                 
                  <b-form-invalid-feedback id="position-feedback">
                  <span v-if="!$v.frmJob.position.required">Position Required</span>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="title-group" label="Address:" label-for="Address" description=" ">
                <b-form-textarea id="address"   required placeholder="Enter Address" v-model="$v.frmJob.address.$model" :state="$v.frmJob.address.$dirty ? !$v.frmJob.address.$error : null" 
                aria-describedby="address-feedback" ></b-form-textarea>
                 
                  <b-form-invalid-feedback id="address-feedback">
                  <span v-if="!$v.frmJob.description.required">Address Required</span>
                </b-form-invalid-feedback>
            </b-form-group>


            <b-form-group id="number_of_vacancy-group" label="No. of Vacancy:" label-for="No. of Vacancy:" description=" ">
                <b-form-input id="number_of_vacancy" type="text" required placeholder="Enter No. of Vacancy" v-model="$v.frmJob.number_of_vacancy.$model" :state="$v.frmJob.number_of_vacancy.$dirty ? !$v.frmJob.number_of_vacancy.$error : null" 
                aria-describedby="number_of_vacancy-feedback" ></b-form-input>
                 
                  <b-form-invalid-feedback id="number_of_vacancy-feedback">
                  <span v-if="!$v.frmJob.number_of_vacancy.required">No. of Vacancy Required</span>
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="experience-group" label="Year of experience:" label-for="Year of experience" description=" ">
                <b-form-input id="experience" type="text" required placeholder="Enter experience" v-model="$v.frmJob.experience.$model" :state="$v.frmJob.experience.$dirty ? !$v.frmJob.experience.$error : null" 
                aria-describedby="experience-feedback" ></b-form-input>
                 
                  <b-form-invalid-feedback id="experience-feedback">
                  <span v-if="!$v.frmJob.experience.required">Experience Required</span>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="salary-group" label="Salary/year:" label-for="Salary" description=" ">
                <b-form-select  required   v-model="frmJob.salary" :options="salarys" 
                aria-describedby="salary-feedback" > </b-form-select>
                 
                  <b-form-invalid-feedback id="salary-feedback">
                  
                </b-form-invalid-feedback>
            </b-form-group>
            
            <b-form-group id="type-group" label="Type:" label-for="Type" description=" ">
                <b-form-select id="type"   required  v-model="frmJob.type" :options="types" 
                aria-describedby="salary-feedback" > </b-form-select>
                 
                  <b-form-invalid-feedback id="salary-feedback">
                  
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="status-group" label="Status:" label-for="Status" description=" ">
                <b-form-select   :options="statuss" v-model="frmJob.status" 
                aria-describedby="title-feedback" > </b-form-select>
                 
                  <b-form-invalid-feedback id="status-feedback">
                 
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="last_date-group" label="Last Date:"   label-for="last_date" description=" ">
                <b-form-input id="last_date" type="date" required placeholder="Enter Last Date" v-model="$v.frmJob.last_date.$model" :state="$v.frmJob.last_date.$dirty ? !$v.frmJob.last_date.$error : null" aria-describedby="last_date-feedback"></b-form-input>
                <b-form-invalid-feedback id="last_date-feedback">
                   <span v-if="!$v.frmJob.last_date.required">
                      Last Date required
                    </span>
                </b-form-invalid-feedback>
             </b-form-group>  
            
            <div class="col-4 mt-3">
              <b-button @click="create" class="text-center w-100" variant="success">Create</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength  } from 'vuelidate/lib/validators'
 
import Menubar from '../../admin/Menubar'
import CategoryListingService from '@/services/CategoryListingService'
import CompanyListingService from '@/services/CompanyListingService'
import AdminService from '@/services/AdminService'
export default {
  components: {Menubar},
  data() {
    return {
      frmJob:{
        title: null,
        description: null,
        roles:null,
        
        position:null,
        address:null,
        number_of_vacancy:null,
        experience:null,
        UserId:42,
        
        last_date:null,
        salary :null,
        type :null,
        CategoryId :null,
        status:null,
        CompanyId:null,
        slug: null

      },
      categorys:[{value: null, text:'Please select category'}],
       salarys:[
          {value: null , text:'Please select salry'},
          {value: 'negotiable' , text:'negotiable'},
          {value: '2000-5000' , text:'2000-5000'},
          {value: '50000-10000',text:'50000-10000'},
          {value: '10000-20000',text:'10000-20000'},
          {value: '30000-500000',text:'30000-500000'},
          {value: '500000-600000',text:'500000-600000'},
        ],
       
        types:[
          {value: null , text:'Please select job type'},
          {value: 'fulltime' , text:'fulltime'},
          {value: 'parttime' , text:'parttime'},
          {value: 'casual',text:'casual'},
          {value: 'freelance',text:'freelance'},
          {value: 'contract',text:'contract'},
           
        ],
        statuss:[
          {value:null, text: 'Select status'},
          {value:1, text: 'live'},
          {value:2, text: 'draft'},
          ],
        company:[
          {value:null, text: 'Select Company'},
         ],
          
      error: null,
      errorFlag: false,
      categories:null,
      companies:null,
      
       
    }
  },
  mixins: [validationMixin],
  validations: {
    frmJob:{
      
         title: {
           required,
           minLength: minLength(3),
            
         },
        
         description: {
           required,
           minLength: minLength(10)
         },
         roles: {
           required,
           minLength: minLength(10)
         },
        //  category: {
        //    required,
        //    minLength: minLength(10)
        //  },
         position: {
           required,
           minLength: minLength(10)
         },
         address: {
           required,
           minLength: minLength(10)
         },
         number_of_vacancy: {
           required,
           
         },
         experience: {
           required,
           
         },
        //  salary: {
        //    required,
           
        //  },
        //  type: {
        //    required,
           
        //  },
        //  status: {
        //    required,
            
        //  },
         last_date: {
           required,
            
         },
         
      }
  },

  methods: {
    async create () {
      
      // Validiaton Check
      this.$v.frmJob.$touch()
      if (this.$v.frmJob.$anyError) {
        this.errorFlag=true;
        console.log('error')
        return
      }

      // Posts data
        try {
        console.log('In try');
        //  const response= await userAuthenticationService.userLogin(this.frmSeeker)
        await AdminService.createJob(this.frmJob);
        this.$router.push({name: 'Jobs'})
      //    console.log(response.data.token);
      //    this.errorFlag=false;
      //    this.$store.dispatch("setToken", response.data.token);
      //    this.$store.dispatch("setUser", response.data.user);
      //    this.$router.push({name: 'JobHome' ,params:{userdata:response.data}});
      //   // next('')
       } catch (error) {
          this.errorFlag=true;
          console.log(error)
          this.error = error.response.data.error;
          console.log(this.error)
        }
        // this.slug = this.toSlug();
        // alert(this.slug);
    },
    async getAllCategories(){
     this.categories = (await CategoryListingService.getAllCategories()).data;
      this.categories.forEach((value) =>{
       this.categorys.push(Object.assign({},{
         value:value.Category.id,
         text:value.Category.name
       }))
     });
   },
    
   async getAllCompanies(){
     this.companies = (await CompanyListingService.getAllCompanies()).data;
     
      this.companies.forEach((value) =>{
       this.company.push(Object.assign({},{
          value:value.id,
          text:value.cname
        }))
      });
   }
  },
  mounted() {
     this.getAllCategories();
     this.getAllCompanies();
     
   },
  computed: {
    toSlug: function(){
      
    return  this.title
        .toLowerCase() // LowerCase
        .replace(/\s+/g, "-") // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`); // -- to -
        
      //this.output = this.input;
    }
  }, 
    
  
}
</script>
<style scoped>

</style>