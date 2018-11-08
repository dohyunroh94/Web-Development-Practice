function calculateTip(){

	var total = document.getElementById("form1").elements[0].value;
	var numOfPeople = document.getElementById("form1").elements[1].value;
	var tipOptions = document.getElementsByName("tipPercentage");
	
	if (numOfPeople < 1 || total < 1) { 
	
		document.getElementById("bill").innerHTML = "Please type in the correct amount of people or correct total. ";
	
	} else {
	
		var selectedTip = 0;
		var length = tipOptions.length;
		
		for (var i = 0; i < length; i++){
		
			if (tipOptions[i].checked){
			
			selectedTip = parseFloat(tipOptions[i].value);
			
			}
		}
	
		var splitBill = (selectedTip * total) / numOfPeople; 
		var billFormated = splitBill.toFixed(2);
		
		document.getElementById("bill").innerHTML = "Your split bill per person is $" + billFormated;
	
	}

}