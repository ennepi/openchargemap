$.getJSON("https://api.myjson.com/bins/cqa18", function showPie(UsageCost) {
    

    var valoremaggiore=0;
    var valoreminore=0;
    
    for(i=0; i<UsageCost.Costi.length; i++){
        
        
        if(UsageCost.Costi[i].payment == '0,40'){
            valoremaggiore++;
            
        } else {
            valoreminore++;
        }
        
    }
});
