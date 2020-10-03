function caller(id){
  
    console.log(id)

    var element=document.getElementById(id)
    var prev=element.previousElementSibling
    var str=prev.textContent
    var price=Number(str.slice(0,str.length-1))
        return addPrice(price);
      };
  
  
    var total=0;
  function addPrice(prices){
  total=total+prices;
  $ ('#price').html(total+'$')
  }

 


function Peak(name,brand,price,url){
  
  var shop={}

  shop.name=name;
  shop.brand=brand;
  shop.price=price;
  shop.url=url;
  return shop
}

var foundation1=Peak('foundation','Huda Beauty',' 150$','fhb.jpg')
var foundation2=Peak('foundation','Huda Beauty',' 150$','fhb1.jpg')
var foundation3=Peak('foundation','Huda Beauty',' 150$','fhb2.jpg')
var foundation4=Peak('foundation', 'Kylie Cosmetic', '  200$', 'fkj.jpg')
var foundation5=Peak('foundation', 'Kylie Cosmetic', '  200$', 'fkj1.jpg')
var foundation6=Peak('foundation', 'Kylie Cosmetic', '  200$', 'fkj2.jpg')
var foundation7=Peak('foundation', 'Mac', '  100$', 'fm.jpg')
var foundation8=Peak('foundation', 'Mac', '  100$', 'fm1.jpg')


var foundation=[foundation1,foundation2,foundation3,foundation4,foundation5,foundation6,foundation7]

 var found =''
  $('#foundation').click(function(){
      $('.caro').hide()
    $('#product').html('')
    for(var i =0; i<foundation.length; i++){
      found =  '<div class ="col-md-6"><img  class="img" src="'+foundation[i].url+'"><p class="text">'+ "Category :"+foundation[i].name + '<br>'+" Brand :" +foundation[i].brand+'<br>'+ "price:" +foundation[i].price+'</p>'+"<span>"+foundation[i].price+'</span>'+'<button class="add-cart" id="Lashes'+i+'" onclick="caller(this.id)">Buy</button></div>'    
     $(found).appendTo($('#product'))
    }
})



