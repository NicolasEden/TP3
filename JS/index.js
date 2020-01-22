var listIMG = null;
var donne = null;
var core = document.body.innerHTML;
function getIMG(word, number){
    document.getElementById('content-img').innerHTML = "";
    $.ajax({
        url: 'https://api.unsplash.com/search/photos?client_id=82c3342c7766b1900717e0a7577f3303cea19fa72c1d4aba79c7a90638eb69b5&page=1&query='+word+'&quantity=100&h=200&w=270',
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            listIMG = data;
        }, error : function(req, err) {
            alert: ("Request:"+ JSON.stringify(req));
        }
    });
    var b = 0;
    for (var i = 0; i < number; i++) {
        var newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'row');
        document.getElementById('content-img').appendChild(newDiv)
        for (var a = 0; a < 4; a++) {
            var newDivImg = document.createElement('div')
            newDivImg.setAttribute('class', 'test')
            var newImg = document.createElement('img')
            newImg.style.width = 270+"px"
            newImg.style.height = 200+"px"
            newImg.setAttribute('src', listIMG.results[b].urls.regular)
            newDivImg.appendChild(newImg)
            newDiv.appendChild(newDivImg)
            b++;
        }
    }
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
