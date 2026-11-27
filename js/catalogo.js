const TELEFONO_WSP = '525613530308';

// Base de datos de hornos (puedes agregar aquí los de vidrio y joyería)
const FICHAS_HORNOS = {
  chico_c: {
    titulo: 'Horno Chico (TAF-4065)',
    medidas: 'Medidas internas: 20 × 20 × 25 cm',
    descripcion: 'Diseñado para talleres con espacio reducido sin sacrificar capacidad de trabajo. Incluye cierre hermético, aislamiento de alta eficiencia y opción de controlador digital o manual. Fabricación personalizable.',
    imagenes: [
      './IMG/productos_ceramica/hornos/chico/4065.png',
      './IMG/productos_ceramica/hornos/chico/3960ladrillo.png',
      './IMG/productos_ceramica/hornos/chico/TAF-4545-A.png'
    ]
  },
  hilos: {
    titulo: 'Horno para Hilos de Vidrio',
    medidas: 'Apertura frontal especializada',
    descripcion: 'Equipo diseñado específicamente para estirado y trabajo continuo de hilos de vidrio y vitral. Control preciso de temperatura y acceso ergonómico.',
    imagenes: [
      './IMG/productos_vidrio/hornos/hilos/P1010832.png',
      './IMG/productos_ceramica/hornos/hilos/P1010835.2.png'
    ]
  },
  master2: {
    titulo: 'Horno Nivel Master 2',
    medidas: 'Capacidad intermedia / producción continua',
    descripcion: 'Ideal para talleres semiprofesionales y producción constante de cerámica de alta y baja temperatura. Estructura reforzada y controlador digital programable.',
    imagenes: [
      './IMG/productos_ceramica/hornos/master2/front.png',
      './IMG/productos_ceramica/hornos/master2/lado.png',
      './IMG/productos_ceramica/hornos/master2/lado3.png'
    ]
  },
  master1: {
    titulo: 'Horno Nivel Master 1 (ALO-9090)',
    medidas: 'Cámara amplia de alta eficiencia',
    descripcion: 'Modelo ALO-9090 con cierre hermético y distribución uniforme del calor. Disponible con controlador digital o manual y personalización según tus piezas.',
    imagenes: [
      './IMG/productos_ceramica/hornos/master1/LA.png',
      './IMG/productos_ceramica/hornos/master1/90x90colcha.png'
    ]
  },
  mediano_c: {
    titulo: 'Horno Mediano para Cerámica',
    medidas: 'Capacidad versátil para taller',
    descripcion: 'Equilibrio ideal entre consumo energético y volumen interno para horneadas de producción media en cerámica y esmaltes.',
    imagenes: [
      './IMG/productos_ceramica/hornos/mediano/P1010818.png',
      './IMG/productos_ceramica/hornos/mediano/cerrado.png'
    ]
  },
  heavy_c: {
    titulo: 'Horno Nivel Heavy (1 m³)',
    medidas: 'Gran formato industrial / escultura',
    descripcion: 'Nuestro equipo de máxima capacidad para piezas escultóricas de gran formato y producción intensiva en serie.',
    imagenes: [
      './IMG/productos_ceramica/hornos/heavy/horno1metro2.png',
      './IMG/productos_ceramica/hornos/heavy/horno1metro.png',
      './IMG/productos_ceramica/hornos/heavy/tapa.png'
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

// 2. Generar enlaces de WhatsApp automáticos con el nombre exacto de cada producto
document.querySelectorAll('[data-wsp-producto]').forEach(btn => {
  const nombre = btn.getAttribute('data-wsp-producto');
  const mensaje = encodeURIComponent(`Buen día, me interesa cotizar: ${nombre}`);
  btn.href = `https://wa.me/${TELEFONO_WSP}?text=${mensaje}`;
  btn.target = '_blank';
  btn.rel = 'noopener';
});

// 3. Lógica del Modal de Ficha Técnica
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

  // Generar miniaturas
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
