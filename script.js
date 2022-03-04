function akaname(event) {

    var maleName = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    var femaleName = ["Akosua", "Adwao", "Abenaa", "Akua ", "Yaa", "Afua", "Ama"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"];
    event.preventDefault();




    var day = parseInt(document.getElementById("day").value)
    var month = parseInt(document.getElementById("month").value)
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var rname = document.getElementById("aka-name");
