$( () => {
    $('#gioca').on('click', function() {
        let num1 = Number ($('#num1').val());//input numerici
        let num2 = Number ($('#num2').val());
        let rand = Math.floor(Math.random()*101);//generazione random tra 0 e 100
        $('#input').next().text('Il numero random è: ' + rand);
        
        let diff1: number = Math.abs(num1-rand); //uso del valore assoluto per evitare incongruenze negli if
        let diff2: number = Math.abs(num2-rand);

        if (num1==rand) { //condizioni del gioco
            $('#input').next().next().next().text('Il giocatore 1 ha azzeccato il numero random.');
        }
        else if (num2==rand) {
            $('#input').next().next().next().text('Il giocatore 2 ha azzeccato il numero random.');
        }
        else if (diff1<diff2) {
            $('#input').next().next().next().text('Il giocatore 1 si è avvicinato di più al numero random.');
        }
        else if (diff1>diff2) {
            $('#input').next().next().next().text('Il giocatore 2 si è avvicinato di più al numero random.');
        }
        //probabilmente è poco efficiente usare tre next(), dovuti ai br usati per spaziare
    })

    $('#reset').on('click', function() {
        let rand = 0;
        $('#input').next().text('Il numero random è: ' + rand);
        $('#input').next().next().next().text('Vediamo quale giocatore si avvicina di più al numero random.');
    })
});
