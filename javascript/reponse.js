

function choixperso(){
    var listNomCharacter = ["Albedo","Ayaka","Amber","Aloy","Ayato","Alhaitham","Barbara","Beidou","Bennett","Candace","Childe","Chongyun","Collei","Cyno","Diluc","Diona","Dori","Eula","Faruzan","Ganyu","Gorou","Heizou","Yaoyao","Hu Tao","Itto","Jean","Kaeya","Kazuha","Keqing","Klee","Kokomi","Kuki Shinobu","Layla","Lisa","Mona","Nahida","Nilou","Ningguang","Noelle","Qiqi","Raiden","Razor","Rosaria","Sara","Sayu","Shenhe","Sucrose","Thoma","Tighnari","Traveler","Venti","Wanderer","Xiangling","Xiao","Xingqiu","Xinyan","Yae Miko","Yanfei","Yelan","Yoimiya","Yun Jin","Zhongli","Fischl"];
    var listGender = ["Male","Female","Female","Female","Male","Male","Female","Female","Male","Female","Male","Male","Female","Male","Male","Female","Female","Female","Female","Female","Male","Male","Female","Male","Female","Male","Male","Female","Female","Female","Female","Female","Female","Female","Female","Female","Female","Female","Female","Female","Male","Female","Female","Female","Female","Female","Male","Male","Male","Male","Male","Female","Male","Male","Female","Female","Female","Female","Female","Female" ,"Female","Female"];
    var listRegion = ["Mondstadt","Horizon Zero Dawn","Mondstadt","Inazuma","Inazuma","Sumeru","Mondstadt","Liyue","Mondstadt","Sumeru","Snezhnaya","Liyue","Sumeru","Sumeru","Mondstadt","Mondstadt","Sumeru","Mondstadt","Sumeru","Liyue","Inazuma","Inazuma","Liyue","Inazuma","Mondstadt","Mondstadt","Inazuma","Mondstadt","Mondstadt","Inazuma","Inazuma","Sumeru","Sumeru","Mondstadt","Sumeru","Sumeru","Liyue","Mondstadt","Liyue","Inazuma","Mondstadt","Mondstadt","Inazuma","Inazuma","Liyue","Mondstadt","Inazuma","Sumeru","Space","Mondstadt","Inazuma","Mondstadt","Liyue","Liyue","Liyue","Inazuma","Liyue","Liyue","Inazuma","Liyue","Liyue","Sumeru","Mondstadt"];
    var listElementalPower = ["Geo","Cryo","Pyro","Cryo","Hydro","Dendro","Hydro","Electro","Pyro","Hydro","Hydro","Cryo","Dendro","Electro","Pyro","Cryo","Electro","Cryo","Anemo","Cryo","Geo","Anemo","Pyro","Geo","Anemo","Cryo","Anemo","Electro","Pyro","Hydro","Electro","Cryo","Electro","Hydro","Dendro","Hydro","Geo","Geo","Cryo","Electro","Electro","Cryo","Electro","Anemo","Cryo","Anemo","Pyro","Dendro","?????","Anemo","Anemo","Pyro","Anemo","Hydro","Pyro","Electro","Pyro","Hydro","Pyro","Geo","Geo","Dendro","Electro"];
    var listWeaponType = ["Sword","Bow","Bow","Sword","Sword","Sword","Catalyst","Claymore","Sword","Polearm","Bow","Claymore","Bow","Polearm","Claymore","Bow","Claymore","Claymore","Bow","Bow","Bow","Catalyst","Polearm","Claymore","Sword","Sword","Sword","Sword","Catalyst","Catalyst","Sword","Sword","Catalyst","Catalyst","Catalyst","Sword","Catalyst","Claymore","Sword","Polearm","Claymore","Polearm","Bow","Claymore","Polearm","Catalyst","Polearm","Bow","Sword","Bow","Catalyst","Polearm","Polearm","Sword","Claymore","Catalyst","Claymore","Bow","Bow","Polearm","Polearm","Polearm","Bow"];
    var listTeamPlacement = ["SubDPS","SubDPS","SubDPS","DPS","DPS","DPS","Healer","SubDPS","Support","Support","DPS","Support","SubDPS","DPS","DPS","Support","Support","DPS","Support","DPS","Support","DPS","DPS","DPS","Support","SubDPS","SubDPS","DPS","DPS","Support","SubDPS","Support","Support","SubDPS","SubDPS","SubDPS","DPS","Support","Healer","DPS","DPS","SubDPS","Support","Support","Support","SubDPS","Support","DPS","SubDPS","Support","DPS","SubDPS","DPS","SubDPS","Support","DPS","DPS","SubDPS","DPS","Support","Support","Support","SubDPS"];
    var listRelasePatch = ["1.2","2.1","1.0","2.0","2.6","3.4","1.0","1.0","1.0","3.1","1.1","1.0","3.0","3.1","1.0","1.1","3.0","1.5","3.3","1.2","2.0","2.8","1.3","2.3","1.0","1.0","1.6","1.0","1.1","2.1","2.7","3.2","1.0","1.0","3.2","3.1","1.0","1.0","1.0","2.1","1.0","1.4","2.1","2.0","2.4","1.0'","2.2","3.0","1.0","1.0","3.3","1.0","1.3","1.0","1.1","2.5","1.5","2.7","2.0","2.4","1.1","3.4","1.0"];
    
    function getRandomInt(max) {return Math.floor(Math.random() * max);}
    var randomElement = getRandomInt(listNomCharacter.length);
    
    var nomCharacter = listNomCharacter[randomElement];
    var gender = listGender[randomElement];
    var region = listRegion[randomElement];
    var elementalPower = listElementalPower[randomElement];
    var weaponType = listWeaponType[randomElement];
    var teamPlacement = listTeamPlacement[randomElement];
    var relasePatch = listRelasePatch[randomElement];
    document.createElement('li');
}


