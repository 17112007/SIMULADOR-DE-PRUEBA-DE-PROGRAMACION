function cambiar(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("activo");
  });
  const actual = document.getElementById(id);
  if (actual) actual.classList.add("activo");
}

function ingresar() {
  const nombre = document.getElementById("nombre").value.trim();
  if (!nombre) {
    alert("Por favor ingresa tu nombre");
    return;
  }

  document.body.classList.remove("bloqueado");
  document.getElementById("fondo").style.display = "none";
  document.getElementById("saludo").textContent = "Bienvenido/a " + nombre;
}

const correctasPreguntas = {
  p1: "b",
  p2: "b",
  p3: "b",
  p4: "b",
  p5: "b"
};

const correctasLogica = {
  p1: "b",
  p2: "b",
  p3: "b",
  p4: "b",
  p5: "b",
  p6: "b",
  p7: "b",
  p8: "a",
  p9: "b",
  p10: "a"
};

function evaluar() {
  evaluarFormulario("formulario", correctasPreguntas);
}

function revisar() {
  evaluarFormulario("formLogica", correctasLogica);
}

function evaluarFormulario(formId, respuestasCorrectas) {
  let correctas = 0;
  let incorrectas = 0;
  let vacias = 0;
  let salida = "<h3>Resultados</h3>";

  for (let pregunta in respuestasCorrectas) {
    const seleccionada = document.querySelector(
      `#${formId} input[name="${pregunta}"]:checked`
    );

    if (!seleccionada) {
      vacias++;
      salida += `<p class="vacia">${pregunta}: Sin responder</p>`;
    } else if (seleccionada.value === respuestasCorrectas[pregunta]) {
      correctas++;
      salida += `<p class="correcta">${pregunta}: Correcta</p>`;
    } else {
      incorrectas++;
      salida += `<p class="incorrecta">${pregunta}: Incorrecta</p>`;
    }
  }

  salida += `
    <hr>
    <p>✅ Correctas: ${correctas}</p>
    <p>❌ Incorrectas: ${incorrectas}</p>
    <p>⚠️ Sin responder: ${vacias}</p>
  `;

  document.querySelector("#resultados #revision").innerHTML = salida;

  cambiar("resultados");
}
