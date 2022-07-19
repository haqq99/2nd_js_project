alert("Welcome to my simple conversion calculator!");
var input=prompt("Enter A to convert Feets to Meters | Enter B to convert Pounds to Kilograms | Enter C to convert Milimeters to Inches");
if (input=="A" || input=="a"){
	var value=prompt("Let's Convert to Meters, enter some figures");
	alert(value * 0.3048);
}else if(input=="B" || input=="b"){
	var value=prompt("Let's Convert to Kilograms, enter some figures");
	alert(value * 0.4534);
}else if(input=="C" || input=="c"){
	var value=prompt("Let's Convert to Inches, enter some figures");
	alert(value * 0.3937);
}else{
	alert("Please follow instructions");
}
console.log("Thank you for using our service");