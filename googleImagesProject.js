var arr = topics()

function search(){
        var imgTag = document.getElementById("image");
        var search = document.getElementById("searchBar");
        var msg = document.getElementById("message");
        
        for (let i = 0; i < arr.length; ++i){
                let topic = arr[i]

                if (search.value.toLowerCase() == topic.name){
                        imgTag.src = topic.link   
                        msg.innerHTML = "You searched up: " + topic.name;
                        return;
                }

                if (search.value.toLowerCase() != topic.name){
                        error()
                }
        }
}

function empty(){
        document.getElementById("image").src="imagefolder/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
}

function error(){
        var imgTag = document.getElementById("image");
        imgTag.src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png";

        document.getElementById("message").innerHTML="This topic is not on the list. Try again!";

}
        


