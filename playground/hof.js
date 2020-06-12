/******* filter, map, reduce (Higher order function) *******/

/***** Array.filter(function) *****/
// Lọc các phần tử thỏa mãn điều kiện của function
const arr1 = [1, 2, 3, 4, 5];
const newArr1 = arr1.filter((num) => {
    return num > 3;
});
// shorthand
// const newArr = arr.filter((num) => num > 3);
console.log(newArr1);

/***** Array.map(function) *****/
// Duyệt qua các phần tử của mảng và thực thi các yêu cầu mà function đưa ra
// rồi trả về một mảng mới
const arr2 = [1, 2, 3, 4];
const newArr2 = arr2.map((num) => num * 10);
console.log(newArr2);

/***** Array.reduce(function) *****/
// Đọc thêm tại https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
