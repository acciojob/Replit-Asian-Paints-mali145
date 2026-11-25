//your JS code here. If required.
let block_Id=document.getElementById("block_id")
let color_Id=document.getElementById("color_id")
let changeButton=document.getElementById("change_button")
let resetBtn=document.getElementById("reset")

let  blocks=document.querySelectorAll(".grid-item")


changeButton.addEventListener("click" ,(e)=>{
	//first make every block transparent
	blocks.forEach((block)=>{
		block.style.backgroundColor="traparent"
		
		
	})
	//get the entered value
	let id=block_Id.value
	let color=color_Id.value
	
	// find the paticular box
	let selectedBox=document.getElementById(id)
	// change its background
	if(selectedBlock   && id>=1 && id<=9  color.trim() !=""){
		selectedBox.style.backgroundColor=color
	}
	
	 

	
	
});
resetBtn.addEventListener("click",function() {
	   blocks.forEach((block)=>{
		block.style.backgroundColor="transparent"
	})
	block_Id="";
	color_Id="";
	
});

