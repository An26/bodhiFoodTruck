let ttoday = new Date();
let showWSTitle = false;

function setWeekSpecial (itemArray) {
  itemArray.forEach(item => addSpecial(item));
};

function addSpecial (item) {
  let endDay = new Date(item.endDate);
    if (endDay > ttoday) {
      showWSTitle = true;
      let specialItem = $('#clone-item').clone();
      specialItem.attr('id', item.uid);
  
      $('#ws-row').append(specialItem);
      
      if (item.name) {specialItem.find('.item-name').text(item.name);}
      
      if (item.imageLocation) {
        specialItem.find('.item-image').attr('src', item.imageLocation);
      } else {
        specialItem.find('.item-image').css('display', 'none');
      }
  
      if (item.description) {specialItem.find('.item-description').html(item.description)}
      
      specialItem.find('.ws-endDate span').text(item.endDate);

      specialItem.css('display', 'block');
    }

    if (showWSTitle) {
      $('.ws-title').css('display', 'block');
    }
}

// The condition to check the end date is exclusive. The end date range is not invcluded in the range.

// let itemS8 = {
//   "endDate": "02/04/2025",
//   "uid": "S8",
//   "name": "S8. Bap",
//   "imageLocation": "assets/images/weeklySpecials/S8_Bap.jpeg",
//   "description": "Our take on street corn. Pan cooked and fried with spices served with fried shallots and herbs. Very tasty!"
// }

// let itemS9 = {
//   "endDate": "02/04/2025",
//   "uid": "S9",
//   "name": "S9. Mì Xào Giòn",
//   "imageLocation": "assets/images/weeklySpecials/S9_MiXao.jpeg",
//   "description": "Combination of veggies and meatless protein stir-fried on a bed of crispy noodles."
// }

// let itemC = {
//   "endDate": "02/04/2025",
//   "uid": "S1",
//   "name": "SP1. Bánh Mì Xíu Mai",
//   "imageLocation": "assets/images/weeklySpecials/SP1_BanhMiSiMai.jpeg",
//   "description": "Vegan meatball stew served with toasted bahn mi."
// }

// let item2 = {
//   "endDate": "02/04/2025",
//   "uid": "R10",
//   "name": "R10. Braised Tofu",
//   "imageLocation": "assets/images/weeklySpecials/R10_BraisedTofu.jpeg",
//   "description": "Rolled up tofu strips that is braised for hours in a sweet and salty soy-caramel sauce. Served with a side of rice and steamed veggies."
// }

// let item3 = {
//   "endDate": "02/04/2025",
//   "uid": "R11",
//   "name": "R11. Ginger protein (Mì Căn xào Gừng)",
//   "imageLocation": "assets/images/weeklySpecials/R10_BraisedTofu.jpeg",
//   "description": "Seitan or Soy protein stewed with ginger served with rice and veggies."
// }

let item4 = {
  "endDate": "02/04/2025",
  "uid": "R9",
  "name": "R9. Braised Fish-less Lemongrass",
  "imageLocation": "assets/images/weeklySpecials/r9.jpeg",
  "description": "Soy and protein wrap with seaweed, lemongrass  served with white  rice, veggies and chef's sauce."
}

let item5 = {
  "endDate": "02/04/2025",
  "uid": "R16",
  "name": "R16. Orange Seitan Nuggets",
  "imageLocation": "assets/images/weeklySpecials/r12.jpeg",
  "description": "Sweet and tangy orange sauce over fried seitan with rice and veggies."
}

// let itemR12 = {
//   "endDate": "02/04/2025",
//   "uid": "R12",
//   "name": "R12. Sweet and Sour",
//   "imageLocation": "assets/images/weeklySpecials/r16.jpeg",
//   "description": "Our take on sweet and sour chinese dish served with rice and veggies."
// }
 
let item7 = {
  "endDate": "02/04/2025",
  "uid": "Char_Xiu",
  "name": "Char Xiu by the lb",
  "imageLocation": "assets/images/weeklySpecials/ByPound_Sa Xiu.jpeg",
  "description": "Our take on Char Xiu sold by the lb. $15 per lb."
}

let item8 = {
  "endDate": "02/04/2025",
  "uid": "Bo_Vien",
  "name": "Bo Vien by the lb",
  "imageLocation": "assets/images/weeklySpecials/ByPound_Bo Vien.jpeg",
  "description": "Our take on vietnamese meatballs (Bo Vien) sold by the lb. $13 per lb."
}


let itemA5 = {
  "endDate": "02/04/2025",
  "uid": "A5",
  "name": "A5. Meatless Sampler Plate",
  "imageLocation": "assets/images/food/A5.png",
  "description": "This sampler contains vegan crispy BBQ, chewy tofu, sour papayan soy protein."
}

let itemA6 = {
  "endDate": "02/04/2025",
  "uid": "A6",
  "name": "A6. Rice Patty",
  "imageLocation": "assets/images/food/A6.png",
  "description": "Rice patties made of sticky rice, filled with kale and soy protiens wrapped in banana leaf and steamed then pan fried. A cripsy and chewy snack."
}

let itemS12 = {
  "endDate": "02/04/2025",
  "uid": "S12",
  "name": "S12. Chow Mein",
  "imageLocation": "assets/images/food/s12.png",
  "description": "Spicy seitan stir fried with thick noodles with our tasty peanut sauce. "
} 

let itemS11 = {
  "endDate": "02/04/2025",
  "uid": "S11",
  "name": "S11. Fresh Papaya Salad",
  "imageLocation": "assets/images/food/S11.png",
  "description": "Freshly unrippened chopped papaya served with braised seitan jerky and thai basil."
} 

let itemR20 = {
  "endDate": "02/04/2025",
  "uid": "R20",
  "name": "R20. Veggie Stuffed Medallions",
  "imageLocation": "assets/images/food/R20.png",
  "description": "Stuffed tomatoes, green bell peppers, and bitter melon marinated in a sweet soy sauce. Served with rice."
} 

let itemR21 = {
  "endDate": "02/04/2025",
  "uid": "R21",
  "name": "R21. Seitan Jerky with Rice",
  "imageLocation": "assets/images/food/R21.png",
  "description": "Braised and dried meatless jerky served with rice."
}


setWeekSpecial([lunchSpecial, item4, item5, itemA5, itemA6, itemS11, itemS12, itemR20, itemR21, item7, item8]);
