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

let item1 = {
  "endDate": "02/03/2021",
  "uid": "R10",
  "name": "R10. Mì Căn xào Gừng",
  "imageLocation": "assets/images/weeklySpecials/R11_GingerSeitan.jpeg",
  "description": "Your choice of seitan or protein stir fried with a soy sauce and ginger sauce. Served with rice and veggies."
}

let item2 = {
  "endDate": "02/03/2021",
  "uid": "R11",
  "name": "R11. Braised Tofu",
  "imageLocation": "assets/images/weeklySpecials/R10_BraisedTofu.jpeg",
  "description": "Rolled up tofu strips that is braised for hours in a sweet and salty soy-caramel sauce. Served with a side of rice and steamed veggies."
}


setWeekSpecial([item1, item2]);
