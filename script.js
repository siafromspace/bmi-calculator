function calculate() {
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);

    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";

    const result = document.getElementById("result")
    const bmi = (weight / Math.pow(height/100, 2)).toFixed(1);
    result.textContent = bmi;

    const category = document.getElementById("category");
    if(bmi < 18.5) {
        result.style.color = "#ffc44d";
        category.textContent = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        result.style.color = "#0be881";
        category.textContent = "Normal Weight"
    }
    else if(bmi >= 25 && bmi <= 29.9) {
        result.style.color = "#ff884d";
        category.textContent = "Overweight"
    }
    else {
        result.style.color = "#ff5e57";
        category.textContent = "Obese"
    }
}