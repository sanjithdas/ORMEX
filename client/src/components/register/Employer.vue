 <template>
  <div class="mtop">
    <b-form>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-left">Employer Register</div>
            <div class="card-body">
              <b-form-group id="username-group" label="Name:" label-for="username" description="">
                <b-form-input id="cname" type="text" required placeholder="Name" v-model="$v.frmSeeker.username.$model" :state="$v.frmSeeker.username.$dirty ? !$v.frmSeeker.username.$error : null"
                  aria-describedby="cname-feedback"></b-form-input>
                <b-form-invalid-feedback id="cname-feedback">
                  Company name is required, and must be atleast 3 charaters.
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="email-group" label="Email:" label-for="email" description=" ">
                <b-form-input id="email" type="email" required placeholder="Enter Email" v-model="$v.frmSeeker.email.$model" :state="$v.frmSeeker.email.$dirty ? !$v.frmSeeker.email.$error : null" 
                aria-describedby="email-feedback" ></b-form-input>
                <span v-if="error" class="text-danger"> Email already in use </span>
                <b-form-invalid-feedback id="email-feedback">
                <span v-if="!$v.frmSeeker.email.email">Invalid Email</span>
                <span v-if="!$v.frmSeeker.email.required">Email required</span>
              </b-form-invalid-feedback>
            </b-form-group>
               
             <b-form-group id="dob-group" label="Date of Birth:"   label-for="dob" description=" ">
                <b-form-input id="dob" type="date" required placeholder="Enter Date of Birth" v-model="$v.frmSeeker.dob.$model" :state="$v.frmSeeker.dob.$dirty ? !$v.frmSeeker.dob.$error : null" aria-describedby="dob-feedback"></b-form-input>
                <b-form-invalid-feedback id="dob-feedback">
                   <span v-if="!$v.frmSeeker.dob.required">
                      Date of birth required
                    </span>
                </b-form-invalid-feedback>
             </b-form-group>  
               <b-form-group id="password-group" label="Password:"   label-for="password" description=" ">
                <b-form-input id="password" type="password" required placeholder="Enter password" v-model="$v.frmSeeker.password.$model" :state="$v.frmSeeker.password.$dirty ? !$v.frmSeeker.password.$error : null" aria-describedby="password-feedback"></b-form-input>
                <b-form-invalid-feedback id="password-feedback">
                  Password is required
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group id="acpassword-group" label="Confirm Password:"   label-for="cpassword" description=" ">
                <b-form-input id="cpassword" type="password" required placeholder="Enter confirm password" v-model="$v.frmSeeker.cpassword.$model"  :state="$v.frmSeeker.cpassword.$dirty ? !$v.frmSeeker.cpassword.$error : null" aria-describedby="cpassword-feedback"></b-form-input>
                <b-form-invalid-feedback id="dcpassword-feedback">
                    <span v-if="!$v.frmSeeker.cpassword.sameAsPassword">
                      Password must match
                    </span>
                    <span v-if="!$v.frmSeeker.cpassword.required">
                      Confirm password required
                    </span> 
                </b-form-invalid-feedback>
              </b-form-group>
             
            </div>
            <div v-if="errorFlag" class="text-success text-center"><b>Successfully registered..</b></div>
            <div class="col-4 mt-3">
              <b-button   @click="register" class="text-center w-100" variant="success">Register</b-button>
            </div>
            
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength ,email ,sameAs  } from 'vuelidate/lib/validators'
import userAuthenticationService from '../../services/UserAuthenticationService'

export default {
  data() {
    return {
      frmSeeker:{
        username: null,
        email: null,
        dob: null,
        user_type: 'employer',
        password: null,
        cpassword: null
      },
      error: null,
      errorFlag: false
    }
  },
  
  mixins: [validationMixin],
  validations: {
    frmSeeker:{
      username: {
          required,
          minLength: minLength(3)
        },
         email: {
           required,
           minLength: minLength(3),
           email
         },
         dob: {
           required,
          },
        
         password: {
           required,
           minLength: minLength(3)
         },
         cpassword: {
           required, sameAsPassword: sameAs('password'),
           minLength: minLength(3)
         },
      }
  },
  methods: {
    async register () {
      
      // Validiaton Check
      this.$v.frmSeeker.$touch()
      if (this.$v.frmSeeker.$anyError) {
        this.errorFlag=false;
        console.log('error')
        return
      }

      // Posts data
       try {
         
        const response= await userAuthenticationService.employerRegister(this.frmSeeker)
         console.log(response.data.token);
         this.errorFlag=true;
         this.$store.dispatch("setToken", response.data.token);
         this.$store.dispatch("setUser", response.data.user);
       } catch (error) {
         this.errorFlag=false;
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