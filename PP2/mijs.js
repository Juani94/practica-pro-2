        function validarFormulario() {


            
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