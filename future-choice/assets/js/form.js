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
        // head-starter-hackk1.vercel.app
        const response = await fetch('https://head-starter-hackk1.vercel.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: data,
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

    if (validateForm()) {
        // Create an object to store the results
        const user_data = {
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

        // Send data and navigate to the result page
        const msg_content = `Based on the following inputs by a new CS graduate, give top 2 CS jobs that would be a good fit for a NEW CS GRAD with 1 sentence justification: ` +
        `Web Development: Rating: ${user_data[1]}, ` +
        `Database Management: Rating: ${user_data[2]}, ` +
        `Data Structures and Algorithms: Rating: ${user_data[3]}, ` +
        `Systems Design: Rating: ${user_data[4]}, ` +
        `Software Development Practices: Rating: ${user_data[5]}, ` +
        `Networking and Security: Rating: ${user_data[6]}, ` +
        `Operating Systems: Rating: ${user_data[7]}, ` +
        `Mobile Development: Rating: ${user_data[8]}, ` +
        `Machine Learning and Data Science: Rating: ${user_data[9]}, ` +
        `Problem Solving: Rating: ${user_data[10]}, ` +
        `Communication: Rating: ${user_data[11]}, ` +
        `Creativity and Design: Rating: ${user_data[12]}, ` +
        `Leadership: Rating: ${user_data[13]}, ` +
        `Time Management: Rating: ${user_data[14]}, ` +
        `Analytical Thinking: Rating: ${user_data[15]}, ` +
        `Adaptability: Rating: ${user_data[16]}, ` +
        `How do you prefer to work? Answer: ${user_data[17]}, ` +
        `How do you prefer to learn new skills? Answer: ${user_data[18]}, ` +
        `What type of work environment do you prefer? Answer: ${user_data[19]}, ` +
        `How do you approach problem-solving? Answer: ${user_data[20]}, ` +
        `Are you interested in obtaining additional certifications or pursuing a graduate degree? ${user_data[21]}, ` +
        `What do you value most in a job? Answer: ${user_data[22]}`;

        const careerSoln =  await sendData(msg_content);
        localStorage.setItem('careerSolution', JSON.stringify(careerSoln));
        window.location.href = 'Result.html';
    }
});

