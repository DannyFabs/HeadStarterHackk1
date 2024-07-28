
function updateResults(){
    const careerSolution = localStorage.getItem('careerSolution');
    if (careerSolution) {
        const data = JSON.parse(careerSolution);
        
        // Update the page content
        const resultsDiv = document.getElementById('summary');
        resultsDiv.innerText = data; // Or however you want to display the data
        
        // Optionally, you can clear the stored data
        localStorage.removeItem('careerSolution');
    } else {
        // Handle the case where there is no data (e.g., error message)
        document.getElementById('results').innerText = 'No results generated';
    }   
}

document.addEventListener('DOMContentLoaded', updateResults)