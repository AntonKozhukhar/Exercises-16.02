"use strict";

/* 1. Создайте двумерный массив, размером 4 х 4. Заполните его случайными величинами в интервале от 20 до 150. Напишите программу, которая находит максимальный и минимальный элементы массива. */

/* let max;
let min;
let arr = [];
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for(let j = 0; j < 4; j++) {
        arr[i][j] = Math.floor(Math.random() * (150 - 20 + 1) + 20);
        if (i == 0 && j == 0) {
            max = arr[0][0];
            min = arr[0][0];
        } 
        if (arr[i][j] > max) max = arr[i][j];
        if (arr[i][j] < min) min = arr[i][j];
    }  
}
console.log(arr);
console.log(min);
console.log(max); */

/* 2. Задать массив 2 х 4 . Из него сформировать два одномерных массива: элементы первого - сумма положительных элементов по строкам; элементы второго - количество отрицательных по столбцам. */

/* let arrRow = [];
let arrCol = [];
let sum;
let count;
let arr = [
    [1, -2, -3, 4],
    [-5, 6, -7, 8],
];
for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for(let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > 0) sum += arr[i][j];
    }
    arrRow.push(sum);
}
console.log(arrRow);

for (let i = 0; i < 4; i++) {
    count = 0;
    for (let j = 0; j < 2; j++) {
        if (arr[j][i] < 0) count++;
    }
    arrCol.push(count);
}
console.log(arrCol); */  

/* 3. Пусть дан квадратный двумерный массив A[n][n]. Необходимо элементам, находящимся на главной диагонали проходящей из левого верхнего угла в правый нижний (то есть тем элементам A[i][j], для которых i==j) присвоить значение 1, элементам, находящимся выше главной диагонали – значение 0, элементам, находящимся ниже главной диагонали – значение 2. То есть получить такой массив (пример для n==4):
    0 1 2 3

0   1 0 0 0
1   2 1 0 0
2   2 2 1 0
3   2 2 2 1 */

/* let arr = [];

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        if (i === j) arr[i][j] = 1;
        else if (i < j) arr[i][j] = 0;
        else if (i > j) arr[i][j] = 2;
    }
}
console.log(arr); */