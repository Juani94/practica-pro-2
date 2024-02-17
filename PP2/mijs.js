document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('paymentForm').addEventListener('submit', validarFormulario);
});        
        function validarFormulario() {
          event.preventDefault();//Evita que el formulario se envie si hay errores

            
            let nombreTitular = document.getElementById('nombreTitular').value;
            let email = document.getElementById('email').value;
            let numeroTarjeta = document.getElementById('numeroTarjeta').value;
            let fechaVencimiento = document.getElementById('fechaVencimiento').value;



            let errorNombreTitular = document.getElementById('errorNombreTitular');
            let errorEmail = document.getElementById('errorEmail');
            let errorNumeroTarjeta = document.getElementById('errorNumeroTarjeta');
            let errorFechaVencimiento = document.getElementById('errorFechaVencimiento');
            





            
            errorNombreTitular.innerHTML = "";
            errorEmail.innerHTML = "";
            errorNumeroTarjeta.innerHTML = "";
            errorFechaVencimiento.innerHTML = "";




            if (nombreTitular === "") {
                errorNombreTitular.innerHTML = "Por favor, ingresa el nombre del titular.";
                return false;
            }

            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorEmail.innerHTML = "Por favor, ingresa un correo electrónico válido.";
                return false;
            }

                let tarjetaRegex = /^\d{16}$/;
            if (!tarjetaRegex.test(numeroTarjeta)) {
                errorNumeroTarjeta.innerHTML = "Por favor, ingresa un número de tarjeta válido.";
                return false;
            }

                let fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!fechaRegex.test(fechaVencimiento)) {
                errorFechaVencimiento.innerHTML = "Por favor, ingresa una fecha de vencimiento válida (MM/AA).";
                return false;
            }

                    // Si todas las validaciones son exitosas, se enviará el formulario
            alert("Pago exitoso. En un entorno real, se enviaría la información de pago de forma segura al servidor.");
            return true;
        }
        document.getElementById('paymentForm').addEventListener('submit', validarFormulario);

  function mostrarDescripcion(idDescripcion) {
    let descripcion = document.getElementById(idDescripcion);
    if (descripcion.classList.contains('w3-hide')) {
      descripcion.classList.remove('w3-hide');
    } else {
      descripcion.classList.add('w3-hide');
    }
  }

  // Objeto para almacenar el carrito de compras
  let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  
    // Obtener el elemento del DOM que representa el producto
    const producto = document.getElementById(idProducto);
    
    // Obtener información del producto
    const precio = parseFloat(producto.getAttribute('data-precio'));
    const disponible = parseInt(producto.getAttribute('data-disponible'));
    const cantidadInput = producto.querySelector('input[type="number"]');
    const cantidad = parseInt(cantidadInput.value);

    // Verificar si hay suficiente disponibilidad del producto
    if (cantidad > disponible) {
        alert('No hay suficiente disponibilidad de este producto.');
        return;
    }

    // Agregar el producto al carrito
    const productoEnCarrito = {
        id: idProducto,
        nombre: producto.querySelector('h3').textContent,
        precio: precio,
        cantidad: cantidad
    };
    carrito.push(productoEnCarrito);

    // Actualizar la visualización del total del carrito
    actualizarTotal();
}

// Función para actualizar el total del carrito
function actualizarTotal() {
    // Calcular el total sumando el precio de cada producto en el carrito
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    // Mostrar el total en el DOM
    const totalElement = document.getElementById('total');
    totalElement.textContent = total.toFixed(2);
}
function realizarPago() {
  // Obtener el total del carrito
  let total = parseInt(document.getElementById('total').innerText);

  // Comprobar si el total es mayor que cero
  if (total > 0) {
    // Simular el pago exitoso
    alert('¡Pago realizado con éxito por un total de $' + total + '!');
    // Reiniciar el total del carrito
    document.getElementById('total').innerText = '0';
    // Reiniciar la cantidad de productos en el carrito
    reiniciarCantidadProductos();
  } else {
    // Si el total es cero, mostrar un mensaje de error
    alert('El carrito está vacío. No se puede realizar el pago.');
  }
}

function reiniciarCantidadProductos() {
  // Reiniciar la cantidad de cada producto en el carrito a 1
  document.getElementById('cantidad1').value = '1';
  document.getElementById('cantidad2').value = '1';
  document.getElementById('cantidad3').value = '1';
  document.getElementById('cantidad4').value = '1';
  document.getElementById('cantidad5').value = '1';
  document.getElementById('cantidad6').value = '1';
}