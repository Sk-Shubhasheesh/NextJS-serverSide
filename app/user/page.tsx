import axios from "axios"

async function fetchData(){
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    // 5 sec late for chcking loading
    await new Promise(function (resolve:any) {
        setTimeout(function () {
            resolve(); // This ensures the promise resolves after the console.log
        }, 5000);
    });
    

    console.log("response is " + JSON.stringify(response.data));
    return response.data;

}

export default async function User() {
    const data = await fetchData(); // data fetching in NextJs
  return (
    <div>
   {data.name}
   {data.email}
  </div>
  )
}
