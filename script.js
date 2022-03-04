function akannames(event) {
  var CC, DD, MM, YY, d, dayvalue;
  var weekDays = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  event.preventDefault();

  var day = parseInt(document.getElementById)("day").value;
  var month = parseInt(document.getElementById)("month").value;
  var year = parseInt(document.getElementById)("year").value;
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var name = document.getElementById("akan-name");

  if (
    (day == null || day == "",
    month == null || month == "",
    year == null || year == "")
  ) {
    alert("Please Fill All Required Field");
    return false;
  }
  if (day <= 0 || day > 31) {
    alert("enter valid date");
    return false;
  } else if (month <= 0 || month > 12) {
    alert("enter valid month");
    return false;
  } else 
  { return true;

  }

  var sliceY = year % 100;
  var sliceC = Math.floor(year / 100);
  var c = parseInt(sliceC);
  var y = parseInt(sliceY);
  var d = day;
  var m = month;

  var dayOfTheWeek = Math.round(
    (c / 4 - 2 * c - 1 + (5 * y) / 4 + (26 * (m + 1)) / 10 + d) % 7
  );

  if (male.checked == true) {
    for (var a = 0; a < maleName.length; a++) {
      if (a === dayOfTheWeek - 1) {
        rname.innerHTML = "Your Akan name is " + maleName[a];
      }
    }
  } else if (female.checked == true) {
    for (var a = 0; a < femaleName.length; a++) {
      if (a === dayOfTheWeek - 1) {
        rname.innerHTML = "Your Akan name is " + femaleName[a];
      }
    }
  }
}
