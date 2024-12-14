async function fetchweather(city) {
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=8d52904c2b9bef6d731f781db4dddd98&units=metric`)
    let data= await res.json()
    console.log(data)
}