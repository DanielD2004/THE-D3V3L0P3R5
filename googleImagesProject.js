function search(){
        var imgTag = document.getElementById("image");
        var search = document.getElementById("searchBar");
        var msg = document.getElementById("message");
        console.log(arr)
        for (let i = 0; i < arr.length; ++i){
                let topic = arr[i];

                if (search.value.toLowerCase() == topic.name){
                        imgTag.src = topic.link   
                        msg.innerHTML = "You searched up: " + topic.name;
                        return;
                }

                if (search.value.toLowerCase() != topic.name){
                        error();
                }
        }
}


function loadTopics(num){
        var arr = topics(num);
        console.log(arr);
        document.getElementById("submit").disabled = false;
        //Need to get value of arr into 'search' function
}

function empty(){
        document.getElementById("image").src="imagefolder/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
}

function error(){
        var imgTag = document.getElementById("image");
        imgTag.src="images/error.png"
        document.getElementById("message").innerHTML="This topic is not on the list. Try again!";

}
      


