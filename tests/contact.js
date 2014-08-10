var assert = require('assert');

suite('Adresownik', function() {


    test('server initialization', function(done, server) {
    server.eval(function() {
      var contact = Adresownik.find().fetch();
      emit('contact', contact);
    }).once('contact', function(contact) {
      assert.equal(contact.length, 0);
      done();
    });
  });

  test('insert contact with name from client', function(done, client) {
    client.eval(function() {
        Adresownik.insert({
          imie: 'Jan'
        });
    var contact = Adresownik.find({
          imie: 'Jan'}).fetch();
    emit('contact', contact);
    });

    client.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

  test('insert contact with name and surname from client', function(done, client) {
    client.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski'
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski'}).fetch();
    emit('contact', contact);
    });

    client.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

    test('insert contact with name, surname and adress from client', function(done, client) {
    client.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk'}).fetch();
    emit('contact', contact);
    });

    client.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

    test('insert contact with name, surname, adress and phone number from client', function(done, client) {
    client.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
          telefon: '393'
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
          telefon: '393'}).fetch();
    emit('contact', contact);
    });

    client.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

///////////////////

  test('insert contact with name from server', function(done, server) {
    server.eval(function() {
        Adresownik.insert({
          imie: 'Jan'
        });
    var contact = Adresownik.find({
          imie: 'Jan'}).fetch();
    emit('contact', contact);
    });

    server.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

  test('insert contact with name and surname from server', function(done, server) {
    server.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski'
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski'}).fetch();
    emit('contact', contact);
    });

    server.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

    test('insert contact with name, surname and adress from server', function(done, server) {
    server.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk'}).fetch();
    emit('contact', contact);
    });

    server.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });

    test('insert contact with name, surname, adress and phone number from server', function(done, server) {
    server.eval(function() {
        Adresownik.insert({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
          telefon: '393'
        });
    var contact = Adresownik.find({
          imie: 'Jan',
          nazwisko: 'Kowalski',
          adres: 'Gdansk',
          telefon: '393'}).fetch();
    emit('contact', contact);
    });

    server.once('contact', function(contact) {
    assert.equal(contact.length, 1);
      done();
    });
  });
 });
