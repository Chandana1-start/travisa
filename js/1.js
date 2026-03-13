document.addEventListener("DOMContentLoaded", function(){

    let currentStep = 0;

    const steps = document.querySelectorAll(".step");
    const formSteps = document.querySelectorAll(".form-step");

    function updateSteps() {
        steps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", function(){

            if (currentStep < formSteps.length - 1) {
                formSteps[currentStep].classList.remove("active");
                currentStep++;
                formSteps[currentStep].classList.add("active");
                updateSteps();
            }
        });
    });

    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", function(){

            if (currentStep > 0) {
                formSteps[currentStep].classList.remove("active");
                currentStep--;
                formSteps[currentStep].classList.add("active");
                updateSteps();
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", function(){

    let currentStep = 0;

    const steps = document.querySelectorAll(".step");
    const formSteps = document.querySelectorAll(".form-step");

    function updateSteps() {
        steps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", function(){

            if (currentStep < formSteps.length - 1) {
                formSteps[currentStep].classList.remove("active");
                currentStep++;
                formSteps[currentStep].classList.add("active");
                updateSteps();
            }
        });
    });

    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", function(){

            if (currentStep > 0) {
                formSteps[currentStep].classList.remove("active");
                currentStep--;
                formSteps[currentStep].classList.add("active");
                updateSteps();
            }
        });
    });

});