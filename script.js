// API fetching
const change = () => {
  var place_name = document.getElementById("hello").value;
  // console.log(place_name.value);
  let a = fetch(`https://goweather.herokuapp.com/weather/${place_name}`);
  a.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  }).then((response2) => {
    console.log(response2);
    var myTemp = document.getElementById("temp");
    var myWind = document.getElementById("wind");
    var myDesc = document.getElementById("description");
    // var myFor = document.getElementById("forecast");
    myTemp.innerHTML = response2.temperature;
    myWind.innerHTML = response2.wind;
    myDesc.innerHTML = response2.description;
    myFor.innerHTML = response2.forecast;
    // document.getElementById("temp").innerHTML(response2.temperature);
  });
};
