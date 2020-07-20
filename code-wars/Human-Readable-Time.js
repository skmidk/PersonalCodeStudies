 function humanReadable(seconds) {
 let first = (seconds%60).toString()

 first.length < 2? first = '0' + first: first = first

 let minutes = (((seconds-first) % 3600)/60).toString()

 minutes.length < 2? minutes = '0' + minutes: minutes = minutes

 let hours = ((seconds -(minutes*60)-first)/3600).toString()

 hours.length < 2? hours = '0' + hours: hours = hours

 let time = [hours, minutes, first].join(":")
 return time
 }
