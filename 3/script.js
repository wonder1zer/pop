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
