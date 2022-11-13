//create seperate js
import { redLine } from './modules/redLine.js'
import { test } from './modules/test.js'

let canv, ctx;
const list = [redLine, test];

window.onload = () => {
	canv = document.getElementById('canvas');	
	ctx = canvas.getContext('2d');
  createDropdown();
}

//create seperate js
function createDropdown() {
  const dropdown = document.getElementById('dropdown');
  const selectList = document.createElement("select");
  dropdown.appendChild(selectList);

  for(const app of list) {
    const option = document.createElement("option");
    option.value = app;
    option.text = app.name;
    option.addEventListener('click', () => app(canv, ctx)); //cancelAnimationFrame(draw)
    selectList.appendChild(option);
  }
}
