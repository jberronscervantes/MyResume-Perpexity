// Datos reales extraídos y resumidos del CV y LinkedIn
const timelineData = [
  // Experiencia profesional y formación (mezclada)
  { año: "Abr 2023 – Actualidad", titulo: "Técnico I", entidad: "Instituto Cervantes", tipo: "Experiencia",
    detalle: "Dirección de proyectos de transformación digital, liderazgo y análisis funcional." },
  { año: "Ene 2023 – Abr 2023", titulo: "Programador Senior", entidad: "Empresarios Agrupados Internacional",
    tipo: "Experiencia", detalle: "Desarrollo de aplicaciones para centrales nucleares (Oracle, VB.NET, JS)." },
  { año: "Ago 2022 – Ene 2023", titulo: "Programador Senior", entidad: "Sandav, Empresarios Agrupados",
    tipo: "Experiencia", detalle: "Aplicaciones para CNAT. Oracle, Oracle Forms, VB.NET, JS." },
  { año: "Jun 2021 – Jul 2022", titulo: "Product Owner/Jefe de Proyectos", entidad: "Grupo Avalon",
    tipo: "Experiencia", detalle: "Dirección de equipo .NET, trato con cliente, gestión de incidencias complejas." },
  { año: "Jul 2018 – Jun 2021", titulo: "Jefe de proyectos", entidad: "Backup File S.L.",
    tipo: "Experiencia", detalle: "Dirección y gestión de proyectos versátiles, estimación de costes y recursos." },
  { año: "Dic 2010 – Jul 2018", titulo: "Analista Programador", entidad: "PBL Services",
    tipo: "Experiencia", detalle: "Desarrollo en C, VB, ASP.NET, administración de servidores Windows/AD/Exchange." },
  { año: "Sep 2006 – Dic 2010", titulo: "Analista Programador", entidad: "Grupo Backup",
    tipo: "Experiencia", detalle: "Desarrollos en C, VB, ASP.NET, Linux, administración de sistemas." },
  { año: "Jun 2006 – Sep 2006", titulo: "Programador", entidad: "Aricam 2001",
    tipo: "Experiencia", detalle: "Desarrollo en Visual Basic. Administración de servidores Windows." },
  { año: "2018 – 2019", titulo: "Máster Univ. Análisis y Visualización de Datos Masivos", entidad: "UNIR",
    tipo: "Formación", detalle: "Big Data, visualización avanzada." },
  { año: "2010 – 2013", titulo: "Grado en Ingeniería Informática", entidad: "UEM",
    tipo: "Formación", detalle: "Título universitario." },
  { año: "2004 – 2006", titulo: "Técnico Superior en Sistemas Informáticos", entidad: "IES Villablanca",
    tipo: "Formación", detalle: "Administración de Red." },
  { año: "2000 – 2004", titulo: "Bachillerato Científico-Tecnológico", entidad: "IES Francisco de Quevedo",
    tipo: "Formación", detalle: "" }
];

const container = document.getElementById('timeline');
timelineData.forEach((item, idx) => {
  container.innerHTML += `
    <div class="timeline-item ${item.tipo === "Formación" ? "educ" : "exp"}">
      <div class="timeline-circulo"></div>
      <div>
        <h3>${item.titulo} <span class="entidad">@${item.entidad}</span></h3>
        <div class="timeline-sub">${item.año}</div>
        <p>${item.detalle}</p>
      </div>
    </div>
  `;
});
