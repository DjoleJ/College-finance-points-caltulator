
(function() {
    
    function Language(name, espbPoints) {
    this.name = name;
    this.espbPoints = espbPoints;
    }

    var lang1 = new Language('HTML', 12);
    var lang2 = new Language('CSS', 12);
    var lang3 = new Language('JavaScript', 16);
    var lang4 = new Language('MySQL', 8);
    var lang5 = new Language('C', '8');
    var lang6 = new Language('Windows', 4);
    var lang7 = new Language('C++', 12);
    var lang8 = new Language('Java', 12);
    var lang9 = new Language('PHP', 12);
    var lang10 = new Language('C#', 12);
    var lang11 = new Language('Linux', 4);
    var lang12 = new Language('Ruby', 8);
    var lang13 = new Language('ASP.NET', 10);
    var lang14 = new Language('Python', 10);
    var lang15 = new Language('JavaScript 2', 10);
    var lang16 = new Language('PHP 2', 10);
    var lang17 = new Language('Java 2', 10);
    var lang18 = new Language('C# 2', 10);

    var firstYear = [lang1, lang2, lang3, lang4, lang5, lang6];
    var secondYear = [lang7, lang8, lang9, lang10, lang11, lang12];
    var thirdYear = [lang13, lang14, lang15, lang16, lang17, lang18];



    function init() {
        document.getElementById('select-year-div').style.display = 'none';
        document.getElementById('calculate').style.display = 'none';
        document.getElementById('subject-name').style.display = 'none';

    }

    init();

    

    function startApp() {
        document.getElementById('select-year-div').style.display = 'block';
        document.getElementById('start').style.display = 'none';

    }

    function disablePassFields() {

        document.getElementById('first-pass').disabled = true;
        document.getElementById('second-pass').disabled = true;
        document.getElementById('third-pass').disabled = true;
        document.getElementById('fourth-pass').disabled = true;
        document.getElementById('fifth-pass').disabled = true;
        document.getElementById('sixth-pass').disabled = true;
    }


    function displaySelectedYear() {
        document.getElementById('subject-name').style.display = 'block';
        var selIndex = document.getElementById('select-year').selectedIndex;
        var selIndexValue = document.getElementsByTagName('option')[selIndex].value;
        document.getElementById('calculate').style.display = 'block';

        if(selIndexValue == 0) {
            document.getElementById('subject-name').innerHTML = '<h1 class="text-center;"> Please select a year! </h1>'
            document.getElementById('calculate').style.display = 'none';

        } else if(selIndexValue === '1') {
            document.getElementById('subject-name').innerHTML = '<div class="subjects-inputs" id="first-subject"><h4>'+lang1.name+'<span class="espb"> ESPB: '+lang1.espbPoints+'</span></h4><label for="first-grade">Grade:<input type="text" id="first-grade" class="grades"/></label><label for="first-pass">Number of tries:<input type="text" id="first-pass" class="passes"/></label></div><div class="subjects-inputs" id="second-subject"><h4>'+lang2.name+'<span class="espb"> ESPB: '+lang2.espbPoints+'</span></h4><label for="second-grade">Grade:<input type="text" id="second-grade" class="grades"/></label><label for="second-pass">Number of tries:<input type="text" id="second-pass" class="passes"/></label></div><div class="subjects-inputs" id="third-subject"><h4>'+lang3.name+' <span class="espb"> ESPB: '+lang3.espbPoints+'</span></h4><label for="third-grade">Grade:<input type="text" id="third-grade" class="grades"/></label><label for="third-pass">Number of tries:<input type="text" id="third-pass" class="passes"/></label></div><div class="subjects-inputs" id="fourth-subject"><h4>'+lang4.name+' <span class="espb"> ESPB: '+lang4.espbPoints+'</span></h4><label for="fourth-grade">Grade:<input type="text" id="fourth-grade" class="grades"/></label><label for="fourth-pass">Number of tries:<input type="text" id="fourth-pass" class="passes"/></label></div><div class="subjects-inputs" id="fifth-subject"><h4>'+lang5.name+' <span class="espb"> ESPB: '+lang5.espbPoints+'</span></h4><label for="fifth-grade">Grade:<input type="text" id="fifth-grade" class="grades"/></label><label for="fifth-pass">Number of tries:<input type="text" id="fifth-pass" class="passes"/></label></div><div class="subjects-inputs" id="sixth-subject"><h4>'+lang6.name+'<span class="espb"> ESPB: '+lang6.espbPoints+'</span></h4><label for="sixth-grade">Grade:<input type="text" id="sixth-grade" class="grades"/></label><label for="sixth-pass">Number of tries:<input type="text" id="sixth-pass" class="passes"/></label></div>';
        } else if(selIndexValue === '2') {

            document.getElementById('subject-name').innerHTML = '<div class="subjects-inputs" id="first-subject"><h4>'+lang7.name+'<span class="espb"> ESPB: '+lang7.espbPoints+'</span></h4><label for="first-grade">Grade:<input type="text" id="first-grade" class="grades"/></label><label for="first-pass">Number of tries:<input type="text" id="first-pass" class="passes"/></label></div><div class="subjects-inputs" id="second-subject"><h4>'+lang8.name+'<span class="espb"> ESPB: '+lang8.espbPoints+'</span></h4><label for="second-grade">Grade:<input type="text" id="second-grade" class="grades"/></label><label for="second-pass">Number of tries:<input type="text" id="second-pass" class="passes"/></label></div><div class="subjects-inputs" id="third-subject"><h4>'+lang9.name+' <span class="espb"> ESPB: '+lang9.espbPoints+'</span></h4><label for="third-grade">Grade:<input type="text" id="third-grade" class="grades"/></label><label for="third-pass">Number of tries:<input type="text" id="third-pass" class="passes"/></label></div><div class="subjects-inputs" id="fourth-subject"><h4>'+lang10.name+' <span class="espb"> ESPB: '+lang10.espbPoints+'</span></h4><label for="fourth-grade">Grade:<input type="text" id="fourth-grade" class="grades"/></label><label for="fourth-pass">Number of tries:<input type="text" id="fourth-pass" class="passes"/></label></div><div class="subjects-inputs" id="fifth-subject"><h4>'+lang11.name+' <span class="espb"> ESPB: '+lang11.espbPoints+'</span></h4><label for="fifth-grade">Grade:<input type="text" id="fifth-grade" class="grades"/></label><label for="fifth-pass">Number of tries:<input type="text" id="fifth-pass" class="passes"/></label></div><div class="subjects-inputs" id="sixth-subject"><h4>'+lang12.name+'<span class="espb"> ESPB: '+lang12.espbPoints+'</span></h4><label for="sixth-grade">Grade:<input type="text" id="sixth-grade" class="grades"/></label><label for="sixth-pass">Number of tries:<input type="text" id="sixth-pass" class="passes"/></label></div>';
        } else if(selIndexValue === '3') {

            document.getElementById('subject-name').innerHTML = '<div class="subjects-inputs" id="first-subject"><h4>'+lang13.name+'<span class="espb"> ESPB: '+lang13.espbPoints+'</span></h4><label for="first-grade">Grade:<input type="text" id="first-grade" class="grades"/></label><label for="first-pass">Number of tries:<input type="text" id="first-pass" class="passes"/></label></div><div class="subjects-inputs" id="second-subject"><h4>'+lang14.name+'<span class="espb"> ESPB: '+lang14.espbPoints+'</span></h4><label for="second-grade">Grade:<input type="text" id="second-grade" class="grades"/></label><label for="second-pass">Number of tries:<input type="text" id="second-pass" class="passes"/></label></div><div class="subjects-inputs" id="third-subject"><h4>'+lang15.name+' <span class="espb"> ESPB: '+lang15.espbPoints+'</span></h4><label for="third-grade">Grade:<input type="text" id="third-grade" class="grades"/></label><label for="third-pass">Number of tries:<input type="text" id="third-pass" class="passes"/></label></div><div class="subjects-inputs" id="fourth-subject"><h4>'+lang16.name+' <span class="espb"> ESPB: '+lang16.espbPoints+'</span></h4><label for="fourth-grade">Grade:<input type="text" id="fourth-grade" class="grades"/></label><label for="fourth-pass">Number of tries:<input type="text" id="fourth-pass" class="passes"/></label></div><div class="subjects-inputs" id="fifth-subject"><h4>'+lang17.name+' <span class="espb"> ESPB: '+lang17.espbPoints+'</span></h4><label for="fifth-grade">Grade:<input type="text" id="fifth-grade" class="grades"/></label><label for="fifth-pass">Number of tries:<input type="text" id="fifth-pass" class="passes"/></label></div><div class="subjects-inputs" id="sixth-subject"><h4>'+lang18.name+'<span class="espb"> ESPB: '+lang18.espbPoints+'</span></h4><label for="sixth-grade">Grade:<input type="text" id="sixth-grade" class="grades"/></label><label for="sixth-pass">Number of tries:<input type="text" id="sixth-pass" class="passes"/></label></div>';
        }


        disablePassFields();

        document.getElementById('first-grade').addEventListener('input', function() {

            var grade1 = parseInt(document.getElementById('first-grade').value);

            if(grade1 > 5 && grade1 < 11) {

                document.getElementById('first-pass').disabled = false;
            } else {

                document.getElementById('first-pass').disabled = true;
            }

        });
        document.getElementById('second-grade').addEventListener('input', function() {

            var grade2 = parseInt(document.getElementById('second-grade').value);

            if(grade2 > 5 && grade2 < 11) {

                document.getElementById('second-pass').disabled = false;
            } else {

                document.getElementById('second-pass').disabled = true;
            }

        });
        document.getElementById('third-grade').addEventListener('input', function() {

            var grade3 = parseInt(document.getElementById('third-grade').value);

            if(grade3 > 5 && grade3 < 11) {

                document.getElementById('third-pass').disabled = false;
            } else {

                document.getElementById('third-pass').disabled = true;
            }

        });
        document.getElementById('fourth-grade').addEventListener('input', function() {

            var grade4 = parseInt(document.getElementById('fourth-grade').value);

            if(grade4 > 5 && grade4 < 11) {

                document.getElementById('fourth-pass').disabled = false;
            } else {

                document.getElementById('fourth-pass').disabled = true;
            }

        });
        document.getElementById('fifth-grade').addEventListener('input', function() {

            var grade5 = parseInt(document.getElementById('fifth-grade').value);

            if(grade5 > 5 && grade5 < 11) {

                document.getElementById('fifth-pass').disabled = false;
            } else {

                document.getElementById('fifth-pass').disabled = true;
            }

        });
        document.getElementById('sixth-grade').addEventListener('input', function() {

            var grade6 = parseInt(document.getElementById('sixth-grade').value);

            if(grade6 > 5 && grade6 < 11) {

                document.getElementById('sixth-pass').disabled = false;
            } else {

                document.getElementById('sixth-pass').disabled = true;
            }

        });



        document.getElementById('calculate').addEventListener('click', function() {

            var grade1 = parseInt(document.getElementById('first-grade').value);
            var grade2 = parseInt(document.getElementById('second-grade').value);
            var grade3 = parseInt(document.getElementById('third-grade').value);
            var grade4 = parseInt(document.getElementById('fourth-grade').value);
            var grade5 = parseInt(document.getElementById('fifth-grade').value);
            var grade6 = parseInt(document.getElementById('sixth-grade').value);

            var pass1 = document.getElementById('first-pass').value;
            var pass2 = document.getElementById('second-pass').value;
            var pass3 = document.getElementById('third-pass').value;
            var pass4 = document.getElementById('fourth-pass').value;
            var pass5 = document.getElementById('fifth-pass').value;
            var pass6 = document.getElementById('sixth-pass').value;

            var passes = [pass1, pass2, pass3, pass4, pass5, pass6];

            for(var i = 0; i < passes.length; i++) {

                if(passes[i] === '') {
                    passes[i] = 0;
                } else if(passes[i] === '1') {
                    passes[i] = 1.3;
                } else if(passes[i] === '2') {
                    passes[i] = 1.2;
                } else if(passes[i] === '3') {
                    passes[i] = 1.1;
                } else {
                    passes[i] = 1;
                }
            }



            var total1 = Math.round(lang1.espbPoints * grade1 * passes[0]);
            var total2 = Math.round(lang2.espbPoints * grade2 * passes[1]);
            var total3 = Math.round(lang3.espbPoints * grade3 * passes[2]);
            var total4 = Math.round(lang4.espbPoints * grade4 * passes[3]);
            var total5 = Math.round(lang5.espbPoints * grade5 * passes[4]);
            var total6 = Math.round(lang6.espbPoints * grade6 * passes[5]);

            var total7 = Math.round(lang7.espbPoints * grade1 * passes[0]);
            var total8 = Math.round(lang8.espbPoints * grade2 * passes[1]);
            var total9 = Math.round(lang9.espbPoints * grade3 * passes[2]);
            var total10 = Math.round(lang10.espbPoints * grade4 * passes[3]);
            var total11 = Math.round(lang11.espbPoints * grade5 * passes[4]);
            var total12 = Math.round(lang12.espbPoints * grade6 * passes[5]);

            var total13 = Math.round(lang13.espbPoints * grade1 * passes[0]);
            var total14 = Math.round(lang14.espbPoints * grade2 * passes[1]);
            var total15 = Math.round(lang15.espbPoints * grade3 * passes[2]);
            var total16 = Math.round(lang16.espbPoints * grade4 * passes[3]);
            var total17 = Math.round(lang17.espbPoints * grade5 * passes[4]);
            var total18 = Math.round(lang18.espbPoints * grade6 * passes[5]);



            var totalPoints1 = Math.round(total1 + total2 + total3 + total4 + total5 + total6);
            var totalPoints2 = Math.round(total7 + total8 + total9 + total10 + total11 + total12);
            var totalPoints3 = Math.round(total13 + total14 + total15 + total16 + total17 + total18);

            if(selIndexValue === '1') {

                document.getElementById('subject-name').innerHTML = '<h2 class="text-center" style="color: #006600; text-shadow: 1px 1px 1px black;">Points earned this year:</h2><br><p class="text-center" style="font-size: 22px; color: #006600; text-shadow: 1px 1px 1px black;">'+lang1.name+': '+total1+'<br>'+lang2.name+': '+total2+'<br>'+lang3.name+': '+total3+'<br>'+lang4.name+': '+total4+'<br>'+lang5.name+': '+total5+'<br>'+lang6.name+': '+total6+'<br><br><br></p><h1 class="text-center" style="color: #006600; text-shadow: 1px 1px 1px black;">Total points earned: '+totalPoints1+'</h1>';

            } else if(selIndexValue === '2') {

                document.getElementById('subject-name').innerHTML = '<h2 class="text-center" style="color: #006600; text-shadow: 1px 1px 1px black;">Points earned this year:</h2><br><p class="text-center" style="font-size: 22px; color: #006600; text-shadow: 1px 1px 1px black;">'+lang7.name+': '+total7+'<br>'+lang8.name+': '+total8+'<br>'+lang9.name+': '+total9+'<br>'+lang10.name+': '+total10+'<br>'+lang11.name+': '+total11+'<br>'+lang12.name+': '+total12+'<br><br><br></p><h1 class="text-center" style="color: #006600; text-shadow: 1px 1px 1px black;">Total points earned: '+totalPoints2+'</h1>';

            } else if(selIndexValue === '3') {

                document.getElementById('subject-name').innerHTML = '<h2 class="text-center" style="color: #006600; text-shadow: 1px 1px 1px black;">Points earned this year:</h2><br><p class="text-center" style="font-size: 22px; color: #006600; text-shadow: 1px 1px 1px black;">'+lang13.name+': '+total13+'<br>'+lang14.name+': '+total14+'<br>'+lang15.name+': '+total15+'<br>'+lang16.name+': '+total16+'<br>'+lang17.name+': '+total17+'<br>'+lang18.name+': '+total18+'<br><br><br></p><h1 class="text-center" style="color: #006600; text-shadow: 1px 1px 1px black;">Total points earned: '+totalPoints3+'</h1>';

            }





        });


    }
    
    document.getElementById('start').addEventListener('click', startApp);
    document.getElementById('select-year').addEventListener('change', displaySelectedYear);


})();











































