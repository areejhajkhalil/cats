var favouritcat= prompt("what is your favorite type of cat?");

while (favouritcat!=='russian'&&favouritcat!=='shirazi'){favouritcat= prompt('please only write russian/shirazi');}

var numberOfpictures=prompt('how many pictures do you want?');

var pictures ='';
var result = '';



if(favouritcat=='russian'){pictures = '<img src="pictures/russian.jfif"/>';}
else if(favouritcat=='shirazi'){pictures = '<img src="pictures/shirazi.jfif"/>';}
else{alert('choose between russian or shirazi');}

for(var i=0;i<numberOfpictures;i++){result+=pictures;}

var amount =prompt("what is the amount that you can pay?");
if (amount >= 100) {alert('you can pay')}
else {alert('you caant buy')}
 
document.write(result);





