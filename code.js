var jsonAdatok;
var adatok
function a() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "me.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            jsonAdatok = xhr.responseText;
            adatok = data;
            add(adatok);
        }
    };
    xhr.send();
}
function add(adat) {

    document.getElementById("honnan").innerHTML = ``;
    document.getElementById("hova").innerHTML = ``;
    adat.forEach(i => {
        if (i.honnan == null || i.hova == null) {
        } else {
            document.getElementById("honnan").innerHTML += `<li onclick="hozzaad(this, 'honnanvalaszt')">${i.honnan}</li>`;
            document.getElementById("hova").innerHTML += `<li onclick="hozzaad(this, 'hovavalaszt')">${i.hova}</li>`;
        }
    })
}
a();
function hozzaad(item, value) {
    document.getElementById(value).innerHTML = item.textContent;
    adatok.forEach(i => {
        if (i.honnan == item.textContent) {
            adatok[adatok.indexOf(i)] = " ";
        }
        if (i.hova == item.textContent) {
            adatok[adatok.indexOf(i)] = " ";
        }
    })
    add(adatok);

}
function keres() {
    var honnan = document.getElementById("honnanvalaszt").textContent;
    var hova = document.getElementById("hovavalaszt").textContent;
    var adatok = JSON.parse(jsonAdatok);
    var van = false
    adatok.forEach(i => {
        if (i.honnan == honnan && i.hova == hova) {
            document.getElementById("eredmeny").innerHTML = i.indulas + "------------" + i.erkezes;
            van = true;
        }
    });
    if (!van) {
        return alert("Nem található adat!")
    }
}