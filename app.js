console.log('starting app');
const fs=require('fs');
const _=require('nodash');
const notes=require('./note.js');
const yargs=require('yargs');
const argv=yargs.argv;
const ch=process.argv[2];
if(ch=='add'){
note=notes.add(argv.title,argv.body);
if(note)
{
console.log('title--'+note.title);
console.log('body--'+note.body);
}
}else if(ch=='list'){
var note=notes.get();
console.log('printing'+note.length+'note(s).');
note.forEach((note)=>notes.logNote(note));
}else if(ch=='read'){
var sol=notes.read(argv.title);
if(sol)
{
console.log('note found');
console.log('title--'+sol.title);
console.log('body--'+sol.body);}
else{
console.log('note not found');
}}else if(ch=='remove'){
var sol=notes.rem(argv.title);
if(sol==true)
console.log(argv.title,'removed');
else
console.log('note not found');
}else{
console.log('command not recognized');
}
