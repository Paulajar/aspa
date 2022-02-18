$(document).ready(function() {

    var user = localStorage.getItem('usuario');
    document.getElementById('Hola').innerHTML = "Hola, " + user;

    $('#apagar_gz').click(function() {
        window.location.href = 'logo_animado___20.html';
    });

    $('#ajustes_g').click(function() {
        window.location.href = 'Configuraciones.html';
    });

    $('#salud').click(function() {
        window.location.href = 'Consulta_Salud___7.html';
    });

    $('#banca').click(function() {
        window.location.href = 'Consulta_Salud___7.html';
    });

    $('#custom').click(function() {
        window.location.href = 'Servicios___12.html';
    });

});