jsftp = require 'jsftp'

exports.run = ()->
  process.argv.forEach (val, index, array) ->
    if val is "-u"
      username = array[index+1]
    if val is "-p"
      password = array[index+1]
    if val is "-h"
      hp = array[index+1].split(':')
      host = hp[0]
      port = hp[1] if hp.length > 1
    if val is "-put"
      command = 'put'
    if val is "-get"
      command = 'get'
    if val is '-local'
      local = array[index+1]
    if val is '-remote'
      remote = array[index+1]

  ftp = new jsftp
    host: host
    user: user
    pass: password
    port: port

  if command is 'put'
    ftp.put local, remote, (err)->
      console.log err if err
      console.log 'done.' if err is undefined

  if command is 'get'
    ftp.get remote, local, (err)->
      console.log err if err
      console.log 'done.' if err is undefined
