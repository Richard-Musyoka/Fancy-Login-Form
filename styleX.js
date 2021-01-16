//create a function that will be called when the user either hovers or clicks the button
function showModal(){
	var modalHolder = document.getElementById("modal-holder");
	modalHolder.style.display = "block";

	//closes the modal when the user clicks anywhere outside the modal dialog
	window.onclick = function(e){
		if (e.target == modalHolder) {
			modalHolder.style.display = "none";
		}
	}
	//closes the modal when the user clicks the "X" button
	document.getElementById('close-btn').addEventListener("click", (event)=>{
		modalHolder.style.display = "none";
	});
}

//set event listeners for the button to be clicked or hovered:(use either)
/*1. onClick event listener*/
document.getElementById("openModal").addEventListener("click", (event)=>{
	event.preventDefault();
	showModal();
});
/*2. hover event listener*/
document.getElementById("openModal").addEventListener("mouseover", (event)=>{
	event.preventDefault();
	showModal();
});
// you can comment either 1 or 2 to chck both functionality
//NB: USE CLICK EVENT LISTENER (RECOMMENDED). HOVER EFFECT DOESNT GUARANTEE TO WORK ON MOBILE DEVICES, ONLY IN DESKTOP