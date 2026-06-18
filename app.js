// PASAPALABRA REUTILIZABLE
// Edita las preguntas aquí. Cada letra tiene dos opciones: [opción 1, opción 2].
// Consejo: mantén answer en minúsculas/mayúsculas como quieras mostrarla; la app solo la enseña, no corrige texto escrito.
const QUESTION_BANK = {
  A: [
    { prompt: 'Con la A. Conjunto de metas internacionales aprobadas por la ONU para lograr un mundo más sostenible antes de 2030.', answer: 'Agenda 2030' },
    { prompt: 'Con la A. Actividad del sector primario que cultiva la tierra para obtener alimentos y materias primas.', answer: 'Agricultura' }
  ],
  B: [
    { prompt: 'Con la B. Situación de bajo número de nacimientos en una población.', answer: 'Baja natalidad' },
    { prompt: 'Con la B. Combustible renovable obtenido de materia orgánica.', answer: 'Biomasa' }
  ],
  C: [
    { prompt: 'Con la C. Actividad económica basada en la compra y venta de productos.', answer: 'Comercio' },
    { prompt: 'Con la C. Espacio urbano con gran concentración de población, servicios y actividades económicas.', answer: 'Ciudad' }
  ],
  D: [
    { prompt: 'Con la D. Diferencia injusta en riqueza, derechos u oportunidades entre personas o territorios.', answer: 'Desigualdad' },
    { prompt: 'Con la D. Proceso por el que una zona pierde población.', answer: 'Despoblación' }
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
    { prompt: 'Con la H. Energía renovable obtenida a partir del agua en movimiento.', answer: 'Hidroeléctrica' }
  ],
  I: [
    { prompt: 'Con la I. Actividad económica que transforma materias primas en productos elaborados.', answer: 'Industria' },
    { prompt: 'Con la I. Llegada de población extranjera a un país para vivir en él.', answer: 'Inmigración' }
  ],
  J: [
    { prompt: 'Con la J. Trabajo con condiciones dignas, salario justo y derechos laborales.', answer: 'Justo' },
    { prompt: 'Con la J. Grupo de población formado por personas jóvenes.', answer: 'Juventud' }
  ],
  K: [
    { prompt: 'Con la K. Unidad usada para medir distancias en transportes y redes de comunicación.', answer: 'Kilómetro' },
    { prompt: 'Con la K. Prefijo que equivale a mil unidades, usado en palabras como kilovatio o kilómetro.', answer: 'Kilo' }
  ],
  L: [
    { prompt: 'Con la L. Aumento de la esperanza de vida de una población.', answer: 'Longevidad' },
    { prompt: 'Con la L. Organización de almacenes, transporte y distribución de mercancías.', answer: 'Logística' }
  ],
  M: [
    { prompt: 'Con la M. Desplazamiento de población de un lugar a otro.', answer: 'Migración' },
    { prompt: 'Con la M. Transporte más importante para el comercio mundial de mercancías.', answer: 'Marítimo' }
  ],
  N: [
    { prompt: 'Con la N. Número de nacimientos en una población durante un periodo determinado.', answer: 'Natalidad' },
    { prompt: 'Con la N. Fuente de energía no renovable usada en centrales eléctricas.', answer: 'Nuclear' }
  ],
  Ñ: [
    { prompt: 'Con la Ñ. Letra extra del rosco: di un concepto clave del tema que contenga ñ. País europeo con baja natalidad y envejecimiento.', answer: 'España' },
    { prompt: 'Con la Ñ. Letra extra del rosco: di un concepto clave del tema que contenga ñ. Sinónimo de campaña agrícola anual.', answer: 'Añada' }
  ],
  O: [
    { prompt: 'Con la O. Siglas de los Objetivos de Desarrollo Sostenible.', answer: 'ODS' },
    { prompt: 'Con la O. Organización internacional que aprobó la Agenda 2030.', answer: 'ONU' }
  ],
  P: [
    { prompt: 'Con la P. Conjunto de habitantes de un territorio.', answer: 'Población' },
    { prompt: 'Con la P. Recurso energético fósil muy usado en transporte e industria.', answer: 'Petróleo' }
  ],
  Q: [
    { prompt: 'Con la Q. Unidad de masa equivalente a 100 kilos, usada en agricultura.', answer: 'Quintal' },
    { prompt: 'Con la Q. Proceso industrial que transforma sustancias mediante reacciones.', answer: 'Química' }
  ],
  R: [
    { prompt: 'Con la R. Fuente de energía que se regenera de forma natural.', answer: 'Renovable' },
    { prompt: 'Con la R. Sistema formado por carreteras, vías férreas, puertos y aeropuertos.', answer: 'Red de transportes' }
  ],
  S: [
    { prompt: 'Con la S. Sector económico que incluye comercio, transporte, turismo, sanidad o educación.', answer: 'Servicios' },
    { prompt: 'Con la S. Desarrollo que protege el medio ambiente y garantiza el bienestar futuro.', answer: 'Sostenible' }
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
    { prompt: 'Con la V. Cambio en el número de habitantes de un territorio.', answer: 'Variación demográfica' },
    { prompt: 'Con la V. Actividad turística que busca respetar la naturaleza y la cultura local.', answer: 'Viaje sostenible' }
  ],
  W: [
    { prompt: 'Con la W. Red mundial de información que ha impulsado la globalización.', answer: 'Web' },
    { prompt: 'Con la W. Siglas en inglés de la Organización Mundial del Comercio.', answer: 'WTO' }
  ],
  X: [
    { prompt: 'Con la X. Forma breve de referirse al desplazamiento del campo a la ciudad cuando se habla de éxodo.', answer: 'Xodo rural' },
    { prompt: 'Con la X. Letra difícil: palabra adaptada para completar el rosco; venta de productos a otros países.', answer: 'Xportación' }
  ],
  Y: [
    { prompt: 'Con la Y. Lugar donde se localiza un recurso mineral o energético.', answer: 'Yacimiento' },
    { prompt: 'Con la Y. Espacio de almacenamiento de contenedores o mercancías en logística.', answer: 'Yarda logística' }
  ],
  Z: [
    { prompt: 'Con la Z. Área de una ciudad dedicada a fábricas, almacenes o actividades productivas.', answer: 'Zona industrial' },
    { prompt: 'Con la Z. Parte de una ciudad con usos y funciones concretas.', answer: 'Zona urbana' }
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
