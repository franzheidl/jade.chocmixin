/*
Jade-Chocmixin.
Compile Jade (jade-lang.com) in Chocolat (www.chocolatapp.com).
https://github.com/franzheidl/jade.chocmixin
Franz Heidl 2014
MIT License
*/


function run() {
  var jade = require('jade');

  if (Document.current()) {
    var doc = Document.current();
    
    if (doc.rootScope() === 'jade.source') {
      Recipe.run(function(r) {
        
        var range = new Range(0, r.length);
        
        var src = doc.text;
        var html = jade.render(src);
        
        r.replaceTextInRange(range, html, true);
        
      })
      
    } else {
      Alert.show('Jade Error', 'Document does not appear to be a .jade file.')
    }
  }
}


Hooks.addMenuItem( 'Actions/Jade/Compile', '', function() {
  run();
});
