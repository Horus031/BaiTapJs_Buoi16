/**
 * Array (Mảng)
 */
let arrayNumbers = [];
let arrayLength = arrayNumbers.length;
let arrayFloatNumbers = [];
let arrayFloatLength = arrayFloatNumbers.length;

// Thêm số
function addNumberToArray() {
  const number = document.getElementById("inputNum").value * 1;
  arrayNumbers.push(number);
  arrayLength = arrayNumbers.length;

  document.getElementById("txtArray").innerHTML = arrayNumbers;
}

// Tính tổng số dương
function sumPositive() {
  let sum = 0;

  if (arrayLength == 0) {
    document.getElementById("txtSum").innerHTML = "Mảng rỗng";
    return;
  }

  for (let i = 0; i < arrayLength; i++) {
    const number = arrayNumbers[i];
    if (number > 0) {
      sum += number;
    }
  }
  document.getElementById("txtSum").innerHTML = `Tổng số dương: ${sum}`;
}

// Đếm số dương
function countPositive() {
  let count = 0;

  if (arrayLength == 0) {
    document.getElementById("txtCount").innerHTML = "Mảng rỗng";
    return;
  }

  for (let i = 0; i < arrayLength; i++) {
    const number = arrayNumbers[i];
    if (number > 0) {
      count++;
    }
  }

  document.getElementById("txtCount").innerHTML = `Số dương: ${count}`;
}

// Tìm số nhỏ nhất
function findMin() {
  if (arrayLength == 0) {
    document.getElementById("txtMin").innerHTML = "Mảng rỗng";
    return;
  }

  let min = arrayNumbers[0];
  for (let i = 1; i < arrayLength; i++) {
    const number = arrayNumbers[i];
    if (number < min) {
      min = number;
    }
  }

  document.getElementById("txtMin").innerHTML = `Số nhỏ nhất: ${min}`;
}

// Tìm số dương nhỏ nhất
function findMinPos() {
  if (arrayLength == 0) {
    document.getElementById("txtMinPos").innerHTML = "Mảng rỗng";
    return;
  }

  let minPos = -1;
  for (let i = 0; i < arrayLength; i++) {
    const number = arrayNumbers[i];
    if (number > 0 && (minPos == -1 || number < minPos)) {
      minPos = number;
    }
  }

  document.getElementById(
    "txtMinPos"
  ).innerHTML = `Số dương nhỏ nhất: ${minPos}`;
}

// Tìm số chẵn cuối cùng
function findLastEven() {
  if (arrayLength == 0) {
    document.getElementById("txtEven").innerHTML = "Mảng rỗng";
    return;
  }

  let lastEven = -1;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const number = arrayNumbers[i];
    if (number % 2 == 0) {
      lastEven = number;
      break;
    }
  }

  document.getElementById(
    "txtEven"
  ).innerHTML = `Số chẵn cuối cùng: ${lastEven}`;
}

// Đổi chỗ
function changePosition() {
  const inputIndex1 = document.getElementById("inputIndex1").value * 1;
  const inputIndex2 = document.getElementById("inputIndex2").value * 1;
  let temp = 0;

  if (arrayLength == 0) {
    document.getElementById("txtChangePos").innerHTML = "Mảng rỗng";
    return;
  }

  if (!inputIndex1 || !inputIndex2) {
    document.getElementById(
      "txtChangePos"
    ).innerHTML = `Thiếu dữ kiện, vui lòng điền đủ hai số!`;
    return;
  }

  if (
    inputIndex1 > arrayNumbers[arrayLength - 1] ||
    inputIndex1 > arrayNumbers[arrayLength - 1]
  ) {
    document.getElementById(
      "txtChangePos"
    ).innerHTML = `Một trong hai vị trí đã vượt quá độ dài mảng!`;
    return;
  }

  temp = arrayNumbers[inputIndex1];
  arrayNumbers[inputIndex1] = arrayNumbers[inputIndex2];
  arrayNumbers[inputIndex2] = temp;

  document.getElementById(
    "txtChangePos"
  ).innerHTML = `Mảng sau khi đổi chỗ: ${arrayNumbers}`;
}

// Sắp xếp tăng dần
function sortIncrease() {
  if (arrayLength == 0) {
    document.getElementById("txtIncrease").innerHTML = "Mảng rỗng";
    return;
  }

  let sortedArray = arrayNumbers.sort();

  document.getElementById(
    "txtIncrease"
  ).innerHTML = `Mảng sau khi sắp xếp tăng dần: ${sortedArray}`;
}

// Tìm số nguyên tố đầu tiên
function findPrime() {
  if (arrayLength == 0) {
    document.getElementById("txtPrime").innerHTML = "Mảng rỗng";
    return;
  }
  let firstPrime = -1;

  function isPrime(num) {
    if (num < 2 || !Number.isInteger(num)) return false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < arrayLength; i++) {
    if (isPrime(arrayNumbers[i])) {
      firstPrime = arrayNumbers[i];
      break;
    }
  }

  if (firstPrime == -1) {
    document.getElementById("txtPrime").innerHTML =
      "Mảng này không có số nguyên tố";
  } else {
    document.getElementById(
      "txtPrime"
    ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`;
  }
}

// Tạo mảng chứa số thực và số nguyên
function getFloat() {
  const floatNum = document.getElementById("inputFloat").value * 1;
  arrayFloatNumbers.push(floatNum);
  arrayFloatLength = arrayFloatNumbers.length;

  document.getElementById("txtArrayFloat").innerHTML = arrayFloatNumbers;
}

// Đếm số nguyên
function findInt() {
  let count = 0;

  if (arrayFloatNumbers.length == 0) {
    document.getElementById("txtInt").innerHTML = "Mảng rỗng";
  }

  for (let i = 0; i < arrayFloatLength; i++) {
    if (Number.isInteger(arrayFloatNumbers[i])) {
      count++;
    }
  }

  if (count == 0) {
    document.getElementById("txtInt").innerHTML = `Không có số nguyên nào`;
  } else {
    document.getElementById(
      "txtInt"
    ).innerHTML = `Có ${count} số nguyên trong mảng`;
  }
}

// So sánh số dương và số âm
function compareNum() {
  let positiveCount = 0;
  let negativeCount = 0;

  if (arrayLength == 0) {
    document.getElementById("txtCompare").innerHTML = "Mảng rỗng";
    return;
  }

  for (let i = 0; i < arrayLength; i++) {
    if (arrayNumbers[i] > 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }

  if (positiveCount > negativeCount) {
    document.getElementById("txtCompare").innerHTML = "Số dương > số âm";
  } else if (positiveCount == negativeCount) {
    document.getElementById("txtCompare").innerHTML = "Số dương = số âm";
  } else {
    document.getElementById("txtCompare").innerHTML = "Số dương < số âm";
  }
}
