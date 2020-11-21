// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
};

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

function Item(name, value) {
  this.name = name;
  this.value = value;
}

function trackUserHistory(message, fn) {
  console.log(message);
  return fn;
}

function addItemToCart(user, item) {
  trackUserHistory('Added item to cart', () => user.cart.push(item));
}

function addTaxToCartItem(user, item) {
  trackUserHistory(
    'Added tax to item',
    () => (user.cart[user.cart.findIndex((i) => i === item)].value *= 1.3)
  );
}

function buyItem(user, item) {
  trackUserHistory('Bought item', () =>
    user.purchases.push(
      user.cart.splice(
        user.cart.findIndex((i) => i === item),
        1
      )[0]
    )
  );
}

function refundItem(user, item) {
  trackUserHistory('Refunded item', () =>
    user.purchases.splice(
      user.purchases.findIndex((i) => i === item),
      1
    )
  );
}

const flowers = new Item('flowers', 3.5);

addItemToCart(user, flowers);
addTaxToCartItem(user, flowers);
buyItem(user, flowers);
refundItem(user, flowers);

console.log(user);
