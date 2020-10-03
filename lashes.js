


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




var lashes1=Peak('lashes','Kylie Cosmetic',' 50$','lkj.jpg')
var lashes2=Peak('lashes','Kylie Cosmetic',' 100$','lkj1.jpg')
var lashes3=Peak('lashes','Huda Beauty',' 60$','lhb.jpg')
var lashes4=Peak('lashes','Huda Beauty',' 180$','lhb1.jpg')


var lashes = [lashes1,lashes2,lashes3,lashes4]




 
 var lash=''
  $('#lashes').click(function(){
  		$('.caro').hide()
    $('#product').html('')
    for(var i =0; i<lashes.length; i++){
      lash =   '<div class ="col-md-6"><img  class="img" src="'+lashes[i].url+'"><p>'+ "Category :"+lashes[i].name+ '<br>' +" Brand :" +lashes[i].brand+'<br>'+ "price:" +'</p>'+"<span>"+lashes[i].price+'</span>'+'<button class="add-cart" id="Lashes'+i+'" onclick="caller(this.id)">Buy</button></div>'   
     $(lash).appendTo($('#product'))
    }
   
});
  





      
         








