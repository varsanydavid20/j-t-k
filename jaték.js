//1. Lehetőségek rögzítése 
const lehetosegek =["ko", "papir", "ollo"];

//2. A pc választ egyet magának

function szamitogepvalasztas(){
    const randomIndex = Math.floor(Math.random() *3 );
    return opciok[randomIndex];
}

function jatekTeszt(userValasztasa){
    const pcValasztasa = szamitogepvalasztas();
}


if(userValasztasa == pcValasztasa){
    return "Döntetlen!";
}

if (userValasztasa == "ko" && pcValasztasa == "ollo" || userValasztasa = return "Te nyertél")