var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar conexión
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});