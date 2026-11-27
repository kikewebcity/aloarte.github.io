const TELEFONO_WSP = '525613530308';

const FICHAS_HORNOS = {
  // ==================== HORNOS DE CERÁMICA ====================
  chico_c: {
    titulo: 'Horno Chico (TAF-4065)',
    medidas: 'Medidas internas: 20 × 20 × 25 cm',
    descripcion: 'Diseñado para espacios pequeños sin sacrificar capacidad de trabajo. Incluye cierre hermético y opción de controlador digital o manual. Fabricación personalizable a tus necesidades.',
    imagenes: [
      './IMG/productos_ceramica/hornos/chico/4065.png',
      './IMG/productos_ceramica/hornos/chico/3960ladrillo.png',
      './IMG/productos_ceramica/hornos/chico/TAF-4545-A.png'
    ]
  },
  master2: {
    titulo: 'Horno Nivel Master 2 (Cerámica)',
    medidas: 'Capacidad intermedia / producción continua',
    descripcion: 'Ideal para talleres semiprofesionales y horneadas constantes de cerámica. Estructura reforzada, cierre hermético y controlador programable.',
    imagenes: [
      './IMG/productos_ceramica/hornos/master2/front.png',
      './IMG/productos_ceramica/hornos/master2/lado.png',
      './IMG/productos_ceramica/hornos/master2/lado3.png'
    ]
  },
  master1: {
    titulo: 'Horno Nivel Master 1 (ALO-9090)',
    medidas: 'Cámara amplia de alta eficiencia',
    descripcion: 'Modelo ALO-9090 con distribución uniforme del calor, cierre hermético y controlador digital o manual. Personalizable según tus piezas.',
    imagenes: [
      './IMG/productos_ceramica/hornos/master1/LA.png',
      './IMG/productos_ceramica/hornos/master1/90x90colcha.png'
    ]
  },
  mediano_c: {
    titulo: 'Horno Mediano para Cerámica',
    medidas: 'Capacidad versátil de taller',
    descripcion: 'Equilibrio óptimo entre consumo energético y volumen interno para producción media de cerámica y esmaltes.',
    imagenes: [
      './IMG/productos_ceramica/hornos/mediano/P1010818.png',
      './IMG/productos_ceramica/hornos/mediano/cerrado.png'
    ]
  },
  heavy_c: {
    titulo: 'Horno Nivel Heavy (1 m³)',
    medidas: 'Gran formato industrial / escultura',
    descripcion: 'Equipo de máxima capacidad diseñado para piezas escultóricas de gran formato y producción intensiva en serie.',
    imagenes: [
      './IMG/productos_ceramica/hornos/heavy/horno1metro2.png',
      './IMG/productos_ceramica/hornos/heavy/horno1metro.png',
      './IMG/productos_ceramica/hornos/heavy/tapa.png'
    ]
  },

  // ==================== HORNOS DE VIDRIO ====================
  portable_v: {
    titulo: 'Horno Portable para Vidrio',
    medidas: 'Formato compacto y transportable',
    descripcion: 'Ideal para joyería en vidrio, pruebas de color y piezas pequeñas de vitrofusión. Calentamiento rápido y control preciso de rampas de temperatura.',
    imagenes: [
      './IMG/productos_vidrio/hornos/portable/front2.png',
      './IMG/productos_vidrio/hornos/portable/front1.png',
      './IMG/productos_vidrio/hornos/portable/medidas.png'
    ]
  },
  chico_v: {
    titulo: 'Horno Chico para Vidrio',
    medidas: 'Cámara compacta de estudio',
    descripcion: 'Diseñado para talleres con espacio reducido que requieren curvas de recocido y fusión precisas con controlador digital.',
    imagenes: [
      './IMG/productos_vidrio/hornos/chico/20200125_174930.png',
      './IMG/productos_vidrio/hornos/chico/20200125_174843.png',
      './IMG/productos_vidrio/hornos/chico/20200125_175046.png'
    ]
  },
  hilos: {
    titulo: 'Horno para Hilos de Vidrio',
    medidas: 'Apertura frontal especializada',
    descripcion: 'Equipo especializado para estirado de hilos, murrinas y trabajo continuo en caliente con acceso frontal ergonómico.',
    imagenes: [
      './IMG/productos_vidrio/hornos/hilos/P1010832.png',
      './IMG/productos_ceramica/hornos/hilos/P1010835.2.png'
    ]
  },
  alto_v: {
    titulo: 'Horno Alto para Vidrio',
    medidas: 'Mayor altura útil interior',
    descripcion: 'Permite trabajar moldes profundos, termoformado de volumen y piezas verticales con distribución térmica uniforme.',
    imagenes: [
      './IMG/productos_vidrio/hornos/alto/IMG-20190319-WA0006.png',
      './IMG/productos_vidrio/hornos/alto/IMG-20190319-WA0010.png',
      './IMG/productos_vidrio/hornos/alto/IMG-20190319-WA0011.png'
    ]
  },
  pro_v: {
    titulo: 'Horno Pro para Vidrio',
    medidas: 'Gama profesional de vitrofusión',
    descripcion: 'Construcción robusta para uso continuo en taller, controlador digital programable por etapas y cierre hermético de alta eficiencia.',
    imagenes: [
      './IMG/productos_vidrio/hornos/pro/IMG-20200428-WA0052_.png',
      './IMG/productos_vidrio/hornos/pro/IMG-20200428-WA0050.png'
    ]
  },
  master_v: {
    titulo: 'Horno Nivel Master (Vidrio)',
    medidas: 'Amplia superficie de horneado',
    descripcion: 'Diseñado para placas de vidrio de formato medio-grande, producción en serie y proyectos de vidrio artístico profesional.',
    imagenes: [
      './IMG/productos_vidrio/hornos/master/lado.png',
      './IMG/productos_vidrio/hornos/master/frente.png',
      './IMG/productos_vidrio/hornos/master/lado2.png'
    ]
  },
  heavy_v: {
    titulo: 'Horno Nivel Heavy (Vidrio)',
    medidas: 'Gran formato arquitectónico',
    descripcion: 'Máxima capacidad para vitral arquitectónico, paneles de gran dimensión y producción industrial. Fabricación personalizable.',
    imagenes: [
      './IMG/productos_vidrio/hornos/heavy/frontal.png',
      './IMG/productos_vidrio/hornos/heavy/lado.png',
      './IMG/productos_vidrio/hornos/heavy/medidas.png',
      './IMG/productos_vidrio/hornos/heavy/IMG-20190909-WA.png'
    ]
  }
};

