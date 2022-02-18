$(document).ready(function() {

    //ejecutar acción cuando den clic sobre el microfono
    $('#Elipse_1_hd').click(function() {

        var msg = "Escuchando tu solicitud...";
        document.getElementById('Di_tu_solicitud').innerHTML = msg;

        var circulo = document.querySelector('#Elipse_1_hd');
        circulo.style.fill = 'rgba(255,0,78,1)';

        //Resultados consulta
        setTimeout(function() {
            window.location.href = 'Resultados_Salud___4.html';
        }, 3000);

    });

    //ejecutar acción cuando den clic sobre el microfono
    $('#microfono_he').click(function() {

        var msg = "Escuchando tu solicitud...";
        document.getElementById('Di_tu_solicitud').innerHTML = msg;
        document.getElementById('Di_tu_solicitud').style.left = '70px';

        var circulo = document.querySelector('#Elipse_1_hd');
        circulo.style.fill = 'rgba(255,0,78,1)';

        //Resultados consulta
        setTimeout(function() {
            window.location.href = 'Resultados_Salud___4.html';
        }, 3000);

    });

    $('#flecha-curva2').click(function() {
        window.location.href = 'Men__de_servicios___9.html';
    });

    $('#apagar_g').click(function() {
        window.location.href = 'logo_animado___20.html';
    });

    $('#ajustes_ha').click(function() {
        window.location.href = 'Configuraciones.html';
    });

    $('#input_req').click(function() {
        window.location.href = 'Resultados_Salud___4.html';
    });



})