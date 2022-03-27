// Promise là một đối tượng sẽ trả về một giá trị trong tương lai.

// Xử lý các event bất đồng bộ.
// Là một giải pháp tốt để tránh callback hell.
// Các trạng thái của Promises:

// fulfilled: các xử lý liên quan khi promise đã thành công
// rejected: các xử lý liên quan khi promise đã thất bại
// pending: Promise đang chờ xử lý, tức là không có fulfilled hoặc rejected trã về
// settled: Promise đã thực hiện fulfilled hoặc rejected

// const promise = new Promise((resolve, reject) => {
//   /// do something
//   let a = 2;
//   let b = 1;
//   if (a === b) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(function () {
//     console.log("success");
//   })
//   .finally(function () {
//     console.log("Hello");
//   })
//   .catch(function () {
//     console.log("Failed");
//   });

// Promise All

function nauCom() {
  console.log("Nau com");
}
function nauCanh() {
  console.log("Nau canh");
}
function nauThit() {
  console.log("Nau thit");
}
const nauComPromise = nauCom;
const nauCanhPromise = nauCanh;
const nauThitPromise = nauThit;

const anToi = Promise.all([nauComPromise, nauThitPromise, nauCanhPromise]).then(
  ([com, canh, thit]) => {
    console.log(com);
    console.log(canh);
    console.log(thit);
  }
);

// 10 dau viec, cùng lúc

// Promise Any
