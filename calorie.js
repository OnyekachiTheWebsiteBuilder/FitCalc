function calculateCalories() { const error = document.getElementById("error-message");

error.style.display = "none";
error.textContent = "";

    const age = Number(document.getElementById("age").value);
    const sex = document.getElementById("sex").value;
    const feet = Number(document.getElementById("feet").value);
    const inches = Number(document.getElementById("inches").value);
    const weightLb = Number(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;
   

    // Validation
    if(age < 2 || age > 120){
      error.textContent = "Please enter an age between 2 and 120.";
error.style.display = "block";
return;
    }

    if(feet < 3 || feet > 8){
        error.textContent = "Height (feet) must be between 3 and 8.";
error.style.display = "block";
return;
    }

    if(inches < 0 || inches > 11){
       error.textContent = "Height (inches) must be between 0 and 11.";
error.style.display = "block";
return;
        
    }

    if(weightLb < 30 || weightLb > 700){
       error.textContent = "Weight must be between 30 and 700 lb.";
error.style.display = "block";
return;
    
    }

    const weightKg = weightLb * 0.45359237;
    const heightM = ((feet * 12) + inches) * 0.0254;
    // Teen calculator coming soon
if(age < 18){

    document.getElementById("result-card").style.display = "block";

    document.getElementById("calorie-result").textContent =
        "Coming Soon";

    document.getElementById("goal-result").innerHTML =
        "<strong>FitCalc Teen Calculator</strong><br>Coming Soon 🚀<br><br>Version 2 will include a dedicated calorie calculator for teens with age-specific formulas for better accuracy.";

    return;

}

    let PA;

    if(age < 19){

        if(sex === "male"){

            switch(activity){

                case "inactive":
                    PA = 1.00;
                    break;

                case "low":
                    PA = 1.13;
                    break;

                case "active":
                    PA = 1.26;
                    break;

                case "very":
                    PA = 1.42;
                    break;

            }

        }else{

            switch(activity){

                case "inactive":
                    PA = 1.00;
                    break;

                case "low":
                    PA = 1.16;
                    break;

                case "active":
                    PA = 1.31;
                    break;

                case "very":
                    PA = 1.56;
                    break;

            }

        }

    }else{

        if(sex === "male"){

            switch(activity){

                case "inactive":
                    PA = 1.00;
                    break;

                case "low":
                    PA = 1.11;
                    break;

                case "active":
                    PA = 1.25;
                    break;

                case "very":
                    PA = 1.48;
                    break;

            }

        }else{

            switch(activity){

                case "inactive":
                    PA = 1.00;
                    break;

                case "low":
                    PA = 1.12;
                    break;

                case "active":
                    PA = 1.27;
                    break;

                case "very":
                    PA = 1.45;
                    break;

            }

        }

    }

    let calories;

    if(age < 19){

        if(sex === "male"){

            calories =
                88.5 -
                (61.9 * age) +
                PA * ((26.7 * weightKg) + (903 * heightM)) +
                25;

        }else{

            calories =
                135.3 -
                (30.8 * age) +
                PA * ((10 * weightKg) + (934 * heightM)) +
                25;

        }

}else{

    let bmr;

    if(sex === "male"){

        bmr =
            (10 * weightKg) +
            (6.25 * (heightM * 100)) -
            (5 * age) +
            5;

    }else{

        bmr =
            (10 * weightKg) +
            (6.25 * (heightM * 100)) -
            (5 * age) -
            161;

    }

    let multiplier;

    switch(activity){

        case "inactive":
            multiplier = 1.2;
            break;

        case "low":
            multiplier = 1.375;
            break;

        case "active":
            multiplier = 1.55;
            break;

        case "very":
            multiplier = 1.725;
            break;

    }

    calories = bmr * multiplier;

}

    const maintain = Math.round(calories);

    let target;

    if(goal === "cut"){

        target = maintain - 500;

    }else if(goal === "bulk"){

        target = maintain + 300;

    }else{

        target = maintain;

    }

    document.getElementById("result-card").style.display = "block";

    document.getElementById("calorie-result").textContent =
        target.toLocaleString() + " kcal/day";

    document.getElementById("goal-result").textContent =
        "Maintenance: " + maintain.toLocaleString() + " kcal/day";

    localStorage.setItem("fitcalcCalories", target);

}