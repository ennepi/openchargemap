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

    tot= valoremaggiore + valoreminore;
    valoremaggiore= valoremaggiore/tot*100;
    valoremaggiore= Math.round(valoremaggiore);
    valoremaggiore=valoremaggiore-1;
    valoreminore= valoreminore/tot*100;
    valoreminore= Math.round(valoreminore);
    valoreminore=valoreminore-1;
    var altrivalori=2;

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      
        type: 'doughnut',
    
       
        data: {
            labels: ["0,40 €KWh", "Free","Other"],
            datasets: [{
                label: "Rome Usage Cost",
                backgroundColor: [
                    'rgb(0,230,118)',
                    'rgb(105,240,174)',
                    'rgb(185,246,202)'
                ],
                borderColor: 'rgb(255,255,255)',
                data: [valoremaggiore, valoreminore, altrivalori],
                
            }]
        },
    
      
        options: {
            legend: {
               position: 'left'
            },
        }
    });
    

});
