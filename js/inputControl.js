var range_budget = document.querySelectorAll('.range_budget');
var budget_field = document.querySelectorAll('.budget_field');

var range_deadlines = document.querySelectorAll('.range_deadlines');
var deadline_field = document.querySelectorAll('.deadline_field');


for (let bud in range_budget) {
  if (bud * 2 || bud * 2 == 0) {
    range_budget[bud].onchange = function() {

      if (range_budget[bud].value == 1) {
        budget_field[bud].innerText = "до 1 млн"
      }
      if (range_budget[bud].value == 5) {
        budget_field[bud].innerText = "1-5 млн"
      }

      if (range_budget[bud].value == 9) {
        budget_field[bud].innerText = ">5 млн"
      }
    }
  }
}

for (let ddl in range_deadlines) {
  if (ddl * 2 || ddl * 2 == 0) {

    range_deadlines[ddl].onchange = function() {

      if (range_deadlines[ddl].value==1) {
        deadline_field[ddl].innerText = "1 месяц"
      }
      if (range_deadlines[ddl].value>1&&range_deadlines[ddl].value<5) {
        deadline_field[ddl].innerText = range_deadlines[ddl].value + " месяца"
      }
      if (range_deadlines[ddl].value>4) {
        deadline_field[ddl].innerText = range_deadlines[ddl].value + " месяцeв"
      }

    }
  }
}
