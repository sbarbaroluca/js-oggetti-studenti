// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var studente = {
  'nome' : 'Luca',
  'cognome' : 'Sbarbaro',
  'eta' : 22
};

for (var chiave in studente) {
   console.log(studente[chiave]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var studenti = [
  {
    'nome' : 'Luigi',
    'cognome' : 'Pederzani',
    'eta' : 24
  },
  {
    'nome' : 'Sergio',
    'cognome' : 'Pianarosa',
    'eta' : 23
  },
  {
    'nome' : 'Luca',
    'cognome' : 'Sbarbaro',
    'eta' : 22
  },
];

console.log(studenti);


// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
