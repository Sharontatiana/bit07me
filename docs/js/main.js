"use ";

window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("cs").classList.add("barra-progreso2");
    document.getElementById("js").classList.add("barra-progreso3");
    document.getElementById("rc").classList.add("barra-progreso4");
  }
}
