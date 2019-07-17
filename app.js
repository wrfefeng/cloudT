const Vue = require('vue')
module.exports = function createApp(context) {
  return new Vue({
    data: {
      url: context.url
    },
    template: `<div>访问的URL是：{{ url }}</div>`
  })
}
console.log(13)
console.log('456131256546新分支上的提交')
