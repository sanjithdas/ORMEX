/** * @author [Sanjith] * @email [sanjith.das@gmail.com] * @create date
2020-11-07 12:07:20 * @modify date 2020-11-07 12:07:20 * @desc [Admin Login
template] */
<template>
  <div class="mtop">
    <b-form>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header text-left">
              <b>Admin Login</b>
            </div>
            <div class="card-body">
              <b-form-group
                id="email-group"
                label="Email:"
                label-for="email"
                description=" "
              >
                <b-form-input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter Email"
                  v-model="$v.frmAdmin.email.$model"
                  :state="
                    $v.frmAdmin.email.$dirty ? !$v.frmAdmin.email.$error : null
                  "
                  aria-describedby="email-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="email-feedback">
                  <span v-if="!$v.frmAdmin.email.email">Invalid Email</span>
                  <span v-if="!$v.frmAdmin.email.required">Email required</span>
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="password-group"
                label="Password:"
                label-for="password"
                description=" "
              >
                <b-form-input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  v-model="$v.frmAdmin.password.$model"
                  :state="
                    $v.frmAdmin.password.$dirty
                      ? !$v.frmAdmin.password.$error
                      : null
                  "
                  aria-describedby="password-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="password-feedback">
                  Password is required
                </b-form-invalid-feedback>
              </b-form-group>
            </div>
            <div v-if="!errorFlag" class="text-success text-center"></div>
            <div v-else if="errorFlag" class="text-danger">
              Invalid Email/ Passsword
            </div>
            <div class="col-4 mt-3">
              <b-button
                @click="login"
                class="text-center w-100"
                variant="success"
                >Login</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// vuelidate module import for input validation
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import AdminService from "../../services/AdminService";
export default {
  name: "Login",
  data() {
    return {
      frmAdmin: {
        email: null,
        password: null,
      },
      error: null,
      errorFlag: false,
      emailFlag: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    frmAdmin: {
      email: {
        required,
        minLength: minLength(3),
        email,
      },

      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    async login() {
      // Validiaton Check
      this.$v.frmAdmin.$touch();
      if (this.$v.frmAdmin.$anyError) {
        this.errorFlag = true;
        console.log("error");
        return;
      }

      // Posts data
      try {
        const response = await AdminService.adminLogin(this.frmAdmin);
        console.log(response.data.token);
        this.errorFlag = false;
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "Dashboard",
          params: { userdata: response.data },
        });
      } catch (error) {
        this.errorFlag = true;
        console.log(error);
        this.error = error.response.data.error;
        console.log(this.error);
      }
    },
  },
};
</script>
<style scoped></style>
