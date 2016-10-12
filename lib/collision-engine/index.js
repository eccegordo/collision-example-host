/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'collision-engine',

  isDevelopingAddon: function() {
    return true;
  }
});
