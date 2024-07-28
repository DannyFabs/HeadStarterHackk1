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
        const response = await fetch('http://localhost:3001/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

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

document.getElementById("submit").addEventListener("click", function(event) {
    console.log("jolljds");
    event.preventDefault(); // Prevent the default form submission

    // Create an object to store the results
    const formResults = {
        1: getRadioValue('web_development'),
        2: getRadioValue('database_management'),
        3: getRadioValue('data_structures_and_algorithms'),
        4: getRadioValue('systems_design'),
        5: getRadioValue('software_development_practices'),
        6: getRadioValue('networking_and_security'),
        7: getRadioValue('operating_sys'),
        8: getRadioValue('mobile_dev'),
        9: getRadioValue('problem_solving'),
        10: getRadioValue('critical_thinking'),
        11: getRadioValue('communication'),
        12: getRadioValue('teamwork'),
        13: getRadioValue('leadership'),
        14: getRadioValue('creativity'),
        15: getRadioValue('adaptability'),
        16: getRadioValue('attention_to_detail'),
        17: getRadioValue('work_environment'),
        18: getRadioValue('learning_style'),
        19: getRadioValue('work_style'),
        20: getRadioValue('problem_solving_approach'),
        21: getRadioValue('certifications'),
        22: getRadioValue('job_value')
    };

    // Log the results to the console (optional)
    console.log(formResults);
    window.location.href = 'index.html';

    const careerSoln = sendData(formResults)

});

