import type {Actions, RequestEvent,ActionFailure} from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';


// can add RequestEvent to request {}:RequestEvent 
//then show addding Actions to actions:Actions to type action

//then add Promise to function type
export const actions = {
    act: async({request}): Promise<any>=>{
        const data = await request.formData();

        const firstname = data.get('firstname');
        const lastname = data.get('lastname');
        const age = data.get('age')
        console.log("Action!",data);

        if(age === 'oldaf')return fail(400,{
            tooOld:true,
            firstname,
            lastname,
        }) 

        if(firstname === 'dave')return fail(400,{
            firstname,
            lastname,
            age
        })  

        return  { type: 'success', status: 200, data: {prop:data.firstname}}
    },

}


interface myData {
    firstName:string,
    lastName:string
}