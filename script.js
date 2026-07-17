function showCalorieCalculator() {

    document.getElementById("home-page").style.display = "none";

    document.getElementById("calorie-section").style.display = "block";

}

    function calculateCalories() {

    let age = Number(document.getElementById("age").value);
    let sex = document.getElementById("sex").value;
  let feet = Number(document.getElementById("feet").value);
let inches = Number(document.getElementById("inches").value);
let weight = Number(document.getElementById("weight").value);
    let activity = Number(document.getElementById("activity").value);
    let goal = document.getElementById("goal").value;


    let bmr;

let totalInches = (feet * 12) + inches;

let height = totalInches * 2.54;

let weightKg = weight / 2.205;

    if (sex === "male") {

        bmr = 10 * weightKg + 6.25 * height - 5 * age + 5;

    } else {

        bmr = 10 * weightKg + 6.25 * height - 5 * age - 161;

    }


    let calories = bmr * activity;


    if (goal === "cut") {

        calories -= 500;

    } 
    
    else if (goal === "bulk") {

        calories += 300;

    }


    document.getElementById("calorie-result").innerHTML =
        "Estimated daily calories: " + Math.round(calories) + " calories";

}

function goHome() {

    document.getElementById("home-page").style.display = "block";

    document.getElementById("calorie-section").style.display = "none";

    document.getElementById("protein-section").style.display = "none";

}
function showProteinCalculator() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("protein-section").style.display = "block";
}
function calculateProtein() {

    let weight = Number(document.getElementById("protein-weight").value);
    let goal = document.getElementById("protein-goal").value;

    let protein;

    if (goal === "cut") {
        protein = weight;
    } else if (goal === "bulk") {
        protein = weight * 0.9;
    } else {
        protein = weight * 0.8;
    }

    document.getElementById("protein-result").innerHTML =
        "Recommended Protein: " + Math.round(protein) + " g/day";

}