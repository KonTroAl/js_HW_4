// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
"use strict"

const a = 458

let my_obj = { "единицы": 0, "десятки": 0, "сотни": 0 }

function f(a) {
    let val = a
    if (a < 1000) {
        my_obj["единицы"] = val % 10;
        let val_1 = (val - val % 10) / 10
        my_obj["десятки"] = val_1 % 10;
        let val_2 = (val_1 - val_1 % 10) / 10
        my_obj["сотни"] = val_2 % 10
        console.log(my_obj)
    } else {
        console.log("Ваше число больше 999")
    }
}

f(a)