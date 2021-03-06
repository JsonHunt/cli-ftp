// Generated by CoffeeScript 1.8.0
(function() {
  var jsftp;

  jsftp = require('jsftp');

  exports.run = function() {
    var ftp;
    process.argv.forEach(function(val, index, array) {
      var command, host, hp, local, password, port, remote, username;
      if (val === "-u") {
        username = array[index + 1];
      }
      if (val === "-p") {
        password = array[index + 1];
      }
      if (val === "-h") {
        hp = array[index + 1].split(':');
        host = hp[0];
        if (hp.length > 1) {
          port = hp[1];
        }
      }
      if (val === "-put") {
        command = 'put';
      }
      if (val === "-get") {
        command = 'get';
      }
      if (val === '-local') {
        local = array[index + 1];
      }
      if (val === '-remote') {
        return remote = array[index + 1];
      }
    });
    ftp = new jsftp({
      host: host,
      user: user,
      pass: password,
      port: port
    });
    if (command === 'put') {
      ftp.put(local, remote, function(err) {
        if (err) {
          console.log(err);
        }
        if (err === void 0) {
          return console.log('done.');
        }
      });
    }
    if (command === 'get') {
      return ftp.get(remote, local, function(err) {
        if (err) {
          console.log(err);
        }
        if (err === void 0) {
          return console.log('done.');
        }
      });
    }
  };

}).call(this);
