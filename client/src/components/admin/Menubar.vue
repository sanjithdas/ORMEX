/** * @author [Sanjith] * @email [sanjith.das@gmail.com] * @create date
2020-11-07 12:09:04 * @modify date 2020-11-07 12:09:04 * @desc [Admin - Menubar
template] */

<template>
  <div class="card">
    <div class="card-header">
      <b>Menu</b>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <router-link class="btn-success btn-sm" to="/admin/dashboard"
            >Home</router-link
          >
        </li>

        <li class="list-group-item">
          <router-link to="/dashboard/job/create" class="btn-success btn-sm"
            >Create Jobs</router-link
          >
        </li>
        <li class="list-group-item">
          <router-link to="/dashboard/jobs" class="btn-success btn-sm"
            >View Jobs</router-link
          >
        </li>
        <li class="list-group-item">
          <router-link
            class="btn-success btn-sm"
            to="/dashboard/category/create"
            >Create Category</router-link
          >
        </li>
        <li class="list-group-item">
          <router-link to="/dashboard/company/create" class="btn-success btn-sm"
            >Create Company</router-link
          >
        </li>
        <!-- <li class="list-group-item"><router-link to="/dashboard/trash">Trash</router-link></li> -->
        <!-- <li class="list-group-item"><router-link to="/dashboard/testimonials" class="btn-dark btn-sm">View Testimonial</router-link></li> -->
        <!-- <li class="list-group-item"><router-link to="/testimonial/create" class="btn btn-dark btn-sm">Create Testimonial</router-link></li> -->
      </ul>
    </div>
  </div>
</template>
<script>
//import store from ''
export default {
  name: "Menubar",
  data() {
    return {
      isUserLoggedin: false,
    };
  },
  mounted() {
    this.isUserLoggedIn = this.$store.state.isUserLoggedIn;
    if (!this.isUserLoggedIn) {
      this.$router.push("/");
    }
  },
};
</script>
<style scoped></style>
