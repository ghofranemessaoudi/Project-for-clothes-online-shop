
var img1=$('<img class="img" src="makeup/hb.jpg>"')
var img2 = $('<img class="img" src="makeup/hb1.jpg">')
var img3 = $('<img class="img" src="makeup/hb2.jpg">')
var img4 = $('<img class="img" src="makeup/hb3.jpg">')

var img9 = $('<img class="img" src="makeup/fhb.jpg">')
var img10 = $('<img class="img"  src="makeup/fhb1.jpg">')
var img11 = $('<img class="img"  src="makeup/fhb2.jpg">')
var img12 = $('<img class="img"  src="makeup/fhb6.jpg">')

var img15 = $('<img class="img"  src="makeup/fm.jpg">')
var img16 = $('<img class="img"  src="makeup/fm1.jpg">')
var img17 = $('<img class="img"  src="makeup/fm2.jpg">')
var img18 = $('<img class="img"  src="makeup/fm3.jpg">')

var img19 = $('<img class="img"  src="makeup/fkj.jpg">')
var img20 = $('<img class="img"  src="makeup/fkj1.jpg">')
var img21 = $('<img class="img"  src="makeup/fkj2.jpg">')
var img22 = $('<img class="img"  src="makeup/fkj3.jpg">')
var img23 = $('<img class="img"  src="makeup/phd.jpg">')
var img24 = $('<img class="img"  src="makeup/phd1.jpg">')


var img32 = $('<img class="img"  src="makeup/pkj.jpg">')
var img33 = $('<img class="img"  src="makeup/pkj1.jpg">')
var img34 = $('<img class="img"  src="makeup/pkj2.jpg">')
var img35 = $('<img class="img"  src="makeup/pkj3.jpg">')
var img36 = $('<img class="img"  src="makeup/pkj4.jpg">')

var img41 = $('<img class="img"  src="makeup/lkj3.jpg">')
var img42 = $('<img class="img"  src="makeup/lkj.jpg">')

var img45 = $('<img class="img"  src="makeup/lhb.jpg">')
var img46 = $('<img class="img"  src="makeup/lhb1.jpg">')
var img47 = $('<img class="img"  src="makeup/lipkj.jpg">')
var img48 = $('<img class="img"  src="makeup/lipkj1.jpg">')
var img49 = $('<img class="img"  src="makeup/lipkj2.jpg">')

var img52 = $('<img class="img"  src="makeup/macl.jpg">')
var img53 = $('<img class="img"  src="makeup/macl1.jpg">')
var img54 = $('<img class="img"  src="makeup/macl2.jpg">')


var img57 = $('<img class="img"  src="makeup/mascaramac1.jpg">')
var img58 = $('<img class="img"  src="makeup/mascaramac2.jpg">')
var img59 = $('<img class="img"  src="makeup/mascaramac3.jpg">')

var img61 = $('<img class="img"  src="makeup/kjm.jpg">')
var img62 = $('<img class="img"  src="makeup/kjm1.jpg">')
var img63 = $('<img class="img"  src="makeup/kjm2.jpg">')




var lipHb= [img1,img2,img3,img4]
var foundationHb = [img9,img10,img11,img12]
var foundationMac = [img15,img16,img17,img18]
var foundationKj = [img19,img20,img21,img22]
var paletteHb = [img23,img24]

var paletteKj=[img32,img33,img34,img35,img36]
var lashesKj = [img41,img42]
var lashesHb=[img45,img46]
var lipKj=[img47,img48,img49]
var lipMac=[img52,img53,img54]
var mascaraMac = [img57,img58,img59]
var mascaraKj= [img61,img62,img63]


var kylieJenner = [foundationKj,paletteKj,lashesKj,lipKj,mascaraKj]
var hudaBeauty = [lipHb,foundationHb,paletteHb,lashesHb,lashesHb]
var mac = [foundationMac,lipMac,mascaraMac]




var lashes = [lashesKj,lashesHb]
var lipstick = [lipHb,lipKj,lipMac]
var mascara=[mascaraMac,mascaraKj]
var foundation = [foundationMac,foundationHb,foundationKj]
var eyeShadow=[paletteHb,paletteKj] 

$('#lipstick').click(function(){
	('.container').html('')
	for (var i = 0 ; i<lipstick.length;i++){
		('.container').append(lipstick)
	}
})

$('#mascara').click(function(){
	('.container').html('')
	for (var i = 0 ; i<mascara.length;i++){
		('.container').append(mascara)
	}
})
 
$('#lashes').click(function(){
	('.container').html('')
	for (var i = 0 ; i<lashes.length;i++){
		('.container').append(lashes)
	}
})
$('#palette').click(function(){
	('.container').html('')
	for (var i = 0 ; i<eyeShadow.length;i++){
		('.container').append(eyeShadow)
	}
})

$('#foundation').click(function(){
		('.container').html('')
	for (var i = 0 ; i<foundation.length;i++){
		('.container').append(foundation)
	}	
})






// function peakArt() {
// 	return{
// 		categorie:'',
// 		name:'',
// 		price:0
// 		img:[]
// 			}	
// }

// var addArt=function(){
// 	this.categorie=arguments[0];
// 	this.name=arguments[1];
// 	this.img=arguments[2]
// 	this.price=arguments[3];

// }

// var lashess=addArt['lashes','huda beauty',20'$',]








$('#button').click(function(){
$('.container').html('')
	var input = document.getElementById('search').value
if(input==="lipstick"){
$('.container').prepend(lipstick)
}
else if(input==="foundation"){
	$('.container').prepend(foundation)
}
else if (input==="lashes"){
	$('.container').prepend(lashes)
}
else if(input==='mascara'){
	$('.container').prepend(mascara)
}
else if (input==='eye shadow'){
	$('.container').prepend(eyeShadow)
}
else if (input==="kylieJenner" || input ==="kylie jenner"){
	$('.container').prepend(kylieJenner)
}
else if (input==="hudaBeauty"|| input==="huda beauty"){
	$('.container').prepend(hudaBeauty)
}
else if(input==='mac'||input==='Mac'){
	$('.container').prepend(mac)
}else{
	return "YOUR SEARCH FOR " + " " +input + " " + " DID NOT YIELD ANY RESULTS."
}
})








