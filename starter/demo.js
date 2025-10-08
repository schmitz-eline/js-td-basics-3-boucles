// Boucle while
/*
let indice = 0;
while (indice < 10) {
    indice ++;
    console.log('Bonjour');
}
*/

// Boucle do-while
/*
do {
    console.log('Bonjour');
} while (indice < 0);
*/

// Boucle for
/*
for (let i = 0; i < 10; i++) {
    console.log('Bonjour');
}
*/

// Tables de multiplication
for (let table = 2; table <= 10 ; table++) {
    console.log(`Table de ${table} -----`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${table} * ${i} = ${table * i}`);
    }
}