let searchbtn=document.querySelector("#search-btn");
let result=document.querySelector("#result");
let API_KEY="234287c670b3aba119b63172daae1458";


const getWeatherData = async () => {
   try {
    let cityname=document.querySelector("#city-name").value.trim();

    if(!cityname)
    {
        result.innerHTML=`<p class="text-red-700 text-center mt-4 font-semibold">Please enter city name</p>`;
        return;
    }
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`);

    // console.log(response);

    if(!response.ok)
    {
        result.innerHTML=`<p class="text-red-700 text-center mt-4 font-semibold">City Not Found</p>`;
        return;
    }
    
     let  data=await response.json();
     console.log(data);

     result.innerHTML=
     `<h1 class="text-xl font-bold mt-3 text-green-600 text-center"> ${data.name},${data.sys.country}
     </h1>
     <p  class="text-green-600 font-semibold text-center">Temparature: ${data.main.temp}</p>
     <p  class="text-green-600 font-semibold text-center">Wind: ${data.main.temp}</p>
     `;
     
   } catch (error) {
    console.log(error,"error in Fetch in in weather Details");
   }
};
searchbtn.addEventListener("click",getWeatherData);

// 234287c670b3aba119b63172daae1458
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}