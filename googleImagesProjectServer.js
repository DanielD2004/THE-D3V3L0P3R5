var express = require('express');
var app = express();

var port = 3000;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    var z =req.query['data'];

    switch (z.toLowerCase()) {
        case "tiger":
            var url = 'https://img.freepik.com/premium-photo/close-up-face-tiger-isolated-black-background_66869-322.jpg'
            break;
        case "elephant":
            var url = 'https://images.unsplash.com/photo-1503670747547-ee151b6fdc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI4NzN8MHwxfGNvbGxlY3Rpb258MjcwfDMxMTQzMnx8fHx8Mnx8MTY0MTc0Mzg2Mg&ixlib=rb-1.2.1&q=80&w=400'
            break;
        case "cat":
            var url = 'http://static.everypixel.com/ep-libreshot/1043/1916/2369/87818/10431916236987818157.jpg'
            break;
        case "dog":
            var url = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*';
            break;
        case "zebra":
            var url = 'https://images.unsplash.com/photo-1551254175-2fa4adb92d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI4NzN8MHwxfGFsbHwyMzQzODR8fHx8fHwyfHwxNjY4MTI3Mjgx&ixlib=rb-4.0.3&q=80&w=400'
            break;
        case "lion":
            var url = 'https://img.freepik.com/premium-photo/lion-lioness-are-standing-together_265142-7367.jpg'
            break;
        case "monkey":
            var url = 'https://images.unsplash.com/photo-1560435379-a9fe738d3b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI4NzN8MHwxfGFsbHwyMTQwMzV8fHx8fHwyfHwxNjY0NjgyNjQ2&ixlib=rb-1.2.1&q=80&w=400'
            break;
        case "cheetah":
            var url = 'https://img.freepik.com/free-photo/beautiful-cheetahs-among-plants-middle-desert_181624-6329.jpg'
            break;
        case "gorilla":
            var url = 'https://img.freepik.com/premium-photo/western-lowland-gorilla-gorilla-gorilla-gorilla_477293-4212.jpg'
            break;

        default:
            var url = '';
            break;
    }
    
    var jsonText = JSON.stringify({
        'url': url,
    });
    res.send(jsonText);
}).listen(port);

console.log("Server is running! (listening on port " + port + ")");

