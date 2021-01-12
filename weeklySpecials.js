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

// ---example object--
// let week01012021 = {
//   "endDate": "01/02/2021",
//   "name": "Hot Soup",
//   "imageLocation": "assets/images/weeklySpecials/soup.jpg",
//   "description": "Hot, simple, soup for the cold season. Try our hot soup."
// }

let week01122021a = {
  "endDate": "01/19/2021",
  "uid": "DS7",
  "name": "DS7. Banh Bo",
  "imageLocation": "assets/images/weeklySpecials/DS7_Banh Bo.jpeg",
  "description": "Steamed rice cake served with sweet coconut sauce."
}

let week01122021b = {
  "endDate": "01/19/2021",
  "uid": "S7",
  "name": "S7. Chow Mein",
  "imageLocation": "assets/images/weeklySpecials/S7_Chow Mein.jpeg",
  "description": "Stir fried thick noodles served with fresh veggies."
}

let week01122021c = {
  "endDate": "01/19/2021",
  "uid": "S8",
  "name": "S8. Bap",
  "imageLocation": "assets/images/weeklySpecials/S8_Bap.jpeg",
  "description": "Our take on street corn served with fried shallots."
}

let week01122021d = {
  "endDate": "01/19/2021",
  "uid": "lb1",
  "name": "Sa Xiu by LB",
  "imageLocation": "assets/images/weeklySpecials/ByPound_Sa Xiu.jpeg",
  "description": "Your favorite meat-less sweet faux-pork can be purchased by the lb."
}

let week01122021e = {
  "endDate": "01/19/2021",
  "uid": "lb2",
  "name": "Bo Vien by LB",
  "imageLocation": "assets/images/weeklySpecials/ByPound_Bo Vien.jpeg",
  "description": "Your favorite meat-less ball can be purchased by the lb."
}


setWeekSpecial([week01122021a, week01122021b, week01122021c, week01122021d, week01122021e]);
