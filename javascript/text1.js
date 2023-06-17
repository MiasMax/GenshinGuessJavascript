/*const nums = [ 1, 3, 5, 7];
function verifInput(id, idSubmit) {

    if( (document.getElementById(id).value != " ") && ( nums.includes(1) ) )
    document.getElementById(idSubmit).disabled = "";
}
<form autocomplete="off" method="post">
                <div class="autocomplete">

                    <script type="text/javascript">
                        const nums = [ 1, 3, 5, 7];
                        function verifInput(id, idSubmit) {
                            if( (document.getElementById(id).value != " ") && ( nums.includes(1) ) )
                            document.getElementById(idSubmit).disabled = "";
                        }
                    </script>

                    <input id="test" placeholder="Type character name ..." type="text" name="nom" onkeypress="verifInput(this.id, 'ok');"/>

                    <script>
                        var listPerso = ["Albedo","Ayaka","Amber","Aloy","Ayato","Alhaitham","Barbara","Beidou","Bennett","Candace","Childe","Chongyun","Collei","Cyno","Diluc","Diona","Dori","Eula","Faruzan","Ganyu","Gorou","Heizou","Yaoyao","Hu Tao","Itto","Jean","Kaeya","Kazuha","Keqing","Klee","Kokomi","Kuki Shinobu","Layla","Lisa","Mona","Nahida","Nilou","Ningguang","Noelle","Qiqi","Raiden","Razor","Rosaria","Sara","Sayu","Shenhe","Sucrose","Thoma","Tighnari","Traveler","Venti","Wanderer","Xiangling","Xiao","Xingqiu","Xinyan","Yae Miko","Yanfei","Yelan","Yoimiya","Yun Jin","Zhongli","Fischl"];
                        function autocomplete(inp, arr) {
                              var currentFocus;
                              inp.addEventListener("input", function(e) {
                                  var a, b, i, val = this.value;
                                  closeAllLists();
                                  if (!val) { return false;}
                                  currentFocus = -1;
                                  a = document.createElement("DIV");
                                  a.setAttribute("id", this.id + "autocomplete-list");
                                  a.setAttribute("class", "autocomplete-items");
                                  this.parentNode.appendChild(a);
                                  for (i = 0; i < arr.length; i++) {
                                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                                      b = document.createElement("DIV");
                                      b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                                      b.innerHTML += arr[i].substr(val.length);
                                      b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                                          b.addEventListener("click", function(e) {
                                          inp.value = this.getElementsByTagName("input")[0].value;
                                          closeAllLists();
                                      });
                                      a.appendChild(b);
                                    }
                                  }
                              });
                              inp.addEventListener("keydown", function(e) {
                                  var x = document.getElementById(this.id + "autocomplete-list");
                                  if (x) x = x.getElementsByTagName("div");
                                  if (e.keyCode == 40) {
                                    currentFocus++;
                                    addActive(x);
                                  } else if (e.keyCode == 38) { 
                                    currentFocus--;
                                    addActive(x);
                                  } else if (e.keyCode == 13) {
                                    e.preventDefault();
                                    if (currentFocus > -1) {
                                      if (x) x[currentFocus].click();
                                    }
                                  }
                              });
                              function addActive(x) {
                                if (!x) return false;
                                removeActive(x);
                                if (currentFocus >= x.length) currentFocus = 0;
                                if (currentFocus < 0) currentFocus = (x.length - 1);
                                x[currentFocus].classList.add("autocomplete-active");
                              }
                              function removeActive(x) {
                                for (var i = 0; i < x.length; i++) {
                                  x[i].classList.remove("autocomplete-active");
                                }
                              }
                              function closeAllLists(elmnt) {
                                var x = document.getElementsByClassName("autocomplete-items");
                                for (var i = 0; i < x.length; i++) {
                                  if (elmnt != x[i] && elmnt != inp) {
                                  x[i].parentNode.removeChild(x[i]);
                                }
                              }
                            }
                            document.addEventListener("click", function (e) {
                                closeAllLists(e.target);
                            });
                            }
                        autocomplete(document.getElementById("test"), listPerso);/*
                    </script>

                </div>
                <input type="submit" value="OK" id="ok" disabled="disabled" name="btnSub" />
            </form>*/