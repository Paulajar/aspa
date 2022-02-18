$(document).ready(function() {

    $('#flecha-curva').click(function() {
        window.location.href = 'Inicio_de_Sesi_n___3.html';
    });

    //ingreso
    $('#registrar').click(function() {

        var nombres = document.getElementById('nombres').value;

        //almacenar usuario que ingresa
        var usuario = document.getElementById('usuario').value;
        localStorage.setItem('usuario', usuario)

        //almacenar contraseña
        var passwd = document.getElementById('passwd').value;
        localStorage.setItem('passwd', passwd)

        //grabar voz
        var voz = document.getElementById('Registra_tu_voz').value;

        if (nombres != '' && usuario != '' && passwd != '' && voz == "Gracias, tu voz ha sido grabada") {

            document.getElementById("msg").innerHTML = "Registrado correctamente";

            setTimeout(function() {
                window.location.href = 'Inicio_de_Sesi_n___3.html';
            }, 2000);

        } else if (nombres === '') {
            document.getElementById("msg").innerHTML = "Por favor ingrese un nombre";
        } else if (usuario === '') {
            document.getElementById("msg").innerHTML = "Por favor ingrese un usuario";
        } else if (passwd === '') {
            document.getElementById("msg").innerHTML = "Por favor ingrese la contraseña";
        } else if (voz === 'Registra tu voz') {
            document.getElementById("msg").innerHTML = "Por favor registre su voz";
        }

    });

    //ejecutar acción cuando den clic sobre el microfono
    $('#Elipse_1').click(function() {

        var texto = "Gracias, tu voz ha sido grabada";
        document.getElementById('Registra_tu_voz').innerHTML = texto;
        document.getElementById('Registra_tu_voz').style.left = "40px";
        $('#Di_tu_nombre').empty();

        var circulo = document.querySelector('#Elipse_1');
        circulo.style.fill = 'rgba(255,0,78,1)';

    });

    //ejecutar acción cuando den clic sobre el microfono
    $('#microfono').click(function() {

        var texto = "Gracias, tu voz ha sido grabada";
        document.getElementById('Registra_tu_voz').innerHTML = texto;
        document.getElementById('Registra_tu_voz').style.left = "40px";
        $('#Di_tu_nombre').empty();

        var circulo = document.querySelector('#Elipse_1');
        circulo.style.fill = 'rgba(255,0,78,1)';

    });

});