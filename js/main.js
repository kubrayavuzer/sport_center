let bmi = 0;
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const resultElement = document.getElementById("result");
const indicator = document.getElementById("progress");
function calculateBMI() {
  const heightValue = parseFloat(height.value);
  const weightValue = parseFloat(weight.value);
  // Doğrulama
  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
    resultElement.innerHTML = "Invalid input!";
    resultElement.style.color = "red";
    indicator.style.left = "0%";
    return;
  }
  // BMI Hesaplama
  const bmi = (weightValue / (heightValue / 100) ** 2).toFixed(2);
  resultElement.innerHTML = `${bmi}`;
  resultElement.style.color = "black";
  // Progress Position
  let indicatorPosition = "0%";
  if (bmi < 18.5) {
    indicatorPosition = "5%";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    indicatorPosition = "15%";
  } else if (bmi >= 25 && bmi < 29.9) {
    indicatorPosition = "30%";
  } else if (bmi >= 30 && bmi < 34.9) {
    indicatorPosition = "45%";
  } else if (bmi < 40) {
    indicatorPosition = "65%";
  }
  
  // İlerleme Gösterimi
  indicator.style.left = indicatorPosition;
}
// Event Listeners
height.addEventListener("input", calculateBMI);
weight.addEventListener("input", calculateBMI);



const featuresImg = document.querySelector("#featuresImg");
const featuresH2 = document.querySelector("#featuresH2");
const featuresP = document.querySelector("#featuresP");

const featuresBtns = document.querySelector("#features-buttons");
const featuresBtnYoga = document.querySelector("#yoga");
const featuresBtnGroup = document.querySelector("#group");
const featuresBtnSolo = document.querySelector("#solo");
const featuresBtnStretching = document.querySelector("#stretching");


function changeToYoga(){
  featuresImg.src =  "./images/yoga.jpg";
  featuresH2.textContent = "Yoga";
}

function changeToGroup(){
  featuresImg.src =  "./images/group.webp";
  featuresH2.textContent = "Group";
}

function changeToSolo(){
  featuresImg.src =  "./images/solo.jpg";
  featuresH2.textContent = "Solo";
}

function changeToStretching(){
  featuresImg.src =  "./images/stret.webp";
  featuresH2.textContent = "Stretching";
}


featuresBtns.addEventListener("click", function (event){
  const id = event.target.id;
  switch(id){
    case "yoga":
      changeToYoga();
      break;
    case "group":
      changeToGroup();
      break;
    case "solo":
      changeToSolo();
       break;
    case "stretching":
      changeToStretching();
      break;
  }
})



const header = document.querySelector(".fixed-top")
window.addEventListener("scroll", scrollFunction)

function scrollFunction (){
  if(window.scrollY > 10){
    header.style.backgroundColor = "#3B5998"
  }else{
    header.style.backgroundColor = "transparent"
  }
}










