
function Peak(name,brand,price,url){
  
  var shop={}

  shop.name=name;
  shop.brand=brand;
  shop.price=price;
  shop.url=url;
  return shop
}

var lip1=Peak('lip-stick', ' Huda beauty '  ,'  30$', 'hb.jpg')
var lip2=Peak('lip-stick', ' Huda beauty',' 30$','hb1.jpg' )
var lip3=Peak('lip-stick', 'Kylie Cosmetic' , ' 40$', 'lipkj.jpg' )
var lip4=Peak('lip-stick','kylie Cosmetic', ' 40$','lipkj3.jpg' )
var lip5=Peak('lip-stick','Mac', ' 30$', 'macl.jpg')
var lip6=Peak('lip-stick','Mac',' 30$', 'macl3.jpg')

var foundation1=Peak('foundation','Huda Beauty',' 150$','fhb.jpg')
var foundation2=Peak('foundation','Huda Beauty',' 150$','fhb1.jpg')
var foundation3=Peak('foundation','Huda Beauty',' 150$','fhb2.jpg')
var foundation4=Peak('foundation', 'Kylie Cosmetic', '  200$', 'fkj.jpg')
var foundation5=Peak('foundation', 'Kylie Cosmetic', '  200$', 'fkj1.jpg')
var foundation6=Peak('foundation', 'Kylie Cosmetic', '  200$', 'fkj2.jpg')
var foundation7=Peak('foundation', 'Mac', '  100$', 'fm.jpg')
var foundation8=Peak('foundation', 'Mac', '  100$', 'fm1.jpg')


var eyeShadow1=Peak('eye shadow','Huda Beauty',' 120$','phd.jpg')
var eyeShadow2=Peak('eye shadow','Huda Beauty',' 120$','phd1.jpg')
var eyeShadow3=Peak('eye shadow','Kylie Cosmetic',' 120$','pkj.jpg')
var eyeShadow4=Peak('eye shadow','Kylie Cosmetic',' 120$','pkj1.jpg')

var mascara1=Peak('mascara','Mac',' 70$','mascaramac1.jpg')
var mascara2=Peak('mascara','Mac',' 70$','mascaramac2.jpg')
var mascara3=Peak('mascara ','Kylie Cosmetic', ' 70$','kjm.jpg')
var mascara4=Peak('mascara ','Kylie Cosmetic', ' 70$','kjm1.jpg')

var lashes1=Peak('lashes','Kylie Cosmetic',' 50$','lkj.jpg')
var lashes2=Peak('lashes','Kylie Cosmetic',' 50$','lkj1.jpg')
var lashes3=Peak('lashes','Huda Beauty',' 50$','lhb.jpg')
var lashes4=Peak('lashes','Huda Beauty',' 50$','lhb1.jpg')

var lipstick= [lip1,lip2,lip3,lip4,lip5,lip6]
var foundation=[foundation1,foundation2,foundation3,foundation4,foundation5,foundation6,foundation7]
var eyeShadow=[eyeShadow1,eyeShadow2,eyeShadow3,eyeShadow4]
var mascara=[mascara1,mascara2,mascara3,mascara4]
var lashes = [lashes1,lashes2,lashes3,lashes4]



