<template>
  <div class="container mtop">
    <div class="row justify-content-center">
        <div class="col-md-10">
          <h2>Your saved jobs - {{username}}</h2>
          <div class="card">
            <div class="card-header">   
              <b>{{username}}</b></div>

            <div class="card-body">
              {{id}}
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
       username : '',
       email:'',
       id:'',

    }
  },
  mounted() {
    console.log(this.userdata.user);
     const {username,email,id} = this.userdata.user;
     console.log(email);
     this.username = username;
     this.email = email;
     this.id = id;
  },
  
}
</script>
<style scoped>

</style>

