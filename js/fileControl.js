// var inputfile;
// var inputFileField;
// var x_collection;
// var inputText = document.querySelector('.inputText');
// var field = document.querySelector('.field');
// var counter = 0;
// var x;
// var last_input;
// var last_field;
//
// function lastPositions() {
//   let input_continius_lenght = inputfile.length - 1;
//   last_input = inputfile[input_continius_lenght];
//   let field_continius_lenght = inputfile.length - 1;
//   last_field = inputFileField[field_continius_lenght];
// }
//
// function inputfilesearch(number) {
//
//   for (let inf of inputfile) {
//     if (inf.getAttribute('data-number') == number) {
//       return inf;
//     }
//   }
// }
//
// function fieldsearch(number) {
//
//   for (let inpf of inputFileField) {
//     if (inpf.getAttribute('data-number') == number) {
//       return inpf;
//     }
//   }
// }
//
// function onchangeSet() {
//
//   for (let inpfile of inputfile)
//
//     (inpfile.onchange = inputTextEventMaker)
//
// }
//
// function removeOperations()
//
// {
//   for (let xs of x_collection) {
//
//     let mark = xs.getAttribute('data-number');
//     xs.onclick = function() {
//       let inputToDelete = inputfilesearch(mark);
//       let fieldTodelete = fieldsearch(mark);
//       inputText.removeChild(inputToDelete);
//       field.removeChild(fieldTodelete);
//     }
//   }
// }
//
// function elementlistRefresh() {
//   inputfile = document.querySelectorAll('.inputFile');
//   inputFileField = document.querySelectorAll('.textinput_field');
//   if (counter > 0) {
//     x_collection = document.querySelectorAll('.x');
//   }
// }
//
// function doCreateElement(type, cl, atr, val, atr2, val2) {
//   var newEl = document.createElement(type);
//   newEl.classList.add(cl);
//   newEl.setAttribute(atr, val);
//   newEl.setAttribute(atr2, val2);
//   return newEl;
// }
//
// elementlistRefresh()
//
// function inputTextEventMaker() {
//
//   lastPositions()
//
//   for (let i = 0; i < this.files.length; i++) {
//     last_field.innerText = this.files[i].name;
//   }
//
//   x = doCreateElement('div', 'x', 'data-number', counter);
//   x.innerText = 'x';
//   last_field.appendChild(x);
//   counter++;
//   inputText.appendChild(doCreateElement("input", 'inputFile', 'type', 'file', 'data-number', counter));
//   field.appendChild(doCreateElement('div', 'textinput_field', 'data-number', counter));
//   elementlistRefresh();
//   onchangeSet();
//   removeOperations();
//   elementlistRefresh();
// }
//
// onchangeSet();
//
// var fileSelect = document.getElementById("fileSelect"),
//   fileElem = document.getElementById("fileElem");
//
// fileSelect.addEventListener("click", function(e) {
//   lastPositions()
//   last_input.click();
//
// }, false);


var test = document.querySelector('.test');

test.onchange= function (e) {
  var files = e.target.files;
 // https://developer.mozilla.org/en-US/docs/Web/API/FileList#item
 var firstFile = files.item(1);
 var idstokeep = [0, 2]; // keep first `2` files from `multiple` selection
 var _files = Array.prototype.slice.call(files).splice(idstokeep[0], idstokeep[1]);
 console.log(files, files.length
             , _files, _files.length
             , firstFile);
             files=_files;
}
