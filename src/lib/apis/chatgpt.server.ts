import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function createCritique(text: string): Promise<string | undefined> {
    return openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {role: 'system', content: 'You are a copy editor, your task is to review text and provide praise and critique in order to assist the user improve the writing.'},
            {role: 'user', content: text},
        ],
        // prompt: 'The following is a text that I want you to analyze and provide feedback on.  Please provide praise and critiques of the following text: ' + text + '\n\nFeedback: ',
    }).then((response) => {
        console.log(response.data);
        return {
            response: response.data.choices[0].message.content,
            prompt: text,
        };
    });
}