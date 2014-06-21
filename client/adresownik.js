var clearValues = function(){
	$('#imie').val("").focus();
	 $('#nazwisko').val("");
	$('#adres').val("");
    $('#telefon').val("");
}
var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13) {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};

if (Meteor.isClient) {
 	Template.main.adresownik = function(){
	return Adresownik.find();
}
Template.main.events(okCancelEvents(
  '#telefon',
  {
    ok: function (text, evt) {
     var imie = $('#imie').val();
	 var nazwisko = $('#nazwisko').val();
   var adres = $('#adres').val();
	 Adresownik.insert({imie:imie,nazwisko:nazwisko,adres:adres,telefon:text});
	clearValues();
    }
  }));	
}

if (Meteor.isServer) {
  
}
