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

fetch(url).
then(d => d.json())
.then(d => {

	d[0].status;
		document.getElementById("app").textContent = d[0].status;

});

}

document.getElementById("btn2").addEventListener("click",addGS);
