<template>
  <div class="container mtop">
    <div class="row justify-content-center">
        <div class="col-md-10">
          <h2>Your saved jobs - {{username}}</h2>
          <div class="card">
            <div class="card-header">   
              <b>{{username}}</b></div>

            <div class="card-body text-danger">
              <h3>Under construction</h3>
            </div>
            <div class="card-footer">
            </div>

          </div>  
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Myjob',
  props:['userdata'],
  data() {
    return {
       username : null,
       email:null,
       id:null,
       user_type:null 
    }
  },
  mounted() {
     //console.log(this.userdata.user);
     const {username,email,id,user_type} = this.userdata.user;
     this.username = username;
     this.email = email;
     this.id = id;
     this.user_type = user_type; 
     if (this.user_type==='admin'){
       this.$router.push({name:'Dashboard'})
     }
     else if (this.user_type==='employer'){
       this.$router.push({name: 'CompanyProfile'})
     }
     
  },
  
}
</script>
<style scoped>

</style>

