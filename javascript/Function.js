let listNomCharacter =   ["Albedo",     "Aloy",             "Amber",     "Ayaka",   "Ayato",    "Alhaitham","Barbara",  "Beidou",   "Bennett",  "Candace",  "Childe",   "Chongyun", "Collei",   "Cyno",     "Diluc",    "Diona",    "Dori",     "Eula",     "Faruzan",  "Ganyu",    "Gorou",    "Heizou",   "Hu Tao",   "Itto",     "Jean",     "Kaeya",    "Kazuha",   "Keqing",   "Klee",     "Kokomi",   "Kuki Shinobu", "Layla",    "Lisa",    "Mona",      "Nahida",   "Nilou",    "Ningguang","Noelle",       "Qiqi",     "Raiden",   "Razor",    "Rosaria",  "Sara",     "Sayu",     "Shenhe",   "Sucrose",  "Thoma",    "Tighnari", "Traveler", "Venti",    "Wanderer", "Xiangling","Xiao",     "Xingqiu",  "Xinyan",   "Yae Miko", "Yanfei",   "Yelan",    "Yoimiya",  "Yun Jin",  "Zhongli",  "Yaoyao",   "Fischl"];
let listGender =         ["Male",       "Female",           "Female",   "Female",   "Male",     "Male",     "Female",   "Female",   "Male",     "Female",   "Male",     "Male",     "Female",   "Male",     "Male",     "Female",   "Female",   "Female",   "Female",   "Female",   "Male",     "Male",     "Female",   "Male",     "Female",   "Male",     "Male",     "Female",   "Female",   "Female",   "Female",       "Female",   "Female",   "Female",   "Female",   "Female",   "Female",   "Female",       "Female",   "Female",   "Male",     "Female",   "Female",   "Female",   "Female",   "Female",   "Male",     "Male",     "Male",     "Male",     "Male",     "Female",   "Male",     "Male",     "Female",   "Female",   "Female",   "Female",   "Female",   "Female",   "Male",     "Female",   "Female"];
let listRegion =         ["Mondstadt",  "Horizon Zero Dawn","Mondstadt","Inazuma",  "Inazuma",  "Sumeru",   "Mondstadt","Liyue",    "Mondstadt","Sumeru",   "Snezhnaya","Liyue",    "Sumeru",   "Sumeru",   "Mondstadt","Mondstadt","Sumeru",   "Mondstadt","Sumeru",   "Liyue",    "Inazuma",  "Inazuma",  "Liyue",    "Inazuma",  "Mondstadt","Mondstadt","Inazuma",  "Mondstadt","Mondstadt","Inazuma",  "Inazuma",      "Sumeru",   "Sumeru",   "Mondstadt","Sumeru",   "Sumeru",   "Liyue",    "Mondstadt",    "Liyue",    "Inazuma",  "Mondstadt","Mondstadt","Inazuma",  "Inazuma",  "Liyue",    "Mondstadt","Inazuma",  "Sumeru",   "Space",    "Mondstadt","Inazuma",  "Mondstadt","Liyue",    "Liyue",    "Liyue",    "Inazuma",  "Liyue",    "Liyue",    "Inazuma",  "Liyue",    "Liyue",    "Sumeru",   "Mondstadt"];
let listElementalPower = ["Geo",        "Cryo",             "Pyro",     "Cryo",     "Hydro",    "Dendro",   "Hydro",    "Electro",  "Pyro",     "Hydro",    "Hydro",    "Cryo",     "Dendro",   "Electro",  "Pyro",     "Cryo",     "Electro",  "Cryo",     "Anemo",    "Cryo",     "Geo",      "Anemo",    "Pyro",     "Geo",      "Anemo",    "Cryo",     "Anemo",    "Electro",  "Pyro",     "Hydro",    "Electro",      "Cryo",     "Electro",  "Hydro",    "Dendro",   "Hydro",    "Geo",      "Geo",          "Cryo",     "Electro",  "Electro",  "Cryo",     "Electro",  "Anemo",    "Cryo",     "Anemo",    "Pyro",     "Dendro",   "?????",    "Anemo",    "Anemo",    "Pyro",     "Anemo",    "Hydro",    "Pyro",     "Electro",  "Pyro",     "Hydro",    "Pyro",     "Geo",      "Geo",      "Dendro",   "Electro"];
let listWeaponType =     ["Sword",      "Bow",              "Bow",      "Sword",    "Sword",    "Sword",    "Catalyst", "Claymore", "Sword",    "Polearm",  "Bow",      "Claymore", "Bow",      "Polearm",  "Claymore", "Bow",      "Claymore", "Claymore", "Bow",      "Bow",      "Bow",      "Catalyst", "Polearm",  "Claymore", "Sword",    "Sword",    "Sword",    "Sword",    "Catalyst", "Catalyst", "Sword",        "Sword",    "Catalyst", "Catalyst", "Catalyst", "Sword",    "Catalyst", "Claymore",     "Sword",    "Polearm",  "Claymore", "Polearm",  "Bow",      "Claymore", "Polearm",  "Catalyst", "Polearm",  "Bow",      "Sword",    "Bow",      "Catalyst", "Polearm",  "Polearm",  "Sword",    "Claymore", "Catalyst", "Claymore", "Bow",      "Bow",      "Polearm",  "Polearm",  "Polearm",  "Bow"];
let listTeamPlacement =  ["SubDPS",     "SubDPS",           "SubDPS",   "DPS",      "DPS",      "DPS",      "Healer",   "SubDPS",   "Support",  "Support",  "DPS",      "Support",  "SubDPS",   "DPS",      "DPS",      "Support",  "Support",  "DPS",      "Support",  "DPS",      "Support",  "DPS",      "DPS",      "DPS",      "Support",  "SubDPS",   "SubDPS",   "DPS",      "DPS",      "Support",  "SubDPS",       "Support",  "Support",  "SubDPS",   "SubDPS",   "SubDPS",   "DPS",      "Support",      "Healer",   "DPS",      "DPS",      "SubDPS",   "Support",  "Support",  "Support",  "SubDPS",   "Support",  "DPS",      "SubDPS",   "Support",  "DPS",      "SubDPS",   "DPS",      "SubDPS",   "Support",  "DPS",      "DPS",      "SubDPS",   "DPS",      "Support",  "Support",  "Support",  "SubDPS"];
let listRelasePatch =    ["1.2",        "2.1",              "1.0",      "2.0",      "2.6",      "3.4",      "1.0",      "1.0",      "1.0",      "3.1",      "1.1",      "1.0",      "3.0",      "3.1",      "1.0",      "1.1",      "3.0",      "1.5",      "3.3",      "1.2",      "2.0",      "2.8",      "1.3",      "2.3",      "1.0",      "1.0",      "1.6",      "1.0",      "1.1",      "2.1",      "2.7",          "3.2",      "1.0",      "1.0",      "3.2",      "3.1",      "1.0",      "1.0",          "1.0",      "2.1",      "1.0",      "1.4",      "2.1",      "2.0",      "2.4",      "1.0'",     "2.2",      "3.0",      "1.0",      "1.0",      "3.3",      "1.0",      "1.3",      "1.0",      "1.1",      "2.5",      "1.5",      "2.7",      "2.0",      "2.4",      "1.1",      "3.4",      "1.0"];
   
