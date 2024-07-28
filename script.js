
// async function callApi(){
//     console.log("Hello")

const { send } = require("process");

//     const  { HfInference } = await import("@huggingface/inference");


//     const inference = new HfInference("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");

//     for await (const chunk of inference.chatCompletionStream({
//         model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//         messages: [{ role: "user", content: "What is the capital of France?" }],
//         max_tokens: 500,
//     })) {
//         process.stdout.write(chunk.choices[0]?.delta?.content || "");
//         console.log(chunk.choices[0]?.delta?.content || "")
//     }


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
        // document.getElementById('responseContainer').innerText = result;
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

data_t ={0:"1", 1:"23",2:"2", 3:"3",3:"4"}
sendData(data_t)
// async function fetchchatResponse(){
//     const response = await fetch('http://localhost:3001/chat');
//     const text = await response.text();
//     console.log(text)
// }
// fetchchatResponse()




    // const paragraph = document.getElementById("text-input")
    // const text = paragraph.value

    // async function query(data) {
    //     const response = await fetch(
    //         "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    //         {
    //             headers: {
    //                 Authorization: "Bearer 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",
    //                 "Content-Type": "application/json",
    //             },
    //             method: "POST",
    //             body: JSON.stringify(data),
    //         }
    //     );
    //     const result = await response.json();
    //     return result;
    // }
    // query(text).then((response) => {
    //     console.log(response[0]);
    // });
// };



