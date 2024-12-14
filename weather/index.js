// let url =
//   "https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=8d52904c2b9bef6d731f781db4dddd98&units=metric";

const search = document.querySelector("input");
const magni = document.querySelector(".magni");
const temp = document.querySelector(".sunny h1");
const city = document.querySelector(".sunny h2");
const humidity = document.querySelector(".humidity h3");
const windy = document.querySelector(".windy h3");
const div = document.querySelector(".invalid");

async function fetchweather(val) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=8d52904c2b9bef6d731f781db4dddd98&units=metric`
    );
    let data = await res.json();
    console.log(data);

    div.style.display = "none";
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    city.innerText = `${search.value}`;
    humidity.innerText = `${data.main.humidity}%`;
    windy.innerText = `${data.wind.speed} km/hr`;
    search.value = " ";
  } catch (err) {
    div.style.display = "block";
    search.value="";
    setTimeout(()=>{
      div.style.display = "none";
    },1000)
  }
}

magni.addEventListener("click", () => {
  let value = search.value;
  fetchweather(value);
});