let MystnomCharacter ;
let Mystgender ;
let Mystregion ;
let MystelementalPower ;
let MystweaponType ;
let MystteamPlacement ;
let MystrelasePatch ;

let nomCharacter ;
let gender ;
let region ;
let elementalPower ;
let weaponType ;
let teamPlacement ;
let relasePatch ;
 
function choixPerso(){
    function getRandomInt(max) {return Math.floor(Math.random() * max);}
    let randomElement = getRandomInt(listNomCharacter.length);
    
    MystnomCharacter = listNomCharacter[randomElement];
    Mystgender = listGender[randomElement];
    Mystregion = listRegion[randomElement];
    MystelementalPower = listElementalPower[randomElement];
    MystweaponType = listWeaponType[randomElement];
    MystteamPlacement = listTeamPlacement[randomElement];
    MystrelasePatch = listRelasePatch[randomElement];
    let espace = document.createTextNode(" : ");
    NomPersoM.appendChild(espace);
    let newNomPerso = document.createTextNode(MystnomCharacter);
    NomPersoM.appendChild(newNomPerso);
}


function createBox(TypeChara,MystChara){
    let currentDiv = document.querySelector("#Guess");
    let newDiv = document.createElement("div");
    let newh2 = document.createElement("h2");
    let newContent = document.createTextNode(TypeChara);

    newh2.appendChild(newContent);
    newDiv.appendChild(newh2);
    newDiv.classList.add("box");

    if (TypeChara == MystChara){
        newDiv.style.backgroundColor = "green";
    }
    else{
        newDiv.style.backgroundColor = "red";
    }
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);
}


function createBoxImage(NomChara){
    
    let currentDiv = document.querySelector("#Guess");
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");
    let URLimage = "img/perso/" +  NomChara.toLowerCase() + ".webp";
    newImg.src = URLimage;
    let newContent = document.createTextNode(NomChara);

    newImg.appendChild(newContent);
    newDiv.appendChild(newImg);
    newDiv.classList.add("box");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);
}


function createLine(){
    let GuessPersoNom = document.getElementById('form').value;
    let idPerso = -1;
    for(let i = 0; i < listNomCharacter.length; i++){
        if(listNomCharacter[i] == GuessPersoNom){
            idPerso = i;
        }
    }
    if(idPerso != -1){
        nomCharacter = listNomCharacter[idPerso];
        gender = listGender[idPerso];
        region = listRegion[idPerso];
        elementalPower = listElementalPower[idPerso];
        weaponType = listWeaponType[idPerso];
        teamPlacement = listTeamPlacement[idPerso];
        relasePatch = listRelasePatch[idPerso];
        createBoxImage(nomCharacter);
        createBox(nomCharacter,MystnomCharacter);
        createBox(gender,Mystgender);
        createBox(region,Mystregion);
        createBox(elementalPower,MystelementalPower);
        createBox(weaponType,MystweaponType);
        createBox(teamPlacement,MystteamPlacement);
        createBox(relasePatch,MystrelasePatch);
    }
}