// pre-condition: user enters a topic on the list
// post-condition: an image of that topic is shown

function search(){
        var animalList = ["tiger", "elephant", "cat", "dog", "zebra", "lion", "monkey", "cheetah", "gorilla"]
        clear(animalList)
        //gets user input from the searchbar
        var input = document.getElementById("searchBar");
        var img = document.getElementById("image");
        var link = document.getElementById("imgLink")
        
        input.innerHTML = "";  
        
        for (let j = 0; j < animalList.length; j++){
                if (input.value.toLowerCase() == animalList[j]){
                        img.src = "projectImages/" + animalList[j] + ".png"
                        document.getElementById("message").innerHTML="You searched up: " + animalList[j];
                        link.href="https://www.google.com/search?q=" + animalList[j] + "&tbm=isch&ved=2ahUKEwiajZ_A_tH7AhXgsXIEHSk1Au8Q2-cCegQIABAA&oq=elephant&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzoICAAQgAQQsQM6BQgAEIAEUI4LWNMRYNsUaABwAHgAgAFriAG-BJIBAzguMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=tD6FY5rjBuDjytMPqeqI-A4&bih=787&biw=1440&client=firefox-b-d";
                        document.getElementById(animalList[j]).style.color = 'red';
                        document.getElementById("linkMessage").style.visibility = "visible";
                        return;
                }
                else{
                        img.src="projectImages/error.png";

                        document.getElementById("message").innerHTML="This topic is not on the list. Try again!";   
                }
                
        }    
}

function empty(){
        document.getElementById("image").src="projectImages/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
        var animalList = ["tiger", "elephant", "cat", "dog", "zebra", "lion", "monkey", "cheetah", "gorilla"]
        clear(animalList)
}

function zoomIn() {
        document.getElementById("image").style.width="1000px"
        document.getElementById("image").style.height="1000px"
      }

function zoomOut() {
        document.getElementById("image").style.width="500px"
        document.getElementById("image").style.height="500px"
      }
       
function clear(arr){ 
        // sets color of topics back to black
        for (var i=0;i<=8;i++){
                document.getElementById(arr[i]).style.color= 'black';
                }

        //hide message with google images link
        document.getElementById("linkMessage").style.visibility = "hidden";
}


        
     

