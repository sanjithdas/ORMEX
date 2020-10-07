import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Seeker from '../components/register/Seeker.vue'
import Employer from '../components/register/Employer.vue'
import Company from '../components/company/Company.vue'
import Login from '../components/Login.vue'
import Contact from '../views/Contact.vue'
import SearchView from '../views/SearchView.vue'
import Myjob from '../views/job/Myjob.vue'
import Dashboard from '../components/admin/Dashboard.vue'
import Post from '../components/admin/Post.vue'
import Testimonial from '../components/admin/Testimonial.vue'
import Jobs from '../components/admin/Jobs.vue'
import Create from '../components/admin/job/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/seeker/register',
    name: 'seeker',
    component: Seeker
  },
  {
    path: '/employer/register',
    name: 'employer',
    component: Employer
  }
  ,
  {
    path: '/companies',
    name: 'company',
    component: Company
  }

  ,
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    
    path: '/jobs',
    name: 'jobs',
    component: SearchView,
    props: true
    //  props: () =>({
    //    user: 'Home.category',
        
    //  })
    }
    ,
    {
      path: '/jobs/Home',
      name: 'JobHome',
      props: true,
      component: Myjob
    },

    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      props: true,
      component: Dashboard
    },
    
    {
      path: '/dashboard/jobs',
      name: 'Jobs',
      props: true,
      component: Jobs
    },
    {
      path: '/dashboard/jobs/deleted',
      name: 'JobsDeleted',
      props: true,
      component: Jobs
    },

    
    {
      path: '/dashboard/category',
      name: 'Post',
      props: true,
      component: Post
    },
    {
      path: '/dashboard/testimonials',
      name: 'Testimonial',
      props: true,
      component: Testimonial
    },
    {
      path: '/dashboard/job/create',
      name: 'Create',
      props: true,
      component: Create
    },


  
]

const router = new VueRouter({
  routes
})

export default router
