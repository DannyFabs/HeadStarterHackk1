const express = require('express');
const { HfInference } = require("@huggingface/inference");
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501/'); // Allow requests from your frontend
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); // Allow these methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow these headers
    next();
});

app.options('*', cors()); // This ensures that all OPTIONS requests are handled correctly

app.use(bodyParser.json());

const inference = new HfInference("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");

app.post('/api/chat', async (req, res) => {
    try {
        const messages = [{ role: "user", content: "Based on the following inputs by a new cs graduate give top 2 cs jobs that would be a good fit in 20 words or less for a NEW CS GRAD: Web Development:Rating:5 Database Management:Rating:5 Data Structures and Algorithms:Rating:5 Systems Design:Rating:5 Software Development Practices:Rating:5 Networking and Security::Rating:5 Operating Systems::Rating:5 Mobile Development::Rating:5 Machine Learning and Data Science::Rating:5 Problem Solving. Rating: 5 Communication: Rating:2 Creativity and design: Rating:3 Leadership: Rating:5 Time management: Rating:1 Analytical thinking: Rating:5 Adaptability: Rating:5 How do you prefer to work? Selected Answer: A. Mostly individually, with some collaboration How do you prefer to learn new skills?Answer: Formal education What type of work environment do you prefer? Selected Answer: A. Creative and innovative, with a focus on design How do you approach problem-solving? Selected Answer: A. By designing creative solutions and thinking outside the box Are you interested in obtaining additional certifications or pursuing a graduate degree? Selected Answer: A. Yes, in a specialized field What do you value most in a job? Selected Answer: A. Creativity and innovation" }];
        // const {user_data} = req.body
        // console.log(user_data)

        // msg_content = `Based on the following inputs by a new cs graduate give top 2 cs jobs that would be a good fit in 20 words or less:"+
        //                Web Development:Rating:${user_data[0]}
        //                Database Management:Rating:${user_data[1]} 
        //                Data Structures and Algorithms:Rating:${user_data[2]} 
        //                Systems Design:Rating:${user_data[3]} 
        //                Software Development Practices:Rating:${user_data[4]} 
        //                Networking and Security:Rating:${user_data[5]} 
        //                Operating Systems::Rating:${user_data[1]} 
        //                Mobile Development::Rating:${user_data[1]} 
        //                Machine Learning and Data Science:Rating:${user_data[1]} 
        //                Problem Solving:Rating:${user_data[1]} 
        //                Communication:Rating:${user_data[1]}
        //                Creativity and design:Rating:${user_data[1]}
        //                Leadership:Rating:${user_data[1]}
        //                Time management:Rating:${user_data[1]} 
        //                Analytical thinking:Rating:${user_data[1]} 
        //                Adaptability:Rating:${user_data[1]} 
        //                How do you prefer to work?Answer:${user_data[1]}
        //                How do you prefer to learn new skills?Answer:${user_data[1]}
        //                What type of work environment do you prefer?Answer:${user_data[1]}
        //                How do you approach problem-solving?Answer:${user_data[1]}
        //                Are you interested in obtaining additional certifications or pursuing a graduate degree?${user_data[1]}
        //                What do you value most in a job?Answer:${user_data[1]}`
        
        // console.log(msg_content)
        // const messages = [{ role: "user", content: msg_content}];
        const response = await inference.chatCompletionStream({
            model: "microsoft/Phi-3-mini-4k-instruct",
            messages,
            max_tokens: 500,
        });

        let result = '';
        for await (const chunk of response) {
            result += chunk.choices[0]?.delta?.content || "";
        }

        res.send(result);
    } catch (error) {
        res.status(500).send("Error processing request");
    }
});

module.exports = app