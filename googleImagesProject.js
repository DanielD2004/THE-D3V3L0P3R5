// pre-condition: user enters a topic on the list
// post-condition: an image of that topic is shown

function search(){
        // gets user input from the search bar
        var input = document.getElementById("searchBar");
        
        var img = document.getElementById("image");
        
        // sets color of topic back to black
        for (let i=0;i<=8;i++){
        let listArray = ["tiger", "elephant", "cat", "dog", "zebra", "lion", "monkey", "cheetah", "gorilla"]
        document.getElementById(listArray[i]).style.color= 'black';
        }
    
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

// pre-conditon: none
// post-condition: search bar is cleared
function empty(){
        document.getElementById("image").src="projectImages/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
}


        
     

