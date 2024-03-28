// 'use strict'

const User = {
    name: 'Vasya',
    getName: () => this.name

}
console.log(User.getName());



const User1 = {

    name: 'Vasya',

    getName() {

        return this.name;

    }

}

console.log(User1.getName());




// const inputRub = document.querySelector('#rub'),
//     inputUsd = document.querySelector('#usd')
// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'js/current1.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
//     // request.addEventListener('readystatechange', () => {
//     //     if (request.readyState === 4 && request.status === 200) {
//     //         console.log(request.response)
//     //         const data = JSON.parse(request.response)
//     //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//     //     } else {
//     //         inputUsd.value = 'чвтотто пошло не так'
//     //     }
//     request.addEventListener('load', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.response)
//             const data = JSON.parse(request.response)
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'чвтотто пошло не так'
//         }
//     })
// })