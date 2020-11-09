/** * @author [Sanjith] * @email [sanjith.das@gmail.com] * @create date
2020-11-07 11:57:58 * @modify date 2020-11-07 11:57:58 * @desc [Create Job ,
validate the data using vuelidate package] */
<template>
  <div class="container mtop">
    <div class="row">
      <div class="col-md-3">
        <Menubar />
        <div class="row mt-3">
          <div class="col-md-12">
            <div class="card">
              <img
                src="http://www.nadhammelbourne.com.au/jobs/uploads/logo/1566097468.jpg"
                style="width: 100%;"
              />
              <div class="card-header"><b>Update Logo</b></div>
              <!-- <b-form-file
                v-model="logo"
                class="mt-3"
                plain
                ref="logo"
               
                accept="image/jpeg, image/png, image/jpg"
              
              </b-form-file> > -->
              <input type="file" ref="logo" @change="onSelectImage" />
              <b-button
                @click="updateLogo"
                class="text-center w-100 mt-2"
                variant="success"
                >Update</b-button
              >
            </div>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-header"><b>Create/Update your Company Info</b></div>
          <div class="card-body">
            <b-form-group
              id="title-group"
              label="Company Name:"
              label-for="cname"
              description=" "
            >
              <b-form-input
                id="cname"
                type="text"
                required
                placeholder="Enter Company name"
                v-model="$v.frmCompany.cname.$model"
                :state="
                  $v.frmCompany.cname.$dirty
                    ? !$v.frmCompany.cname.$error
                    : null
                "
                aria-describedby="cname-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="cname-feedback">
                <span v-if="!$v.frmCompany.cname.required"
                  >Company name Required</span
                >
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="address-group"
              label="Address:"
              label-for="address"
              description=" "
            >
              <b-form-input
                id="address"
                type="text"
                required
                placeholder="Enter Addresss"
                v-model="$v.frmCompany.address.$model"
                :state="
                  $v.frmCompany.address.$dirty
                    ? !$v.frmCompany.address.$error
                    : null
                "
                aria-describedby="address-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="address-feedback">
                <span v-if="!$v.frmCompany.address.required"
                  >Address Required</span
                >
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="Phone-group"
              label="Phone:"
              label-for="Phone"
              description=" "
            >
              <b-form-input
                id="phone"
                type="text"
                required
                placeholder="Enter Phone"
                v-model="$v.frmCompany.phone.$model"
                :state="
                  $v.frmCompany.phone.$dirty
                    ? !$v.frmCompany.phone.$error
                    : null
                "
                aria-describedby="Phone-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="Phone-feedback">
                <span v-if="!$v.frmCompany.phone.required">Phone Required</span>
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="website-group"
              label="Website:"
              label-for="Website"
              description=" "
            >
              <b-form-input
                id="websites"
                type="text"
                required
                placeholder="Enter Website"
                v-model="$v.frmCompany.websites.$model"
                :state="
                  $v.frmCompany.websites.$dirty
                    ? !$v.frmCompany.websites.$error
                    : null
                "
                aria-describedby="websites-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="websites-feedback">
                <span v-if="!$v.frmCompany.websites.required"
                  >Website Required</span
                >
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="slogan-group"
              label="Slogan:"
              label-for="Slogan"
              description=" "
            >
              <b-form-input
                id="slogan"
                type="text"
                required
                placeholder="Enter slogan"
                v-model="frmCompany.slogan"
                aria-describedby="slogan-feedback"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="description-group"
              label="Description:"
              label-for="Description"
              description=" "
            >
              <b-form-textarea
                id="description"
                requiredr
                placeholder="Enter Description"
                v-model="$v.frmCompany.description.$model"
                :state="
                  $v.frmCompany.description.$dirty
                    ? !$v.frmCompany.description.$error
                    : null
                "
                aria-describedby="description-feedback"
              ></b-form-textarea>

              <b-form-invalid-feedback id="description-feedback">
                <span v-if="!$v.frmCompany.description.required"
                  >Description Required</span
                >
              </b-form-invalid-feedback>
            </b-form-group>
            <input
              type="hidden"
              name="UserId"
              :value="this.frmCompany.UserId"
            />
            <div class="col-4 mt-3">
              <b-button
                @click="create"
                class="text-center w-100"
                variant="success"
                >Create</b-button
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">About your company</div>
          <div class="card-body" v-if="this.company">
            <p>name: {{ this.company.cname }}</p>

            <p>address: {{ this.company.address }}</p>

            <p>phone: {{ this.company.phone }}</p>

            <p>
              website:<a href=""> {{ this.company.websites }} </a>
            </p>

            <p>Company slogan: {{ this.company.slogan }}</p>
            <p>Company page:<a href="company/employer">View</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import Menubar from "../../admin/Menubar";
import AdminService from "../../../services/AdminService";
export default {
  components: { Menubar },

  data() {
    return {
      frmCompany: {
        cname: null,
        address: null,
        phone: null,
        websites: null,
        slogan: null,
        description: null,
        UserId: 44,
      },

      company: null,
      logo: null,
      logoUrl: null,
    };
  },
  mixins: [validationMixin],
  validations: {
    frmCompany: {
      cname: {
        required,
        minLength: minLength(5),
      },
      address: {
        required,
        minLength: minLength(5),
      },

      phone: {
        required,
        minLength: minLength(9),
      },
      websites: {
        required,
        minLength: minLength(6),
      },
      description: {
        required,
        minLength: minLength(3),
      },
    },
  },

  methods: {
    async create() {
      // Validiaton Check
      this.$v.frmCompany.$touch();
      if (this.$v.frmCompany.$anyError) {
        this.errorFlag = true;
        console.log("error");
        return;
      }

      // Posts data -- Create Company
      try {
        this.company = (await AdminService.createCompany(this.frmCompany)).data;
        // this.$router.push({ name: "Companies" });
        // this.company = company;
        console.log(this.company);
      } catch (error) {
        this.errorFlag = true;

        this.error = error.response.data.error;
        console.log(this.error);
      }
    },

    onSelectImage() {
      const file = this.$refs.logo.files[0];
      this.logo = file;
      alert(file.name);
    },

    // update logo
    async updateLogo() {
      const formData = new FormData();
      alert("in update");
      formData.append("logo", this.logo);
      console.log(this.company);
      try {
        if (this.company !=null){
          this.logoUrl = (
            await AdminService.updateLogo(formData, this.company.id)
          ).data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
