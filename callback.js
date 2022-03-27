// / Callback

/// 1. Là một hàm
/// 2.Truyền qua đối số
/// 3. Được gọi lại ( trong hàm nhận đối số)

// function myFunction(param) {
//   param();
// }

// myFunction(myCallback);

// function myCallback(param2) {
//   myCallback2();
// }

// function myCallback2() {
//   console.log("Callback function 2");
// }

/// Call back Hell

// function thuc_day(viecnaodo) {
//   viecnaodo();
// }

// function danh_rang(viecnaodo) {
//   viecnaodo();
// }

// function di_an_sang(viecnaodo) {
//   viecnaodo();
// }

// // Code không tối ưu
// function main() {
//   thuc_day(function () {
//     danh_rang(function () {
//       di_an_sang(function () {
//         console.log("OMG!!!!");
//       });
//     });
//   });
// }

// main();

///

Array.prototype.mapA = function (callback) {
  let output = [],
    arrayLength = this.length;

  for (let i = 0; i < arrayLength; i++) {
    let result = callback(this[i], i);
    output.push(result);
  }
  return output;
};

const courses = ["Js", "Php", "Java"];

const Html = courses.mapA(function (element) {
  console.log(element);
});

// Foreach

/// Foreach2

Array.prototype.foreach2 = function (callback) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

courses.foreach2(function (course, index, array) {
  console.log(course, index, array);
});
