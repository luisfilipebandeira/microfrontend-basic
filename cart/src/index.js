import faker from 'faker';

const itemsCart = `You have ${faker.random.number()} items in your cart`;

document.querySelector('#dev-cart').innerHTML = itemsCart;