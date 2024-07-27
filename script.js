const callApi = () =>{
    console.log("Hello")

    const paragraph = document.getElementById("text-input")
    const text = paragraph.value

    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                headers: {
                    Authorization: "Bearer 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",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    query(text).then((response) => {
        console.log(response[0]);
    });
}



