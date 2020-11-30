// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
"use strict"

let basket = {
    fist: { name: 'PS', cost: 47000, num: 3 },
    second: { name: 'Xbox', cost: 46000, num: 4 },
    third: { name: 'PC', cost: 110000, num: 2 },
    countBasketPrice() {
        let a = 0;
        let res = 0;
        let is_num = true;
        for (let i in basket) {
            a = (basket[i]["cost"] * basket[i]["num"]);
            if (isNaN(a)) {
                is_num = false;
                break;
            }
            res = res + a;
        }
        console.log(res);
    }
}

basket.countBasketPrice();

