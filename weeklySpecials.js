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

let itemA = {
  "endDate": "02/04/2025",
  "uid": "S8",
  "name": "S8. Bap",
  "imageLocation": "assets/images/weeklySpecials/S8_Bap.jpeg",
  "description": "Our take on street corn served with fried shallots."
}

let itemB = {
  "endDate": "02/04/2025",
  "uid": "S9",
  "name": "S9. Mì Xào Giòn",
  "imageLocation": "assets/images/weeklySpecials/S9_MiXao.jpeg",
  "description": "Combination of veggies and meatless protein stir-fried on a bed of crispy noodles."
}

let itemC = {
  "endDate": "02/04/2025",
  "uid": "S1",
  "name": "SP1. Bánh Mì Xíu Mai",
  "imageLocation": "assets/images/weeklySpecials/SP1_BanhMiSiMai.jpeg",
  "description": "Vegan meatball stew served with toasted bahn mi."
}

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
  "uid": "R12",
  "name": "R12. Orange Seitan Nuggets",
  "imageLocation": "assets/images/weeklySpecials/r12.jpeg",
  "description": "Orange Sauce over breaded and fried seitan served with white rice and veggies."
}

let item6 = {
  "endDate": "02/04/2025",
  "uid": "R16",
  "name": "R16. Sweet and Sour",
  "imageLocation": "assets/images/weeklySpecials/r16.jpeg",
  "description": "Our take on sweet and sour chinese dish served with rice and veggies."
}


setWeekSpecial([itemA, itemB, itemC, lunchSpecial, item4, item5, item6]);
