// Function to handle progress bar updates
function handleProgressBar(stepsListId, progressBarId) {
    const steps = document.querySelectorAll(stepsListId + ' li');
    const progressBar = document.getElementById(progressBarId);
    let currentStep = 0;

    function updateProgress() {
        if (currentStep < steps.length) {
            steps[currentStep].style.color = '#48bb78';  // Highlight current step
            currentStep++;
            const progressPercentage = (currentStep / steps.length) * 100;
            progressBar.style.width = progressPercentage + '%';  // Update progress bar width
        }
    }

    return updateProgress;
}

// Toggle visibility for Recipe 1 (Chocolate Cake)
document.getElementById('toggle-ingredients-1').addEventListener('click', function() {
    document.getElementById('ingredients-list-1').classList.toggle('hidden');
    this.textContent = document.getElementById('ingredients-list-1').classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
});

document.getElementById('toggle-steps-1').addEventListener('click', function() {
    document.getElementById('steps-list-1').classList.toggle('hidden');
    this.textContent = document.getElementById('steps-list-1').classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
});

// Start progress for Recipe 1 (Chocolate Cake)
const progressUpdater1 = handleProgressBar('#steps-list-1', 'progress-bar-1');
document.getElementById('start-cooking-1').addEventListener('click', progressUpdater1);

// Toggle visibility for Recipe 2 (Vanilla Cupcakes)
document.getElementById('toggle-ingredients-2').addEventListener('click', function() {
    document.getElementById('ingredients-list-2').classList.toggle('hidden');
    this.textContent = document.getElementById('ingredients-list-2').classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
});

document.getElementById('toggle-steps-2').addEventListener('click', function() {
    document.getElementById('steps-list-2').classList.toggle('hidden');
    this.textContent = document.getElementById('steps-list-2').classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
});

// Start progress for Recipe 2 (Vanilla Cupcakes)
const progressUpdater2 = handleProgressBar('#steps-list-2', 'progress-bar-2');
document.getElementById('start-cooking-2').addEventListener('click', progressUpdater2);

// Toggle visibility for Recipe 3 (Strawberry Smoothie)
document.getElementById('toggle-ingredients-3').addEventListener('click', function() {
    document.getElementById('ingredients-list-3').classList.toggle('hidden');
    this.textContent = document.getElementById('ingredients-list-3').classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
});

document.getElementById('toggle-steps-3').addEventListener('click', function() {
    document.getElementById('steps-list-3').classList.toggle('hidden');
    this.textContent = document.getElementById('steps-list-3').classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
});

// Start progress for Recipe 3 (Strawberry Smoothie)
const progressUpdater3 = handleProgressBar('#steps-list-3', 'progress-bar-3');
document.getElementById('start-cooking-3').addEventListener('click', progressUpdater3);
