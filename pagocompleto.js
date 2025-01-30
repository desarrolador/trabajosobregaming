    document.getElementById('mercadopago-link').addEventListener('click', function(event) {
        event.preventDefault();
        
        // Obtener todos los productos
        const products = document.querySelectorAll('.product-1');
        let totalAmount = 0;

        // Calcular el monto total
        products.forEach(product => {
            const price = parseFloat(product.getAttribute('data-price'));
            totalAmount += price;
        });

        // Redirigir a Mercado Pago con el monto total
        const mercadoPagoUrl = `https://www.mercadopago.com/miguel.731.durara.mp?amount=${totalAmount}`;
        window.location.href = mercadoPagoUrl;
    });
