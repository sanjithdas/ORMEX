<template>
  <div class="container mtop">
    <div class="row">
      <div class="col-md-3">
          <Menubar/>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header">Testimonials</div>
          <div class="card-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import Menubar from '../admin/Menubar'
export default {
  components: {Menubar},
  
}
</script>
<style scoped>

</style>