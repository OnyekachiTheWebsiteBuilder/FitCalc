function calculateProtein() {

    const weight = Number(document.getElementById("weight").value);
    const goal = document.getElementById("goal").value;

    if (weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    let multiplier;
    let message;

    if (goal === "cut") {

        multiplier = 1.0;
        message = "Higher protein helps preserve muscle while losing fat.";

    } else if (goal === "bulk") {

        multiplier = 0.9;
        message = "Protein supports muscle growth and recovery.";

    } else {

        multiplier = 0.8;
        message = "A balanced protein intake helps maintain your muscle.";

    }

    const protein = Math.round(weight * multiplier);

    document.getElementById("result-card").style.display = "block";

    document.getElementById("protein-result").textContent =
        protein + " g/day";

    document.getElementById("protein-message").textContent =
        message;

}