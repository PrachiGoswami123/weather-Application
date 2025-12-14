let searchbtn=document.querySelector("#search-btn");
let result=document.querySelector("#result");


const getWeatherData = async () => {
   try {
    let cityname=document.querySelector("#city-name").value.trim();

    if(!cityname)
    {
        result.innerHTML=`<p class="text-red-700 text-center mt-4 font-semibold">Please enter city name</p>`;
    }
   } catch (error) {
    console.log(error,"error in Fetch in in weather Details");
   }
};
searchbtn.addEventListener("click",getWeatherData);