<template>
<div class="mtop">
    <div class=" row justify-content-center">
      <div class="col-md-8">
      <div class="card">
          <div class="card-header text-left">Register</div>
          <div class="card-body">
            <form >
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right" >Name</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control"  value="" 
                  Placeholder="Enter your name" 
                  
                  v-model="$v.frmSeeker.name.$model" :state="$v.frmSeeker.name.$dirty ? !$v.frmSeeker.name.$error : null"
                  
                  autofocus aria-describedby="title-feedback">
                  <b-form-invalid-feedback id="title-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-6">
                  <input id="name" type="email" class="form-control" name="name" value=""  Placeholder="Enter your email" autofocus>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Date of Birth</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="dob" value="" 
                  Placeholder="Enter your date of birth"
                   autofocus>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Gender</label>
                <div class="col-md-6 radio-align">
                  Male<input id="male" name="gender" value="male" type="radio" class="form-control">
                  Female<input id="female" name="gender" value="female" type="radio" class="form-control">
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input id="name" type="password" class="form-control" name="password" value=""  autofocus
                    Placeholder="Enter your password"
                    >
                </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                  <div class="col-md-6">
                    <input id="name" type="password" class="form-control" name="password-confirm" value=""
                    Placeholder="Enter your confirm password"  
                    autofocus>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary mb-5" @click="register">
                        Register
                    </button>
                </div>
              </div>

            </form>
            
          </div>
      </div>
    </div>
  </div>   
</div>         
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      frmSeeker:{
        name: null,
        email: null,
        dob: null,
        gender: null,
        password: null,
        cpassword:null
      }
    }
  },
  mixins: [validationMixin],
  validations: {
    frmSeeker:{
      name: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          minLength: minLength(3)
        },
        dob: {
          required,
          minLength: minLength(3)
        },
        gender: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(3)
        },
        cpassword: {
          required,
          minLength: minLength(3)
        },
      }
  },
  methods: {
    async register () {
      alert('here')
      // Validiaton Check
      this.$v.frmSeeker.$touch()
      if (this.$v.frmSeeker.$anyError) {
        return
      }

      // Posts data
      // try {
      //   await InstructionGuidesService.postInstructionGuides(this.instructionGuide)
      //   this.$router.push({
      //     name: 'browse'
      //   })
      // } catch (error) {
      //   console.log(error)
      // }
    }
  }
}
</script>
<style scoped>

</style>