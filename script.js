const data = [
 ["1. Cálculo","2. Biología Celular","3. Química I","4. Física I","5. Anatomía","6. Lenguaje"],
 ["7. Química II","8. Fisiología","9. Física II","10. Orgánica I","11. Botánica","12. Computación I","13. Inglés I"],
 ["14. Biología Molecular","15. Fisicoquímica","16. Analítica I","17. Orgánica II","18. Farmacognosia","19. Computación II","20. Inglés II"],
 ["21. Análisis Orgánico","22. Bioquímica I","23. Analítica II","24. Bioética","25. Química Ambiental","26. Computación III","27. Inglés III"],
 ["28. Bioquímica II","29. Instrumental I","30. Legislación","31. Gestión de Calidad","32. Inglés IV"],
 ["33. Inmunología","34. Instrumental II","35. Microbiología I","36. Farmacología I","37. Tecnología Farmacéutica"],
 ["38. Farmacología II","39. Parasitología","40. Bioquímica de Alimentos","41. Tecnología Farmacéutica II","42. Microbiología II"],
 ["43. Análisis de Alimentos I","44. Hematología","45. Medicamentos I","46. Química Cosmética","47. Emprendimiento"],
 ["48. Análisis Clínico I","49. Medicamentos II","50. Tecnología de Alimentos","51. Análisis de Alimentos II","52. Proyectos"],
 ["53. Toxicología","54. Biofarmacia","55. Farmacia Hospitalaria","56. Análisis Clínico II","57. Integración Curricular"]
];

const info = {
 "1. Cálculo":"Herramientas matemáticas para análisis científico",
 "3. Química I":"Fundamentos de química general",
 "10. Orgánica I":"Estructura de compuestos orgánicos",
 "22. Bioquímica I":"Procesos químicos de los seres vivos",
 "33. Inmunología":"Sistema inmunológico y defensa",
 "53. Toxicología":"Efectos de sustancias en el organismo"
};

const prereq = {
 "7. Química II":["3. Química I"],
 "10. Orgánica I":["7. Química II"],
 "17. Orgánica II":["10. Orgánica I"],
 "22. Bioquímica I":["17. Orgánica II"],
 "28. Bioquímica II":["22. Bioquímica I"],
 "36. Farmacología I":["28. Bioquímica II"],
 "38. Farmacología II":["36. Farmacología I"]
};

const malla = document.getElementById("malla");
let aprobadas = JSON.parse(localStorage.getItem("aprobadas")||"[]");
let total = 0;

data.forEach((sem,i)=>{
 const col=document.createElement("div");
 col.className="semestre";
 col.innerHTML=`<h3>Semestre ${i+1}</h3>`;

 sem.forEach(mat=>{
  total++;
  const d=document.createElement("div");
  d.className="materia";
  d.innerText=mat;

  if(aprobadas.includes(mat)) d.classList.add("aprobada");

  if(prereq[mat] && !prereq[mat].every(p=>aprobadas.includes(p))){
    d.classList.add("bloqueada");
  }

  d.onclick=()=>toggle(d,mat);
  d.ondblclick=()=>showInfo(mat);

  col.appendChild(d);
 });

 malla.appendChild(col);
});

function toggle(el,mat){
 if(el.classList.contains("bloqueada")) return;

 el.classList.toggle("aprobada");

 if(el.classList.contains("aprobada")){
  if(!aprobadas.includes(mat)) aprobadas.push(mat);
 } else {
  aprobadas=aprobadas.filter(m=>m!==mat);
 }

 localStorage.setItem("aprobadas",JSON.stringify(aprobadas));
 updateProgress();
 setTimeout(()=>location.reload(),200);
}

function updateProgress(){
 const percent=Math.round((aprobadas.length/total)*100);
 document.getElementById("progress").innerText=`Avance: ${percent}%`;
}

function showInfo(mat){
 document.getElementById("modal-title").innerText=mat;
 document.getElementById("modal-info").innerText=info[mat] || "Materia del pensum de Bioquímica y Farmacia";
 document.getElementById("modal").style.display="block";
}

function closeModal(){
 document.getElementById("modal").style.display="none";
}

updateProgress();
