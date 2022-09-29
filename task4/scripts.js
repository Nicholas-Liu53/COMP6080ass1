let person_form = document.forms.person_form;

//* First Name
let fname = person_form.fname;
let fname_handler = (event) => {
    if (event.target.value.length < 3 || event.target.value.length > 50) {
        fname = undefined;
    }
    fname = event.target.value;
    console.log("New fname: " + fname);
}
fname.addEventListener('change', fname_handler);
fname = undefined;

//* Last Name
let lname = person_form.lname;
let lname_handler = (event) => {
    lname = event.target.value;
    console.log("New lname: " + lname);
}
lname.addEventListener('change', lname_handler);
lname = undefined;

//* DOB
let validate_date = (date_str) => {
    var date_regex = "^[0-9]{2}/[0-9]{2}/[0-9]{4}$";
    let isValid = date_str.match(date_regex);
    return isValid;
}
let get_age = (date_str) => {
    let today = new Date();
    // console.log(today);
    let date_parts = date_str.split('/');
    let birth_date = new Date(date_parts[2] + "/" + date_parts[1] + "/" + date_parts[0]);
    // console.log(birth_date);
    let age = today.getFullYear() - birth_date.getFullYear() - 1;
    if (today.getMonth() > birth_date.getMonth()) age++;
    else if (today.getMonth() == birth_date.getMonth() && today.getDate() >= birth_date.getDate()) age++;
    return age;
}
let dob = person_form.dob;
var age = undefined;
let dob_handler = (event) => {
    if (validate_date(event.target.value)) {
        dob = event.target.value;
        console.log("New dob: " + dob);
        age = get_age(event.target.value);
        console.log("New age: " + age);
    } else {
        dob = age = undefined;
        console.log("New dob is not in right format");
    }
}
dob.addEventListener('change', dob_handler);

//* Favourite Animal
let fav_animal = person_form.fav_animal;
let fav_animal_handler = (event) => {
    fav_animal = event.target.value;
    console.log("New fav_animal: " + fav_animal);
}
fav_animal.addEventListener('input', fav_animal_handler);
fav_animal = "halloumi";

//* Cities Lived In
// let adelaide_yes = person_form.adelaide;
// let adelaide_yes_handler = (event) => {
//     console.log("New adelaide_yes: " + adelaide_yes.checked);
// }
// adelaide_yes.addEventListener('click', adelaide_yes_handler);

const cities = document.getElementById("cities");
var children = cities.children;
let cities_string = "";
let city_yes_handler = (event) => {
    cities_string = "";
    let first_city = true;
    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName.toLowerCase() == "input" && children[i].checked) {
            if (first_city) {
                cities_string += children[i].id;
                first_city = false;
            } else {
                cities_string += (", " +  children[i].id);
            }
            console.log("New " + children[i].id + ": " + children[i].checked);
        }
    }
    console.log("cities_string: " + cities_string);
}
for (var i = 0; i < children.length; i++) {
    if (children[i].tagName.toLowerCase() == "input") {
        children[i].addEventListener('click', city_yes_handler);
    }
}


//* Remove Button
let remove_button = document.getElementById("remove-button");
let remove_button_handler = (event) => {
    person_form.reset();
    let output_box = document.getElementById("output-box");
    output_box.value = "";
}
// console.log(remove_button);
remove_button.onclick = remove_button_handler;

//* Output box
let form_variable = person_form;
let form_variable_handler = (event) => {
    var out;
    if (fname == undefined) {
        out = "Do not enter an invalid firstname";
    } else if (lname == undefined) {
        out = "Do not enter an invalid lastname";
    } else if (age == undefined) {
        out = "Do not enter an invalid date of birth";
    } else {
        out = "Hello " + fname + " " + lname + ", you are " + age + " years old, your favourite cheese is " + fav_animal + " and you've lived in ";
        out = cities_string != "" ? out + cities_string + "." : out + "no cities.";
    }
    console.log(out);
    let output_box = document.getElementById("output-box");
    // console.log(output_box);
    output_box.value = out;
}
form_variable.addEventListener("change", form_variable_handler);