
// VARIABLES \\
{
  var arrToDoList = [{
    varName: '1. Element',
    varDate: '2022-12-22',
  },{
    varName: '2. Element',
    varDate: '1981-02-13',
  }];
}

// FUNCTIONS \\
{
  function funArray() {

    let arrTest = [
      10, 
      20, 
      30
    ];
  
    console.log(': ' + arrTest);
    console.log('0: ' + arrTest[0]);
    console.log('1: ' + arrTest[1]);
    console.log('2: ' + arrTest[2]);
    console.log('Length: ' + arrTest.length);
    
    let arrMix = [
      1,
      'Hallo',
      true,
      {name: 'Socken'},
      [10, 20]
    ]
  
    console.log(': ' + arrMix);
    console.log(typeof arrMix);
    console.log(Array.isArray(arrMix));
  
    arrTest.push(100);
    console.log(': ' + arrTest);
  
    arrTest.splice(0, 1);
    console.log(': ' + arrTest);
  }
  
  function funGetName() {
  
    let inputElement = document.querySelector('.inpToDoText');
    let varElement = inputElement.value;
    inputElement.value = '';
  
    console.log('Element: ' + varElement);
    return varElement;
  }

  function funGetDate() {
  
    let inputElement = document.querySelector('.inpDate');
    let varElement = inputElement.value;
    inputElement.value = '';
  
    console.log('Element: ' + varElement);
    return varElement;
  }

  function funAddElement(arr$, var$Name, var$Date) {
  
    if (var$Name.length > 0) {

      arr$.push({varName: var$Name, varDate: var$Date});
    } else {

      alert("Element not added! It's empty");
    }

    funListElements(arr$);

    return arr$;
  } 

  function funListElements(arr$) {

    let varCounter = 0;
    let varHTMLList = '';

    console.log(arr$.length);

    if (arr$ !== undefined && arr$.length > 0)
    {
      for (varCounter = 0; varCounter < arr$.length; varCounter++) {

        let { varName } = arr$[varCounter];
        let { varDate } = arr$[varCounter];

        let varParagraphElement = `
          <div class='divListElement'>
            <p class='listElementName'>
              ${varName}
            </p>
            <p class='listElementDate'>
              ${varDate}
            </p>
            <button class='listElementDeleteButton' onclick="
              arrToDoList.splice(${varCounter}, 1);
              funListElements(arrToDoList);
              console.log(arrToDoList);
              ">
              Delete
            </button>
          </div>
        `;

        varHTMLList += varParagraphElement;
      }
    }

    console.log(varHTMLList);
    document.querySelector('.divList').innerHTML = varHTMLList;
  }
}
