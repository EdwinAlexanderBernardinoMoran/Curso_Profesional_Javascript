/*

SCRIPTS EXTERNOS O EMBEBIDOS:
Este Script trae un enlace externo.

<script async src="https:/googletagmanager.com/gtag/js?id=U-123456-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        } gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID')
    </script>

*/

// Los Script Asincronos : El atributo "async" en la etiqueta script es utilizado para indicar al navegador que un script debe ser descargado y ejecutado de manera asíncrona, es decir, de manera independiente al flujo normal de la página y sin bloquear la carga de la página. Con esto, se puede mejorar la velocidad de carga de la página y la experiencia del usuario, ya que el script no espera a que el resto de la página se cargue antes de descargarse y ejecutarse.

// Atributo defer: El atributo "defer" en la etiqueta script indica al navegador que un script debe ser descargado y ejecutado después de que la página haya terminado de cargar, es decir, después de que todos los elementos HTML hayan sido parseados y renderizados. Con esto, se puede evitar que el script bloque la carga de la página y mejorar la velocidad de carga y la experiencia del usuario. Además, el uso de "defer" garantiza que los scripts se ejecuten en el orden en que aparecen en la página.