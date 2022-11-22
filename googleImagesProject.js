function search(){
        document.getElementById("image").src="projectImages/tiger.png";
        document.getElementById("searchBar").innerHTML="";    
        
        

}

function empty(){
        document.getElementById("image").src="projectImages/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
}

function error(){
        document.getElementById("error").src="projectImages/error.png";

        document.getElementById("message").innerHTML="This topic is not on the list. Try again!";

}
        
     

