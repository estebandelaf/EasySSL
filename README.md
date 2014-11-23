EasySSL
=======

Easy SSL o EasySSL es una herramienta para la creación y emisión de certificados
firmados por una CA (Certification Authority) vía web. Utiliza un formato de
directorios y configuración idéntico al usado por OpenSSL y es configurable para
ser utilizado por cualquier usuario y en cualquier ruta del sistema.

Características
---------------

- No requiere acceso a root.
- Creación de una CA.
- Emite certificados firmados por la CA.
- Certificados son comprimidos y encriptados al ser descargados.
- Certificados son guardados en el servidor, por lo cual un usuario puede
recuperarlo en cualquier momento.
- Posee una interfaz web muy simple e intuitiva.
- Permite el uso vía CLI en modo no interactivo (por defecto) y en modo
interactivo.

Requerimientos
--------------

- openssl
- gpg
- apache, php y suphp (para interfaz web)

Modo de uso
-----------

El programa, vía CLI, se debe ejecutar en el directorio que contiene el archivo
index.php, para ver las opciones disponibles utilice:

	$ ./easyssl/easyssl --help

### Inicialización de la CA

	$ ./easyssl/easyssl --init

### Destrucción de la CA

	$ ./easyssl/easyssl --destroy
