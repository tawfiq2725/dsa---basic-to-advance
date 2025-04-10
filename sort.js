// bubble sort

function bubble(arr = [1, 5, 3, 2, 7]) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(bubble());

function selectionSort(arr = [1, 5, 3, 2, 7]) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
// console.log(selectionSort());

function insertion(arr = [1, 5, 3, 2, 7]) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// console.log(insertion());

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// console.log(mergeSort([1, 6, 5, 3, 2]));

function insertionS(arr = [1, 5, 4, 2, 7]) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let min = arr[i];
    let j = i - 1;

    while (j > 0 && arr[j] > min) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = min;
  }
  return arr;
}
// console.log(insertion());

function quick(arr = [1, 5, 4, 2, 7]) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [],
    right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return[...quick(left),pivot,...quick(right)]
}
console.log(quick());
