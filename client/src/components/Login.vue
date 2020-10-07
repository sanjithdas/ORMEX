 <template>
  <div class="mtop">
    <b-form>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-left"><b>Login</b></div>
            <div class="card-body">

               <b-form-group id="email-group" label="Email:" label-for="email" description=" ">
                <b-form-input id="email" type="email" required placeholder="Enter Email" v-model="$v.frmSeeker.email.$model" :state="$v.frmSeeker.email.$dirty ? !$v.frmSeeker.email.$error : null" 
                aria-describedby="email-feedback" ></b-form-input>
                 
                <b-form-invalid-feedback id="email-feedback">
                <span v-if="!$v.frmSeeker.email.email">Invalid Email</span>
                <span v-if="!$v.frmSeeker.email.required">Email required</span>
                 
              </b-form-invalid-feedback>
            </b-form-group>

             

               <b-form-group id="password-group" label="Password:"   label-for="password" description=" ">
                <b-form-input id="password" type="password" required placeholder="Enter password" v-model="$v.frmSeeker.password.$model" :state="$v.frmSeeker.password.$dirty ? !$v.frmSeeker.password.$error : null" aria-describedby="password-feedback"></b-form-input>
                <b-form-invalid-feedback id="password-feedback">
                  Password is required
                </b-form-invalid-feedback>
              </b-form-group>
     
             
            </div>
            <div v-if="!errorFlag" class="text-success text-center"><b>Successfully Loggedin..</b>
            </div>
            <div v-else if="errorFlag" class="text-danger">
              Invalid Email/ Passsword
            </div>
            <div class="col-4 mt-3">
              <b-button   @click="login" class="text-center w-100" variant="success">Login</b-button>
            </div>
            
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength ,email   } from 'vuelidate/lib/validators'
import userAuthenticationService from '../services/UserAuthenticationService'

export default {
  name: "Login",
  data() {
    return {
      frmSeeker:{
        email: null,
        password: null,
        
      },
      error: null,
      errorFlag: false,
      emailFlag: false
    }
  },
  mixins: [validationMixin],
  validations: {
    frmSeeker:{
      
         email: {
           required,
           minLength: minLength(3),
           email
         },
        
         password: {
           required,
           minLength: minLength(3)
         },
         
      }
  },
  methods: {
    async login () {
      
      // Validiaton Check
      this.$v.frmSeeker.$touch()
      if (this.$v.frmSeeker.$anyError) {
        this.errorFlag=true;
        console.log('error')
        return
      }

      // Posts data
       try {
        
        const response= await userAuthenticationService.userLogin(this.frmSeeker)
         console.log(response.data.token);
         this.errorFlag=false;
         this.$store.dispatch("setToken", response.data.token);
         this.$store.dispatch("setUser", response.data.user);
         this.$router.push({name: 'JobHome' ,params:{userdata:response.data}});
        // next('')
       } catch (error) {
         this.errorFlag=true;
         console.log(error)
         this.error = error.response.data.error;
         console.log(this.error)
       }
    },
    
  }
}
</script>
<style scoped>

</style>