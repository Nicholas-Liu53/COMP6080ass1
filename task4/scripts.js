let person_form = document.forms.person_form;

//* First Name
let fname = person_form.fname;
let fname_handler = (event) => {
    fname = event.target.value;
    console.log("New fname: " + fname);
}
fname.addEventListener('change', fname_handler);

//* Last Name
let lname = person_form.lname;
let lname_handler = (event) => {
    lname = event.target.value;
    console.log("New lname: " + lname);
}
lname.addEventListener('change', lname_handler);

//* DOB
let dob = person_form.dob;
let dob_handler = (event) => {
    dob = event.target.value;
    console.log("New dob: " + dob);
}
dob.addEventListener('change', dob_handler);

//* Favourite Animal
let fav_animal = person_form.fav_animal;
let fav_animal_handler = (event) => {
    fav_animal = event.target.value;
    console.log("New fav_animal: " + fav_animal);
}
fav_animal.addEventListener('input', fav_animal_handler);

//* Cities Lived In
// let adelaide_yes = person_form.adelaide;
// let adelaide_yes_handler = (event) => {
//     console.log("New adelaide_yes: " + adelaide_yes.checked);
// }
// adelaide_yes.addEventListener('click', adelaide_yes_handler);

const cities = document.getElementById("cities");
var children = cities.children;
let city_yes_handler = (event) => {
    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName.toLowerCase() == "input" && children[i].checked) {
            console.log("New " + children[i].id + ": " + children[i].checked);
        }
    }
}
for (var i = 0; i < children.length; i++) {
    if (children[i].tagName.toLowerCase() == "input") {
        children[i].addEventListener('click', city_yes_handler);
    }
}


//* Remove Button
let remove_button = person_form.remove_button;
let remove_button_handler = (event) => {
    fname = undefined;
    lname = undefined;
    dob = undefined;
    fav_animal = "Halloumi";
    adelaide_yes = !adelaide_yes;
}
// remove_button.onclick = remove_button_handler;