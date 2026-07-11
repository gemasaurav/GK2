setTimeout(function(){

document.getElementById("splashScreen").style.display="none";

document.getElementById("homeScreen").style.display="flex";

},5000);


document.getElementById("countryBtn").addEventListener("click",function(){

alert("Countries Section Coming Next");

});


document.getElementById("indiaBtn").addEventListener("click",function(){

alert("India Section Coming Next");

});
document.getElementById("countryBtn").addEventListener("click",function(){

document.getElementById("homeScreen").style.display="none";

document.getElementById("countriesPage").style.display="block";

document.getElementById("countryList").innerHTML =
"<h2 style='color:white'>TEST WORKING</h2>";

});

function loadCountries(){

let html="";

countries.forEach(function(country){

html += `
<div class="countryCard">

${country.flag}
<br>

<b>${country.name}</b>

<br>

Capital: ${country.capital}

</div>
`;

});

document.getElementById("countryList").innerHTML=html;

}
