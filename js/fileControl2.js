var commonBlock_inputfile = document.querySelector('.file_operations');
var input;
var continius_input;
var fileSelect = document.getElementById("fileSelect");


class blockInputFileBuilder {
  constructor(parent) {
    this.parent = parent;
    this.block;
    this.inputFile;
    this.value_ind;
    this.x;
  }

  block_create() {
    this.block = document.createElement('div');
    this.block.classList.add('block_inputFile');
    this.parent.appendChild(this.block);
  }

  inputFileCreate() {
    this.inputFile = document.createElement('input');
    this.inputFile.classList.add('inputFile');
    this.inputFile.setAttribute('type', 'file');
  }

  valueIndCreate() {
    this.value_ind = document.createElement('div');
  }

  block_assembly() {
    this.block.appendChild(this.inputFile);
    this.block.appendChild(this.value_ind);
  }

  x_create() {
    this.x = document.createElement('div');
    this.x.classList.add('x');
    this.x.innerText = 'x';
    this.block.appendChild(this.x);
  }

  xOnclick_getter() {
    let obj = this;
    this.x.onclick = function() {
      obj.parent.removeChild(obj.block);
    };
  }

  inputOnchange_getter() {

    let obj = this;
    this.inputFile.onchange = function() {
      obj.value_ind.innerText = this.files[0].name;
      obj.x_create();
      obj.xOnclick_getter()
    }
  }

  run() {
    this.block_create();
    this.inputFileCreate();
    this.valueIndCreate();
    this.inputOnchange_getter();
    this.block_assembly();
  }
}

function lastPositions() {
  input = document.querySelectorAll('.inputFile');
  let input_continius_lenght = input.length - 1;
  continius_input = input[input_continius_lenght];
}

fileSelect.addEventListener("click", function(e) {
  var new_block = new blockInputFileBuilder(commonBlock_inputfile);
  new_block.run();
  lastPositions()
  continius_input.click();

}, false);
