function calculateMacros(){

    const calories =
    Number(document.getElementById("calories").value);

    const goal =
    document.getElementById("goal").value;

    if(calories<=0){

        alert("Please enter a valid calorie amount.");

        return;

    }

    let proteinPercent;
    let carbPercent;
    let fatPercent;

    if(goal==="cut"){

        proteinPercent=.40;
        carbPercent=.30;
        fatPercent=.30;

    }

    else if(goal==="bulk"){

        proteinPercent=.30;
        carbPercent=.50;
        fatPercent=.20;

    }

    else{

        proteinPercent=.30;
        carbPercent=.40;
        fatPercent=.30;

    }

    const protein =
    Math.round((calories*proteinPercent)/4);

    const carbs =
    Math.round((calories*carbPercent)/4);

    const fat =
    Math.round((calories*fatPercent)/9);

    document.getElementById("result-card").style.display="block";

    document.getElementById("proteinOutput").textContent=
    "Protein: "+protein+" g";

    document.getElementById("carbOutput").textContent=
    "Carbs: "+carbs+" g";

    document.getElementById("fatOutput").textContent=
    "Fat: "+fat+" g";

}
window.onload = function(){

    const savedCalories =
        localStorage.getItem("fitcalcCalories");

    if(savedCalories){

        document.getElementById("calories").value =
            savedCalories;

    }

}