const axios = require('axios').default;
// Async Await
// Async Await
//  Xử lý bất đồng bộ 

// const getJson = async () => {
//   let result1 = await callApi1 // 2s
//   let result2 = await callApi2 // 4s
//   let result3 = await callApi3  // 5s
// }

// const getJson = async () => {
//   try {
//     let result1 = await Promise.all([callApi1, callApi2, callApi3])

//   } catch (error) {

//   }
// }


// cách 1:
// function getJSON() {
//   // To make the function blocking we manually create a Promise.
//   return new Promise(function (resolve) {
//     axios
//       .get("https://tutorialzine.com/misc/files/example.json")
//       .then(function (json) {
//         // The data from the request is available in a .then block
//         // We return the result using resolve.
//         resolve(json);
//       });
//   });
// }
// cách 2:
// Async/Await approach

async function serviceCallApi(endpoint, method, data = null, id = null) {

  const url = id ? endpoint + id : endpoint;
  const result = await axios({
    method: method,
    url, data
  });
  return result;
}

const id = 80;
const endpointUrl = "https://624061412aeb48a9af735b00.mockapi.io/api/v1/users";

// The async keyword will automatically create a new Promise and return it.
async function getAll() {
  try {
    const result = await serviceCallApi(endpointUrl)
    console.log(result.data)
  } catch (error) {
    console.log(error.message)
  }
}



async function createUser() {
  const data = {
    "name": "Nguyen Van A",
    "avatar": "https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg"
  }
  const result = await serviceCallApi(endpointUrl, "post", data)
  console.log(result.data)
}
async function getDetail() {
  const result = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?id=" + id)
  console.log(result.data)
  console.log(result.data)
}

// async function updateUser() {
//   const data = {
//     "name": "Nguyen Van B",
//   }
//   const result = await axios.patch("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/" + id, data)
//   console.log(result.data)
// }
// async function deleteUser() {
//   const result = await axios.delete("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/" + id)
//   console.log(result.data)
// }




getAll()

/// API, method API, REST API



// Phương thức giao tiếp client, và server
/// Có các method cơ bản GET, Post, Delete, Put, Patch,


// Tổng kết 

// 1. Biết Async/Await dùng làm gì. => Xử lý bất đồng bộ, nếu trương hợp muốn lấy tất cả dữ liệu đồng thời Promise.all([])

// Nắm được Api là gì, các method cơ bản của Api (Get, post, put, patch, delete)

// Nắm được việc là sử dụng thư viện Axios để call Api, cách viết base service call Api tái sử dụng nhiều lần.