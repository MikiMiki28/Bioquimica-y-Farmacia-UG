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

const malla = document.getElementById("malla");
let aprobadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");
let total = data.flat().length;

function semestreDesbloqueado(i){
  if(i===0) return true;
  const prev = data[i-1];
  return prev.every(m => aprobadas.includes(m));
}

data.forEach((sem,i)=>{
 const col=document.createElement("div");
 col.className="semestre";
 col.innerHTML=`<h3>Semestre ${i+1}</h3>`;

 const activo = semestreDesbloqueado(i);

 sem.forEach(mat=>{
  const d=document.createElement("div");
  d.className="materia";
  d.innerText=mat;

  if(aprobadas.includes(mat)) d.classList.add("aprobada");

  if(!activo){
    d.classList.add("bloqueada");
  }

  d.onclick=()=>toggle(d,mat,activo);
  col.appendChild(d);
 });

 malla.appendChild(col);
});

function toggle(el,mat,activo){
 if(!activo) return;

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
 const percent = Math.round((aprobadas.length/total)*100);
 document.getElementById("progress").innerText = `Avance: ${percent}%`;
}

updateProgress();
