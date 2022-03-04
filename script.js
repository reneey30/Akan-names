function akannames(event){

var CC, DD, MM, YY, d, dayvalue;
var weekDays=["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
event.preventDefault();

    var day= parseInt(document.getElementById)("day").value;
    var month= parseInt(document.getElementById)("month").value;
    var year= parseInt(document.getElementById)("year").value;
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var name=document.getElementById("akan-name");

    if (day == null || day == "", month == null || month == "", year == null || year == "") {
        alert("Please Fill All Required Field");
        return false;
    }

    if (day <= 0 || day > 31) {
        alert("enter valid date");
        return false;
    } else if (month <= 0 || month > 12) {
        alert("enter valid month");
        return false;  
}









   