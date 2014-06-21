var assert = require('assert');

suite('Adreswonik', function() {


  test('insert test contact from client', function(done, client) {
    client.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
          telefon: '934',
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
          telefon: '934',}).fetch();
    emit('contact', contact);
    });

    client.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });
 });
