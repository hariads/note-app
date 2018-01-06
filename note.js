const fs=require('fs');
module.exports.add = (title,body) =>{
var notes=[];
var note={
title,
body
};
try{
var notesStr=fs.readFileSync('notes-data.json');
notes=JSON.parse(notesStr);
}
catch(e){
return [];
} 
var dup=notes.filter((note)=>note.title==title);
if(dup.length==0){
notes.push(note);
fs.writeFileSync('notes-data.json',JSON.stringify(notes));
console.log('adding note  ',title);
console.log('note created');
return note;
}
else{
console.log('note title already exist');
}
};
module.exports.get = () => {
console.log('getting all notes');
try{
var notesStr=fs.readFileSync('notes-data.json');
notes=JSON.parse(notesStr);
return notes;
}
catch(e){
return [];
} 

};
module.exports.read= (title) => {
try{
var notesStr=fs.readFileSync('notes-data.json');
notes=JSON.parse(notesStr);
}
catch(e){
return [];
} 
var fil=notes.filter((note)=>note.title==title);
return fil[0];
};
module.exports.rem=(title) => {
try{
var notesStr=fs.readFileSync('notes-data.json');
notes=JSON.parse(notesStr);
}
catch(e){
return [];
} 
var fil=notes.filter((note)=>note.title!=title);
fs.writeFileSync('notes-data.json',JSON.stringify(fil));
return fil.length!=notes.length;
};
module.exports.logNote=(note) => {
console.log('title--'+note.title);
console.log('body--'+note.body);
}

