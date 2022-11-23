function search(){
        
        var input = document.getElementById("searchBar");
        var img = document.getElementById("image");
        
        input.innerHTML = "";  
        
        /*for(i=0; i<=a.length; i++){
                if(search.value.toLowerCase()==a[i]){
                        document.getElementById("image").src="projectImages/"+a[i]+".png";  
                        document.getElementById("message").innerHTML="You searched up: " + a[i];  
                }
        }
*/

        if(input.value.toLowerCase() == "tiger"){
                img.src="projectImages/tiger.png"; 
                document.getElementById("message").innerHTML="You searched up: Tiger";
        }
        
        
        else if(input.value.toLowerCase() == "elephant"){
                img.src="projectImages/elephant.png"; 
                document.getElementById("message").innerHTML="You searched up: Elephant"; 
        }
        
        else if(input.value.toLowerCase() == "cat"){
               img.src="projectImages/cat.png";  
                document.getElementById("message").innerHTML="You searched up: Cat";
        }
        
        else if(input.value.toLowerCase() == "dog"){
                img.src="projectImages/dog.png"; 
                document.getElementById("message").innerHTML="You searched up: Dog"; 
        }
        else if(input.value.toLowerCase() == "zebra"){
                img.src="projectImages/zebra.png";  
                document.getElementById("message").innerHTML="You searched up: Zebra";
        }
        else if(input.value.toLowerCase() == "lion"){
                img.src="projectImages/lion.png";
                document.getElementById("message").innerHTML="You searched up: Lion";  
        }
        else if(input.value.toLowerCase() == "monkey"){
                img.src="projectImages/monkey.png"; 
                document.getElementById("message").innerHTML="You searched up: Monkey"; 
        }
        else if(input.value.toLowerCase() == "cheetah"){
                img.src="projectImages/cheetah.png";  
                document.getElementById("message").innerHTML="You searched up: Cheetah";
        }
        
        else if(input.value.toLowerCase() == "gorilla"){
                img.src="projectImages/gorilla.png";
                document.getElementById("message").innerHTML="You searched up: Gorilla";  
        }
       


        else{
                img.src="projectImages/error.png";

                document.getElementById("message").innerHTML="This topic is not on the list. Try again!";   
        }
        
        
        
        

        

}

function empty(){
        document.getElementById("image").src="projectImages/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
}



function zoomIn() {
        document.getElementById("image").style.width="1000px"
        document.getElementById("image").style.height="1000px"
      }

function zoomOut() {
        document.getElementById("image").style.width="500px"
        document.getElementById("image").style.height="500px"
      }
        
     

