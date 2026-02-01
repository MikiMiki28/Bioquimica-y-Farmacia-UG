const data = [
 [
  {name:"Cálculo", lab:null},
  {name:"Biología Celular", lab:"Práctica de Biología Celular"},
  {name:"Química I", lab:"Práctica de Química I"},
  {name:"Física I", lab:"Práctica de Física I"},
  {name:"Anatomía", lab:null},
  {name:"Lenguaje", lab:null}
 ],
 [
  {name:"Química II", lab:"Práctica de Química II"},
  {name:"Fisiología", lab:null},
  {name:"Física II", lab:"Práctica de Física II"},
  {name:"Química Orgánica I", lab:"Práctica de Química Orgánica I"},
  {name:"Botánica Farmaceutica", lab:"Práctica de Química Botánica"},
  {name:"Metodologia de la investigación", lab:null},
  {name:"Computación I", lab:null},
  {name:"Inglés I", lab:null}
 ],
 [
  {name:"Biología Molecular", lab:null},
  {name:"Fisicoquímica", lab:null},
  {name:"Química Analítica I", lab:"Práctica de Química Analítica I"},
  {name:"Química Orgánica II", lab:"Práctica de Química Orgánica II"},
  {name:"Farmacognosia y Fitoquímica", lab:"Práctica de Farmacognosia y Fitoquímica"},
  {name:"Computación II", lab:null},
  {name:"Inglés II", lab:null}
 ],
 [
  {name:"Análisis Orgánico", lab:"Práctica de Análisis Orgánico"},
  {name:"Bioquímica I", lab:"Práctica de Bioquímica I"},
  {name:"Química Analítica II", lab:"Práctica de Química Analítica II"},
  {name:"Bioética", lab:null},
  {name:"Química Ambiental", lab:null},
  {name:"Computación III", lab:null},
  {name:"Inglés III", lab:null}
 ],
 [
  {name:"Bioquímica II", lab:"Práctica de Bioquímica II"},
  {name:"Instrumental I", lab:"Práctica de Instrumental I"},
  {name:"Legislación", lab:null},
  {name:"Gestión de Calidad", lab:null},
  {name:"Inglés IV", lab:null}
 ],
 [
  {name:"Inmunología", lab:"Práctica de Inmunología"},
  {name:"Analisis Instrumental II", lab:"Práctica de Analisis Instrumental II"},
  {name:"Microbiología I", lab:"Práctica de Microbiología I"},
  {name:"Farmacología I", lab:"Práctica de Farmacología I"},
  {name:"Tecnología Farmacéutica", lab:"Práctica de Tecnología Farmacéutica"}
 ],
 [
  {name:"Farmacología II", lab:"Práctica de Farmacología II"},
  {name:"Parasitología", lab:"Práctica de Parasitología"},
  {name:"Bioquímica de Alimentos", lab:null},
  {name:"Tecnología Farmacéutica II", lab:"Práctica de Tecnología Farmacéutica II"},
  {name:"Microbiología II", lab:"Práctica de Microbiología II"}
 ],
 [
  {name:"Análisis de Alimentos I", lab:"Práctica de Análisis de Alimentos I"},
  {name:"Fundamento de Hematología", lab:"Práctica de Fundamento de Hematología"},
  {name:"Analisis de Medicamentos I", lab:"Práctica de Analisis de Medicamento I"},
  {name:"Química Cosmética", lab:null},
  {name:"Emprendimiento e Innovación", lab:null}
 ],
 [
  {name:"Análisis Químico Clínico I", lab:"Práctica de Análisis Químico Clínico I"},
  {name:"Analisis de Medicamentos II", lab:"Práctica de Analisis de Medicamento II"},
  {name:"Tecnología de Alimentos", lab:null},
  {name:"Análisis de Alimentos II", lab:"Práctica de Análisis de Alimentos II"},
  {name:"Elaboración de Proyectos", lab:null}
 ],
 [
  {name:"Toxicología", lab:"Práctica de Toxicología"},
  {name:"Biofarmacia", lab:null,
  {name:"Farmacia Hospitalaria", lab:null},
  {name:"Análisis Clínico II", lab:"Práctica de Análisis Clínico II"},
  {name:"Unidad de Integración Curricular", lab:null}
 ]
];

const prereq = {
 "Química II": ["Química I"],
 "Fisiología": ["Anatomía"],
 "Física II": ["Cálculo","Física I"],
 "Química Orgánica I": ["Química I"],
 "Botánica Farmacéutica": ["Biologia Celular"]
 "Metodologia de la investigación": ["Lenguaje"],
 
 "Biología Molecular": ["Fisiologia"],
 "Fisicoquímica": ["Física II"],
 "Química Analítica I": ["Química II"],
 "Química Orgánica II": ["Química Orgánica I", "Química II"],
 "Farmacognosia": ["Botánica Farmacéutica"],
 "Estadistica I": ["Metodologia de la investigación"],

 "Análisis Orgánico": ["Química Orgánica II"],
 "Bioquímica I": ["Química Orgánica II", "Biología Molecular"],
 "Química Analítica II": ["Química Analítica I"],
 "Bioetica": ["Biología Molecular"],
 "Química Ambiental": ["Química Analítica I"],
 "Estadistica II": ["Estadistica I"],

 "Bioquímica II": ["Bioquímica I"],
 "Analisis Instrumental I": ["Química Analítica II", "Análisis Orgánico],
 "Legislación": ["Bioetica"],                            
 "Gestión de la calidad": ["Química Ambiental"],
 "Metodologia de la investigación II": ["Estadistica II"],

 "Inmunología": ["Bioquímica II"],
 "Análisis Instrumental II": ["Análisis Instrumental I"],
 "Microbiología I": ["Bioquimica II"],
 "Farmacología I": ["Bioquímica II"],
 "Tecnología Farmacéutica": ["Gestión de la calidad"],

 "Farmacología II": ["Farmacología I"],
 "Parasitología": ["Inmunologia"],
 "Bioquímica de Alimentos": ["Microbiología I", "Bioquímica II"],
 "Tecnología Farmacéutica II": ["Tecnología Farmacéutica I"],
 "Microbiología II": ["Microbiología I"],

 "Análisis de Alimentos I": ["Bioquímica de Alimentos", "Análisis Instrumental II"],
 "Fundamentos de Hematología": ["Parasitología", "Inmunología"],
 "Análisis de Medicamentos I": ["Análisis Instrumental II", "Tecnología Farmacéutica II"],
 "Química Cosmética": ["Tecnología Farmacéutica II"],
 "Emprendimiento e Innovación": ["Tecnología Farmacéutica II"],

 "Análisis Químico Clínico I": ["Análisis Instrumental II","Fundamentos de Hematología"],
 "Análisis de Medicamentos II": ["Análisis de Medicamentos I"],
 "Tecnología de Alimentos": ["Análisis de Alimentos I"],
 "Análisis de Alimentos II": ["Análisis de Alimentos I"],
 "Elaboración de Proyectos": ["Emprendimiento e Innovación"],

 "Toxicología": ["Análisis Químico Clínico I"],
 "Biofarmacia": [ "Análisis de Medicamentos II"],
 "Farmacia Hospitalaria": [ "Análisis de Medicamentos II"],
 "Análisis Químico Clínico II": ["Análisis Químico Clínico I"],
 "Unidad de integración curricular": ["Análisis Químico Clínico I",  "Análisis de Medicamentos II", "Tecnología de Alimentos", "Análisis de Alimentos II", "Elaboración de Proyectos"]
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
