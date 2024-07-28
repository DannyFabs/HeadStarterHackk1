function getRadioValue(name) {
    const radios = document.getElementsByName(name);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null; // Return null if no radio button is checked
}

async function sendData(data){
    try {
        // const controller = new AbortController();
        // const timeoutId = setTimeout(() => controller.abort(), 100000); // 30 seconds timeout
        const response = await fetch('https://head-starter-hackk1.vercel.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            // signal: controller.signal,
        });

        // clearTimeout(timeoutId); // Clear the timeout if the request completes

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();
        console.log(result);
        return result
        // document.getElementById('responseContainer').innerText = result;
    } catch (error) {
        console.error('Error sending data:', error);
    }
}


function validateForm() {
    const requiredFields = [
        'web_development', 'database_management', 'data_structures_and_algorithms',
        'systems_design', 'software_development_practices', 'networking_and_security',
        'operating_sys', 'mobile_dev', 'problem_solving', 'critical_thinking',
        'communication', 'teamwork', 'leadership', 'creativity', 'adaptability',
        'attention_to_detail', 'work_environment', 'learning_style', 'work_style',
        'problem_solving_approach', 'certifications', 'job_value'
    ];

    for (const fieldName of requiredFields) {
        if (!getRadioValue(fieldName)) {
            alert('Filling all fields is required');
            return false;
        }
    }

    return true;
}


document.getElementById("submit").addEventListener("click", async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // if (validateForm()) {
        // Create an object to store the results
        // const formResults = {
        //     1: getRadioValue('web_development'),
        //     2: getRadioValue('database_management'),
        //     3: getRadioValue('data_structures_and_algorithms'),
        //     4: getRadioValue('systems_design'),
        //     5: getRadioValue('software_development_practices'),
        //     6: getRadioValue('networking_and_security'),
        //     7: getRadioValue('operating_sys'),
        //     8: getRadioValue('mobile_dev'),
        //     9: getRadioValue('problem_solving'),
        //     10: getRadioValue('critical_thinking'),
        //     11: getRadioValue('communication'),
        //     12: getRadioValue('teamwork'),
        //     13: getRadioValue('leadership'),
        //     14: getRadioValue('creativity'),
        //     15: getRadioValue('adaptability'),
        //     16: getRadioValue('attention_to_detail'),
        //     17: getRadioValue('work_environment'),
        //     18: getRadioValue('learning_style'),
        //     19: getRadioValue('work_style'),
        //     20: getRadioValue('problem_solving_approach'),
        //     21: getRadioValue('certifications'),
        //     22: getRadioValue('job_value')
        // };

        const formResults = {}
        // Log the results to the console (optional)
        console.log(formResults);

        // Send data and navigate to the result page
        const careerSoln =  await sendData(formResults);
        localStorage.setItem('careerSolution', JSON.stringify(careerSoln));
        window.location.href = 'Result.html';
    // }
});

