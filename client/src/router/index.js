/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-08 21:15:47
 * @modify date 2020-11-08 11:40:23
 * @desc [vue routes are defined ]
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Seeker from "../components/register/Seeker.vue";
import Employer from "../components/register/Employer.vue";
import Company from "../components/company/Company.vue";
import CreateCompany from "../components/admin/company/Create.vue";
import CompanyProfile from "../components/company/Profile.vue";
import Login from "../components/Login.vue";
import Contact from "../views/Contact.vue";
import SearchView from "../views/SearchView.vue";
import Myjob from "../views/job/Myjob.vue";
//import Dashboard from "../components/admin/Dashboard.vue";
import CreateCategory from "../components/category/Create.vue";
import Testimonial from "../components/admin/Testimonial.vue";
import Jobs from "../components/admin/Jobs.vue";
import Create from "../components/admin/job/Create.vue";
import Edit from "../components/admin/job/Edit.vue";
import AdminLogin from "../components/admin/Login.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/seeker/register",
    name: "seeker",
    component: Seeker,
  },
  {
    path: "/employer/register",
    name: "employer",
    component: Employer,
  },
  {
    path: "/companies",
    name: "company",
    component: Company,
  },
  {
    path: "/dashboard/company/create",
    name: "CreateCompany",
    component: CreateCompany,
  },
  {
    path: "/company/profile",
    name: "CompanyProfile",
    component: CompanyProfile,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: SearchView,
    props: true,
  },
  {
    path: "/jobs/Home",
    name: "JobHome",
    props: true,
    component: Myjob,
  },

  {
    path: "/admin/dashboard",
    name: "Dashboard",
    props: true,
    component: Jobs,
  },

  {
    path: "/dashboard/jobs",
    name: "Jobs",
    props: true,
    component: Jobs,
  },
  {
    path: "/dashboard/jobs/deleted",
    name: "JobsDeleted",
    props: true,
    component: Jobs,
  },

  {
    path: "/dashboard/category/create",
    name: "CreateCategory",
    props: true,
    component: CreateCategory,
  },
  {
    path: "/dashboard/testimonials",
    name: "Testimonial",
    props: true,
    component: Testimonial,
  },
  {
    path: "/dashboard/job/create",
    name: "Create",
    props: true,
    component: Create,
  },
  {
    path: "/dashboard/job/edit",
    name: "EditJob",
    props: true,
    component: Edit,
  },

  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
