const mongoose = require("mongoose");

// generate ryokan id
const productId1 = mongoose.Types.ObjectId();
const productId2 = mongoose.Types.ObjectId();
const productId3 = mongoose.Types.ObjectId();
const productId4 = mongoose.Types.ObjectId();
const productId5 = mongoose.Types.ObjectId();
const productId6 = mongoose.Types.ObjectId();

const userId1 = mongoose.Types.ObjectId();

// initial user
const initialUser = {
  _id: userId1,
  name: "admin",
  password: "1234567",
  email: "bakingclasstest@gmail.com",
  admin: true,
};

// initial products data
const products = [
  {
    _id: productId1,
    name: "Gâteau aux Fruits & Chocolate Truffle",
    photo: "/photos/fruitPoundCake.jpeg",
    description:
      "A stylish moist pound cake filled with dried fruits. The cut dough is used to make chocolate balls. 1 whole, 4.5cm x 21cm x 5.8cm & 6 pieces",
    price: 20,
  },
  {
    _id: productId2,
    name: "Summer Fruit Shortcake",
    photo: "/photos/cake.jpeg",
    description:
      "A refreshing shortcake perfect for the hot days with plenty of fresh cream applied to fluffy pâte à génoise and decorated with summer fruits.1 whole, 15cm diameter",
    price: 30,
  },
  {
    _id: productId3,
    name: "Matcha Terrine & Houjicha Pudding",
    photo: "/photos/greenteaCakeAndHojicha.jpeg",
    description:
      "Rich matcha terrine with ganache-like texture, accompanied with smooth houjicha pudding topped with brown sugar syrup.",
    price: 25,
  },
  {
    _id: productId4,
    name: "Ube Mont Blanc",
    photo: "/photos/MontBlanc.jpeg",
    description:
      "A new Mont Blanc sensation with crispy caramelized pâte brisée as base and combination of thick cream with ube and marron cream on top.",
    price: 15,
  },
  {
    _id: productId5,
    name: "Orange Pound Cake",
    photo: "/photos/orangeCake.jpeg",
    description: "A stylish moist pound cake filled with dried oranges",
    price: 20,
  },
  {
    _id: productId6,
    name: "Paris-Brest",
    photo: "/photos/puff.jpeg",
    description:
      "A fragrant ring-shaped choux with fresh cream, chestnut cream and hazelnuts. We will also make petite choux with the remaining batter. 1 whole, 18cm diameter",
    price: 10,
  },
];

module.exports = { products, initialUser };
