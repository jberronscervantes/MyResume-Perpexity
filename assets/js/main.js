// Experiencia profesional real (basado en tu CV)
const expData = [
  {
    titulo: "Técnico I",
    entidad: "Instituto Cervantes",
    fecha: "Abr 2023 – Actualidad",
    detalle: "Dirección de proyectos de transformación digital, liderazgo de equipos, análisis funcional y planificación de recursos. Gestión de incidencias complejas y formación de técnicos.",
    icon: "job.svg"
  },
  {
    titulo: "Programador Senior",
    entidad: "Empresarios Agrupados Internacional",
    fecha: "Ene 2023 – Abr 2023",
    detalle: "Desarrollo de aplicaciones para centrales nucleares (Oracle, VB.NET, JavaScript), optimización e integración.",
    icon: "job.svg"
  }, {
    titulo: "Programador Senior",
    entidad: "SANDAV - Empresarios Agrupados Internacional",
    fecha: "Ago 2022 – Dic 2022",
    detalle: "Desarrollo de aplicaciones para centrales nucleares (Oracle, VB.NET, JavaScript), optimización e integración.",
    icon: "job.svg"
  },
  {
    titulo: "Product Owner/Jefe de Proyectos",
    entidad: "Grupo Avalon",
    fecha: "Jun 2021 – Jul 2022",
    detalle: "Gestión de proyectos con tecnologías .NET, relación con el cliente y coordinación de equipos Agile.",
    icon: "job.svg"
  },
  {
    titulo: "Jefe de proyectos",
    entidad: "Backup File S.L.",
    fecha: "Jul 2018 – Jun 2021",
    detalle: "Planificación, estimación y dirección de proyectos variados (desarrollo web y gestión de datos).",
    icon: "job.svg"
  },
  {
    titulo: "Analista Programador",
    entidad: "PBL Services",
    fecha: "Dic 2010 – Jul 2018",
    detalle: "Desarrollo y mantenimiento de aplicaciones en C, VB, ASP.NET. Administración de servidores y soporte.",
    icon: "job.svg"
  },
  {
    titulo: "Analista Programador",
    entidad: "Grupo Backup S.A.",
    fecha: "Sep 2006 – Dic 2010",
    detalle: "Desarrollo y mantenimiento de aplicaciones en C, VB, ASP.NET. Administración de servidores y soporte.",
    icon: "job.svg"
  }
];

// Formación académica real (CV)
const eduData = [
  {
    titulo: "Máster Univ. en Análisis y Visualización de Datos Masivos",
    entidad: "UNIR",
    fecha: "2018 – 2019",
    detalle: "Especialidad en big data, analítica avanzada y visualización.",
    icon: "degree.svg"
  },
  {
    titulo: "Grado en Ingeniería Informática",
    entidad: "UEM",
    fecha: "2010 – 2013",
    detalle: "Título universitario. Proyectos con mención honorífica.",
    icon: "degree.svg"
  },
  {
    titulo: "Téc. Sup. Sistemas Informáticos en Red",
    entidad: "IES Villablanca",
    fecha: "2004 – 2006",
    detalle: "Administración y seguridad de redes y sistemas.",
    icon: "degree.svg"
  }
];

// Render cards experiencia
const expCards = document.getElementById('exp-cards');
expData.forEach(exp => {
  expCards.innerHTML += `
    <div class="card-fx">
      <div class="card-icon"><img src="assets/images/${exp.icon}"/></div>
      <h3>${exp.titulo} <span class="entidad">@${exp.entidad}</span></h3>
      <span class="date">${exp.fecha}</span>
      <p>${exp.detalle}</p>
    </div>
  `;
});

// Render cards formación
const eduCards = document.getElementById('edu-cards');
eduData.forEach(edu => {
  eduCards.innerHTML += `
    <div class="card-fx edu">
      <div class="card-icon"><img src="assets/images/${edu.icon}"/></div>
      <h3>${edu.titulo} <span class="entidad">@${edu.entidad}</span></h3>
      <span class="date">${edu.fecha}</span>
      <p>${edu.detalle}</p>
    </div>
  `;
});
