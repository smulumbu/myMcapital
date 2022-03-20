/function which publishes n first terms of an array
function modifyTab (tableauIn){

      const n = 5;
      var tableauOut = " ";
          tableauOut = tableauIn.slice(0,n);
     return tableauOut;

    }


    var tableauIn = ["sabin", "Mulumbu", "Nasert", "19", "Avril", "1994", "Likasi", "Panda"];

 console.log(modifyTab(tableauIn));
