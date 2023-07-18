
function funButtonClicked(varTmp$Button) {

  let varButObj$Button = document.getElementById(varTmp$Button);

  if (varButObj$Button.style.backgroundColor === 'lightgray') {

    varButObj$Button.style.backgroundColor = 'goldenrod';

  } else if (varButObj$Button.style.backgroundColor === 'goldenrod') {

    varButObj$Button.style.backgroundColor = 'limegreen';

  } else if (varButObj$Button.style.backgroundColor === 'limegreen') {

    varButObj$Button.style.backgroundColor = 'tomato';
  } else {

    varButObj$Button.style.backgroundColor = 'lightgray';
  }

  if (varTmp$Button === 'idButtonRechnung_1') {

    document.getElementById('idButtonEigenerklärung').style.backgroundColor = "lightgray";

    document.getElementById('idButtonAdresseInTeilungserklärung').style.backgroundColor = "lightgray";

    document.getElementById('idButtonIBAN').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonBetrag').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonMenge').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnungsBetrag').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnungsMenge').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnung_2').style.backgroundColor = "lightgray";

    document.getElementById('idButtonRechnung_3').style.backgroundColor = "lightgray";

    document.getElementById('idButtonAdresse_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonImZeitraum_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonAußerhalb_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonBestellbestätigung_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_5').style.backgroundColor = "goldenrod";

  }

  if (varTmp$Button === 'idButtonRechnung_2') {

    document.getElementById('idButtonEigenerklärung').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonAdresseInTeilungserklärung').style.backgroundColor = "lightgray";

    document.getElementById('idButtonIBAN').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonBetrag').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonMenge').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnungsBetrag').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnungsMenge').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnung_1').style.backgroundColor = "lightgray";

    document.getElementById('idButtonRechnung_3').style.backgroundColor = "lightgray";

    document.getElementById('idButtonAdresse_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonImZeitraum_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonAußerhalb_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonBestellbestätigung_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_5').style.backgroundColor = "goldenrod";
  }

  if (varTmp$Button === 'idButtonRechnung_3') {

    document.getElementById('idButtonEigenerklärung').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonAdresseInTeilungserklärung').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonIBAN').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonBetrag').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonMenge').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnungsBetrag').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnungsMenge').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonRechnung_1').style.backgroundColor = "lightgray";

    document.getElementById('idButtonRechnung_2').style.backgroundColor = "lightgray";

    document.getElementById('idButtonAdresse_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAdresse_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonImZeitraum_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonImZeitraum_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonAußerhalb_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonAußerhalb_5').style.backgroundColor = "goldenrod";

    document.getElementById('idButtonBestellbestätigung_1').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_2').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_3').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_4').style.backgroundColor = "goldenrod";
    document.getElementById('idButtonBestellbestätigung_5').style.backgroundColor = "goldenrod";
  }

  if (varTmp$Button === 'idButtonImZeitraum_1') {

    document.getElementById('idButtonAußerhalb_1').style.backgroundColor = "lightgray";
    document.getElementById('idButtonBestellbestätigung_1').style.backgroundColor = "lightgray";
  }

  if (varTmp$Button === 'idButtonImZeitraum_2') {

    document.getElementById('idButtonAußerhalb_2').style.backgroundColor = "lightgray";
    document.getElementById('idButtonBestellbestätigung_2').style.backgroundColor = "lightgray";
  }

  if (varTmp$Button === 'idButtonImZeitraum_3') {

    document.getElementById('idButtonAußerhalb_3').style.backgroundColor = "lightgray";
    document.getElementById('idButtonBestellbestätigung_3').style.backgroundColor = "lightgray";
  }

  if (varTmp$Button === 'idButtonImZeitraum_4') {

    document.getElementById('idButtonAußerhalb_4').style.backgroundColor = "lightgray";
    document.getElementById('idButtonBestellbestätigung_4').style.backgroundColor = "lightgray";
  }

  if (varTmp$Button === 'idButtonImZeitraum_5') {

    document.getElementById('idButtonAußerhalb_5').style.backgroundColor = "lightgray";
    document.getElementById('idButtonBestellbestätigung_5').style.backgroundColor = "lightgray";
  }
}
