function testGS (){
	const url = "https://script.google.com/macros/s/AKfycbxXEa7db2KJEfMrKmqbZ2R_1S-mU6PKyFpCUVxAfJFH0cTT1dkTKD5GNBRO60iY5Nk7/exec"

fetch(url).
then(d => d.json())
.then(d => {

	d[0].status;
		document.getElementById("app").textContent = d[0].status;

});

}

document.getElementById("btn").addEventListener("click",testGS);

function addGS (){

const url = "https://script.google.com/macros/s/AKfycbxXEa7db2KJEfMrKmqbZ2R_1S-mU6PKyFpCUVxAfJFH0cTT1dkTKD5GNBRO60iY5Nk7/exec"

fetch(url, {
	method: "POST", // *GET, POST, PUT, DELETE, etc.
	mode: "no-cors", // no-cors, *cors, same-origin
	cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	credentials: "omit", // include, *same-origin, omit
	headers: {
  		"Content-Type": "application/json",
  		// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	redirect: "follow", // manual, *follow, error
	// referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	body: JSON.stringify({name:"Olivia"}), // body data type must match "Content-Type" header
});

document.getElementById("btn2").addEventListener("click",addGS);
