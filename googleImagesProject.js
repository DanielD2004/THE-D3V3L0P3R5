function search(){
        
        var input = document.getElementById("searchBar");
        var img = document.getElementById("image");
        
        input.innerHTML = "";  
        

        if(input.value.toLowerCase() == "tiger"){
                img.src="projectImages/tiger.png"; 
                document.getElementById("message").innerHTML="You searched up: Tiger";
                document.getElementById("link").href="https://www.google.com/search?q=tiger&tbm=isch&ved=2ahUKEwjd8Z6_1Mf7AhV4rnIEHSNEAdgQ2-cCegQIABAA&oq=tiger&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQ1C6BVi1C2C3EWgAcAB4AIABYYgBkAKSAQE0mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=etR_Y93MFPjcytMPo4iFwA0&bih=840&biw=1470";
                document.getElementById("tiger").style.color = 'red';
        }
        
        
        else if(input.value.toLowerCase() == "elephant"){
                img.src="projectImages/elephant.png"; 
                document.getElementById("message").innerHTML="You searched up: Elephant";
                document.getElementById("elephant").style.color = 'red'; 
                document.getElementById("link").href="https://www.google.com/search?q=elephant&tbm=isch&ved=2ahUKEwiTmJe41Mf7AhX6rXIEHd9VCqoQ2-cCegQIABAA&oq=elephant&gs_lcp=CgNpbWcQARgAMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDMgUIABCABDIECAAQQzoICAAQgAQQsQNQ3wRYxBxgrR9oAHAAeACAAWqIAcIDkgEDNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=a9R_Y9O2IPrbytMP36up0Ao&bih=840&biw=1470";
                
        }
        
        else if(input.value.toLowerCase() == "cat"){
               img.src="projectImages/cat.png";  
                document.getElementById("message").innerHTML="You searched up: Cat";
                document.getElementById("cat").style.color = 'red';
                document.getElementById("link").href="https://www.google.com/search?q=cat&tbm=isch&ved=2ahUKEwi42qCJ0Mf7AhWWrnIEHWpzCMAQ2-cCegQIABAA&oq=cat&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzoICAAQgAQQsQNQhgdYqQlgzwtoAHAAeACAAVeIAYgCkgEBNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=189_Y_iSF5bdytMP6uahgAw&bih=840&biw=1470"; 
        }
        
        else if(input.value.toLowerCase() == "dog"){
                img.src="projectImages/dog.png"; 
                document.getElementById("message").innerHTML="You searched up: Dog"; 
                document.getElementById("dog").style.color = 'red'; 
                document.getElementById("link").href="https://www.google.com/search?q=dog&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLydSI0Mf7AhXwkYkEHfXCAAUQ_AUoAXoECAEQAw&biw=1470&bih=840&dpr=2";
        }
        else if(input.value.toLowerCase() == "zebra"){
                img.src="projectImages/zebra.png";  
                document.getElementById("message").innerHTML="You searched up: Zebra";
                document.getElementById("zebra").style.color = 'red'; 
                document.getElementById("link").href="https://www.google.com/search?q=zebra&tbm=isch&ved=2ahUKEwiliuPH1Mf7AhW9rnIEHWNxC9IQ2-cCegQIABAA&oq=zebra&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQgAQyBAgAEEMyBQgAEIAEMgQIABBDOggIABCABBCxA1D6BFj6C2DwDWgAcAB4AIABSIgBvwKSAQE1mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=jNR_Y6WUDr3dytMP4-KtkA0&bih=840&biw=1470";
        }
        else if(input.value.toLowerCase() == "lion"){
                img.src="projectImages/lion.png";
                document.getElementById("message").innerHTML="You searched up: Lion"; 
                document.getElementById("lion").style.color = 'red'; 
                document.getElementById("link").href="https://www.google.com/search?q=lion&tbm=isch&ved=2ahUKEwj9o5nT1Mf7AhUon3IEHcL8DNgQ2-cCegQIABAA&oq=lion&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzoFCAAQgARQ2wVYxQpglA1oAHAAeACAAWCIAcICkgEBNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=pNR_Y_3BC6i-ytMPwvmzwA0&bih=840&biw=1470";
        }
        else if(input.value.toLowerCase() == "monkey"){
                img.src="projectImages/monkey.png"; 
                document.getElementById("message").innerHTML="You searched up: Monkey"; 
                document.getElementById("monkey").style.color = 'red'; 
                document.getElementById("link").href="https://www.google.com/search?q=monkey&tbm=isch&ved=2ahUKEwipg-r71Mf7AhXbo3IEHcXpBqkQ2-cCegQIABAA&oq=monkey&gs_lcp=CgNpbWcQARgAMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDOggIABCABBCxA1DlCVi_D2CoGWgAcAB4AIABQIgBmAOSAQE3mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=-dR_Y-miGNvHytMPxdObyAo&bih=840&biw=1470";
        }
        else if(input.value.toLowerCase() == "cheetah"){
                img.src="projectImages/cheetah.png";  
                document.getElementById("message").innerHTML="You searched up: Cheetah";
                document.getElementById("cheetah").style.color = 'red'; 
                document.getElementById("link").href="https://www.google.com/search?q=cheetah&tbm=isch&ved=2ahUKEwjQ0v2A1cf7AhVen3IEHRNhBGIQ2-cCegQIABAA&oq=cheeta&gs_lcp=CgNpbWcQARgAMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEUKwEWK4KYPsPaABwAHgAgAFGiAGhA5IBATeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=BNV_Y9DADN6-ytMPk8KRkAY&bih=840&biw=1470";
        }
        
        else if(input.value.toLowerCase() == "gorilla"){
                img.src="projectImages/gorilla.png";
                document.getElementById("message").innerHTML="You searched up: Gorilla"; 
                document.getElementById("gorilla").style.color = 'red';  
                document.getElementById("link").href="https://www.google.com/search?q=gorilla&tbm=isch&sxsrf=ALiCzsbBZpI722lFiltJpoqPwN2flfnktA%3A1669576395840&source=hp&biw=1536&bih=731&ei=y7aDY83yMIHB0PEPr_KJkAg&iflsig=AJiK0e8AAAAAY4PE2-Tw5npW7GJXHA-CYmYgjtG_l8Kc&ved=0ahUKEwiNhP3fiM_7AhWBIDQIHS95AoIQ4dUDCAY&uact=5&oq=gorilla&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6BAgAEB46CQgAEIAEEAoQGDoHCAAQgAQQGFCPEVjcH2CwIGgGcAB4AIABgAGIAfYIkgEEMC4xMJgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img";

        }
       


        else{
                img.src="projectImages/error.png";
                document.getElementById("hyperLink").innerHTML = "";
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
        
     

