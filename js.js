/**
 * Verifica si un objeto esta vacio
 * @param obj Objeto que se desea verificar que sea vacio
 * @return True si el objeto pasado es vacio
 * @author http://frugalcoder.us/post/2010/02/15/js-is-empty.aspx
 * @version 2011-04-17
 */
function vacio (obj) {
	if (typeof obj == 'undefined' || obj === null || obj === '') return true;
	if (typeof obj == 'number' && isNaN(obj)) return true;
	if (obj instanceof Date && isNaN(Number(obj))) return true;
	return false;
}

function validarNuevo (formulario) {
	// nombre
	if(vacio(formulario.REQUEST_NAME.value)) {
                alert('Debe indicar un nombre\nEjemplo: Example S.A.');
                formulario.REQUEST_NAME.focus();
                return false;
        }
	// pais
	if(vacio(formulario.REQUEST_C.value)) {
                alert('Debe indicar un país\nEjemplo: CL');
                formulario.REQUEST_C.focus();
                return false;
        }
	formulario.REQUEST_C.value = formulario.REQUEST_C.value.toUpperCase();
	var c = /^[A-Z]{2}$/;
	if(!c.test(formulario.REQUEST_C.value)) {
		alert('Código de país es de 2 letras\nEjemplo: CL');
                formulario.REQUEST_C.focus();
                return false;
	}
	// region
	if(vacio(formulario.REQUEST_ST.value)) {
                alert('Debe indicar una región\nEjemplo: Metropolitana');
                formulario.REQUEST_ST.focus();
                return false;
        }
	// ciudad
	if(vacio(formulario.REQUEST_L.value)) {
                alert('Debe indicar una ciudad\nEjemplo: Santiago');
                formulario.REQUEST_L.focus();
                return false;
        }
	// unidad organizacional
	if(vacio(formulario.REQUEST_OU.value)) {
                alert('Debe indicar una unidad organizacional\nEjemplo: Informática');
                formulario.REQUEST_OU.focus();
                return false;
        }
	// dominio
	if(vacio(formulario.REQUEST_CN.value)) {
                alert('Debe indicar un dominio\nEjemplo: example.com');
                formulario.REQUEST_CN.focus();
                return false;
        }
	var domain = /^[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
	if (!domain.test(formulario.REQUEST_CN.value)) {
		alert('Ingrese un dominio válido\nEjemplo: example.com');
                formulario.REQUEST_CN.focus();
                return false;
	}
	// email
	if(vacio(formulario.REQUEST_emailAddress.value)) {
                alert('Debe indicar un correo electrónico\nEjemplo: webmaster@example.com');
                formulario.REQUEST_emailAddress.focus();
                return false;
        }
	var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
	if (!email.test(formulario.REQUEST_emailAddress.value)) {
		alert('Ingrese una dirección de correo válida\nEjemplo: webmaster@example.com');
                formulario.REQUEST_emailAddress.focus();
                return false;
	}
	// contraseñas
	if(vacio(formulario.REQUEST_PASSWORD1.value)) {
		alert('Debe especificar una contraseña');
		formulario.REQUEST_PASSWORD1.focus();
		return false;
	}
	if(vacio(formulario.REQUEST_PASSWORD2.value)) {
		alert('Debe repetir la contraseña');
		formulario.REQUEST_PASSWORD2.focus();
		return false;
	}
	if(formulario.REQUEST_PASSWORD1.value != formulario.REQUEST_PASSWORD2.value) {
		alert('Contraseñas indicadas no coinciden');
		formulario.REQUEST_PASSWORD1.value = '';
		formulario.REQUEST_PASSWORD2.value = '';
		formulario.REQUEST_PASSWORD1.focus();
		return false;
	}
	// todo ok
	return true;
}

function validarDescarga (formulario) {
	// no se ha indicado el formulario
	if(vacio(formulario.REQUEST_CN.value)) {
		alert('Debe especificar un dominio');
		formulario.REQUEST_CN.focus();
		return false;
	}
	// todo ok
	return true;
}

