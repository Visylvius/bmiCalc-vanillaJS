var heightForm = document.getElementById('height');
var weightForm = document.getElementById('weight');
var calculateButton = document.getElementById('calculate');
var heightValue;
var weightValue;

function getHeight(event) {
	event.preventDefault();
    heightValue = document.getElementById('height-data').value;
    heightValue = Number(heightValue);
    alert(heightValue);
    heightForm.reset();
}

function getWeight(event) {
    event.preventDefault();
	weightValue = document.getElementById('weight-data').value;
    weightValue = Number(weightValue);
    alert(weightValue);
	weightForm.reset();
}
function calculateBMI() {
    alert('hello');
	var BMI = weightValue / (heightValue * heightValue) * 703;
    document.getElementById('bmiList').innerHTML += "<li>" + BMI + "</li>";

}
heightForm.addEventListener('submit', getHeight, false);
weightForm.addEventListener('submit', getWeight, false);
weightForm.addEventListener('submit', calculateBMI, false);
