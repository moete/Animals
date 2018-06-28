function head() {   
   var header_height = document.getElementById('tet').offsetHeight;
            window.addEventListener("scroll", function(){ 
               var scroll_pos = window.pageYOffset ; 

               if (scroll_pos >= header_height){
                   document.getElementById("head").style.background = " rgba(46,0,101,0.8)";
               } else {
                   document.getElementById("head").style.background = " rgba(46,0,101,0)";
               }
                
            }, false);
			
}
			
      
        	function _(x) {
        		return document.getElementById(x);

        	}

       

        		function disp() {
			
			if (_('open').style.opacity == 1) {


				_('open').style.opacity = 0;
				_('open').style.display ="none";
				
			}else{
				_('open').style.opacity = 1;
				_('open').style.display ="block";
				
			}
			
		}