 
jQuery(document).ready(function() {
 
 
jQuery('.button').on('click',function(){
var min =1;
var max = 8;
// and the formula is:
var random = Math.floor(Math.random() * (max - min + 1)) + min;
var src="img/"+random+".jpg"
jQuery("#frame img").attr("src",src);
//alert(src);
 
});
 
});//