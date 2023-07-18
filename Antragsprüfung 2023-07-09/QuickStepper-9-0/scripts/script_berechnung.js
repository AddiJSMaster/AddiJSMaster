
function funZahlungsBetrag(varTmp$Index) {

  let varInpObj$ZahlungsBetrag          = document.getElementById('idInputZahlungsBetrag_' + varTmp$Index);
  let varInpObj$AntragsRechnungsBetrag  = document.getElementById('idInputAntragsRechnungsBetrag_' + varTmp$Index);
  let varInpObj$ZahlungsBetragSumme     = document.getElementById('idInputZahlungsBetragSumme_' + varTmp$Index);

  let var$Betrag_1 = Number(varInpObj$ZahlungsBetrag.value.replace(",", "."));
  let var$Betrag_2 = Number(varInpObj$AntragsRechnungsBetrag.value.replace(",", "."));
  let var$BetragSumme = var$Betrag_2 - var$Betrag_1;

  varInpObj$ZahlungsBetragSumme.value = var$BetragSumme.toFixed(2);

  if (var$BetragSumme < 0) {

    varInpObj$ZahlungsBetragSumme.style.backgroundColor='tomato';
  } else if (var$BetragSumme > 0) {

    varInpObj$ZahlungsBetragSumme.style.backgroundColor='tomato';
  } else {

    varInpObj$ZahlungsBetragSumme.style.backgroundColor='limegreen';
  }
}

function funRechnungsBetrag(varTmp$Index) {

  let varInpObj$RechnungsBetrag         = document.getElementById('idInputRechnungsBetrag_' + varTmp$Index);
  let varInpObj$AntragsRechnungsBetrag  = document.getElementById('idInputAntragsRechnungsBetrag_' + varTmp$Index);
  let varInpObj$RechnungsBetragSumme    = document.getElementById('idInputRechnungsBetragSumme_' + varTmp$Index);

  let var$Betrag_1 = Number(varInpObj$RechnungsBetrag.value.replace(",", "."));
  let var$Betrag_2 = Number(varInpObj$AntragsRechnungsBetrag.value.replace(",", "."));
  let var$BetragSumme = var$Betrag_2 - var$Betrag_1;

  varInpObj$RechnungsBetragSumme.value = var$BetragSumme.toFixed(2);

  if (var$BetragSumme < 0) {

    varInpObj$RechnungsBetragSumme.style.backgroundColor='tomato';
  } else if (var$BetragSumme > 0) {

    varInpObj$RechnungsBetragSumme.style.backgroundColor='tomato';
  } else {

    varInpObj$RechnungsBetragSumme.style.backgroundColor='limegreen';
  }
}

function funRechnungsMenge(varTmp$Index) {

  let varInpObj$RechnungsMenge          = document.getElementById('idInputRechnungsMenge_' + varTmp$Index);
  let varInpObj$AntragsRechnungsMenge   = document.getElementById('idInputAntragsRechnungsMenge_' + varTmp$Index);
  let varInpObj$RechnungsMengeSumme     = document.getElementById('idInputRechnungsMengeSumme_' + varTmp$Index);

  let var$Menge_1 = Number(varInpObj$RechnungsMenge.value.replace(",", "."));
  let var$Menge_2 = Number(varInpObj$AntragsRechnungsMenge.value.replace(",", "."));
  let var$MengeSumme = var$Menge_2 - var$Menge_1;

  varInpObj$RechnungsMengeSumme.value = var$MengeSumme.toFixed(2);

  if (var$MengeSumme < 0) {

    varInpObj$RechnungsMengeSumme.style.backgroundColor='tomato';
  } else if (var$MengeSumme > 0) {

    varInpObj$RechnungsMengeSumme.style.backgroundColor='tomato';
  } else {

    varInpObj$RechnungsMengeSumme.style.backgroundColor='limegreen';
  }
}
