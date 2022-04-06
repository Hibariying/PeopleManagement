// class Axios {
//   static create() {
//     var request_ok = null // 请求拦截器成功的回调
//     var request_no = null // 请求拦截器失败的回调
//     var response_ok = null // 响应拦截器成功的回调
//     var response_no = null // 响应拦截器失败的回调

// const { ids } = require('webpack')

//     var fn = (config) => {
//       var p = Promise.resolve()
//         .then(request_ok, request_no)
//         .then(response_ok, response_no)

//       return p
//     }

//     fn.interceptors = {
//       request: {
//         use: (ok, no) => {
//           request_ok = ok
//           request_no = no
//         }
//       },
//       response: {
//         use(ok, no) {
//           response_ok = ok
//           response_no = no
//         }
//       }
//     }
//     return fn
//   }
// }

// var request = Axios.create()

// request.interceptors.request.use(() => {}, () => {})
// request.interceptors.response.use(() => {
//   return 1233
//   // return Promise.reject(new Error('111111111'))
// }, () => {})

// function login() {
//   return request({
//     url: '',
//     method: 'get',
//     data: {}
//   })
// }

// login().then((data) => {
//   console.log(data, 'hehe')
// }).catch((err) => {
//   console.log(err)
// })
// students.map(item => {
//   return item.name
// })
// var reversePairs = function(nums) {
//   if (nums.length < 2) return 0

//   let result = 0

//   const mergeSort = (start, end) => {
//     if (start === end) return [nums[start]]

//     const mid = start + ((end - start) >> 1)
//     const leftChild = mergeSort(start, mid)
//     const rightChild = mergeSort(mid + 1, end)

//     // 要返回的排序好大小的数组
//     const temp = new Array(end - start + 1).fill(0)
//     // 用来将 leftChild 和 rightChild 数组按从小到大合并进要返回的 temp 数组
//     let left = 0; let right = 0; let now = 0
//     while (left < leftChild.length && right < rightChild.length) {
//       // 如果左边子数组的值  小于 右边子数组的值，正常——增序
//       if (leftChild[left] < rightChild[right]) {
//         temp[now++] = leftChild[left++]
//       } else {
//         temp[now++] = rightChild[right++]
//         result += leftChild.length - left
//       }
//     }
//     while (left < leftChild.length) {
//       temp[now++] = leftChild[left++]
//     }
//     while (right < rightChild.length) {
//       temp[now++] = rightChild[right++]
//     }
//     return temp
//   }
//   mergeSort(0, nums.length - 1)
//   return result
// }
// var arr = [3, 7, 6, 0, 8, 5, 2, 4]
// console.log(reversePairs(arr))

// const obj = {}
// const find = arr => {
//   arr.forEach(key => {
//     console.log('key是：' + key)
//     if (obj[key]) {
//       obj[key]++
//       console.log('if obj[key] 则：' + obj[key])
//     } else {
//       obj[key] = 1
//       console.log('否则' + obj[key])
//     }
//   })
//   Object.keys(obj).forEach(key => {
//     console.log('下面的key是：' + key)
//     if (obj[key] === Math.max(...Object.values(obj))) {
//       console.log(key)
//     }
//   })
// }

// find([1, 2, 3, 2, 2, 2, 5, 4, 3, 5, 3, 7, 3, 9, 3, 8, 3, 0, 3, 2])

