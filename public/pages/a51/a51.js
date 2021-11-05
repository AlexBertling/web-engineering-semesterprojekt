function fetchUrl(url){
    return fetch(url).then(function(response){
        return response.text();
    });
}

const div = document.getElementById("content");

Promise.all([fetchUrl('./A.txt'), fetchUrl('./B.txt')])
    .then(data => {
        const txt1 = data[0].split("\n");
        const txt2 = data[1].split("\n");

        for(var i=0; i<txt1.length; i++){
            div.innerHTML += "" + txt1[i] + txt2[i] + "<br>";
        }
});