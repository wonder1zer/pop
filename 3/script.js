// let array = [];

// for (i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log("red");
//     } else {
//         console.log("blue");
//     }
// }

// const nightClubRegister = [{
//         name: 'Ahmed',
//         lastname: 'Abdool',
//         age: 25,
//         gender: 'male'
//     },
//     {
//         name: 'Sally',
//         lastname: 'Morgan',
//         age: 18,
//         gender: 'female'
//     },
//     {
//         name: 'Dionne',
//         lastname: 'Brown',
//         age: 29,
//         gender: 'female'
//     },
//     {
//         name: 'Max',
//         lastname: 'Forrester',
//         age: 20,
//         gender: 'male'
//     }
// ]

// nightClubRegister.forEach(element => {
//     if (element.gender == "female" && element.age >= 20) {
//         console.log("wlcome mrs " + element.name);
//     } else if (element.gender == "male" && element.age >= 20) {
//         console.log("wlcome mr " + element.name);
//     } else {
//         console.log("u r not invited " + element.name);
//     }
// });

let toBuy = ["avocado", "cheese", "halloumi", "egg", "almond milk", "onion"];
let fridge = ["salad", "chocolate", "crisps"];
let firstList = document.querySelector("#first-list");
let secondList = document.querySelector("#second-list");
let upBtn = document.querySelector("#up");
let downBtn = document.querySelector("#down");

firstList.innerHTML = toBuy;
secondList.innerHTML = fridge;

downBtn.addEventListener('click', function() {
    let deletedItemUp = toBuy.pop();
    fridge.push(deletedItemUp);
    firstList.innerHTML = toBuy;
    secondList.innerHTML = fridge;
});

upBtn.addEventListener('click', function() {
    let deletedItemDown = fridge.pop();
    toBuy.push(deletedItemDown);
    firstList.innerHTML = toBuy;
    secondList.innerHTML = fridge;
});