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

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
  console.log(studenti[i].nome, studenti[i].cognome);
  var primo = studenti[0];
  console.log(primo.nome, primo.cognome);
  var secondo = studenti[1];
  console.log(secondo.nome, secondo.cognome);
  var terzo = studenti[2];
  console.log(terzo.nome, terzo.cognome);
}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.


var nome = prompt('Inserisci il tuo nome');
console.log(nome);
var cognome = prompt('Inserisci il tuo cognome');
console.log(cognome);
var eta = parseInt(prompt('Inserisci la tua eta'));
console.log(eta);

var nuovoStudente = {
  'nome' : nome,
  'cognome' : cognome,
  'eta' : eta
};
console.log(nuovoStudente);
studenti.push(nuovoStudente);
console.log(studenti);