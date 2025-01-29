import { getAdmin } from "./admins.js";
import { getEmployerByEmail } from "./employers.js";
import { getUserByEmail } from "./users.js";



export async function checkForExistingEmail(email) {
    const data = await Promise.allSettled([getUserByEmail(email),getEmployerByEmail(email),getAdmin(email)]);
    
    if(data[0] || data[1] || data[2]){
        return true;
    }
    return false;
}