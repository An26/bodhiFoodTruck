let ttoday = new Date();

function setWeekSpecial (item) {
let endDay = new Date(item.endDate);
  if (endDay > ttoday) {
    if (item.name) {$('.weekly-special').find('.item-name').text(item.name);}

    if (item.imageLocation) {
      $('.weekly-special').find('.item-image').attr('src', item.imageLocation);
    } else {
      $('.weekly-special').find('.item-image').css('display', 'none');
    }

    if (item.description) {$('.weekly-special').find('.item-description').text(item.description)}

    $('.weekly-special').css('display', 'block');
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

// setWeekSpecial(week01012021);