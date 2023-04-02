let year = '2023';
let semester = 'Winter';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'SCOPE': new School('C', 'School of Computer Science Engineering', []),
	'SENSE': new School('B', 'School of Electronics Engineering ', []),
	'SCME': new School('P', 'School of Chemical Engineering', []),
	'SMEC': new School('M', 'School of Mechanical Engineering', []),
	'SOCE': new School('CS', 'School of Civil Engineering', []),
	'SBME': new School('H', 'School of Biomedical Engineering', []),
	'SBM': new School('R', 'School of Business Management', []),
};

let courses = {

	'B204': new Course('AEC', 'AEC', 'D1'),
	'B206': new Course('ACS', 'ACS', 'F1'),

	'B305': new Course('DCS', 'DCS', 'B1'),
	'B307': new Course('Circuit Theory', 'Circuit Theory', 'A1'),
	'B306': new Course('DLD', 'DLD', 'J1'),
	'B353': new Course('Network Theory', 'Network Theory', 'D1'),

	'B405': new Course('Robotics', 'Robotics', 'B2'),
	'B453': new Course('Computer Vision', 'Computer Vision', 'A2'),
	'B454': new Course('Microwave Engineering', 'Microwave Engineering', 'C2'),
	'B455': new Course('Wireless Communication', 'Wireless Communication', 'E'),
	'B456': new Course('SEMICONDUCTORS', 'SEMICONDUCTORS', 'F2'), 

	'B554': new Course('CIRCUIT DESIGN', 'CIRCUIT DESIGN', 'A2'),
	'B558': new Course('ANTENNA WAVEGUIDES', 'ANTENNA WAVEGUIDES', 'E2'),

	'C204': new Course('DSA ', 'DSA', 'B1'),
	'C205': new Course('OS ', 'OS', 'E1'),
	'C206': new Course('CN', 'CN', 'F1'),

	'C304': new Course('DBMS', 'DBMS', 'E2'),
	'C305': new Course('CLOUD', 'CLOUD', 'B'),
	'C306': new Course('ML', 'ML', 'C2'),

	'C402': new Course('NLP', 'NLP', 'F1'),

	'C554': new Course('FDA', 'FDA', 'C2'),
	'C556': new Course('EDA', 'EDA', 'A1'),
	'C565': new Course('Web mining', 'Web mining', 'D2'),
	'C567': new Course('ISM', 'ISM', 'A1'),
	'C571': new Course('TOC', 'TOC', 'A2'),


	'CS202': new Course('Structural Engineering', 'Structural Engineering', 'E2'),
	'CS460': new Course('Material Analysis', 'Material Analysis', 'D2'),
	'CS458': new Course('Material Estimation', 'Material Estimation', 'F1'),


	'H227': new Course('Paramedics', 'Paramedics', 'J1'),
	'H205': new Course('First Aid', 'First Aid', 'K2'),
	'H210': new Course('Blood Analysis', 'Blood Analysis', 'K1'),

	'M202': new Course('Group Theory (M1)', 'GrpTheory', 'F1'),
	'M204': new Course('Metric Spaces (M1)', 'MetSpace', 'D2'),
	'M206': new Course('Probability Theory (M1)', 'PT', 'C1'),

	'M301': new Course('Lebesque Integration (M2)', 'LI', 'E2'),
	'M307': new Course('Field Theory (M2)', 'FT', 'A1'),
	'M308': new Course('Complex Analysis (M2)', 'CA', 'G2'),
	'M309': new Course('Graph Theory (M2)', 'GraphTheo', 'B1'),
	'M311': new Course('Numerical Analysis (M5)', 'H2'),

	'M402': new Course('Representations of Finite Groups (M2)', 'FG', 'H1'),
	'M404': new Course('Algebraic Topology (M2)', 'AT', 'G1'),
	'M456': new Course('Algebraic Geometry (M3)', 'AG', 'C1'),
	'M470': new Course('Abstract Harmonic Analysis (M2)', 'Abs HarmAnal', 'D2'),
	'M452': new Course('Advanced Functional Analysis (M3)', 'Adv FuncAnal', 'B2'),
	'M483': new Course('Introduction to Manifolds (M4)', 'Manifolds', 'B2'),
	'M463': new Course('Finite Fields (M5)', 'FF', 'B2'),
	'M451': new Course('Advanced Complex Analysis (M1)', 'Adv CompAnal', 'I2'),

	'M561': new Course('Elliptical Curves (M1)', 'EC', 'A1'),
	'M554': new Course('Ergodic Theory (M3)', 'ET', 'A1'),


	'P204': new Course('Electromagnetism I (P107)', 'EM1', 'D1'),
	'P205': new Course('Mathematical Methods II (P107)', 'MM2', 'B1'),
	'P206': new Course('Quantum Mechanics - I (P107)', 'QM1', 'A1'),

	'P301': new Course('Electromagnetism - II (P107)', 'EM2', 'E2'),
	'P306(K1)': new Course('Introdution to Condensed Matter Physics (P127)', 'CMP', 'K1'),
	'P306(K2)': new Course('Introdution to Condensed Matter Physics (P127)', 'CMP', 'K2'),
	'P307': new Course('Nuclei and Particles (LH3)', 'Nuclei', 'C2'),

	'P454': new Course('Particle Physics (P126)', 'PP', 'B2'),
	'P455': new Course('Introduction to Phase Transition and Critical Phenomena (P127)', 'PT&CP', 'F2'),
	'P457': new Course('General Theory of Relativity and Cosmology (P108)', 'GTR', 'A2'),
	'P461': new Course('Physics of Mesoscopic Systems (P109)', 'PMS', 'A2'),
	'P468': new Course('Magnetism and Superconductivity (P108)', 'Mag&Sup', 'E2'),
	'P477': new Course('Relativistic Nucleus - Nucleus Collision and Quark Gluon Plasma (P126)', 'RN', 'D2'),

	'R121': new Course('Personal Financial Planning', 'Personal Financial Planning', 'B2'),
	'R122': new Course('Principles of management', 'Principles of management', 'C2'),
	'R123': new Course('Entrepreneurship and Development', 'Entrepreneurship and Development', 'D2'),
	'R124': new Course('Investment portfolio analysis', 'Investment portfolio analysis', 'E2'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];
