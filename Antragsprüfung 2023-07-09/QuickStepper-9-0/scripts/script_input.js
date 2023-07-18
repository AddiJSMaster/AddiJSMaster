
function funInputClicked(varTmp$Input) {

  let varInpObj$Input = document.getElementById(varTmp$Input);

  if (varTmp$Input === 'idInputErstattungsBetrag_1') {

    let varInpObj$ErstattungsBetrag   = document.getElementById('idInputErstattungsbetrag');
    let varInpObj$ErstattungsBetrag_1 = document.getElementById('idInputErstattungsBetrag_1');
    let varInpObj$ErstattungsBetrag_2 = document.getElementById('idInputErstattungsBetrag_2');

    let var$Betrag_1 = Number(varInpObj$ErstattungsBetrag.value.replace(",", "."));
    let var$Betrag_2 = Number(varInpObj$ErstattungsBetrag_1.value.replace(",", "."));
    let var$BetragSumme = var$Betrag_2 - var$Betrag_1;

    varInpObj$ErstattungsBetrag_2.value = var$BetragSumme.toFixed(2);

    if (var$BetragSumme < 0) {

      varInpObj$ErstattungsBetrag_2.style.backgroundColor='tomato';
    } else if (var$BetragSumme > 0) {

      varInpObj$ErstattungsBetrag_2.style.backgroundColor='tomato';
    } else {

      varInpObj$ErstattungsBetrag_2.style.backgroundColor='limegreen';
    }

  } else if (varTmp$Input === 'idInputZahlungsBetrag_1') {

    funZahlungsBetrag(1);

  } else if (varTmp$Input === 'idInputZahlungsBetrag_2') {

    funZahlungsBetrag(2);

  } else if (varTmp$Input === 'idInputZahlungsBetrag_3') {

    funZahlungsBetrag(3);

  } else if (varTmp$Input === 'idInputZahlungsBetrag_4') {

    funZahlungsBetrag(4);

  } else if (varTmp$Input === 'idInputZahlungsBetrag_5') {

    funZahlungsBetrag(5);

  } else if (varTmp$Input === 'idInputRechnungsBetrag_1') {

    funRechnungsBetrag(1);

  } else if (varTmp$Input === 'idInputRechnungsBetrag_2') {

    funRechnungsBetrag(2);

  } else if (varTmp$Input === 'idInputRechnungsBetrag_3') {

    funRechnungsBetrag(3);

  } else if (varTmp$Input === 'idInputRechnungsBetrag_4') {

    funRechnungsBetrag(4);

  } else if (varTmp$Input === 'idInputRechnungsBetrag_5') {

    funRechnungsBetrag(5);

  } else if (varTmp$Input === 'idInputRechnungsMenge_1') {

    funRechnungsMenge(1);

  } else if (varTmp$Input === 'idInputRechnungsMenge_2') {

    funRechnungsMenge(2);
    
  } else if (varTmp$Input === 'idInputRechnungsMenge_3') {

    funRechnungsMenge(3);
    
  } else if (varTmp$Input === 'idInputRechnungsMenge_4') {

    funRechnungsMenge(4);
    
  } else if (varTmp$Input === 'idInputRechnungsMenge_5') {

    funRechnungsMenge(5);
  }
}
