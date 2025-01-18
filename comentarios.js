document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    // Aquí puedes agregar el código para enviar el comentario a tu base de datos
    console.log('Comentario enviado:', comment);
});




