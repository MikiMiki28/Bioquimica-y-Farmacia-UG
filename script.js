const data = [
 [
  {name:"1. Cálculo", lab:"Práctica de Cálculo"},
  {name:"2. Biología Celular", lab:"Práctica de Biología Celular"},
  {name:"3. Química I", lab:"Práctica de Química I"},
  {name:"4. Física I", lab:"Práctica de Física I"},
  {name:"5. Anatomía", lab:"Práctica de Anatomía"},
  {name:"6. Lenguaje", lab:null}
 ],
 [
  {name:"7. Química II", lab:"Práctica de Química II"},
  {name:"8. Fisiología", lab:"Práctica de Fisiología"},
  {name:"9. Física II", lab:"Práctica de Física II"},
  {name:"10. Orgánica I", lab:"Práctica de Orgánica I"},
  {name:"11. Botánica", lab:"Práctica de Botánica"},
  {name:"12. Computación I", lab:null},
  {name:"13. Inglés I", lab:null}
 ],
 [
  {name:"14. Biología Molecular", lab:"Práctica de Biología Molecular"},
  {name:"15. Fisicoquímica", lab:"Práctica de Fisicoquímica"},
  {name:"16. Analítica I", lab:"Práctica de Analítica I"},
  {name:"17. Orgánica II", lab:"Práctica de Orgánica II"},
  {name:"18. Farmacognosia", lab:"Práctica de Farmacognosia"},
  {name:"19. Computación II", lab:null},
  {name:"20. Inglés II", lab:null}
 ],
 [
  {name:"21. Análisis Orgánico", lab:"Práctica de Análisis Orgánico"},
  {name:"22. Bioquímica I", lab:"Práctica de Bioquímica I"},
  {name:"23. Analítica II", lab:"Práctica de Analítica II"},
  {name:"24. Bioética", lab:null},
  {name:"25. Química Ambiental", lab:"Práctica de Química Ambiental"},
  {name:"26. Computación III", lab:null},
  {name:"27. Inglés III", lab:null}
 ],
 [
  {name:"28. Bioquímica II", lab:"Práctica de Bioquímica II"},
  {name:"29. Instrumental I", lab:"Práctica de Instrumental I"},
  {name:"30. Legislación", lab:null},
  {name:"31. Gestión de Calidad", lab:null},
  {name:"32. Inglés IV", lab:null}
 ],
 [
  {name:"33. Inmunología", lab:"Práctica de Inmunología"},
  {name:"34. Instrumental II", lab:"Práctica de Instrumental II"},
  {name:"35. Microbiología I", lab:"Práctica de Microbiología I"},
  {name:"36. Farmacología I", lab:"Práctica de Farmacología I"},
  {name:"37. Tecnología Farmacéutica", lab:"Práctica de Tecnología Farmacéutica"}
 ],
 [
  {name:"38. Farmacología II", lab:"Práctica de Farmacología II"},
  {name:"39. Parasitología", lab:"Práctica de Parasitología"},
  {name:"40. Bioquímica de Alimentos", lab:"Práctica de Bioquímica de Alimentos"},
  {name:"41. Tecnología Farmacéutica II", lab:"Práctica de Tecnología Farmacéutica II"},
  {name:"42. Microbiología II", lab:"Práctica de Microbiología II"}
 ],
 [
  {name:"43. Análisis de Alimentos I", lab:"Práctica de Análisis de Alimentos I"},
  {name:"44. Hematología", lab:"Práctica de Hematología"},
  {name:"45. Medicamentos I", lab:null},
  {name:"46. Química Cosmética", lab:"Práctica de Química Cosmética"},
  {name:"47. Emprendimiento", lab:null}
 ],
 [
  {name:"48. Análisis Clínico I", lab:"Práctica de Análisis Clínico I"},
  {name:"49. Medicamentos II", lab:null},
  {name:"50. Tecnología de Alimentos", lab:"Práctica de Tecnología de Alimentos"},
  {name:"51. Análisis de Alimentos II", lab:"Práctica de Análisis de Alimentos II"},
  {name:"52. Proyectos", lab:null}
 ],
 [
  {name:"53. Toxicología", lab:"Práctica de Toxicología"},
  {name:"54. Biofarmacia", lab:"Práctica de Biofarmacia"},
  {name:"55. Farmacia Hospitalaria", lab:null},
  {name:"56. Análisis Clínico II", lab:"Práctica de Análisis Clínico II"},
  {name:"57. Integración Curricular", lab:null}
 ]
];

const prereq = {
 "7. Química II":["3. Química I"],
 "10. Orgánica I":["7. Química II"],
 "17. Orgánica II":["10. Orgánica I"],
 "22. Bioquímica I":["17. Orgánica II"],
 "28. Bioquímica II":["22. Bioquímica I"],
 "36. Farmacología I":["28. Bioquímica II"],
 "38. Farmacología II":["36. Farmacología I"],
 "48. Análisis Clínico I":["44. Hematología"]
};

const malla = document.getElementById("malla");
let aprobadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");

let total = 0;
data.forEach(s => s.forEach(m => total++));

function puede(mat){
 if(!prereq[mat]) return true;
 return prereq[mat].every(p=>aprobadas.includes(p));
}

data.forEach((sem,i)=>{
 const col=document.createElement("div");
 col.className="semestre";
 col.innerHTML=`<h3>Semestre ${i+1}</h3>`;

 sem.forEach(obj=>{
  const d=document.createElement("div");
  d.className="materia";

  let txt = obj.name;
  if(obj.lab) txt += `\n${obj.lab}`;

  d.innerText = txt;

  if(aprobadas.includes(obj.name)) d.classList.add("aprobada");
  if(!puede(obj.name)) d.classList.add("bloqueada");

  d.onclick=()=>toggle(d,obj.name);
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
  aprobadas = aprobadas.filter(m=>m!==mat);
 }

 localStorage.setItem("aprobadas",JSON.stringify(aprobadas));
 updateProgress();
 setTimeout(()=>location.reload(),120);
}

function updateProgress(){
 const percent=Math.round((aprobadas.length/total)*100);
 document.getElementById("progress").innerText=`Avance: ${percent}%`;
}

updateProgress();
