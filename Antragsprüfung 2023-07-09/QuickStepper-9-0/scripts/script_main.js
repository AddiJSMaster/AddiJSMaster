
function funRestart() {

  // LINKE SPALTE
  let varButObj$Eigenerklärung                                = document.getElementById('idButtonEigenerklärung');
  let varButObj$AdresseInTeilungserklärung                    = document.getElementById('idButtonAdresseInTeilungserklärung');
  let varInpObj$Straße                                        = document.getElementById('idInputStraße');
  let varInpObj$Ort                                           = document.getElementById('idInputOrt');

  let varButObj$Betrag                                        = document.getElementById('idButtonBetrag');
  let varButObj$Menge                                         = document.getElementById('idButtonMenge');

  let varInpObj$Erstattungsbetrag                             = document.getElementById('idInputErstattungsbetrag');

  let varButObj$IBAN                                          = document.getElementById('idButtonIBAN');
  let varButObj$IBANSumme                                     = document.getElementById('idButtonIBANSumme');

  let varButObj$RechnungsBetrag                               = document.getElementById('idButtonRechnungsBetrag');
  let varButObj$RechnungsBetragSumme                          = document.getElementById('idButtonRechnungsBetragSumme');

  let varButObj$RechnungsMenge                                = document.getElementById('idButtonRechnungsMenge');
  let varButObj$RechnungsMengeSumme                           = document.getElementById('idButtonRechnungsMengeSumme');

  let varButObj$ImZeitraum                                    = document.getElementById('idButtonImZeitrum');
  let varButObj$Außerhalb                                     = document.getElementById('idButtonAußerhalb');
  let varButObj$Bestellbestätigung                            = document.getElementById('idButtonBestellbestätigung');

  varButObj$Eigenerklärung.innerHTML                          = '';
  varButObj$Eigenerklärung.style.backgroundColor              = 'lightgray';

  varButObj$AdresseInTeilungserklärung.innerHTML              = '';
  varButObj$AdresseInTeilungserklärung.style.backgroundColor  = 'lightgray';

  varInpObj$Straße.value                                      = '';
  varInpObj$Straße.style.backgroundColor                      = 'wheat';
  varInpObj$Ort.value                                         = '';
  varInpObj$Ort.style.backgroundColor                         = 'wheat';

  varButObj$Betrag.innerHTML                                  = '';
  varButObj$Betrag.style.backgroundColor                      = 'lightgray';

  varButObj$Menge.innerHTML                                   = '';
  varButObj$Menge.style.backgroundColor                       = 'lightgray';

  varInpObj$Erstattungsbetrag.value                           = '';
  varInpObj$Erstattungsbetrag.style.backgroundColor           = 'lightblue';

  varButObj$IBAN.innerHTML                                    = '';
  varButObj$IBAN.style.backgroundColor                        = 'lightgray';

  varButObj$IBANSumme.innerHTML                               = '';
  varButObj$IBANSumme.style.backgroundColor                   = 'lightgray';

  varButObj$RechnungsBetrag.innerHTML                         = '';
  varButObj$RechnungsBetrag.style.backgroundColor             = 'lightgray';

  varButObj$RechnungsBetragSumme.innerHTML                    = '';
  varButObj$RechnungsBetragSumme.style.backgroundColor        = 'lightgray';

  varButObj$RechnungsMenge.innerHTML                          = '';
  varButObj$RechnungsMenge.style.backgroundColor              = 'lightgray';

  varButObj$RechnungsMengeSumme.innerHTML                     = '';
  varButObj$RechnungsMengeSumme.style.backgroundColor         = 'lightgray';

  varButObj$ImZeitraum.innerHTML                              = '';
  varButObj$ImZeitraum.style.backgroundColor                  = 'lightgray';

  varButObj$Außerhalb.innerHTML                               = '';
  varButObj$Außerhalb.style.backgroundColor                   = 'lightgray';

  varButObj$Bestellbestätigung.innerHTML                      = '';
  varButObj$Bestellbestätigung.style.backgroundColor          = 'lightgray'



  // RECHTE SPALTE
  /// RECHNUNGEN
  let varButObj$Rechnung_1                                    = document.getElementById('idButtonRechnung_1');
  let varButObj$Rechnung_2                                    = document.getElementById('idButtonRechnung_2');
  let varButObj$Rechnung_3                                    = document.getElementById('idButtonRechnung_3');
  let varButObj$Rechnung_4                                    = document.getElementById('idButtonRechnung_4');
  let varButObj$Rechnung_5                                    = document.getElementById('idButtonRechnung_5');

  varButObj$Rechnung_1.style.backgroundColor                  = 'lightgray';
  varButObj$Rechnung_2.style.backgroundColor                  = 'lightgray';
  varButObj$Rechnung_3.style.backgroundColor                  = 'lightgray';
  varButObj$Rechnung_4.style.backgroundColor                  = 'lightgray';
  varButObj$Rechnung_5.style.backgroundColor                  = 'lightgray';

  /// KUNDEN NUMMERN
  let varInpObj$KundenNummer_1                                = document.getElementById('idInputKundenNummer_1'); 
  let varInpObj$KundenNummer_2                                = document.getElementById('idInputKundenNummer_2'); 
  let varInpObj$KundenNummer_3                                = document.getElementById('idInputKundenNummer_3'); 
  let varInpObj$KundenNummer_4                                = document.getElementById('idInputKundenNummer_4'); 
  let varInpObj$KundenNummer_5                                = document.getElementById('idInputKundenNummer_5'); 

  varInpObj$KundenNummer_1.value                              = '';
  varInpObj$KundenNummer_1.style.backgroundColor              = 'wheat';
  varInpObj$KundenNummer_2.value                              = '';
  varInpObj$KundenNummer_2.style.backgroundColor              = 'wheat';
  varInpObj$KundenNummer_3.value                              = '';
  varInpObj$KundenNummer_3.style.backgroundColor              = 'wheat';
  varInpObj$KundenNummer_4.value                              = '';
  varInpObj$KundenNummer_4.style.backgroundColor              = 'wheat';
  varInpObj$KundenNummer_5.value                              = '';
  varInpObj$KundenNummer_5.style.backgroundColor              = 'wheat';

  /// RECHNUNG NUMMERN
  let varInpObj$RechnungNummer_1                              = document.getElementById('idInputRechnungNummer_1'); 
  let varInpObj$RechnungNummer_2                              = document.getElementById('idInputRechnungNummer_2'); 
  let varInpObj$RechnungNummer_3                              = document.getElementById('idInputRechnungNummer_3'); 
  let varInpObj$RechnungNummer_4                              = document.getElementById('idInputRechnungNummer_4'); 
  let varInpObj$RechnungNummer_5                              = document.getElementById('idInputRechnungNummer_5'); 

  varInpObj$RechnungNummer_1.value                            = '';
  varInpObj$RechnungNummer_1.style.backgroundColor            = 'wheat';
  varInpObj$RechnungNummer_2.value                            = '';
  varInpObj$RechnungNummer_2.style.backgroundColor            = 'wheat';
  varInpObj$RechnungNummer_3.value                            = '';
  varInpObj$RechnungNummer_3.style.backgroundColor            = 'wheat';
  varInpObj$RechnungNummer_4.value                            = '';
  varInpObj$RechnungNummer_4.style.backgroundColor            = 'wheat';
  varInpObj$RechnungNummer_5.value                            = '';
  varInpObj$RechnungNummer_5.style.backgroundColor            = 'wheat';

  /// ADRESSEN
  let varButObj$Adresse_1                                     = document.getElementById('idButtonAdresse_1');
  let varButObj$Adresse_2                                     = document.getElementById('idButtonAdresse_2');
  let varButObj$Adresse_3                                     = document.getElementById('idButtonAdresse_3');
  let varButObj$Adresse_4                                     = document.getElementById('idButtonAdresse_4');
  let varButObj$Adresse_5                                     = document.getElementById('idButtonAdresse_5');

  varButObj$Adresse_1.innerHTML                               = '';
  varButObj$Adresse_1.style.backgroundColor                   = 'lightgray';

  varButObj$Adresse_2.innerHTML                               = '';
  varButObj$Adresse_2.style.backgroundColor                   = 'lightgray';

  varButObj$Adresse_3.innerHTML                               = '';
  varButObj$Adresse_3.style.backgroundColor                   = 'lightgray';

  varButObj$Adresse_4.innerHTML                               = '';
  varButObj$Adresse_4.style.backgroundColor                   = 'lightgray';

  varButObj$Adresse_5.innerHTML                               = '';
  varButObj$Adresse_5.style.backgroundColor                   = 'lightgray';

  /// BETRÄGE
  let varInpObj$AntragsRechnungsBetrag_1                      = document.getElementById('idInputAntragsRechnungsBetrag_1'); 
  let varInpObj$AntragsRechnungsBetrag_2                      = document.getElementById('idInputAntragsRechnungsBetrag_2'); 
  let varInpObj$AntragsRechnungsBetrag_3                      = document.getElementById('idInputAntragsRechnungsBetrag_3'); 
  let varInpObj$AntragsRechnungsBetrag_4                      = document.getElementById('idInputAntragsRechnungsBetrag_4'); 
  let varInpObj$AntragsRechnungsBetrag_5                      = document.getElementById('idInputAntragsRechnungsBetrag_5'); 

  varInpObj$AntragsRechnungsBetrag_1.value                    = '';
  varInpObj$AntragsRechnungsBetrag_1.style.backgroundColor    = 'lightblue'
  varInpObj$AntragsRechnungsBetrag_2.value                    = '';
  varInpObj$AntragsRechnungsBetrag_2.style.backgroundColor    = 'lightblue'
  varInpObj$AntragsRechnungsBetrag_3.value                    = '';
  varInpObj$AntragsRechnungsBetrag_3.style.backgroundColor    = 'lightblue'
  varInpObj$AntragsRechnungsBetrag_4.value                    = '';
  varInpObj$AntragsRechnungsBetrag_4.style.backgroundColor    = 'lightblue'
  varInpObj$AntragsRechnungsBetrag_5.value                    = '';
  varInpObj$AntragsRechnungsBetrag_5.style.backgroundColor    = 'lightblue'

  /// MENGEN
  let varInpObj$AntragsRechnungsMenge_1                       = document.getElementById('idInputAntragsRechnungsMenge_1');
  let varInpObj$AntragsRechnungsMenge_2                       = document.getElementById('idInputAntragsRechnungsMenge_2');
  let varInpObj$AntragsRechnungsMenge_3                       = document.getElementById('idInputAntragsRechnungsMenge_3');
  let varInpObj$AntragsRechnungsMenge_4                       = document.getElementById('idInputAntragsRechnungsMenge_4');
  let varInpObj$AntragsRechnungsMenge_5                       = document.getElementById('idInputAntragsRechnungsMenge_5');

  varInpObj$AntragsRechnungsMenge_1.value                     = '';
  varInpObj$AntragsRechnungsMenge_1.style.backgroundColor     = 'lightblue'
  varInpObj$AntragsRechnungsMenge_2.value                     = '';
  varInpObj$AntragsRechnungsMenge_2.style.backgroundColor     = 'lightblue'
  varInpObj$AntragsRechnungsMenge_3.value                     = '';
  varInpObj$AntragsRechnungsMenge_3.style.backgroundColor     = 'lightblue'
  varInpObj$AntragsRechnungsMenge_4.value                     = '';
  varInpObj$AntragsRechnungsMenge_4.style.backgroundColor     = 'lightblue'
  varInpObj$AntragsRechnungsMenge_5.value                     = '';
  varInpObj$AntragsRechnungsMenge_5.style.backgroundColor     = 'lightblue'

  /// ERSTATTUNGSBETRAG
  let varInpObj$ErstattungsBetrag_1                           = document.getElementById('idInputErstattungsBetrag_1');
  let varInpObj$ErstattungsBetrag_2                           = document.getElementById('idInputErstattungsBetrag_2');

  varInpObj$ErstattungsBetrag_1.value                         = '';
  varInpObj$ErstattungsBetrag_1.style.backgroundColor         = 'lightblue';
  varInpObj$ErstattungsBetrag_2.value                         = '';
  varInpObj$ErstattungsBetrag_2.style.backgroundColor         = 'lightgrey';

  /// ZAHLUNGSBETRÄGE
  let varInpObj$ZahlungsBetrag_1                              = document.getElementById('idInputZahlungsBetrag_1');
  let varInpObj$ZahlungsBetrag_2                              = document.getElementById('idInputZahlungsBetrag_2');
  let varInpObj$ZahlungsBetrag_3                              = document.getElementById('idInputZahlungsBetrag_3');
  let varInpObj$ZahlungsBetrag_4                              = document.getElementById('idInputZahlungsBetrag_4');
  let varInpObj$ZahlungsBetrag_5                              = document.getElementById('idInputZahlungsBetrag_5');

  varInpObj$ZahlungsBetrag_1.value                            = '';
  varInpObj$ZahlungsBetrag_1.style.backgroundColor            = 'lightgreen';
  varInpObj$ZahlungsBetrag_2.value                            = '';
  varInpObj$ZahlungsBetrag_2.style.backgroundColor            = 'lightgreen';
  varInpObj$ZahlungsBetrag_3.value                            = '';
  varInpObj$ZahlungsBetrag_3.style.backgroundColor            = 'lightgreen';
  varInpObj$ZahlungsBetrag_4.value                            = '';
  varInpObj$ZahlungsBetrag_4.style.backgroundColor            = 'lightgreen';
  varInpObj$ZahlungsBetrag_5.value                            = '';
  varInpObj$ZahlungsBetrag_5.style.backgroundColor            = 'lightgreen';

  /// ZAHLUNGSBETRÄGE SUMME
  let varInpObj$ZahlungsBetragSumme_1                         = document.getElementById('idInputZahlungsBetragSumme_1');
  let varInpObj$ZahlungsBetragSumme_2                         = document.getElementById('idInputZahlungsBetragSumme_2');
  let varInpObj$ZahlungsBetragSumme_3                         = document.getElementById('idInputZahlungsBetragSumme_3');
  let varInpObj$ZahlungsBetragSumme_4                         = document.getElementById('idInputZahlungsBetragSumme_4');
  let varInpObj$ZahlungsBetragSumme_5                         = document.getElementById('idInputZahlungsBetragSumme_5');

  varInpObj$ZahlungsBetragSumme_1.value                       = '';
  varInpObj$ZahlungsBetragSumme_1.style.backgroundColor       = 'lightgrey';
  varInpObj$ZahlungsBetragSumme_2.value                       = '';
  varInpObj$ZahlungsBetragSumme_2.style.backgroundColor       = 'lightgrey';
  varInpObj$ZahlungsBetragSumme_3.value                       = '';
  varInpObj$ZahlungsBetragSumme_3.style.backgroundColor       = 'lightgrey';
  varInpObj$ZahlungsBetragSumme_4.value                       = '';
  varInpObj$ZahlungsBetragSumme_4.style.backgroundColor       = 'lightgrey';
  varInpObj$ZahlungsBetragSumme_5.value                       = '';
  varInpObj$ZahlungsBetragSumme_5.style.backgroundColor       = 'lightgrey';


  /// RECHNUNGSBETRAG
  let varInpObj$RechnungsBetrag_1                             = document.getElementById('idInputRechnungsBetrag_1');
  let varInpObj$RechnungsBetrag_2                             = document.getElementById('idInputRechnungsBetrag_2');
  let varInpObj$RechnungsBetrag_3                             = document.getElementById('idInputRechnungsBetrag_3');
  let varInpObj$RechnungsBetrag_4                             = document.getElementById('idInputRechnungsBetrag_4');
  let varInpObj$RechnungsBetrag_5                             = document.getElementById('idInputRechnungsBetrag_5');

  varInpObj$RechnungsBetrag_1.value                           = '';
  varInpObj$RechnungsBetrag_1.style.backgroundColor           = 'lightpink';
  varInpObj$RechnungsBetrag_2.value                           = '';
  varInpObj$RechnungsBetrag_2.style.backgroundColor           = 'lightpink';
  varInpObj$RechnungsBetrag_3.value                           = '';
  varInpObj$RechnungsBetrag_3.style.backgroundColor           = 'lightpink';
  varInpObj$RechnungsBetrag_4.value                           = '';
  varInpObj$RechnungsBetrag_4.style.backgroundColor           = 'lightpink';
  varInpObj$RechnungsBetrag_5.value                           = '';
  varInpObj$RechnungsBetrag_5.style.backgroundColor           = 'lightpink';

  /// RECHNUNGSBETRAG SUMME
  let varInpObj$RechnungsBetragSumme_1                        = document.getElementById('idInputRechnungsBetragSumme_1');
  let varInpObj$RechnungsBetragSumme_2                        = document.getElementById('idInputRechnungsBetragSumme_2');
  let varInpObj$RechnungsBetragSumme_3                        = document.getElementById('idInputRechnungsBetragSumme_3');
  let varInpObj$RechnungsBetragSumme_4                        = document.getElementById('idInputRechnungsBetragSumme_4');
  let varInpObj$RechnungsBetragSumme_5                        = document.getElementById('idInputRechnungsBetragSumme_5');

  varInpObj$RechnungsBetragSumme_1.value                      = '';
  varInpObj$RechnungsBetragSumme_1.style.backgroundColor      = 'lightgrey';
  varInpObj$RechnungsBetragSumme_2.value                      = '';
  varInpObj$RechnungsBetragSumme_2.style.backgroundColor      = 'lightgrey';
  varInpObj$RechnungsBetragSumme_3.value                      = '';
  varInpObj$RechnungsBetragSumme_3.style.backgroundColor      = 'lightgrey';
  varInpObj$RechnungsBetragSumme_4.value                      = '';
  varInpObj$RechnungsBetragSumme_4.style.backgroundColor      = 'lightgrey';
  varInpObj$RechnungsBetragSumme_5.value                      = '';
  varInpObj$RechnungsBetragSumme_5.style.backgroundColor      = 'lightgrey';

  /// RECHNUNGSMENGE
  let varInpObj$RechnungsMenge_1                              = document.getElementById('idInputRechnungsMenge_1');
  let varInpObj$RechnungsMenge_2                              = document.getElementById('idInputRechnungsMenge_2');
  let varInpObj$RechnungsMenge_3                              = document.getElementById('idInputRechnungsMenge_3');
  let varInpObj$RechnungsMenge_4                              = document.getElementById('idInputRechnungsMenge_4');
  let varInpObj$RechnungsMenge_5                              = document.getElementById('idInputRechnungsMenge_5');

  varInpObj$RechnungsMenge_1.value                            = '';
  varInpObj$RechnungsMenge_1.style.backgroundColor            = 'lightpink';
  varInpObj$RechnungsMenge_2.value                            = '';
  varInpObj$RechnungsMenge_2.style.backgroundColor            = 'lightpink';
  varInpObj$RechnungsMenge_3.value                            = '';
  varInpObj$RechnungsMenge_3.style.backgroundColor            = 'lightpink';
  varInpObj$RechnungsMenge_4.value                            = '';
  varInpObj$RechnungsMenge_4.style.backgroundColor            = 'lightpink';
  varInpObj$RechnungsMenge_5.value                            = '';
  varInpObj$RechnungsMenge_5.style.backgroundColor            = 'lightpink';
  
  /// RECHNUNGSMENGE SUMME
  let varInpObj$RechnungsMengeSumme_1                         = document.getElementById('idInputRechnungsMengeSumme_1');
  let varInpObj$RechnungsMengeSumme_2                         = document.getElementById('idInputRechnungsMengeSumme_2');
  let varInpObj$RechnungsMengeSumme_3                         = document.getElementById('idInputRechnungsMengeSumme_3');
  let varInpObj$RechnungsMengeSumme_4                         = document.getElementById('idInputRechnungsMengeSumme_4');
  let varInpObj$RechnungsMengeSumme_5                         = document.getElementById('idInputRechnungsMengeSumme_5');

  varInpObj$RechnungsMengeSumme_1.value                       = '';
  varInpObj$RechnungsMengeSumme_1.style.backgroundColor       = 'lightgrey';
  varInpObj$RechnungsMengeSumme_2.value                       = '';
  varInpObj$RechnungsMengeSumme_2.style.backgroundColor       = 'lightgrey';
  varInpObj$RechnungsMengeSumme_3.value                       = '';
  varInpObj$RechnungsMengeSumme_3.style.backgroundColor       = 'lightgrey';
  varInpObj$RechnungsMengeSumme_4.value                       = '';
  varInpObj$RechnungsMengeSumme_4.style.backgroundColor       = 'lightgrey';
  varInpObj$RechnungsMengeSumme_5.value                       = '';
  varInpObj$RechnungsMengeSumme_5.style.backgroundColor       = 'lightgrey';

  /// ZEITRAUM
  let varButObj$ImZeitraum_1                                  = document.getElementById('idButtonImZeitraum_1');
  let varButObj$ImZeitraum_2                                  = document.getElementById('idButtonImZeitraum_2');
  let varButObj$ImZeitraum_3                                  = document.getElementById('idButtonImZeitraum_3');
  let varButObj$ImZeitraum_4                                  = document.getElementById('idButtonImZeitraum_4');
  let varButObj$ImZeitraum_5                                  = document.getElementById('idButtonImZeitraum_5');

  varButObj$ImZeitraum_1.innerHTML                            = '';
  varButObj$ImZeitraum_1.style.backgroundColor                = 'lightgray';

  varButObj$ImZeitraum_2.innerHTML                            = '';
  varButObj$ImZeitraum_2.style.backgroundColor                = 'lightgray';

  varButObj$ImZeitraum_3.innerHTML                            = '';
  varButObj$ImZeitraum_3.style.backgroundColor                = 'lightgray';

  varButObj$ImZeitraum_4.innerHTML                            = '';
  varButObj$ImZeitraum_4.style.backgroundColor                = 'lightgray';

  varButObj$ImZeitraum_5.innerHTML                            = '';
  varButObj$ImZeitraum_5.style.backgroundColor                = 'lightgray';

  /// AUßERHALB DES ZEITRAUMS
  let varButObj$Außerhalb_1                                   = document.getElementById('idButtonAußerhalb_1');
  let varButObj$Außerhalb_2                                   = document.getElementById('idButtonAußerhalb_2');
  let varButObj$Außerhalb_3                                   = document.getElementById('idButtonAußerhalb_3');
  let varButObj$Außerhalb_4                                   = document.getElementById('idButtonAußerhalb_4');
  let varButObj$Außerhalb_5                                   = document.getElementById('idButtonAußerhalb_5');

  varButObj$Außerhalb_1.innerHTML                             = '';
  varButObj$Außerhalb_1.style.backgroundColor                 = 'lightgray';

  varButObj$Außerhalb_2.innerHTML                             = '';
  varButObj$Außerhalb_2.style.backgroundColor                 = 'lightgray';
 
  varButObj$Außerhalb_3.innerHTML                             = '';
  varButObj$Außerhalb_3.style.backgroundColor                 = 'lightgray';
 
  varButObj$Außerhalb_4.innerHTML                             = '';
  varButObj$Außerhalb_4.style.backgroundColor                 = 'lightgray';
 
  varButObj$Außerhalb_5.innerHTML                             = '';
  varButObj$Außerhalb_5.style.backgroundColor                 = 'lightgray';
 
  // BESTELLBESTÄTIGUNG
  let varButObj$Bestellbestätigung_1                          = document.getElementById('idButtonBestellbestätigung_1');
  let varButObj$Bestellbestätigung_2                          = document.getElementById('idButtonBestellbestätigung_2');
  let varButObj$Bestellbestätigung_3                          = document.getElementById('idButtonBestellbestätigung_3');
  let varButObj$Bestellbestätigung_4                          = document.getElementById('idButtonBestellbestätigung_4');
  let varButObj$Bestellbestätigung_5                          = document.getElementById('idButtonBestellbestätigung_5');

  varButObj$Bestellbestätigung_1.innerHTML                    = '';
  varButObj$Bestellbestätigung_1.style.backgroundColor        = 'lightgray';

  varButObj$Bestellbestätigung_2.innerHTML                    = '';
  varButObj$Bestellbestätigung_2.style.backgroundColor        = 'lightgray';

  varButObj$Bestellbestätigung_3.innerHTML                    = '';
  varButObj$Bestellbestätigung_3.style.backgroundColor        = 'lightgray';

  varButObj$Bestellbestätigung_4.innerHTML                    = '';
  varButObj$Bestellbestätigung_4.style.backgroundColor        = 'lightgray';

  varButObj$Bestellbestätigung_5.innerHTML                    = '';
  varButObj$Bestellbestätigung_5.style.backgroundColor        = 'lightgray';

  // TEXTAREAS
  // FRAGE 1 //
  let varTexAreObj$Frage_1                                    = document.getElementById('idTextAreaFrage1');
  varTexAreObj$Frage_1.value                                  = conTxt$Textbaustein_1_1;


  // FRAGE 3 //
  let varTexAreObj$Frage_3                                    = document.getElementById('idTextAreaFrage3');
  varTexAreObj$Frage_3.value                                  = conTxt$Textbaustein_15;


  // FRAGE 4 //
  let varTexAreObj$Frage_4_1                                  = document.getElementById('idTextAreaFrage4_1');
  varTexAreObj$Frage_4_1.value                                = conTxt$Textbaustein_3;

  let varTexAreObj$Frage_4_2                                  = document.getElementById('idTextAreaFrage4_2');
  varTexAreObj$Frage_4_2.value                                = conTxt$Textbaustein_5;

  let varTexAreObj$Frage_4_3                                  = document.getElementById('idTextAreaFrage4_3');
  varTexAreObj$Frage_4_3.value                                = conTxt$Textbaustein_27;

  let varTexAreObj$Frage_4_4                                  = document.getElementById('idTextAreaFrage4_4');
  varTexAreObj$Frage_4_4.value                                = conTxt$Textbaustein_33;


  // FRAGE 5 //
  let varTexAreObj$Frage_5_1                                  = document.getElementById('idTextAreaFrage5_1');
  varTexAreObj$Frage_5_1.value                                = conTxt$Textbaustein_7_4;

  let varTexAreObj$Frage_5_2                                  = document.getElementById('idTextAreaFrage5_2');
  varTexAreObj$Frage_5_2.value                                = conTxt$Textbaustein_7_5;

  let varTexAreObj$Frage_5_3                                  = document.getElementById('idTextAreaFrage5_3');
  varTexAreObj$Frage_5_3.value                                = conTxt$Textbaustein_7_6;


  let varTexAreObj$Frage_5_4                                  = document.getElementById('idTextAreaFrage5_4');
  varTexAreObj$Frage_5_4.value                                = conTxt$Textbaustein_7_1;

  let varTexAreObj$Frage_5_5                                  = document.getElementById('idTextAreaFrage5_5');
  varTexAreObj$Frage_5_5.value                                = conTxt$Textbaustein_7_2;

  let varTexAreObj$Frage_5_6                                  = document.getElementById('idTextAreaFrage5_6');
  varTexAreObj$Frage_5_6.value                                = conTxt$Textbaustein_7_3;


  let varTexAreObj$Frage_5_7                                  = document.getElementById('idTextAreaFrage5_7');
  varTexAreObj$Frage_5_7.value                                = conTxt$Textbaustein_21;

  let varTexAreObj$Frage_5_8                                  = document.getElementById('idTextAreaFrage5_8');
  varTexAreObj$Frage_5_8.value                                = conTxt$Textbaustein_22;


  // FRAGE 6 //
  let varTexAreObj$Frage_6                                    = document.getElementById('idTextAreaFrage6');
  varTexAreObj$Frage_6.value                                  = conTxt$Textbaustein_9;


  // FRAGE 8 //
  let varTexAreObj$Frage_8_1                                  = document.getElementById('idTextAreaFrage8_1');
  varTexAreObj$Frage_8_1.value                                = conTxt$Textbaustein_11_1;

  let varTexAreObj$Frage_8_2                                  = document.getElementById('idTextAreaFrage8_2');
  varTexAreObj$Frage_8_2.value                                = conTxt$Textbaustein_11_2;

  let varTexAreObj$Frage_8_3                                  = document.getElementById('idTextAreaFrage8_3');
  varTexAreObj$Frage_8_3.value                                = conTxt$Textbaustein_11_3;

}
