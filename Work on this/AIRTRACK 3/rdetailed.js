		// Initialize Firebase
var config = {
	apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
	authDomain: "sih1-c04cf.firebaseapp.com",
	databaseURL: "https://sih1-c04cf.firebaseio.com",
	storageBucket: "sih1-c04cf.appspot.com",
	messagingSenderId: "657409475726"
};
firebase.initializeApp(config);
var FullURL = window.location.href;
var param = FullURL.split('=');

var db = firebase.database();
var fref = db.ref("Restaurants").orderByKey().equalTo(param[1]);
fref.on('value',gotData,errData);
function gotData(data) {
	var food = data.val();
	var keys = Object.keys(food);
	var k = keys[0];
	var imgurl=food[k].Logo;
document
	.getElementById("name")
	.innerHTML=k;
document
	.getElementById("but")
	.innerHTML=food[k].Coupon;
document
	.getElementById("but1")
	.innerHTML=food[k].Offers;
document
	.getElementById("details")
	.innerHTML=food[k].Description;
document.getElementById("logo")
						.innerHTML='<img class="icon" style="margin:0px; text-align:center; position:relative; top:20px; right:5px; border:dotted; border-color:#01ffff;" src="'+imgurl+'" width="200" height="200">'}

		function errData(err){
			console.log("Error!");
			console.log(err);
		}
