const data = [
  ["Cálculo","Biología Celular","Química I","Física I","Anatomía","Lenguaje"],
  ["Química II","Fisiología","Física II","Orgánica I","Botánica","Computación I","Inglés I"],
  ["Biología Molecular","Fisicoquímica","Analítica I","Orgánica II","Farmacognosia","Computación II","Inglés II"],
  ["Análisis Orgánico","Bioquímica I","Analítica II","Bioética","Química Ambiental","Computación III","Inglés III"],
  ["Bioquímica II","Instrumental I","Legislación","Gestión Calidad","Inglés IV"],
  ["Inmunología","Instrumental II","Microbiología I","Farmacología I","Tecnología Farmacéutica"],
  ["Farmacología II","Parasitología","Bioquímica Alimentos","Tecnología Farmacéutica II","Microbiología II"],
  ["Análisis Alimentos I","Hematología","Medicamentos I","Química Cosmética","Emprendimiento"],
  ["Análisis Clínico I","Medicamentos II","Tecnología Alimentos","Análisis Alimentos II","Proyectos"],
  ["Toxicología","Biofarmacia","Farmacia Hospitalaria","Análisis Clínico II","Integración Curricular"]
];

const malla = document.getElementById("malla");
let total = 0;
let aprobadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");

data.forEach((sem, i) => {
  const col = document.createElement("div");
  col.className="semestre";
  col.innerHTML = `<h3>Semestre ${i+1}</h3>`;

  sem.forEach(mat => {
    total++;
    const d = document.createElement("div");
    d.className="materia";
    d.innerText = mat;

    if(aprobadas.includes(mat)) d.classList.add("aprobada");

    d.onclick = () => toggle(d, mat);
    d.ondblclick = () => showInfo(mat);

    col.appendChild(d);
  });

  malla.appendChild(col);
});

function toggle(el, mat){
  el.classList.toggle("aprobada");
  if(el.classList.contains("aprobada")) aprobadas.push(mat);
  else aprobadas = aprobadas.filter(m => m!==mat);

  localStorage.setItem("aprobadas",JSON.stringify(aprobadas));
  updateProgress();
}

function updateProgress(){
  const percent = Math.round((aprobadas.length/total)*100);
  document.getElementById("progress").innerText = `Avance: ${percent}%`;
}

function showInfo(mat){
  document.getElementById("modal-title").innerText = mat;
  document.getElementById("modal-info").innerText = "Materia del pensum de Bioquímica y Farmacia";
  document.getElementById("modal").style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

updateProgress();
