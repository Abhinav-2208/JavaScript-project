function generate(){
    var quotes={
        "-Nelson Mandela" :'" The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "-John Lennon":'"Life is what happens when you are busy making other plans."',
        "-Mother Teresa":'"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
    }
    var authors=Object.keys(quotes);

    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}
