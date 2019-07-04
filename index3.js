var fs=require('fs');

//fs.unlink('text.txt', function () {});
if (fs.existsSync('mydir')!=true) {
  fs.mkdirSync('mydir', function () {

  });
}
//fs.rmdirSync('mydir');
