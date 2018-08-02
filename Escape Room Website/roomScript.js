function appendNumber(val) {
	document.getElementById('d').value+=val;
}

function clearItAll() {
	document.getElementById('d').value='';
}

function submitItAll() {
	if (document.getElementById('d').value == "1480") {
		show('part2', 'part1');
		document.getElementById('part3').style.display='none';
		clearItAll();
	} else if (document.getElementById('d').value == "HELPID") {
		//show('part3', 'part2');
		document.getElementById('d').value='YOU DID IT CONGRATS!!!!!!!!!';
		document.getElementById('part3').style.display='block';
	} else {
		clearItAll();
	}
	
}

function show(shown, hidden) {
  var init = false;
  if(document.getElementById('part1').style.display == 'block') {
	  init = true;
  }
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  if(shown == "part1" && hidden == "part2" && !init) {
	  hide("answer1");
	  hide("answer2");
	  hide("answer3");
	  hide("answer4");
  }
  return false;
}

function hide(hidden) {
  document.getElementById(hidden).style.display='none';
  return false;
}

function checkPart1() {
	var part1 = document.getElementById('part1').style.display == 'block';
	var answer1 = document.getElementById('answer1').style.display == 'block';
	var answer2 = document.getElementById('answer2').style.display == 'block';
	var answer3 = document.getElementById('answer3').style.display == 'block';
	var answer4 = document.getElementById('answer4').style.display == 'block';
	if(part1 && answer1 && answer2 && answer3 && answer4) {
		show('part2', 'part1');
		hide("answer5");
	    hide("answer6");
	    hide("answer7");
	    hide("answer8");
		hide("answer9");
		hide("answer10");
	}
	return;
}