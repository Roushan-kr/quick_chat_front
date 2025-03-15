'use server'

import { emailSchema } from "@/validation/email";

export const suscribeNewsletter = (formData: FormData)=>{
   const email = formData.get("email");
   const pEmail = emailSchema.parse(email);
   if (pEmail) {
    console.log("Subscribed!");
    return;
   } console.log("SomeThing went Worng with "+pEmail); 
};