$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'))+650;
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function

   $.get('http://www.legislaturajujuy.gov.ar/rest/institucion.php/diputados',function(data) {
      html = '';
      for(i in data.rows){
        html += '<div>'+data.rows[i].nombre+'</div>';
     }
      console.log(html);
  });
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");