const bcrypt = require('bcryptjs');

// Contraseña que queremos probar
const plainPassword = 'admin';

// Generar el hash
const saltRounds = 10; // Número de rondas de encriptación
const hashedPassword = bcrypt.hashSync(plainPassword, saltRounds);

console.log('Contraseña original:', plainPassword);
console.log('Hash generado:', hashedPassword);

// Comparar la contraseña original con el hash
const isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
console.log('¿La contraseña es válida?', isMatch);
