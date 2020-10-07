<template>
 <div>
  <nav class="navbar fixed-top navbar-expand-lg bg-light ">
        <div class="text-left">
          <router-link to="/" class="text-success"><b>Jobs4U</b></router-link> 
       </div>        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                 
                <li class="nav-item ">
                  <router-link to="/seeker/register" class="text-success"><b>FOR JOB SEEKER</b></router-link> |
                </li>
                <li class="nav-item">
                 <router-link to="/employer/register" class="text-success"><b>FOR EMPLOYER</b></router-link> |
                </li>
                <li class="nav-item">
                 <router-link to="/companies" class="text-success"><b>COMPANY</b></router-link> |
                </li>
                <li class="nav-item">
                 <router-link to="/contact" class="text-success"><b>CONTACT</b></router-link> 
                </li>
                <li class="nav-item ml-5">
                 <router-link
                 v-if="!$store.state.isUserLoggedIn"
                  to="/login" class="btn btn-success mr-2"><b>LOGIN</b></router-link>
                  <b-button
                  v-if="$store.state.isUserLoggedIn"
                  class="btn btn-success text-white mr-2"
                  @click = "logout"
                ><b>Logout</b></b-button>
                </li>
                           
            </ul>
        </div>
       
    </nav>
     <router-view/> 
 </div>
</template>

<script>
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css'
//import "../src/assets/js/jquery-3.3.1.min.js";
import "../src/assets/js/bootstrap.min.js";



export default {
  name: "AppHeader",
  props: {
    msg: String,
  },
  methods: {
    logout: function(){
      this.$store.dispatch('setToken',null);
      this.$store.dispatch('setUser',null);
      this.$router.push({name: 'Home'})
    }
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
