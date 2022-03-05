// // let form = document.getElementById("akan-form");

// validDate = (date) => {
//   if(date.split("-").filter(el => el).length !== 3) {
//     alert("Invalid Date!");
//     return false
//   }
//   return true;
// }

// ensureGender= (gender)=>{
//   if (!gender || !["male","female"].includes(gender) ){
//     alert("please select a gender")
//     return false
//   }
//   return true;
// }
// // form.addEventListener("submit", function (e) {
// //   e.preventDefault();

//   //Get form values
//   let data = new FormData(form);

//   let form_data = Array.from(data.entries());

//   let date = form_data.slice(0,3).map(entry => entry[1]).join("-");
//   let gender = form_data.slice(-1[0][1])

//   }
//   if (validDate(date) && ensureGender(gender)) {
//     //validate form

//     let splitted_date = date.split("-"); // ["YYYY","MM","DD"]

//     let akan_names = {
//       male: {
//         sunday: "Kwasi",
//         monday: "Kwadwo",
//         tuesday: "Kwabena",
//         wednesday: "Kwaku",
//         thursday: "Yaw",
//         friday: "Kofi",
//         saturday: "Kwame",
//       },
//       female: {
//         sunday: "Akosua",
//         monday: "Adwoa",
//         tuesday: "Abenaa",
//         wednesday: "Akua",
//         thursday: "Yaa",
//         friday: "Afua",
//         saturday: "Ama",
//       },
//     };

//     let weekdays = [
//       "sunday",
//       "monday",
//       "tuesday",
//       "wednesday",
//       "thursday",
//       "friday",
//       "saturday",
//     ];

//     // ["2022","03","04"]
//     // Substitute splitted_date values in the formula to get the weekday
//     // (( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//     //where;
//     //
//     //  CC - is the century digits. For example 1989 has CC = 19
//     //
//     //  YY - is the Year digits (1989 has YY = 89)
//     //
//     //  MM -  is the Month
//     //
//     //  DD - is the Day of the month
//     //
//     //  mod - is the modulus function ( % )
//     // let CC = parseInt(splitted_date[0].slice(0,2))
//     // let YY = parseInt(splitted_date[0].slice(2))
//     // let MM = parseInt(splitted_date[1])
//     // let DD = parseInt(splitted_date[2])
//     //
//     // let day_of_the_week = (( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

//     // let valid_date = new Date(
//     //   splitted_date[0],
//     //   splitted_date[1],
//     //   splitted_date[2]
//     // );
//     let weekday_index = valid_date.getDay();
//     let weekday_name = weekdays[weekday_index];

//     // Use the weekday name to get akan name
//     let possible_names = akan_names[gender];
//     let akan_name = possible_names[weekday_name]; //Get the akan name from the list of possible names

//     let elem = document.getElementById("akan-name");
//     elem.innerHTML = akan_name;
//   } else { //form is not valid. Return
  
//     return false
  // }

var male= [
"Kwasi",
"Kwadwo",
 "Kwabena",
 "Kwaku",
 "Yaw",
"Kofi",
 "Kwame",
] 
var female= [
   "Akosua",
  "Adwoa",
  "Abenaa",
   "Akua",
   "Yaa",
 "Afua",
  "Ama",
]
function compute(){
  var day=parseInt(( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
  var DD=parseInt(document.getElementById("date").value);
  var MM=parseInt(document.getElementById("month").value);
  var fullYear=document.getElementById("year").value;
  var CC=parseInt(fullYear.subStr(0,2));
  var YY=parseInt(fullYear.subStr(2,4));
  var gender=document.querySelector("gender").checked;
  if(DD<=0 ||DD=="" ||DD>31){
    alert("invalid");
  }
  else if (MM=="" ||MM<=0 ||MM==2 &&DD>29){
    alert("invalid");
  }
else if (fullYear<=0 ||fullYear==""){
  alert("invalid");
}

}
