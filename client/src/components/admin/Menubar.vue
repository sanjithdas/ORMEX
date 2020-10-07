<template>
  <div class="card">
		<div class="card-header">
			<b>Menu</b>
		</div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item"><router-link class="btn-dark btn-sm" to="/admin/dashboard">Home</router-link></li>
        <li class="list-group-item"><router-link class="btn-dark btn-sm"  to="/dashboard/post">Create Category</router-link></li>
        <li class="list-group-item"><router-link to="/dashboard/company/create" class="btn-dark btn-sm">Create Company</router-link></li>
        <li class="list-group-item"><router-link to="/dashboard/job/create" class="btn-dark btn-sm">Create Jobs</router-link></li>
        <li class="list-group-item"><router-link to="/dashboard/jobs" class="btn-dark btn-sm">View Jobs</router-link></li>
        <!-- <li class="list-group-item"><router-link to="/dashboard/trash">Trash</router-link></li> -->
        <li class="list-group-item"><router-link to="/dashboard/testimonials" class="btn-dark btn-sm">View Testimonial</router-link></li>
        <li class="list-group-item"><router-link to="/testimonial/create" class="btn btn-dark btn-sm">Create Testimonial</router-link></li>
        
      </ul>
    </div>
	</div>
</template>
<script>

export default {
  name: "Menubar"
  
}
</script>
<style scoped>

</style>