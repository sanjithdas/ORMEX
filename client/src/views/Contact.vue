<template>
  <div class="mt-5">
    <div class="site-section mt-0 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header text-left"><h3>Contact Us</h3></div>
              <div class="card-body">
                <b-form-group
                  id="username-group"
                  label="Name:"
                  label-for="username"
                  description=""
                >
                  <b-form-input
                    id="username"
                    type="text"
                    required
                    placeholder="Enter Name"
                    v-model="$v.frmContact.username.$model"
                    :state="
                      $v.frmContact.username.$dirty
                        ? !$v.frmContact.username.$error
                        : null
                    "
                    aria-describedby="username-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="username-feedback">
                    Name is required and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>

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
                    v-model="$v.frmContact.email.$model"
                    :state="
                      $v.frmContact.email.$dirty
                        ? !$v.frmContact.email.$error
                        : null
                    "
                    aria-describedby="email-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="email-feedback">
                    <span v-if="!$v.frmContact.email.email">Invalid Email</span>
                    <span v-if="!$v.frmContact.email.required"
                      >Email is required</span
                    >
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="username-group"
                  label="Phone:"
                  label-for="phone"
                  description=""
                >
                  <b-form-input
                    id="phone"
                    type="text"
                    required
                    placeholder="Enter your phone number"
                    v-model="$v.frmContact.phone.$model"
                    :state="
                      $v.frmContact.phone.$dirty
                        ? !$v.frmContact.phone.$error
                        : null
                    "
                    aria-describedby="phone-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="phone-feedback">
                    Phone number is required
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="username-group"
                  label="Messge:"
                  label-for="Message"
                  description=""
                >
                  <b-form-textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Enter your message"
                    v-model="$v.frmContact.message.$model"
                    :state="
                      $v.frmContact.message.$dirty
                        ? !$v.frmContact.message.$error
                        : null
                    "
                    aria-describedby="message-feedback"
                  ></b-form-textarea>
                  <b-form-invalid-feedback id="message-feedback">
                    Message is requirede and must be at least 30 characters.
                  </b-form-invalid-feedback>
                </b-form-group>

                <div class="col-4 mt-3">
                  <b-button
                    @click="doSubmit"
                    class="text-center w-100"
                    variant="success"
                    >Submit</b-button
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">Contact Info</h3>
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">
                123 Power Road , Doveton , Australia
              </p>

              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="#">+487 3235 </a></p>

              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="#">ouremail@jobs4u.com</a></p>
            </div>

            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">More Info</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                ad iure porro mollitia architecto hic consequuntur. Distinctio
                nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos
                qui, libero neque sed nulla.
              </p>
              <p>
                <a href="#" class="btn btn-success px-4 py-2 text-white pill"
                  >Learn More</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      frmContact: {
        username: null,
        email: null,
        phone: null,
        message: null,
      },
      error: null,
      errorFlag: false,
    };
  },

  mixins: [validationMixin],
  validations: {
    frmContact: {
      username: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        minLength: minLength(3),
        email,
      },
      phone: {
        required,
      },

      message: {
        required,
        minLength: minLength(30),
      },
    },
  },

  methods: {
    async doSubmit() {
      // Validiaton Check
      this.$v.frmContact.$touch();
      if (this.$v.frmContact.$anyError) {
        this.errorFlag = false;
        console.log("error");
        return;
      }
    },

    sendEmail(e) {
      try {
        emailjs.sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID",
          {
            name: this.name,
            email: this.email,
            message: this.meessage,
          }
        );
        console.log("it works!!!");
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
<style scoped></style>
