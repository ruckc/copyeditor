import {createCritique} from "$lib/apis/chatgpt.server";


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const text = data.get('text');
        return await createCritique(text);
    },
}