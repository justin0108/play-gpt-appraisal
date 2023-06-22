const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "your-api-key",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
	const prompt = `
I will be giving you a set of rating criteria for the job role of "Software Architecture".
You will then give me a rating telling me if it is Level 0, Level 1, Level 2, Level 3, Level 4 or Level 5 base on my given input.

The rating criterias are as follows:
Level 1 criteria:
- Understand various non-functional requirements and related architecture considerations
- Design simple software architecture
- Implement software architecture designs with guided supervision

Level 2 criteria:
- Identify various non-functional requirements and related architecture considerations
- Develop software architecture designs for a single product
- Implement software architecture designs independently

Level 3 criteria:
- Define non-functional requirements which are relevant to specific products
- Analyse the architecture trade-offs and choices, and articulate technical decision to the rest of the team to help them understand

Level 4 criteria:
- Anticipate and prepare for the next evolution of software architecture trends
- Drive a product all the way from creation of engineering concepts to the final launch of it as well as post-launch monitoring and analysis
- Develop detailed requirement documents and identify and translate market requirements into product’s goals

Level 5 criteria:
- Establish and evangelise software architecture practices and standards across private and public organisations
- Refine strategic proposals and make improvements/recommendations down the line
- Manage execution of all software architecture workstreams and activities for the purpose of meeting the product and business’s goals

Level 0 criteria:
- Did not meet any of the criteria stated in Level 1, Level 2 and Level 3

Please give me the rating for the following input:
- play basketball at national level
- win world championship for formula one racing
- record holder for eating most durian
    `;

	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: prompt,
		max_tokens: 2048,
		temperature: 0.2,
	});

	console.log(response.data.choices[0].text)	
};

runPrompt();

// input:
// - able to articulate tradeoff between different solution
// - have hands on experience with different messaging protocol such as RabbitMQ and Kafka
// output:
// Level 3

// input:
// - able to discuss software architecture trade off with team members
// - occasionally need help from team lead with solutioning 
// - come up with architecture design for Project Green Movement
// output:
// Level 2

// input:
// - implement solution given by team lead
// - understand the importance of software architecture but have not done any solutioning at all
// - understand the software architecture trade off being discussed
// output:
// Level 1

// input:
// - play basketball at national level
// - win world championship for formula one racing
// - record holder for eating most durian
// output:
// Level 0