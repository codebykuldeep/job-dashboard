import { getToken } from "./utilsFunctions";

export async function fetchFromServer(url:string){
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: getToken(),
      },
    });
    const data = await response.json();
    return data;
}