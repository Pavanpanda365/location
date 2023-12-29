let userLocationEl = document.querySelector(".user-location");
let myLocationBtnEl = document.querySelector(".myLocationBtn");

myLocationBtnEl.addEventListener("click", ()=>{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getLocation)
	}
	else
	{
		userLocationEl.innerText = "The geolocation is not supported in this browser"
	}
});

const getLocation = async (position) =>{

	let response = await fetch(
		`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&
		lon=${position.coords.longitude}&format=json`);
		let data = await response.json();
		console.log(data);
		userLocationEl.innerText = `${data.address.state_district},
									${data.address.state}, ${data.address.country}`;
}
