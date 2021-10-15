import { food } from './food.js';

const foodList = document.getElementById('food-list');


function renderFood(item){
    const foodCard = document.createElement('li');
    foodCard.classList.add('foodCard');

    const img = document.createElement('img');
    img.src = item.img;

    const foodName = document.createElement('span');
    foodName.textContent = item.name;

    foodCard.append(img, foodName);
    return foodCard;
}



for (let item of food){
    const foodCard = renderFood(item);
    foodList.append(foodCard);
}