// 1. Menú hamburguesa móvil
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');
if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });
}

// 2. Enlaces de WhatsApp automáticos con el nombre exacto de cada producto
document.querySelectorAll('[data-wsp-producto]').forEach(btn => {
  const nombre = btn.getAttribute('data-wsp-producto');
  const mensaje = encodeURIComponent(`Buen día, me interesa cotizar: ${nombre}`);
  btn.href = `https://wa.me/${TELEFONO_WSP}?text=${mensaje}`;
  btn.target = '_blank';
  btn.rel = 'noopener';
});

// 3. Modal de Ficha Técnica
const modal = document.querySelector('#product-modal');
const modalMainImg = document.querySelector('#modal-main-img');
const modalThumbs = document.querySelector('#modal-thumbs');
const modalTitle = document.querySelector('#modal-title');
const modalSpecs = document.querySelector('#modal-specs');
const modalDesc = document.querySelector('#modal-desc');
const modalWsp = document.querySelector('#modal-wsp');
const modalClose = document.querySelector('#modal-close');

function abrirModalHorno(id) {
  const data = FICHAS_HORNOS[id];
  if (!data || !modal) return;

  modalTitle.textContent = data.titulo;
  modalSpecs.textContent = data.medidas;
  modalDesc.textContent = data.descripcion;
  modalMainImg.src = data.imagenes[0];
  modalMainImg.alt = data.titulo;

  const mensaje = encodeURIComponent(`Buen día, me interesa cotizar el ${data.titulo}`);
  modalWsp.href = `https://wa.me/${TELEFONO_WSP}?text=${mensaje}`;

  modalThumbs.innerHTML = '';
  data.imagenes.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `${data.titulo} vista ${index + 1}`;
    if (index === 0) thumb.classList.add('active');

    thumb.addEventListener('click', () => {
      modalMainImg.src = src;
      modalThumbs.querySelectorAll('img').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
    });

    modalThumbs.appendChild(thumb);
  });

  modal.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  if (!modal) return;
  modal.classList.remove('is-visible');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal-horno]').forEach(btn => {
  btn.addEventListener('click', () => {
    abrirModalHorno(btn.getAttribute('data-modal-horno'));
  });
});

if (modalClose) modalClose.addEventListener('click', cerrarModal);
if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) cerrarModal();
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
});
