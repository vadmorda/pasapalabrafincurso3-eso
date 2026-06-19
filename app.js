// PASAPALABRA REUTILIZABLE
// Edita las preguntas aquí. Cada letra tiene dos opciones: [opción 1, opción 2].
// Consejo: mantén answer en minúsculas/mayúsculas como quieras mostrarla; la app solo la enseña, no corrige texto escrito.
const QUESTION_BANK = {
  A: [
    { prompt: 'Con la A. Cría controlada de peces, moluscos o crustáceos para consumo humano.', answer: 'Acuicultura' },
    { prompt: 'Con la A. Impuesto que grava los productos importados de otros países.', answer: 'Arancel' }
  ],
  B: [
    { prompt: 'Con la B. Diferencia entre el valor de las exportaciones y las importaciones de un país.', answer: 'Balanza comercial' },
    { prompt: 'Con la B. Combustible renovable obtenido de materia orgánica.', answer: 'Biomasa' }
  ],
  C: [
    { prompt: 'Con la C. Actividad económica basada en la compra y venta de productos.', answer: 'Comercio' },
    { prompt: 'Con la C. Espacio urbano con gran concentración de población, servicios y actividades económicas.', answer: 'Ciudad' }
  ],
  D: [
    { prompt: 'Con la D. Diferencia injusta en riqueza, derechos u oportunidades entre personas o territorios.', answer: 'Desigualdad' },
    { prompt: 'Con la D. Ciencia que estudia la población, su estructura y su evolución.', answer: 'Demografía' }
  ],
  E: [
    { prompt: 'Con la E. Aumento del porcentaje de personas mayores en una población.', answer: 'Envejecimiento' },
    { prompt: 'Con la E. Salida de población del campo hacia la ciudad.', answer: 'Éxodo rural' }
  ],
  F: [
    { prompt: 'Con la F. Combustibles como el carbón, el petróleo o el gas natural.', answer: 'Fósiles' },
    { prompt: 'Con la F. Lugar donde se transforma la materia prima en productos elaborados.', answer: 'Fábrica' }
  ],
  G: [
    { prompt: 'Con la G. Proceso que conecta economías, sociedades y culturas a escala mundial.', answer: 'Globalización' },
    { prompt: 'Con la G. Cría de animales para obtener alimentos o materias primas.', answer: 'Ganadería' }
  ],
  H: [
    { prompt: 'Con la H. ODS número 2, que busca acabar con la falta de alimentos.', answer: 'Hambre cero' },
    { prompt: 'Con la H. Espacio habitado,', answer: 'Hábitat' }
  ],
  I: [
    { prompt: 'Con la I. Actividad económica que transforma materias primas en productos elaborados.', answer: 'Industria' },
    { prompt: 'Con la I. Llegada de población extranjera a un país para vivir en él.', answer: 'Inmigración' }
  ],
  J: [
    { prompt: 'Con la J. Tiempo diario dedicado al trabajo remunerado.', answer: 'Jornada laboral },
    { prompt: 'Con la J. Organización de las ciudades según su tamaño, funciones e influencia sobre el territorio.', answer: 'Jerarquía urbana' }
  ],
  K: [
    { prompt: 'Con la K. Ciudad japonesa que dio nombre a un importante protocolo internacional para reducir las emisiones contaminantes', answer: 'Kyoto' },
    { prompt: 'Con la K. País al oeste de Mongolia', answer: 'Kazajstán' }
  ],
  L: [
    { prompt: 'Con la L. Aumento de la esperanza de vida de una población.', answer: 'Longevidad' },
    { prompt: 'Con la L. Franja de contacto entre la tierra y el mar.', answer: 'Litoral' }
  ],
  M: [
    { prompt: 'Con la M. Gran ciudad que ejerce influencia económica, política y cultural sobre un amplio territorio.', answer: 'Metrópolis' },
    { prompt: 'Con la M. Número de defunciones que se producen en una población durante un periodo determinado.', answer: 'Mortalidad' }
  ],
  N: [
    { prompt: 'Con la N. Punto donde confluyen varias rutas o medios de transporte en la red de transportes.', answer: 'Nodo' },
    { prompt: 'Con la N. Empresa dedicada al transporte marítimo de pasajeros o mercancías.', answer: 'Naviera' }
  ],
  Ñ: [
    { prompt: 'Con la Ñ. Letra extra del rosco: di un concepto clave del tema que contenga ñ. País europeo con baja natalidad y alto envejecimiento.', answer: 'España' },
    { prompt: 'Con la Ñ. Servicio fundamental que forma parte del sector terciario.', answer: 'Enseñanza' }
  ],
  O: [
    { prompt: 'Con la O. Entidad sin ánimo de lucro que trabaja en ámbitos como el desarrollo, la ayuda humanitaria o el medio ambiente.', answer: 'ONG' },
    { prompt: 'Con la O. Organización internacional que aprobó la Agenda 2030.', answer: 'ONU' }
  ],
  P: [
    { prompt: 'Con la P. Conjunto de habitantes de un territorio.', answer: 'Población' },
    { prompt: 'Con la P. Recurso energético fósil muy usado en transporte e industria.', answer: 'Petróleo' }
  ],
  Q: [
    { prompt: 'Con la Q. Principio que busca una distribución justa de oportunidades y recursos.', answer: 'Equidad' },
    { prompt: 'Con la Q. Proceso industrial que transforma sustancias mediante reacciones.', answer: 'Química' }
  ],
  R: [
    { prompt: 'Con la R. Fuente de energía que se regenera de forma natural.', answer: 'Renovable' },
    { prompt: 'Con la R. Sistema formado por carreteras, vías férreas, puertos y aeropuertos.', answer: 'Red de transportes' }
  ],
  S: [
    { prompt: 'Con la S. Tipo de desarrollo que protege el medio ambiente y garantiza el bienestar futuro.', answer: 'Sostenible' },
    { prompt: 'Con la S. Sector económico que incluye comercio, transporte, turismo, sanidad o educación.', answer: 'Servicios' }
  ],
  T: [
    { prompt: 'Con la T. Desplazamiento temporal de personas por ocio, cultura o descanso.', answer: 'Turismo' },
    { prompt: 'Con la T. Actividad que permite mover personas y mercancías de un lugar a otro.', answer: 'Transporte' }
  ],
  U: [
    { prompt: 'Con la U. Crecimiento de las ciudades y de la población que vive en ellas.', answer: 'Urbanización' },
    { prompt: 'Con la U. Espacio propio de la ciudad, frente al espacio rural.', answer: 'Urbano' }
  ],
  V: [
    { prompt: 'Con la V. Situación de una persona o grupo que tiene mayores dificultades para afrontar problemas económicos, sociales o ambientales.', answer: 'vulnerabilidad' },
    { prompt: 'Con la V. Instalación donde se depositan residuos para su eliminación o tratamiento.', answer: 'Vertedero' }
  ],
  W: [
    { prompt: 'Con la W. Ciudad donde tienen su sede instituciones internacionales como el Banco Mundial o el FMI.', answer: 'Washington' },
    { prompt: 'Con la W. Centro financiero de Nueva York considerado uno de los símbolos de la economía mundial.', answer: 'Wall Street' }
  ],
  X: [
    { prompt: 'Con la X. Migración de población desde las zonas rurales hacia las ciudades.', answer: 'éxodo rural' },
    { prompt: 'Con la X. Producción que supera las necesidades de consumo.', answer: 'Excedentes' }
  ],
  Y: [
    { prompt: 'Con la Y. Lugar donde se localiza un recurso mineral o energético.', answer: 'Yacimiento' },
    { prompt: 'Con la Y. Siglas de empresa de pequeño o mediano tamaño que constituye la mayor parte del tejido empresarial español.', answer: 'PYME' }
  ],
  Z: [
    { prompt: 'Con la Z. Situación geográfica de una actividad económica, ciudad o territorio.', answer: 'Localización' },
    { prompt: 'Con la Z. Proceso de degradación que transforma un territorio en un espacio cada vez más árido.', answer: 'Desertización' }
  ]
};

const LETTERS = Object.keys(QUESTION_BANK);
const teams = {
  A: { score: 0, index: 0, states: Object.fromEntries(LETTERS.map(l => [l, 'empty'])) },
  B: { score: 0, index: 0, states: Object.fromEntries(LETTERS.map(l => [l, 'empty'])) }
};
let activeTeam = 'A';
let started = false;
let variant = 0;

const $ = id => document.getElementById(id);
const rosco = $('rosco');

function buildRosco(){
  rosco.innerHTML = '';
  const radius = 43;
  LETTERS.forEach((letter, i) => {
    const angle = (i / LETTERS.length) * Math.PI * 2 - Math.PI / 2;
    const el = document.createElement('button');
    el.className = 'letter';
    el.textContent = letter;
    el.style.left = `${50 + radius * Math.cos(angle)}%`;
    el.style.top = `${50 + radius * Math.sin(angle)}%`;
    el.title = `Ir a la ${letter}`;
    el.addEventListener('click', () => { teams[activeTeam].index = i; render(); });
    rosco.appendChild(el);
  });
}

function currentLetter(){ return LETTERS[teams[activeTeam].index]; }
function currentQuestion(){ return QUESTION_BANK[currentLetter()][variant] ?? QUESTION_BANK[currentLetter()][0]; }
function pending(team){ return LETTERS.filter(l => !['ok','bad'].includes(teams[team].states[l])).length; }

function render(){
  const letter = currentLetter();
  const q = currentQuestion();
  $('scoreA').textContent = teams.A.score;
  $('scoreB').textContent = teams.B.score;
  $('pendingA').textContent = `${pending('A')} pendientes`;
  $('pendingB').textContent = `${pending('B')} pendientes`;
  $('currentTeam').textContent = `Turno: Equipo ${activeTeam}`;
  $('currentLetter').textContent = letter;
  $('question').textContent = started ? q.prompt : 'Pulsa “Empezar” para iniciar el rosco.';
  $('answer').textContent = started ? q.answer : '—';
  $('teamAcard').classList.toggle('active', activeTeam === 'A');
  $('teamBcard').classList.toggle('active', activeTeam === 'B');

  [...rosco.children].forEach((el, i) => {
    const l = LETTERS[i];
    el.className = `letter ${teams[activeTeam].states[l]}`;
    if (l === letter) el.classList.add('current');
  });
}

function nextAvailable(){
  const team = teams[activeTeam];
  for(let step = 1; step <= LETTERS.length; step++){
    const next = (team.index + step) % LETTERS.length;
    if(!['ok','bad'].includes(team.states[LETTERS[next]])){
      team.index = next;
      return;
    }
  }
}

function mark(state){
  if(!started) started = true;
  const letter = currentLetter();
  const team = teams[activeTeam];
  const previous = team.states[letter];
  if(previous === 'ok') team.score--;
  team.states[letter] = state;
  if(state === 'ok') team.score++;
  if(state === 'pass') nextAvailable(); else nextAvailable();
  render();
}

function switchTeam(){ activeTeam = activeTeam === 'A' ? 'B' : 'A'; render(); }
function resetGame(){
  for(const t of ['A','B']){
    teams[t].score = 0; teams[t].index = 0;
    teams[t].states = Object.fromEntries(LETTERS.map(l => [l, 'empty']));
  }
  activeTeam = 'A'; started = false; render();
}

$('startBtn').addEventListener('click', () => { started = true; render(); });
$('correctBtn').addEventListener('click', () => mark('ok'));
$('wrongBtn').addEventListener('click', () => mark('bad'));
$('passBtn').addEventListener('click', () => mark('pass'));
$('switchBtn').addEventListener('click', switchTeam);
$('resetGame').addEventListener('click', resetGame);
$('variantSelect').addEventListener('change', e => { variant = Number(e.target.value); render(); });
document.addEventListener('keydown', e => {
  if(e.key === '1') mark('ok');
  if(e.key === '2') mark('bad');
  if(e.key === '3' || e.code === 'Space') { e.preventDefault(); mark('pass'); }
  if(e.key.toLowerCase() === 'c') switchTeam();
});

buildRosco();
render();
