
// VARIABLES

var vGlo$InitState = 0;

let obj$Application = {

    val$Number: 0,
    val$CentralApplication: '',
    valobj$Applicant: {

        val$Name: '',
        valobj$Adress: {

            val$Street: '',
            val$Residence: ''
        },
        val$IBAN: ''
    }
}

let arr$Applications = [];



// RESET
function funReset() {

    vGlo$InitState = 0;

    funINITAplications();
}




// INIT
function funINITAplications() {

    console.log('INIT START');
    vGlo$InitState = localStorage.getItem('vls$InitState');

    if (vGlo$InitState === 0) {

        console.log('INIT RUNNED');
        obj$Application.val$Number = null;
        arr$Applications = [];
        vGlo$InitState = 1;
        localStorage.setItem('vls$InitState', vGlo$InitState);    
    }

    funSaveApplications();
    funLoadApplications();
}



// SAVE
function funSaveApplications() {

    console.log('SAVE START');

    localStorage.setItem('vls$ArrayApplications', JSON.stringify(arr$Applications));

    funShowApplications();
}



// LOAD
function funLoadApplications() {

    console.log('LOAD START');

    arr$Applications = [];
    arr$Applications = JSON.parse(localStorage.getItem('vls$ArrayApplications'));

    console.log(arr$Applications);

    funShowApplications();
}



// ADD
function funAddApplication() {

    let v$Number             = document.getElementById('id_InputApplicationNumber').value;
    let v$CentralApplication = document.getElementById('id_CentralApplication').value;
    let v$Name               = document.getElementById('id_InputApplicationApplicantName').value;
    let v$Street             = document.getElementById('id_InputApplicationApplicantStreet').value;
    let v$Residence          = document.getElementById('id_InputApplicationApplicantResidence').value;
    let v$IBAN               = document.getElementById('id_inputApplicationApplicantIBAN').value;


    obj$Application = new Object();
    obj$Application.valobj$Applicant = new Object();
    obj$Application.valobj$Applicant.valobj$Adress = new Object();

    obj$Application.val$Number                                   = v$Number;
    obj$Application.val$CentralApplication                       = v$CentralApplication;
    obj$Application.valobj$Applicant.val$Name                    = v$Name;
    obj$Application.valobj$Applicant.valobj$Adress.val$Street    = v$Street;
    obj$Application.valobj$Applicant.valobj$Adress.val$Residence = v$Residence;
    obj$Application.valobj$Applicant.val$IBAN                    = v$IBAN;

    arr$Applications.push(obj$Application);

    funSaveApplications();
    funLoadApplications();
}



// SHOW
function funShowApplications() {

    let v$divApplication = '';

    v$divApplication = '';

    try
    {
        if (arr$Applications !== undefined && arr$Applications.length > 0)
        {
            for (v$Counter = 0; v$Counter < arr$Applications.length; v$Counter++) {
    
                let objTmp$application = arr$Applications[v$Counter];
    
                v$divApplication += '' + 
                '<p style="text-align: center;">' + objTmp$application.val$Number + '</p>' + 
                '<p style="text-align: center;">' + objTmp$application.val$CentralApplication + '</p>' + 
                '<p style="text-align: center;">' + objTmp$application.valobj$Applicant.val$Name + '</p>' + 
                '<p style="text-align: center;">' + objTmp$application.valobj$Applicant.valobj$Adress.val$Street + '</p>' +
                '<p style="text-align: center;">' + objTmp$application.valobj$Applicant.valobj$Adress.val$Residence + '</p>' +
                '<p style="text-align: center;">' + obj$Application.valobj$Applicant.val$IBAN + '</p>';
            }
        }    
    } catch (vTmp$Error) {}

    document.getElementById('id_divApplicationGrid').innerHTML = v$divApplication;
}
