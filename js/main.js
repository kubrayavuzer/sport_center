// there are 2 inputs height and weight, and what we want is when user fulfill the inputs, the BMI will be calculated and displayed

let bmi = 0;

const height = document.getElementById("height");
const weight = document.getElementById("weight");

function calculateBMI() {
  bmi = weight.value / (height.value / 100) ** 2;

  document.getElementById("result").innerHTML = bmi.toFixed(2);

  // Add BMI category display and progress bar update
  const bmiPercentage = document.getElementById("bmi-percentage");
  const bmiProgress = document.getElementById("bmi-progress");

  // Calculate progress percentage (considering 40 as max BMI for progress bar)
  let progressPercentage = (bmi / 40) * 100;
  progressPercentage = Math.min(100, progressPercentage); // Cap at 100%

  bmiProgress.style.width = `${progressPercentage}%`;

  if (bmi < 18.5) {
    bmiPercentage.innerHTML = "Underweight";
    bmiPercentage.style.color = "#2196f3";
    bmiProgress.style.backgroundColor = "#2196f3";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiPercentage.innerHTML = "Normal Weight";
    bmiPercentage.style.color = "#43a047";
    bmiProgress.style.backgroundColor = "#43a047";
  } else if (bmi >= 25 && bmi < 30) {
    bmiPercentage.innerHTML = "Overweight";
    bmiPercentage.style.color = "#fb8c00";
    bmiProgress.style.backgroundColor = "#fb8c00";
  } else if (bmi >= 30) {
    bmiPercentage.innerHTML = "Obese";
    bmiPercentage.style.color = "#c62828";
    bmiProgress.style.backgroundColor = "#c62828";
  } else {
    bmiPercentage.innerHTML = "";
    bmiProgress.style.width = "0%";
  }
}

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


