// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./1-data');
const pengenalan = require('./2-util');
require('./3-mind-grnd');

pengenalan(names.personData[0].name, names.personData[0].age);
pengenalan(names.personData[2].name, names.personData[2].age);

