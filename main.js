document.getElementById('miFormulario').onsubmit = async function (e) {
    e.preventDefault();

    nombre = document.getElementById('nombre').value;

    response = await fetch(`/cgi-bin/funciones.cgi?operacion=suma&n=${nombre}`);
    data = await response.text();
    document.getElementById('resultado').innerHTML = `Bienvenido, ${data}`;
};
