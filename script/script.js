
var groups = document.querySelectorAll('.group');
var icons =  document.querySelectorAll('.icon');
var nextGroupIndex;
let caisse1 = 0;
let caisse2 = 0;
let caisse3 = 0;
let caisse4 = 0;
let chefAgence = 0;
let caisse = 0;
let cheque = 0;
let payement = 0;
let gestionCompte = 0;
let autreService = 0;
let non_satisfait = 0;
let pas_satisfait = 0;
let un_peu=0;
let satisfait = 0;
let tres_satisfait =0;
let pas_du_tout =0;
let pas_vraiment = 0;
let plutot = 0;
let bien = 0;
let tres_bien = 0;
let oui = 0;
let non = 0;
let telephone="";
let commentaire="";
let name = "";
var nextGroupIndex;
let nextGroup;

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        currentGroup = icon.parentElement.parentElement;
        var currentGroupIndex = parseInt(currentGroup.classList[1].split('-')[1]);
        var currentIconIndex = icon.classList[1]
        nextGroupIndex =currentGroupIndex % groups.length + 1;
        nextGroup = document.querySelector(`.group-${nextGroupIndex}`);
        switch(currentGroupIndex){
            case 2:
                switch(currentIconIndex){
                    case 'caisse1':
                        name = "caisse1"
                    break;
                    case 'caisse2':
                        name = "caisse2"
                    break;
                    case 'caisse3':
                        name = "caisse3"
                    break
                    case 'caisse4' :
                        name = "caisse4"
                    break;
                    case 'chefAgence':
                        name = "chefAgence"
                    break;
                    }
            break;
            case 3:
               switch(currentIconIndex){
                    case 'caisse':
                        caisse = 1;
                        cheque = 0;
                        payement = 0;
                        gestionCompte = 0;
                        revendication = 0
                        autreService = 0;
                    break;
                    case 'cheque':
                        caisse = 0;
                        cheque = 1;
                        payement = 0;
                        gestionCompte = 0;
                        revendication = 0
                        autreService = 0;
                    break;
                   case 'payement':
                      caisse = 0;
                      cheque = 0;
                      payement = 1;
                      gestionCompte = 0;
                      revendication =0
                      autreService = 0;
                   break
                   case 'gestion':
                      caisse = 0;
                      cheque = 0;
                      payement = 1;
                      gestionCompte = 1;
                      revendication = 0
                      autreService = 0;
                   break
                   case 'gestion' :
                      caisse = 0;
                      cheque = 0;
                      payement = 0;
                      gestionCompte = 0;
                      revendication = 1;
                      autreService = 0;
                   break;
                   case 'autres':
                      caisse = 0;
                      cheque = 0;
                      payement = 0;
                      gestionCompte = 0;
                      autreService = 1;
                   break;
                }
            break;
            case 4:
                switch(currentIconIndex){
                    case 'non-satisfait':
                        non_satifait =1;
                        pas_satisfait = 0;
                        un_peu = 0;
                        satisfait = 0;
                        tres_satisfait = 0;
                    break;
                    case 'pas-satisfait':
                       non_satifait =0;
                        pas_satisfait = 1;
                        un_peu = 0;
                        satisfait = 0;
                        tres_satisfait = 0;
                    break;
                    case 'un-peu':
                        non_satisfait =0;
                        pas_satisfait = 0;
                        un_peu = 1;
                        satisfait = 0;
                        tres_satisfait = 0;
                    break;
                    case 'satisfait':
                        non_satisfait =0;
                        pas_satisfait = 0;
                        un_peu = 0;
                        satisfait = 1;
                        tres_satisfait = 0;
                    break;
                    case 'tres-satisfait':
                        non_satisfait =0;
                        pas_satisfait = 0;
                        un_peu = 0;
                        satisfait = 0;
                        tres_satisfait = 1;
                    break;
                    }
            break;
            case 5:
	            switch(currentIconIndex){
    	            case 'pas-du-tout':
    	               pas_du_tout =1;
    	               pas_vraiment = 0;
    	               plutot = 0;
    	               bien = 0;
    	               tres_bien = 0;
    	            break;
    	            case 'pas-vraiment':
    	               pas_du_tout = 0;
    	               pas_vraiment = 1;
    	               plutot = 0;
    	               bien = 0;
    	               tres_bien = 0;
    	            break;
    	            case 'plutot':
    	               pas_du_tout =0;
    	               pas_vraiment = 0;
    	               plutot = 1;
    	               bien = 0;
    	               tres_bien = 0;
    	            break;
    	            case 'bien':
    	               pas_du_tout =0;
    	               pas_vraiment = 0;
    	               plutot = 0;
    	               bien = 1;
    	               tres_bien = 0;
    	            break;
    	            case 'tres-bien':
    	               pas_du_tout = 0;
    	               pas_vraiment = 0;
    	               plutot = 0;
    	               bien = 0;
    	               tres_bien = 1;
    	            break;
    	       }
            break;
            case 6:
                switch(currentIconIndex){
                    case 'oui':
                        oui = 1;
                        non = 0;
                    break;
                    case 'non':
                        oui = 0;
                        non = 1;
                    break;
                    }
            break;
          }
          currentGroup.classList.remove('active');
          nextGroup.classList.add('active');
        });
       });

