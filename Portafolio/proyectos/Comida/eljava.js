    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const increaseProgressButton1 = document.getElementById("increase-progress1");
    const increaseProgressButton2 = document.getElementById("increase-progress2");
    const increaseProgressButton3 = document.getElementById("increase-progress3");

    let bar1Value = 0;
    let bar2Value = 0;
    let bar3Value = 0;

    increaseProgressButton1.addEventListener("click", function() {
    bar1Value = Math.min(bar1Value + 2, 100);
    bar2Value = Math.max(bar2Value - 1, 0);
    bar3Value = Math.max(bar3Value - 1, 0);

    bar1.querySelector(".progress-value").style.width = bar1Value + "%";
    bar1.querySelector(".progress-value").innerHTML = bar1Value + "%";

    bar2.querySelector(".progress-value").style.width = bar2Value + "%";
    bar2.querySelector(".progress-value").innerHTML = bar2Value + "%";

    bar3.querySelector(".progress-value").style.width = bar3Value + "%";
    bar3.querySelector(".progress-value").innerHTML = bar3Value + "%";
    });

    increaseProgressButton2.addEventListener("click", function() {
    bar2Value = Math.min(bar2Value + 2, 100);
    bar1Value = Math.max(bar1Value - 1, 0);
    bar3Value = Math.max(bar3Value - 1, 0);

    bar1.querySelector(".progress-value").style.width = bar1Value + "%";
    bar1.querySelector(".progress-value").innerHTML = bar1Value + "%";

    bar2.querySelector(".progress-value").style.width = bar2Value + "%";
    bar2.querySelector(".progress-value").innerHTML = bar2Value + "%";

    bar3.querySelector(".progress-value").style.width = bar3Value + "%";
    bar3.querySelector(".progress-value").innerHTML = bar3Value + "%";
    });

    increaseProgressButton3.addEventListener("click", function() {
    bar3Value = Math.min(bar3Value + 2, 100);
    bar1Value = Math.max(bar1Value - 1, 0);
    bar2Value = Math.max(bar2Value - 1, 0);

    bar1.querySelector(".progress-value").style.width = bar1Value + "%";
    bar1.querySelector(".progress-value").innerHTML = bar1Value + "%";

    bar2.querySelector(".progress-value").style.width = bar2Value + "%";
    bar2.querySelector(".progress-value").innerHTML = bar2Value + "%";

    bar3.querySelector(".progress-value").style.width = bar3Value + "%";
    bar3.querySelector(".progress-value").innerHTML = bar3Value + "%";
    });

    const abridor_cerrador = document.querySelector('.abrir_menu');
    const menu = document.querySelector('.navegador1');
    const mod_menu = document.querySelector('.bar1');
    const mod_menu1 = document.querySelector('.bar2');


    abridor_cerrador.addEventListener('click', function() {
        menu.classList.toggle('SDM');
    });

    abridor_cerrador.addEventListener("click", function() {
        mod_menu.classList.toggle('cambio')
    });
        
    abridor_cerrador.addEventListener("click", function() {
        mod_menu1.classList.toggle('cambio2')
    });