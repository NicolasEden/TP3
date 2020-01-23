var listIMG = null;
var donne = null;
var core = document.body.innerHTML;
function getIMG(word, number){
    document.getElementById('content-img').innerHTML = "";
    $.ajax({
        url: 'https://api.unsplash.com/search/photos?client_id=82c3342c7766b1900717e0a7577f3303cea19fa72c1d4aba79c7a90638eb69b5&page='+Math.floor(Math.random() * Math.floor(10))+'&query='+word+'&per_page=500',
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            listIMG = data;
        }, error : function(req, err) {
            alert: ("Request:"+ JSON.stringify(req));
        }
    });
    var b = [];
    for (var i = 0; i < number; i++) {
        var newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'row');
        document.getElementById('content-img').appendChild(newDiv)
        for (var a = 0; a < 4; a++) {
            do {
                var nb1 = Math.floor(Math.random() * Math.floor(30))
            } while (b.indexOf(nb1) != -1);
            var nb = nb1;
            console.log(b.push(nb1))
            var newDivImg = document.createElement('div')
            newDivImg.setAttribute('class', 'test')
            var newImg = document.createElement('img')
            newImg.style.width = 270+"px"
            newImg.style.height = 200+"px"
            newImg.setAttribute('src', listIMG.results[nb].urls.small)
            newDivImg.appendChild(newImg)
            newDiv.appendChild(newDivImg)
        }
    }
}

function alt(text){
    newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'alert alert-danger alert-dismissible fade show')
    newDiv.setAttribute('role', 'alert')
    newDiv.setAttribute('style', 'width: 500px;')
    newDiv.innerHTML = (text)
    newButton = document.createElement("button")
    newButton.setAttribute('class', 'close')
    newButton.setAttribute('data-dismiss', 'alert')
    newButton.setAttribute('aria-label', 'Close')
    newButton.innerHTML = ('<span aria-hidden="true">&times;</span>');
    newDiv.appendChild(newButton);
    document.getElementById('alert').appendChild(newDiv)
}

document.body.addEventListener('load', function(event) {
    getIMG('all', 2)
});

document.getElementById('all').addEventListener('click', function(event) {
    getIMG('all', 2)
});
document.getElementById('Design').addEventListener('click', function(event) {
    getIMG('Design', 2)
});
document.getElementById('Code').addEventListener('click', function(event) {
    getIMG('Code', 2)
});
document.getElementById('Photography').addEventListener('click', function(event) {
    getIMG('Photography', 2)
});
document.getElementById('Apps').addEventListener('click', function(event) {
    getIMG('Apps', 2)
});
document.getElementById('order').addEventListener('click', function(event) {
    alt("<strong>ERREUR :</strong> Vous n'êtes pas égligible à cette offre.")
});
document.getElementById('order').addEventListener('load', function(event) {
    getIMG('all', 2)
});
document.getElementById('want').addEventListener('click', function(event) {
    alt("<strong>ERREUR :</strong> Vous voulez, mais vous n'aurez pas.")
});
document.getElementById('start').addEventListener('click', function(event) {
    alt("<strong>ERREUR :</strong> Get stopped.")
});
