import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard'
import Rules from '../views/Rules'
import Partners from '../views/Partners'
import News from '../views/News'
import Contacts from '../views/Contacts'
import FAQ from '../views/FAQ'
import LoginPage from '../views/Login_page'
import SiteRules from '../views/Site_rules'
import PrivacyPolicy from '../views/Privacy_policy'
import AMI from '../views/AMI'
import KYC from '../views/KYC'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Dashboard},
    {path: '/rules', component: Rules},
    {path: '/partners', component: Partners},
    {path: '/news', component: News},
    {path: '/contacts', component: Contacts},
    {path: '/faq', component: FAQ},
    {path: '/login', component: LoginPage},
    {path: '/site-rules', component: SiteRules},
    {path: '/privacy', component: PrivacyPolicy},
    {path: '/ami', component: AMI},
    {path: '/kyc', component: KYC}
  ]
})
