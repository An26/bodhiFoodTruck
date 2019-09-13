var date = new Date();
var currentDate = {
    "UTCdate": date.toUTCString(),
    "day": date.getDate(),
    "month": date.getMonth(),
    "year": date.getFullYear(),
    "weekDay": date.getDay(),
    "MMDDYYYY": date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
}
var today;

// Scheduale Styling Depending on day for Main Page times.
switch (currentDate.weekDay) {
    case 0:
        today = "Sunday";
        $(".nav-pills:nth-child(7)").addClass("active");
        $('#pills-sunday').addClass("active in");
        $('#pills-sunday-tab').addClass("active");
        $('#sunday-hours').css("font-weight", "bold");
        break;
    case 1:
        today = "Monday";
        $(".nav-pills > li:nth-child(1)").addClass("active");
        $('#pills-monday').addClass("active in");
        $('#pills-monday-tab').addClass("active");
        $('#monday-hours').css("font-weight", "bold");
        break;
    case 2:
        today = "Tuesday";
        $(".nav-pills > li:nth-child(2)").addClass("active");
        $('#pills-tuesday').addClass("active in");
        $('#pills-tuesday-tab').addClass("active");
        $('#tuesday-hours').css("font-weight", "bold");
        break;
    case 3:
        today = "Wednesday";
        $(".nav-pills > li:nth-child(3)").addClass("active");
        $('#pills-wednesday').addClass("active in");
        $('#pills-wednesday-tab').addClass("active");
        $('#wednesday-hours').css("font-weight", "bold");
        break;
    case 4:
        today = "Thursday";
        $(".nav-pills > li:nth-child(4)").addClass("active");
        $('#pills-thursday').addClass("active in");
        $('#pills-thursday-tab').addClass("active");
        $('#thursday-hours').css("font-weight", "bold");
        break;
    case 5:
        today = "Friday";
        $(".nav-pills > li:nth-child(5)").addClass("active");
        $('#pills-friday').addClass("active in");
        $('#pills-friday-tab').addClass("active");
        $('#friday-hours').css("font-weight", "bold");
        break;
    case 6:
        today = "Saturday";
        $(".nav-pills > li:nth-child(6)").addClass("active");
        $('#pills-saturday').addClass("active in");
        $('#pills-saturday-tab').addClass("active");
        $('#saturday-hours').css("font-weight", "bold");
        break;
    default:
        console.log("Sorry, can't find date");
        today = "Error";
}

// provide mm/dd/yyyy string as startday and endday parameters
function setAlert(startDayMMDDYYYY, endDayMMDDYYYY, message, htmlString) {
    var startDate = {
        "month": startDayMMDDYYYY.split("/")[0],
        "day": startDayMMDDYYYY.split("/")[1],
        "year": startDayMMDDYYYY.split("/")[2],
        "MMDDYYYY": startDayMMDDYYYY.split("/")[1] + "/" + startDayMMDDYYYY.split("/")[0] + "/" + startDayMMDDYYYY.split("/")[2]
    }

    var endDate = {
        "month": endDayMMDDYYYY.split('/')[0],
        "day": endDayMMDDYYYY.split('/')[1],
        "year": endDayMMDDYYYY.split('/')[2],
        "MMDDYYYY": endDayMMDDYYYY.split('/')[1] + "/" + endDayMMDDYYYY.split('/')[0] + "/" + endDayMMDDYYYY.split('/')[2]
    }

    console.log(startDate);
    console.log(endDayMMDDYYYY);

    if (currentDate.day >= startDate.day <= endDate.day &&
        currentDate.month >= startDate.month <= endDate.month &&
        currentDate.year >= startDate.year <= endDate.year) {

        
        if (htmlString) {
            $("#alertMessage").html(htmlString).append(message);
        } else {
            $("#alertMessage").append(message);
        }
        $(".newsAlert").css('display', 'block');
        $(".alert .alert-info").css('display', 'block');
    } 
}

// set alerts/updates HERE!
var endDate = "09/18/2019";

var message = "We are closed until next Wednesday 9/18/2018. We apoligize for any inconveniences.";

//add on any html here...
var htmlString = "<strong>**UPDATE " + currentDate.MMDDYYYY + "**</strong><p class='alert-info'>Due to some unforeseen circumstances, we will be closed until <strong> " + endDate + " </strong>.</p>";

setAlert(currentDate.MMDDYYYY, endDate , message, htmlString);

