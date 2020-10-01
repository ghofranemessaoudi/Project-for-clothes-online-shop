function each(coll, f){
  if (Array.isArray(coll)){
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}








var img1=$('<img id=i1 src="makeup/hb.jpg>"')
var img2 = $('<img id=i2 src="makeup/hb1.jpg">')
var img3 = $('<img id=i3 src="makeup/hb2.jpg">')
var img4 = $('<img id=i4 src="makeup/hb3.jpg">')
var img5 = $('<img id=i5 src="makeup/hb4.jpg">')
var img6 = $('<img id=i6 src="makeup/hb5.jpg">')
var img7 = $('<img id=i7 src="makeup/hb6.jpg">')
var img8 = $('<img id=i8 src="makeup/hb7.jpg">')
var img9 = $('<img id=i9 src="makeup/fhb.jpg">')
var img10 = $('<img id=i10 src="makeup/fhb1.jpg">')
var img11 = $('<img id=i11 src="makeup/fhb2.jpg">')
var img12 = $('<img id=i12 src="makeup/fhb6.jpg">')
var img13 = $('<img id=i13 src="makeup/fhb4.jpg">')
var img14 = $('<img id=i14 src="makeup/fhb5.jpg">')
var img15 = $('<img id=i15 src="makeup/fm.jpg">')
var img16 = $('<img id=i16 src="makeup/fm1.jpg">')
var img17 = $('<img id=i17 src="makeup/fm2.jpg">')
var img18 = $('<img id=i18 src="makeup/fm3.jpg">')
var img19 = $('<img id=i19 src="makeup/fkj.jpg">')
var img20 = $('<img id=i20 src="makeup/fkj1.jpg">')
var img21 = $('<img id=i21 src="makeup/fkj2.jpg">')
var img22 = $('<img id=i22 src="makeup/fkj3.jpg">')
var img23 = $('<img id=i23 src="makeup/phd.jpg">')
var img24 = $('<img id=i24 src="makeup/phd1.jpg">')
var img25 = $('<img id=i25 src="makeup/phd2.jpg">')
var img26 = $('<img id=i26 src="makeup/phd3.jpg">')
var img27 = $('<img id=i27 src="makeup/phd4.jpg">')
var img28 = $('<img id=i28 src="makeup/phd5.jpg">')
var img29 = $('<img id=i29 src="makeup/hhb.jpg">')
var img30 = $('<img id=i30 src="makeup/hhb1.jpg">')
var img31 = $('<img id=i31 src="makeup/hhb2.jpg">')
var img32 = $('<img id=i32 src="makeup/pkj.jpg">')
var img33 = $('<img id=i33 src="makeup/pkj1.jpg">')
var img34 = $('<img id=i34 src="makeup/pkj2.jpg">')
var img35 = $('<img id=i35 src="makeup/pkj3.jpg">')
var img36 = $('<img id=i36 src="makeup/pkj4.jpg">')
var img37 = $('<img id=i37 src="makeup/pkj5.jpg">')
var img38 = $('<img id=i38 src="makeup/pkj6.jpg">')
var img39 = $('<img id=i39 src="makeup/pkj7.jpg">')
var img40 = $('<img id=i40 src="makeup/pkj8.jpg">')
var img41 = $('<img id=i41 src="makeup/lkj3.jpg">')
var img42 = $('<img id=i42 src="makeup/lkj.jpg">')
var img43 = $('<img id=i43 src="makeup/lkj1.jpg">')
var img44 = $('<img id=i44 src="makeup/lkj2.jpg">')
var img45 = $('<img id=i45 src="makeup/lhb.jpg">')
var img46 = $('<img id=i46 src="makeup/lhb1.jpg">')
var img47 = $('<img id=i47 src="makeup/lipkj.jpg">')
var img48 = $('<img id=i48 src="makeup/lipkj1.jpg">')
var img49 = $('<img id=i49 src="makeup/lipkj2.jpg">')
var img50 = $('<img id=i50 src="makeup/lipkj3.jpg">')
var img51 = $('<img id=i51 src="makeup/lipkj4.jpg">')
var img52 = $('<img id=i52 src="makeup/macl.jpg">')
var img53 = $('<img id=i53 src="makeup/macl1.jpg">')
var img54 = $('<img id=i54 src="makeup/macl2.jpg">')
var img55 = $('<img id=i55 src="makeup/macl3.jpg">')
var img56 = $('<img id=i56 src="makeup/macl4.jpg">')
var img57 = $('<img id=i57 src="makeup/mascaramac1.jpg">')
var img58 = $('<img id=i58 src="makeup/mascaramac2.jpg">')
var img59 = $('<img id=i59 src="makeup/mascaramac3.jpg">')
var img60 = $('<img id=i60 src="makeup/mascaramac4.jpg">')
var img61 = $('<img id=i61 src="makeup/kjm.jpg">')
var img62 = $('<img id=i62 src="makeup/kjm1.jpg">')
var img63 = $('<img id=i63 src="makeup/kjm2.jpg">')




var lipHb= [img1,img2,img3,img4,img5,img6,img7,img8]
var foundationHb = [img9,img10,img11,img12,img13,img14]
var foundationMac = [img15,img16,img17,img18]
var foundationKj = [img19,img20,img21,img22]
var paletteHb = [img23,img24,img25,img26,img27,img28]
var highliterHB = [img29,img30,img31]
var paletteKj=[img32,img33,img34,img35,img36,img37,img38,img39,img40]
var lashesKj = [img41,img42,img43,img44]
var lashesHb=[img45,img46]
var lipKj=[img47,img48,img49,img50,img51]
var lipMac=[img52,img53,img54,img55,img56]
var mascaraMac = [img57,img58,img59,img60]
var mascaraKj= [img61,img62,img63]

var makeup=[lipHb,foundationKj,foundationMac,foundationHb,paletteKj,paletteHb,highliterHB,lashesHb,lashesKj,lipKj,lipMac,mascaraMac,mascaraKj]
var kylieJenner = [foundationKj,paletteKj,lashesKj,lipKj,mascaraKj]
var hudaBeauty = [lipHb,foundationHb,paletteHb,highliterHB,lashesHb,lashesHb]
var mac = [foundationMac,lipMac,mascaraMac]
var lashes = [lashesKj,lashesHb]
var lipstick = [lipHb,lipkj,lipMac]
var mascara=[mascaraMac,mascaraKj]
var foundation = [foundationMac,foundationHb,foundationKj]
var palette=[paletteHb,paletteKj,highliterHB]


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
else if (input==='palette'){
	$('.container').prepend(palette)
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





function shop (product){
	var obj = {}
	obj.value = product
	obj.price = price

return obj
}
var price= function(){

}

