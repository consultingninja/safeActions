import type {Actions, RequestEvent,ActionFailure} from '@sveltejs/kit'


// can add RequestEvent to request {}:RequestEvent 
//then show addding Actions to actions:Actions to type action

//then add Promise to function type
export const actions = {
    act: async({request}): Promise<Response>=>{
        const data = await request.formData();
        console.log("Action!");

        if(data.value) return  new Response(JSON.stringify({ type: 'failure', status: 200, data: {}}))

        return new Response()
    },

}


interface myData {
    firstName:string,
    lastName:string
}