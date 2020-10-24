///Variables
var hash = window.location.hash.substr(1); //Substing 1

if(hash !== ''){
    _getDataAsync(true);

} else{
    _getDataAsync(false);
}

//Get data async

function _getDataAsync(redirect) {

    firebase.database().ref('quick-link/subject-link').on('value', function (snapshot) {
        hindi = snapshot.val().hindi;
        malayalam = snapshot.val().malayalam;
        english = snapshot.val().english;
        physics = snapshot.val().physics;
        chemistry = snapshot.val().chemistry;
        biology = snapshot.val().biology;
        maths = snapshot.val().maths;
        social = snapshot.val().social;
        computer = snapshot.val().computer;
        pt = snapshot.val().pt;

        if(redirect == true){
            _openLink(hash);
        }
        else{
            _Redirect();
        }
    });

}  

function validate(){
    var inputLink = document.getElementById('link-input').value;

    if (inputLink.includes('meet.google.com')){
        saveAsync(inputLink);
    }
    else{
        alert('It looks like the link you entered is not a Google Meet link.')
    }
}

//Update Link
function saveAsync(link){
    var e = document.getElementById("subject-select");
    var subject = e.options[e.selectedIndex].text.toLowerCase();
    var f;

    if (subject == 'hindi') {
        firebase.database().ref('quick-link/subject-link').update({
            hindi: link
        });
    }
    else if (subject == 'physics') {
        firebase.database().ref('quick-link/subject-link').update({
            physics: link
        });
    }
    else if (subject == 'chemistry') {
        firebase.database().ref('quick-link/subject-link').update({
            chemistry: link
        });
    }
    else if (subject == 'biology') {
        firebase.database().ref('quick-link/subject-link').update({
            biology: link
        });
    }
    else if (subject == 'social') {
        firebase.database().ref('quick-link/subject-link').update({
            social: link
        });
    }
    else if (subject == 'english') {
        firebase.database().ref('quick-link/subject-link').update({
            english: link
        });
    }
    else if (subject == 'maths') {
        firebase.database().ref('quick-link/subject-link').update({
            maths: link
        });
    }
    else if (subject == 'malayalam') {
        firebase.database().ref('quick-link/subject-link').update({
            malayalam: link
        });
    }
    else if (subject == 'computer') {
        firebase.database().ref('quick-link/subject-link').update({
            computer: link
        });
    }
    else if (subject == 'pt') {
        firebase.database().ref('quick-link/subject-link').update({
            pt: link
        });
    }

}