//Evenement sur le bouton envoi 
const submit = document.getElementById('submit')
submit.addEventListener('click',(e)=>{
      e.preventDefault();
      commentaire = document.getElementById("comment").value;
      telephone = document.getElementById('phone').value;
      const currentGroup = document.querySelector('.group-7');
      const startGroupe = document.querySelector('.group-1');
      var now = new Date();
      var datetime = now.getFullYear() + '_' + (now.getMonth()+1).toString().padStart(2, '0') + '_' + now.getDate().toString().padStart(2, '0') + '_' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0');
      var date = now.getFullYear() + '_' + (now.getMonth()+1).toString().padStart(2, '0') + '_' + now.getDate().toString().padStart(2, '0');
// Créer un tableau pour stocker les données
     var data = [
    {'datetime': datetime,
     'name':name,
     'caisse': caisse,
     'cheque': cheque, 
     'payement':payement,
     'gestion_de_compte': gestionCompte,
     'autres_services': autreService,
     'tres_satisfait': tres_satisfait,
     'satisfait': satisfait,
     'un_peu_satifait': un_peu,
     'pas_satisfait':pas_satisfait,
     'pas_du_tout_satisfait': non_satisfait,
     'pas_du_tout':pas_du_tout,
     'pas_vraiment': pas_vraiment,
     'plutot_bien':plutot,
     'bien':bien,
     'tres_bien':tres_bien,
     'oui':oui,
     'non':non,
     'commentaire': commentaire,
     'telephone':telephone
    }
  ];
  
var storagename ="RapportSatCl_"+date;
$.get( "/user/storage.lp?action=storageset&storagename="+storagename+"&format=json&value=" + JSON.stringify(data), function( data ) {
    res = data.trim();
    console.log(res);
});
currentGroup.classList.remove('active');
startGroupe.classList.add('active');
console.log(data);
    
document.getElementById('submit').classList.add('hidden');
phone_input.value="";
document.getElementById("comment").value = "";
});


/*validation du numero de telephone  de l'utilisateur*/
const  phone_input = document.getElementById('phone');
   function numTest(phone) {
    var res=/^[\+]?[()]?[6]{1}[)]?[-\s\.]?[^(0|1|4)]{1}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{3}$/im;
    return res.test(phone);
  }
  
 
phone_input.addEventListener('input',()=>{
    if (!numTest(phone_input.value)) {
        document.getElementById("errors").classList.remove('hidden');
        document.getElementById('submit').classList.add('hidden');
      }
      else{
         document.getElementById("errors").classList.add('hidden');
         document.getElementById('submit').classList.remove('hidden'); 
      }
  });

/*gestion du retour su la page d'accueil*/
  $(function() {
  
  // retour à la apag dd'accueil 
  var SE_Timeout = 15000; 

  var eventlist = 'click change mouseover mouseout vmousedown vmouseout touchend'//liste des evenement de la souris sur l'objet 
  
  // la temporisation sur l'inactivité
  function No_Usage_Detected(callback, timeout, _this) {
    var timer;
    return function(e) {
        var _that = this;
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function() { 
            callback.call(_this || _that, e);
        }, timeout);
    }
  }
const startPage =  document.querySelector('.group-1');
  // retour à la page d'acuei après l'ecoulement du temp
    var SE_Goto_Startpage = No_Usage_Detected(function(e) {
    if (nextGroupIndex != 1) {
        nextGroup.classList.remove('active');
        startPage.classList.add('active');
    }
  }, SE_Timeout);
  
  // ajout d'un ecouteur d'evenement sur l'entrée utilisateur 
  $(document)
  .on(eventlist, function() {
    SE_Goto_Startpage();
  });

});