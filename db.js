const items = require("./data/items");
const consoles = require("./data/consoles");
const miscelaneous = require("./data/miscelaneous");
const starWars = require("./data/star-wars");

module.exports = {
  items,
  consoles,
  miscelaneous,
  starWars,
};

// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
