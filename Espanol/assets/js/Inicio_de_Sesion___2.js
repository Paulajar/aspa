$(document).ready(function() {

    $('#flecha-curva_fr').click(function() {
        window.location.href = 'Inicio_de_Sesi_n___3.html';
    });

    //ejecutar acción cuando den clic sobre el microfono
    $('#Elipse_1_fs').click(function() {

        var texto = "Escuchando tu voz";
        document.getElementById('Di_tu_nombre_fw').innerHTML = texto;
        $('#Inicia_usando_tu_voz').empty();

        var circulo = document.querySelector('#Elipse_1_fs');
        circulo.style.fill = 'rgba(255,0,78,1)';

        //inicio de sesión 
        setTimeout(function() {
            window.location.href = 'Men__de_servicios___9.html';
        }, 4000);

    });

    //ejecutar acción cuando den clic sobre el microfono
    $('#microfono_fu').click(function() {

        var texto = "Escuchando tu voz";
        document.getElementById('Di_tu_nombre_fw').innerHTML = texto;
        $('#Inicia_usando_tu_voz').empty();

        var circulo = document.querySelector('#Elipse_1_fs');
        circulo.style.fill = 'rgba(255,0,78,1)';
        // circulo.setAttribute('style', 'fill: rgba(255,0,78,1)');

        //inicio de sesión 
        setTimeout(function() {
            window.location.href = 'Men__de_servicios___9.html';
        }, 4000);

    });

});