/*document.createElement('li');  document.write(nomCharacter);*/





('1', 'Albedo', 'Male', 'Mondstadt', 'Geo', 'Sword', 'SubDPS', '1.2'),
('2', 'Aloy', 'Female', 'Horizon Zero Dawn', 'Cryo', 'Bow', 'SubDPS', '2.1'),
('3', 'Amber', 'Female', 'Mondstadt', 'Pyro', 'Bow', 'SubDPS', '1.0'),
('4', 'Ayaka', 'Female', 'Inazuma', 'Cryo', 'Sword', 'DPS', '2.0'),
('5', 'Ayato', 'Male', 'Inazuma', 'Hydro', 'Sword', 'DPS', '2.6'),
('63', 'Alhaitham', 'Male', 'Sumeru', 'Dendro', 'Sword', 'DPS', '3.4');
('6', 'Barbara', 'Female', 'Mondstadt', 'Hydro', 'Catalyst', 'Healer', '1.0'),
('7', 'Beidou', 'Female', 'Liyue', 'Electro', 'Claymore', 'SubDPS', '1.0'),
('8', 'Bennett', 'Male', 'Mondstadt', 'Pyro', 'Sword', 'Support', '1.0'),
('9', 'Candace', 'Female', 'Sumeru', 'Hydro', 'Polearm', 'Support', '3.1'),
('10', 'Childe', 'Male', 'Snezhnaya', 'Hydro', 'Bow', 'DPS', '1.1'),
('11', 'Chongyun', 'Male', 'Liyue', 'Cryo', 'Claymore', 'Support', '1.0'),
('12', 'Collei', 'Female', 'Sumeru', 'Dendro', 'Bow', 'SubDPS', '3.0'),
('13', 'Cyno', 'Male', 'Sumeru', 'Electro', 'Polearm', 'DPS', '3.1'),
('14', 'Diluc', 'Male', 'Mondstadt', 'Pyro', 'Claymore', 'DPS', '1.0'),
('15', 'Diona', 'Female', 'Mondstadt', 'Cryo', 'Bow', 'Support', '1.1'),
('16', 'Dori', 'Female', 'Sumeru', 'Electro', 'Claymore', 'Support', '3.0'),
('17', 'Eula', 'Female', 'Mondstadt', 'Cryo', 'Claymore', 'DPS', '1.5'),
('18', 'Faruzan', 'Female', 'Sumeru', 'Anemo', 'Bow', 'Support', '3.3'),
('19', 'Ganyu', 'Female', 'Liyue', 'Cryo', 'Bow', 'DPS', '1.2'),
('20', 'Gorou', 'Male', 'Inazuma', 'Geo', 'Bow', 'Support', '2.0'),
('21', 'Heizou', 'Male', 'Inazuma', 'Anemo', 'Catalyst', 'DPS', '2.8'),
('22', 'Hu Tao', 'Female', 'Liyue', 'Pyro', 'Polearm', 'DPS', '1.3'),
('23', 'Itto', 'Male', 'Inazuma', 'Geo', 'Claymore', 'DPS', '2.3'),
('24', 'Jean', 'Female', 'Mondstadt', 'Anemo', 'Sword', 'Support', '1.0'),
('25', 'Kaeya', 'Male', 'Mondstadt', 'Cryo', 'Sword', 'SubDPS', '1.0'),
('26', 'Kazuha', 'Male', 'Inazuma', 'Anemo', 'Sword', 'SubDPS', '1.6'),
('27', 'Keqing', 'Female', 'Mondstadt', 'Electro', 'Sword', 'DPS', '1.0'),
('28', 'Klee', 'Female', 'Mondstadt', 'Pyro', 'Catalyst', 'DPS', '1.1'),
('29', 'Kokomi', 'Female', 'Inazuma', 'Hydro', 'Catalyst', 'Support', '2.1'),
('30', 'Kuki Shinobu', 'Female', 'Inazuma', 'Electro', 'Sword', 'SubDPS', '2.7'),
('31', 'Layla', 'Female', 'Sumeru', 'Cryo', 'Sword', 'Support', '3.2'),
('32', 'Lisa', 'Female', 'Sumeru', 'Electro', 'Catalyst', 'Support', '1.0'),
('33', 'Mona', 'Female', 'Mondstadt', 'Hydro', 'Catalyst', 'SubDPS', '1.0'),
('34', 'Nahida', 'Female', 'Sumeru', 'Dendro', 'Catalyst', 'SubDPS', '3.2'),
('35', 'Nilou', 'Female', 'Sumeru', 'Hydro', 'Sword', 'SubDPS', '3.1'),
('36', 'Ningguang', 'Female', 'Liyue', 'Geo', 'Catalyst', 'DPS', '1.0'),
('37', 'Noelle', 'Female', 'Mondstadt', 'Geo', 'Claymore', 'Support', '1.0'),
('38', 'Qiqi', 'Female', 'Liyue', 'Cryo', 'Sword', 'Healer', '1.0'),
('39', 'Raiden', 'Female', 'Inazuma', 'Electro', 'Polearm', 'DPS', '2.1'),
('40', 'Razor', 'Male', 'Mondstadt', 'Electro', 'Claymore', 'DPS', '1.0'),
('41', 'Rosaria', 'Female', 'Mondstadt', 'Cryo', 'Polearm', 'SubDPS', '1.4'),
('42', 'Sara', 'Female', 'Inazuma', 'Electro', 'Bow', 'Support', '2.1'),
('43', 'Sayu', 'Female', 'Inazuma', 'Anemo', 'Claymore', 'Support', '2.0'),
('44', 'Shenhe', 'Female', 'Liyue', 'Cryo', 'Polearm', 'Support', '2.4'),
('45', 'Sucrose', 'Female', 'Mondstadt', 'Anemo', 'Catalyst', 'SubDPS', '1.0'),
('46', 'Thoma', 'Male', 'Inazuma', 'Pyro', 'Polearm', 'Support', '2.2'),
('47', 'Tighnari', 'Male', 'Sumeru', 'Dendro', 'Bow', 'DPS', '3.0'),
('48', 'Traveler', 'Male', 'Space', '?????', 'Sword', 'SubDPS', '1.0'),
('49', 'Venti', 'Male', 'Mondstadt', 'Anemo', 'Bow', 'Support', '1.0'),
('50', 'Wanderer', 'Male', 'Inazuma', 'Anemo', 'Catalyst', 'DPS', '3.3'),
('51', 'Xiangling', 'Female', 'Mondstadt', 'Pyro', 'Polearm', 'SubDPS', '1.0'),
('52', 'Xiao', 'Male', 'Liyue', 'Anemo', 'Polearm', 'DPS', '1.3'),
('53', 'Xingqiu', 'Male', 'Liyue', 'Hydro', 'Sword', 'SubDPS', '1.0'),
('54', 'Xinyan', 'Female', 'Liyue', 'Pyro', 'Claymore', 'Support', '1.1'),
('55', 'Yae Miko', 'Female', 'Inazuma', 'Electro', 'Catalyst', 'DPS', '2.5'),
('56', 'Yanfei', 'Female', 'Liyue', 'Pyro', 'Claymore', 'DPS', '1.5'),
('57', 'Yelan', 'Female', 'Liyue', 'Hydro', 'Bow', 'SubDPS', '2.7'),
('58', 'Yoimiya', 'Female', 'Inazuma', 'Pyro', 'Bow', 'DPS', '2.0'),
('59', 'Yun Jin', 'Female', 'Liyue', 'Geo', 'Polearm', 'Support', '2.4'),
('60', 'Zhongli', 'Male', 'Liyue', 'Geo', 'Polearm', 'Support', '1.1'),
('61', 'Yaoyao', 'Female', 'Sumeru', 'Dendro', 'Polearm', 'Support', '3.4'),
('62', 'Fischl', 'Female', 'Mondstadt', 'Electro', 'Bow', 'SubDPS', '1.0'),