$('#home').click(function(){

	var i=0
	var array=["home1.jpg","home2.jpg","home3.jpg"]
	setInterval(function(){
		display(array,i++)
	},2000)

})
function display(array,i=0){
			i=i%3
			console.log(i)
			$('.caro').html('')
			$(`<img class="mySlides" src="${array[i]}">`).appendTo($('.caro'))
		}


  var lipp =''
  $('#lipstick').click(function(){
  	$('.caro').hide()

    $('#product').html('')
    for(var i =0; i<lipstick.length; i++){
      lipp =  '<div class ="col-md-6"><img  class="img" src="'+lipstick[i].url+'"><p class="text">'+ "Category :"+lipstick[i].name + '<br>' +" Brand :" +lipstick[i].brand+'<br>'+ "price:" +lipstick[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'      
     $(lipp).appendTo($('#product'))
    }
 
});




//  var found =''
//   $('#foundation').click(function(){
//   		$('.caro').hide()
//     $('#product').html('')
//     for(var i =0; i<foundation.length; i++){
//       found =  '<div class ="col-md-6"><img  class="img" src="'+foundation[i].url+'"><p class="text">'+ "Category :"+foundation[i].name + '<br>'+" Brand :" +foundation[i].brand+'<br>'+ "price:" +foundation[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'      
//      $(found).appendTo($('#product'))
//     }
   
// });

 var masc=''
  $('#mascara').click(function(){
  		$('.caro').hide()
    $('#product').html('')
    for(var i =0; i<mascara.length; i++){
      masc =  '<div class ="col-md-6"><img  class="img" src="'+mascara[i].url+'"><p class="text">'+ "Category :"+mascara[i].name+ '<br>' +" Brand :" +mascara[i].brand+'<br>'+ "price:" +mascara[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'      
     $(masc).appendTo($('#product'))
    }
   
});


 var eyesh=''
  $('#eyeshadow').click(function(){
  		$('.caro').hide()
    $('#product').html('')
    for(var i =0; i<eyeShadow.length; i++){
      eyesh =  '<div class ="col-md-6"><img  class="img" src="'+eyeShadow[i].url+'"><p class="text">'+ "Category :"+eyeShadow[i].name+ '<br>'+ " Brand :" +eyeShadow[i].brand+'<br>'+ "price:" +eyeShadow[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'       
     $(eyesh).appendTo($('#product'))
    }
   
});

 
//  var lash=''
//   $('#lashes').click(function(){
//   		$('.caro').hide()
//     $('#product').html('')
//     for(var i =0; i<lashes.length; i++){
//       lash =   '<div class ="col-md-6"><img  class="img" src="'+lashes[i].url+'"><p>'+ "Category :"+lashes[i].name+ '<br>' +" Brand :" +lashes[i].brand+'<br>'+ "price:" +lashes[i].price+'</p>'+'<a class="add-cart" href ="#" id="Lashes" >Buy</a></div>'   
//      $(lash).appendTo($('#product'))
//     }
   
// });






function Items(size,price,name,url){
  var items={}
  items.name=name;
  items.size=size;
  items.price=price;
  items.url=url;
  return items
}
  var wear1 = Items('S,M,L ' , ' $1050 ', ' Bottega Veneta ','img1.jpg')
  var wear2 = Items('S,M,L ' , ' $1300 ', ' Bottega Veneta','img2.jpg')
  var wear3 = Items('S,M,L ' , ' $1700 ', ' Bottega Veneta ','img3.jpg')
  var wear4 = Items('S,M,L ' , ' $1300 ', ' Maje ','img4.jpg')
  var wear5 = Items('S,M,L ' , ' $1000 ', ' Maje ','img5.jpg')
  var wear6 = Items('S,M,L ' , ' $1100 ', ' Maje','img6.jpg')
  var wear7 = Items('S,M,L ' , ' $1250 ', ' Aqua Azzurra ','img7.jpg')
  var wear8 = Items('S,M,L ' , ' $1040 ', ' Aqua Azzurra ','img8.jpg')
  var skirt1= Items('S,M,L ' , '$1000', 'Maje ','suit1.jpg')
  var skirt2= Items('S,M,L ' , '$700', 'Maje ','suit2.jpg')
  var skirt3= Items('S,M,L ' , '$950', 'Maje ','suit3.jpg')
  var skirt4= Items('S,M,L ' , '$1300', 'Prada ','suit4.jpg')
  var skirt5= Items('S,M,L ' , '$1100', 'Prada ','suit5.jpg')
  var skirt6= Items('S,M,L ' , '$1200', 'Prada ','suit6.jpg')
  var skirt7= Items('S,M,L ' , '$1030', 'Prada ','suit7.jpg')
  var skirt8= Items('S,M,L ' , '$1020', 'Bottega Veneta','suit8.jpg')
  var shoes1= Items('36,38,39' , '$1000', 'Bottega Veneta ','shoe1.jpg')
  var shoes2= Items('36,38,39' , '$1300', 'Jimmy choo','shoe2.jpg')
  var shoes3= Items('36,38,39' , '$1199', 'Bottega Veneta ','shoe3.jpg')
  var shoes4= Items('36,38,39' , '$1200', 'Bottega Veneta ','shoe4.jpg')
  var shoes5= Items('36,38,39' , '$1080', 'Jimmy choo ','shoe5.jpg')
  var shoes6= Items('36,38,39' , '$1200', 'Jimmy choo ','shoe6.jpg')
  var shoes7= Items('36,38,39' , '$1030', 'Jimmy choo ','shoe7.jpg')
function Bags(price,name,url){
  var bags={}
 bags.name=name;
 bags.price=price;
 bags.url=url;
  return bags
}
var bags1= Bags( '$1100', 'Louis Vuiton','bag1.jpg')
var bags2= Bags( '$1200', 'Louis Vuiton','bag2.jpg')
var bags3= Bags( '$1300', 'Bottega Veneta','bag3.jpg')
var bags4= Bags( '$1000', 'Bottega Veneta','bag4.jpg')
var bags5= Bags( '$1000', 'Bottega Veneta','bag5.jpg')
var bags6= Bags( '$1000', 'Bottega Veneta','bag6.jpg')
  var carry=[bags1,bags2,bags3,bags4,bags5,bags6]
  var wears = [wear1,wear2,wear3,wear4,wear5,wear6,wear7,wear8]
  var ski = [skirt1,skirt2,skirt3,skirt4,skirt5,skirt6,skirt7,skirt8]
  var show= [shoes1,shoes2,shoes3,shoes4,shoes5,shoes6,shoes7]
//   var dress =''
//   $('#dresses').click(function(){
//   	$('.caro').hide()
//     $('#product').html('')
//     for(var i =0; i<wears.length; i++){
//       dress =  '<div class="col-md-6"><img  class="img" src="'+wears[i].url+'"><p class="text">'+"Brand: "+wears[i].name+"<br>" +"Size :" +wears[i].size+'<br>'+ "Price:" +wears[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
     
//      $(dress).appendTo($('#product'))
   
//     }
// });
var  skirtT=''
  $('#skirt-top-set').click(function(){
  	$('.caro').hide()
    $('#product').html('')
    for(var i =0; i<ski.length; i++){
    skirtT= '<div class="col-md-6">'+'<img  class="img" src="'+ski[i].url+'"><p class="text">'+"Brand: "+ski[i].name+"<br>" +"Size :" +ski[i].size+'<br>'+ "Price:" +ski[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
      $(skirtT).appendTo($('#product'))
    }
});
var bagG =''
  $('#bag').click(function(){
  	$('.caro').hide()
    $('#product').html('')
    for(var i =0; i<carry.length; i++){
      bagG ='<div class="col-md-6">'+'<img  class="img" src="'+carry[i].url+'"><p class="text">'+"Brand: "+carry[i].name+"<br>"+ "Price:" +carry[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
      $(bagG).appendTo($('#product'))
    }
});
  var walk =''
  $('#shows').click(function(){
  	$('.caro').hide()
  $('#product').html('')
    for(var i =0; i<show.length; i++){
     walk ='<div class="col-md-6">'+'<img  class="img" src="'+show[i].url+'"><p class="lovet">'+"Brand: "+show[i].name+"<br>"+"Size :" +show[i].size+'<br>'+ "Price:" +show[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
     $(walk).appendTo($('#product'))
    }
});



  $('#search1').click(function(){
   var input = document.getElementById('search').value
    var dress =''
    console.log(input)
    if(input==="dress"|| input==="dresses"){
      $('#product').html('')
      for(var i =0; i<wears.length; i++){
        dress =  '<div class="col-md-6"><img  class="img" src="'+wears[i].url+'"><p class="text">'+"Brand: "+wears[i].name+"<br>" +"Size :" +wears[i].size+'<br>'+ "Price:" +wears[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
        $(dress).appendTo($('#product'))
   }
    }
});
      $('#search1').click(function(){
      var input = document.getElementById('search').value
      var walk =''
              if((input=== ("shoes".toUpperCase())||input===("shoes".toLowerCase()))){
        $('#product').html('')
            for(var i =0; i<show.length; i++){
         walk ='<div class="col-md-6">'+'<img  class="img" src="'+show[i].url+'"><p class="lovet">'+"Brand: "+show[i].name+"<br>"+"Size :" +show[i].size+'<br>'+ "Price:" +show[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
        $(walk).appendTo($('#product'))
      }
            }
  });
          $('#search1').click(function(){
          var input = document.getElementById('search').value
          var bagG =''
          if((input===("bag".toUpperCase())||input=== ("bags".toUpperCase())||input===("bag".toLowerCase())||(input===("bags".toLowerCase())))){
          $('#product').html('')
          for(var i =0; i<carry.length; i++){
          bagG ='<div class="col-md-6">'+'<img  class="img" src="'+carry[i].url+'"><p class="text">'+"Brand: "+carry[i].name+"<br>"+ "Price:" +carry[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
          $(bagG).appendTo($('#product'))
        }
      }
    });
              $('#search1').click(function(){
                var input = document.getElementById('search').value
                 var  skirtT=''
                if((input==='skirt')||(input==='top')||(input==='top-skirt')||(input==='top skirt')||(input==="skirt top")||(input==="")){
              $('#product').html('')
              for(var i =0; i<ski.length; i++){
              skirtT= '<div class="col-md-6">'+'<img  class="img" src="'+ski[i].url+'"><p class="text">'+"Brand: "+ski[i].name+"<br>" +"Size :" +ski[i].size+'<br>'+ "Price:" +ski[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
              $(skirtT).appendTo($('#product'))
                }
          }

              });

        $('#search1').click(function(){
                var input = document.getElementById('search').value
                 var  lipp=''
                if(input==='lipstick'||input==='Lipstick'){
              $('#product').html('')
              for(var i =0; i<lipstick.length; i++){
              lipp =   '<div class ="col-md-6"><img  class="img" src="'+lipstick[i].url+'"><p>'+ "Category :"+lipstick[i].name+ '<br>' +" Brand :" +lipstick[i].brand+'<br>'+ "price:" +lipstick[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
              $(lipp).appendTo($('#product'))
                }
          }

              });

        $('#search1').click(function(){
                var input = document.getElementById('search').value
                 var  lash=''
                if(input==='lashes'||input==='Lashes'){
              $('#product').html('')
              for(var i =0; i<lashes.length; i++){
              lash =   '<div class ="col-md-6"><img  class="img" src="'+lashes[i].url+'"><p>'+ "Category :"+lashes[i].name+ '<br>' +" Brand :" +lashes[i].brand+'<br>'+ "price:" +lashes[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
              $(lash).appendTo($('#product'))
                }
          }

              });

         $('#search1').click(function(){
                var input = document.getElementById('search').value
                 var  eyesh=''
                if(input==='eyeshadow'||input==='eye shadow'){
              $('#product').html('')
              for(var i =0; i<eyeShadow.length; i++){
               eyesh =   '<div class ="col-md-6"><img  class="img" src="'+eyeShadow[i].url+'"><p>'+ "Category :"+eyeShadow[i].name+ '<br>' +" Brand :" +eyeShadow[i].brand+'<br>'+ "price:" +eyeShadow[i].price+'</p>'+'<a class="add-cart" href ="#" >Buy</a></div>'   
              $(eyesh).appendTo($('#product'))
                }
          }

              });
         




