
// VARIABLES
var varGlo$IsInitialized          = 0;
var varGlo$ApplicationType        = 0;

var arr$ButtonsApplicationClicked = [];
var arr$ButtonsPersonClicked      = [];

////////////////////////////////////////////////////////////////////////////////////////////
function funReset() {

	varGlo$IsInitialized = 0;
	localStorage.setItem('varLocSto$IsInitialized', varGlo$IsInitialized);
	funInit();
}

////////////////////////////////////////////////////////////////////////////////////////////
function funInit() {

	try {
	
		varGlo$IsInitialized   = Number(localStorage.getItem('varLocSto$IsInitialized'));
		varGlo$ApplicationType = Number(localStorage.getItem('varLocSto$ApplicationType'));
	} catch { }

	if (varGlo$IsInitialized === 0) {

		varGlo$IsInitialized          = 1;
		varGlo$ApplicationType        = 0;

		arr$ButtonsApplicationClicked = [0, 0, 0];
		arr$ButtonsPersonClicked      = [0, 0, 0, 0];

		localStorage.setItem('varLocSto$IsInitialized',   varGlo$IsInitialized);
		localStorage.setItem('varLocSto$ApplicationType', varGlo$ApplicationType);
	}

	funButtonsApplicationLoad(0);
	funButtonsApplicationLoad(1);
	funButtonsApplicationLoad(2);

	funButtonsPersonLoad(0);
	funButtonsPersonLoad(1);
	funButtonsPersonLoad(2);
	funButtonsPersonLoad(3);

	console.log('Global IsInitialized      = ' + varGlo$IsInitialized);
	console.log('Global Application Type   = ' + varGlo$ApplicationType);

	console.log('Array Application Buttons = ' + arr$ButtonsApplicationClicked);
	console.log('Array Person Buttons      = ' + arr$ButtonsPersonClicked);
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
function funButtonsApplicationClicked(varTmp$ButtonIndex) {

	try {

		arr$ButtonsApplicationClicked[varTmp$ButtonIndex] = Number(localStorage.getItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex));
	} catch { return; }

	if (arr$ButtonsApplicationClicked[varTmp$ButtonIndex] === 0) {

		arr$ButtonsApplicationClicked[varTmp$ButtonIndex] = 1;

		let var$Element = document.getElementById('butApplication' + varTmp$ButtonIndex);

		var$Element.style.backgroundColor = "lightgreen";

		localStorage.setItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex, arr$ButtonsApplicationClicked[varTmp$ButtonIndex]);
	} else {

		arr$ButtonsApplicationClicked[varTmp$ButtonIndex] = 0;

		let var$Element = document.getElementById('butApplication' + varTmp$ButtonIndex);

		var$Element.style.backgroundColor = "lightgrey";

		localStorage.setItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex, arr$ButtonsApplicationClicked[varTmp$ButtonIndex]);
	}

	funInit();
	funCheckApplicationType();
}

////////////////////////////////////////////////////////////////////////////////////////////
function funButtonsApplicationLoad(varTmp$ButtonIndex) {

	arr$ButtonsApplicationClicked[varTmp$ButtonIndex] = Number(localStorage.getItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex));
}
////////////////////////////////////////////////////////////////////////////////////////////
function funCheckApplicationType() {

	let varObj$Element = document.getElementById('divStep_2');
	
	varObj$Element.innerHTML = '';

	if (arr$ButtonsApplicationClicked[0] === 1 && arr$ButtonsApplicationClicked[1] === 0 && arr$ButtonsApplicationClicked[2] === 0) {

		varObj$Element.innerHTML = '' + 

			'<p>Status der Person...' +
			'<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr">' +
			'<button id="butPerson0" onmousedown="funButtonsPersonClicked(0)">Legitimiert</button>' +
			'<button id="butPerson1" onmousedown="funButtonsPersonClicked(1)">Dokumente unvollständig</button>' +
			'<button id="butPerson2" onmousedown="funButtonsPersonClicked(2)">Daten stimmen nicht überein</button>' +
			'<button id="butPerson3" onmousedown="funButtonsPersonClicked(3)">Reupload fehlgeschlagen</button>' +
			'</div>' +
			'</p>';

		varObj$Element.style.backgroundcolor = "grey"
	}
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
function funButtonsPersonClicked(varTmp$ButtonIndex) {

	try {

		arr$ButtonsPersonClicked[varTmp$ButtonIndex] = Number(localStorage.getItem('varLocSto$ButtonPerson' + varTmp$ButtonIndex));
	} catch { return; }

	if (arr$ButtonsPersonClicked[varTmp$ButtonIndex] === 0) {

		arr$ButtonsPersonClicked[varTmp$ButtonIndex] = 1;

		let var$Element = document.getElementById('butPerson' + varTmp$ButtonIndex);

		var$Element.style.backgroundColor = "lightgreen";

		localStorage.setItem('varLocSto$ButtonPerson' + varTmp$ButtonIndex, arr$ButtonsPersonClicked[varTmp$ButtonIndex]);
	} else {

		arr$ButtonsPersonClicked[varTmp$ButtonIndex] = 0;

		let var$Element = document.getElementById('butPerson' + varTmp$ButtonIndex);

		var$Element.style.backgroundColor = "lightgrey";

		localStorage.setItem('varLocSto$ButtonPerson' + varTmp$ButtonIndex, arr$ButtonsPersonClicked[varTmp$ButtonIndex]);
	}

	funInit();
}

////////////////////////////////////////////////////////////////////////////////////////////
function funButtonsPersonLoad(varTmp$ButtonIndex) {

	arr$ButtonsPersonClicked[varTmp$ButtonIndex] = Number(localStorage.getItem('varLocSto$ButtonPerson' + varTmp$ButtonIndex));
}

