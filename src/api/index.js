import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default ({
  apiUrl: 'https://v3.exchangerate-api.com/bulk/',
  baseCurrency: 'EUR',
  apiKey: 'b63f0f34dec374e8d24a3200',
  сookieName: 'courses_data',
  // http://data.fixer.io/api/latest?access_key=27eb0fcc7a0326d90a607aacd8efa399&format=1&symbols=
  // https://v3.exchangerate-api.com/bulk/b63f0f34dec374e8d24a3200/EUR
  getCourses: function (that) {
    let value = that.$cookies.get(this.сookieName)
    if (value) {
      let courses = JSON.parse(value)
      if (courses.result && courses.rates) {
        this.updateDashboard(that, courses)
        return
      }
    }
    this.getCoursesFromApi(that)
  },
  getCoursesFromApi: function (that) {
    let apiUrl = this.apiUrl + this.apiKey + '/' + this.baseCurrency
    axios.get(apiUrl).then(response => {
      this.updateDashboard(that, response.data)
      that.$cookies.set(this.сookieName, JSON.stringify(response.data), '3h', '/')
    })
  },
  updateDashboard: function (that, data) {
    that.courses = data
    that.courses.date = new Date(data.timestamp * 1000).toUTCString()
    that.convertCurrency()
  }

})
