//Author Harry Tom on 23.10.2020
//App.js - Client side scripts

///Variables
var maths; //Maths Link
var physics; //Physics Link
var biology; //Biology Link
var chemistry; //Chemistry Link
var social; //Social Link
var english; //English link
var hindi; //Hindi Link
var malayalam; //Malayalam Link
var computer; //Computer iInk
var pt; //Pt link

var d = new Date();
var dayNow = d.getDay();

var now = getMinutesNow(); // Get current time (minute)

var start_first = getMinutes('08:50');//Second period time
var end_first = getMinutes('09:45');

var start_second = getMinutes('10:20');//Second period time
var end_second = getMinutes('11:15');

var start_third = getMinutes('11:30');//Third period time
var end_third = getMinutes('12:30');

var start_last = getMinutes('13:20');//Last period time
var end_last = getMinutes('14:15');


///Check

function getMinutes(str) {
    var time = str.split(':');
    return time[0] * 60 + time[1] * 1;
}

function getMinutesNow() {
    var timeNow = new Date();
    return timeNow.getHours() * 60 + timeNow.getMinutes();
}


function _Redirect(){
    if (dayNow == 1) {//If Mon

        if (getPeriod() == 1) {
            _openLink('hindi');
        }
        else if (getPeriod() == 2) {
            _openLink('pt');
        }
        else if (getPeriod() == 3) {
            _openLink('biology');
        }
        else if (getPeriod() == 4) {
            _openLink('maths');
        }
    }
    else if (dayNow == 2) { //If Tue

        if (getPeriod() == 1) {
            _openLink('hindi');
        }
        else if (getPeriod() == 2) {
            _openLink('social');
        }
        else if (getPeriod() == 3) {
            _openLink('english');
        }
        else if (getPeriod() == 4) {
            _openLink('physics');
        }
    }
    else if (dayNow == 3) { //If Wed

        if (getPeriod() == 1) {
            _openLink('malayalam');
        }
        else if (getPeriod() == 2) {
            _openLink('english');
        }
        else if (getPeriod() == 3) {
            _openLink('social');
        }
        else if (getPeriod() == 4) {
            _openLink('maths');
        }
    
    }
    else if (dayNow == 4) { //If Thu

        if (getPeriod() == 1) {
            _openLink('malayalam');
        }
        else if (getPeriod() == 2) {
            _openLink('maths');
        }
        else if (getPeriod() == 3) {
            _openLink('social');
        }
        else if (getPeriod() == 4) {
            _openLink('english');
        }
    
    }
    else if (dayNow == 5) { //If Fri

        if (getPeriod() == 1) {
            _openLink('chemistry');
        }
        else if (getPeriod() == 2) {
            _openLink('computer');
        }
        else if (getPeriod() == 3) {
            _openLink('maths');
        }
        else if (getPeriod() == 4) {
            _openLink('hindi');
        }
    }
    else { //If Holiday
       window.location.replace('holiday.html');
    }    
}

// Some unknown copy pasted code lol
if (start_first > end_first) end_first += getMinutes('24:00');
if (start_second > end_second) end_second += getMinutes('24:00');
if (start_third > end_third) end_third += getMinutes('24:00');
if (start_last > end_last) end_last += getMinutes('24:00');


// Get the period in int (1 or 2 or 3 or 4 or 0)
function getPeriod() {

    if ((now > start_first) && (now < end_first)) {
        //alert('first');
        return 1;
    }
    else {
        if ((now > start_second) && (now < end_second)) {
            //alert('second');
            return 2;
        }
        else {
            if ((now > start_third) && (now < end_third)) {
                //alert('third');
                return 3;
            }
            else {
                if ((now > start_last) && (now < end_last)) {
                    //alert('last');
                    return 4;
                }
                else {
                    window.location.replace('break.html');
                    return 0;
                }
            }
        }
    }
}



//Open sub link function
function _openLink(sub) {
    if (sub == 'hindi') {
        window.location.replace(hindi);
    }
    else if (sub == 'physics') {
        window.location.replace(physics);   
    }
    else if (sub == 'chemistry') {
        window.location.replace(chemistry);
    }
    else if (sub == 'biology') {
        window.location.replace(biology);
    }
    else if (sub == 'social') {
        window.location.replace(social);
    }
    else if (sub == 'english') {
        window.location.replace(english);
    }
    else if (sub == 'maths') {
        window.location.replace(maths);
    }
    else if (sub == 'malayalam') {
        window.location.replace(malayalam);
    }
    else if (sub == 'computer') {
        window.location.replace(computer);
    }
    else if (sub == 'pt') {
        window.location.replace(pt);
    }
}





