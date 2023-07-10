
// VARIABLES
var varGlo$IsInitialized          = 0;
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
	
		varGlo$IsInitialized = Number(localStorage.getItem('varLocSto$IsInitialized'));
	} catch { }

	if (varGlo$IsInitialized === 0) {

		arr$ButtonsApplicationClicked = [0, 0, 0];
		arr$ButtonsPersonClicked      = [0, 0, 0, 0];
		varGlo$IsInitialized          = 1;
		localStorage.setItem('varLocSto$IsInitialized', varGlo$IsInitialized);
	}

	funButtonsApplicationLoad(0);
	funButtonsApplicationLoad(1);
	funButtonsApplicationLoad(2);

	funButtonsPersonLoad(0);
	funButtonsPersonLoad(1);
	funButtonsPersonLoad(2);
	funButtonsPersonLoad(3);

	console.log(arr$ButtonsApplicationClicked);
	console.log(arr$ButtonsPersonClicked);
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

		localStorage.setItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex, arr$ButtonsApplicationClicked[varTmp$ButtonIndex]);
	} else {

		arr$ButtonsApplicationClicked[varTmp$ButtonIndex] = 0;

		localStorage.setItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex, arr$ButtonsApplicationClicked[varTmp$ButtonIndex]);
	}

	funInit();
}

////////////////////////////////////////////////////////////////////////////////////////////
function funButtonsApplicationLoad(varTmp$ButtonIndex) {

	arr$ButtonsApplicationClicked[varTmp$ButtonIndex] = Number(localStorage.getItem('varLocSto$ButtonApplication' + varTmp$ButtonIndex));
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

		var$Element.style.backgroundColor = "green";

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


