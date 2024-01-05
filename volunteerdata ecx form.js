
    function showhide_click(){
      debugger;
      var navbar = document.getElementsByClassName("left");
      if( navbar[0].style.display== "none") {

        navbar[0].style.display="block";
    }
    else{
      navbar[0].style.display="none";
    }
    }
    
    function Text()
    {
        
        
        if (document.getElementById("chkother").checked)
        {
          document.getElementById('txtother').style.display="inline-block";

        }
         else{
          document.getElementById('txtother').style.display="none";

         } 
    }   
    $(document).ready(function(){
      var opacity=0;
      $(".fa-bars").on('click', function(){
        $('#navbar').toggleClass('show');
        opacity=$('#navbar').css("opacity")
        if (opacity=="1" ){
          $(".right").css("width","100%")

        }
        else{
          $(".right").css("width","80%")
        }
      }
      );
  
   });