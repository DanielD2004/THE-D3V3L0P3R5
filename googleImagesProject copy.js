var url = "http://localhost:3000/post";

function response(data){
        var jsonData = JSON.parse(data);
        var url = jsonData.url;
        var img = document.getElementById("image");
        var input = document.getElementById("searchBar");

        if(url == ""){
                img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"; 
                document.getElementById("message").innerHTML="This topic is not on the list. Try again!";
                document.getElementById("theLink").href="";
        }
        else{
                img.src = url; 
                document.getElementById("message").innerHTML="You searched up: " + input.value;
                document.getElementById("theLink").href="https://www.google.com/search?q="+input.value+"&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi37Zjli977AhW_hHIEHaNdB0EQ_AUoAXoECAIQAw&biw=958&bih=834&dpr=2";
                var animalList = ["tiger", "elephant", "cat", "dog", "zebra", "lion", "monkey", "cheetah", "gorilla"];
                for (let j = 0; j < animalList.length; j++){
                        if (input.value.toLowerCase() == animalList[j]){
                                document.getElementById(animalList[j]).style.color = 'red';
                                return;
                        }
                }    
        }
}

function search(){
        var input = document.getElementById("searchBar");
        input.innerHTML = "";

        blackText();

        $.post(url+'?data='+input.value, response); 
}

function empty(){
        document.getElementById("image").src="projectImages/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
        document.getElementById("theLink").href="https://images.google.ca/";
        blackText();
}



function zoomIn() {
        document.getElementById("image").style.width="1000px"
        document.getElementById("image").style.height="1000px"
}

function zoomOut() {
        document.getElementById("image").style.width="500px"
        document.getElementById("image").style.height="500px"
}
        

function blackText(){
        // sets color of topic back to black
        for (var i=0;i<=8;i++){
                var listArray = ["tiger", "elephant", "cat", "dog", "zebra", "lion", "monkey", "cheetah", "gorilla"]
                document.getElementById(listArray[i]).style.color= 'black';
                }
}