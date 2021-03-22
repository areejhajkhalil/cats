var favouritcat = prompt("what is your favorite type of cat?");

var getfavouritcat = function (userAnswer) {


while ( favouritcat !== 'russian' && favouritcat !== 'shirazi' ) { favouritcat = prompt('please only write russian/shirazi');}

var numberOfpictures=prompt('how many pictures do you want?');

var pictures ='';
var result = '';



if(favouritcat=='russian'){pictures = '<img src="pictures/russian.jfif"/>';}
else if(favouritcat=='shirazi'){pictures = '<img src="pictures/shirazi.jfif"/>';}
else{alert('choose between russian or shirazi');}

for(var i=0;i<numberOfpictures;i++){result+=pictures;}
return result
}
document.write(getfavouritcat());



var age =prompt("whats your age?");
function getAge(userAge){ 
console.log(age);

if (userAge >= 18 && userAge <= 40){
    alert('welcome to the website');
   }else if(userAge < 18 || userAge > 40){
    alert('sorry your not allowed');
   }else {
    alert('please input a number');
    }
 }
getAge(age);

