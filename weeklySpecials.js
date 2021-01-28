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
  
      if (item.description) {specialItem.find('.item-description').text(item.description)}
      
      specialItem.find('.ws-endDate span').text(item.endDate);

      specialItem.css('display', 'block');
    }

    if (showWSTitle) {
      $('.ws-title').css('display', 'block');
    }
}

// The condition to check the end date is exclusive. The end date range is not invcluded in the range.

let itemA = {
  "endDate": "02/03/2021",
  "uid": "S8",
  "name": "S8. Bap",
  "imageLocation": "assets/images/weeklySpecials/S8_Bap.jpeg",
  "description": "Our take on street corn served with fried shallots."
}

let itemB = {
  "endDate": "02/03/2021",
  "uid": "S9",
  "name": "S9. Mì Xào Giòn",
  "imageLocation": "assets/images/weeklySpecials/S9_MiXao.jpeg",
  "description": "Combination of veggies and meatless protein stir-fried on a bed of crispy noodles."
}

let itemC = {
  "endDate": "02/03/2021",
  "uid": "S1",
  "name": "SP1. Bánh Mì Xíu Mai",
  "imageLocation": "assets/images/weeklySpecials/SP1_BanhMiSiMai.jpeg",
  "description": "Vegan meatball stew served with toasted bahn mi."
}

let item1 = {
  "endDate": "02/03/2021",
  "uid": "R10",
  "name": "R10. Mì Căn xào Hừng",
  "imageLocation": "assets/images/weeklySpecials/R11_GingerSeitan.jpeg",
  "description": "Your choice of seitan or protein stir fried with a soy sauce and ginger sauce. Served with rice and veggies."
}


setWeekSpecial([itemA, itemB, itemC, item1]);
