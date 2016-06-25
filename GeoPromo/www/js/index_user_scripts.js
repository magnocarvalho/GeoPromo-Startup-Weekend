/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_perfil */
    $(document).on("click", "#btn_perfil", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_1"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
