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
    valoreminore= valoreminore/tot*100;
    valoreminore= Math.round(valoreminore);


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      
        type: 'doughnut',
    
       
        data: {
            labels: ["0,40 €KWh", "Free"],
            datasets: [{
                label: "Rome Usage Cost",
                backgroundColor: [
                    'rgb(0,200,83)',
                    'rgb(165,214,167)'
                ],
                borderColor: 'rgb(255,255,255)',
                data: [valoremaggiore, valoreminore],
                
            }]
        },
    
      
        options: {
            legend: {
               position: 'left'
            },
        }
    });
    

});
