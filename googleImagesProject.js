let arr;

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
        empty()
        for (let k = 1; k <= 6; ++k){
                var test = document.getElementById(k)
                test.style.backgroundColor = "white"
                test.style.color = "black"     
        }
        var selected = document.getElementById(num)
        selected.style.backgroundColor = "blue"
        selected.style.color = "white"
        arr = topics(num);
        // console.log(arr);
        document.getElementById("submit").disabled = false;
        // document.getElementById("listColumn").innerHTML = ""
        loadSubjects()
        //Need to get value of arr into 'search' function
}

function empty(){
        document.getElementById("image").src="images/google.png";
        document.getElementById("searchBar").value = "";
        document.getElementById("message").innerHTML="";
}

function error(){
        var imgTag = document.getElementById("image");
        imgTag.src="images/error.png"
        document.getElementById("message").innerHTML="This topic is not on the list. Try again!";
}

function loadSubjects(){
        var row = document.getElementById("subjectRow")
        row.innerHTML = ""
        for (let i = 0; i <= 8; ++i){
                row.innerHTML += i+1 + ": " + arr[i].name + " |"
                row.innerHTML += " "
        }
}


