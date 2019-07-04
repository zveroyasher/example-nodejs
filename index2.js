var fs=require('fs');

var file_read=fs.readFileSync('text.txt','utf8');//прочитать фаил
var message = "Первая строка\n" +file_read;
fs.writeFileSync('new_text.txt',message); //записать (или создать) в фаил
console.log(fs.readFileSync('new_text.txt','utf8'));

fs.readFile('new_text.txt','utf8', function(err, data) {
  console.log(data);
});//прочитать фаил АСИНХРПОННО И ВЫЗВАТЬ


fs.writeFile('some_else.txt','New text\n', function(err, data){});
console.log("Test асинхронности");
