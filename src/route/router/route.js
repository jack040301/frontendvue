import Index from "@/views/Index.vue";
import store from '../../store';

import Landing from "@/views/Landing.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import NotFound from "@/layout/NotFoundPage.vue";
import escHeader from "@/escord-components/esc-Header.vue";
import escFooter from "@/escord-components/esc-Footer.vue";


//---| ESCORD COMPONENTS |---
//import escLogin from "../../escord-components/esc-Login.vue";
//import escLanding from "../../escord-components/esc-LandingPage.vue";
//import escStudDash from "../../escord-components/Student/studDashboard.vue";
//import escProfDash from "../../escord-components/Prof/profDashboard.vue";

//import escProf_GSPage from "../../escord-components/Prof/profGradesheetPage.vue";



const escStaffDash = () => import("../../escord-components/Staff/staffDashboard.vue");

const escLogin = () => import('../../escord-components/esc-Login.vue')
const escLanding = () => import('../../escord-components/esc-Landing.vue')
const escProfDash = () => import('../../escord-components/Prof/profDashboard.vue')
const escProf_GSPage = () => import('../../escord-components/Prof/profGradesheetPage.vue')


const escStudDash  = () => import('../../escord-components/Student/studDashboard.vue')

const escAbout  = () => import('../../escord-components/esc-About.vue')
const escContactUs  = () => import('../../escord-components/esc-ContactUs.vue')
const escStaffScholasticRecord  = () => import('../../escord-components/Staff/StaffScholasticRecord.vue')

const escRegister  = () => import('../../escord-components/esc-Register.vue')

const escStaff_SRPage   = () => import("../../escord-components/Staff/staffScholasticRecordDetail.vue")

const escAdminDash  = () => import('../../escord-components/Manager/adminDashboard-2.vue')

/* ADMIN TABS */

import escAdminOverview from '../../escord-components/Manager/adminOverview.vue';
import escAdminManageAccount from '../../escord-components/Manager/adminManageAccount.vue';
import escAdminAuditTrail from '../../escord-components/Manager/adminAuditTrail.vue';


const routes = [

  //---| ESCORD ROUTES |----

  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/",
    name: "Landing",
    //component: escLanding,
    components: {default: escLanding, header: escHeader, footer: escFooter},

  },
  {
    path: "/register",
    name: "Register",
    components: {default: escRegister, header: escHeader, footer: escFooter}
  },

  {
    path: "/login",
    name: "Login",
    //component: escLogin,
    components: {default: escLogin, header: escHeader, footer: escFooter},
    onlyGuest:true,
  },
  {
    path: "/student-dashboard",
    name: "Student Dashboard",
    components: {default: escStudDash, header: escHeader, footer: escFooter}
  },
  {
    path: "/prof-dashboard/:userid",
    name: "Professor Dashboard",
    components: {default: escProfDash, header: escHeader, footer: escFooter},
  
   //meta: { requiresAuth: true, authorize: 'professor' } ,
  //uncomment this to have a login validation

  },
  {
    path: "/gradesheet-detail/:userid/:gradeshid",
    name: "Gradesheet Detail",
    components: {default: escProf_GSPage, header: escHeader, footer: escFooter}
 
  },
  {
    path: "/about-escord",
    name: "About",
    components: {default: escAbout, header: escHeader, footer: escFooter}
  },
  {
    path: "/contact-escord",
    name: "Contact Us",
    components: {default: escContactUs, header: escHeader, footer: escFooter}
  },
  {
    path: "/Staff-scholastic-record",
    name: "Staff Scholastic-record",
    components: {default: escStaffScholasticRecord, header: escHeader, footer: escFooter}
  },
  {
    path: "/staff-dashboard",
    name: "Staff Dashboard",
    components: {default: escStaffDash, header: escHeader, footer: escFooter}

  },
  {
    path: "/scholastic-record-detail",
    name: "Scholastic Record Detail",
    components: {default: escStaff_SRPage, header: escHeader, footer: escFooter}
  },
  {
    path: "/manager-dashboard",
    name: "Manager Dashboard",
    components: {default: escAdminDash, header: escHeader, footer: escFooter}

  },
  {
    path: "/overview",
    name: "Overview",
    component: escAdminOverview
  },
  {
    path: "/manage-account",
    name: "Manage Account",
    component: escAdminManageAccount
  },
  {
    path: "/audit-trail",
    name: "Audit Trail",
    component: escAdminAuditTrail
  },

]


export default routes;