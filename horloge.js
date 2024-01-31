var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date')

var affichageHeure = function(){
    var today,annee,listeMois,mois,listeJours,joursNumero,joursNOm,heures,
    minutes,secondes,deuxChiffres;
    today = new Date();
    annee = today.getFullYear()

    listeMois = ["Janvier","Février","Mars","Avril",
    "Mais","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    mois = listeMois[today.getMonth()]
    joursNumero = today.getDate();
    listeJours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    joursNOm = listeJours[today.getDay()];

    deuxChiffres = function(element){
        if(element<10){
            return element = "0" + element;

        }else{
            return element;
        }
    }


    heures = deuxChiffres(today.getHours());
    minutes = deuxChiffres(today.getMinutes());
    secondes = deuxChiffres(today.getSeconds())
    heuresDiv.textContent = heures+": "+minutes+": "+secondes;
    dateDiv.textContent = joursNOm +" "+joursNumero+" "+mois+" "+annee; 
    setTimeout(affichageHeure,100);
}
affichageHeure();