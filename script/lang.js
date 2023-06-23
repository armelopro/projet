let title = document.querySelector('.title');
let langs = document.querySelectorAll('.lang');
let pageTitle = document.querySelector('.titre-page');
let ques1 = document.querySelector('#question-1');
let ques2 = document.querySelector('#question-2');
let ques3 = document.querySelector('#question-3');
let ques4 = document.querySelector('#question-4');
let ques5 = document.querySelector('#question-5');
let envoyer = document.getElementById('submit')
let comment =  document.querySelector('#comment');
let tel = document.querySelector('#phone');
let icon1 = document.querySelector('#icon1');
let icon2 = document.querySelector('#icon2');
let icon3 = document.querySelector('#icon3');
let icon4 = document.querySelector('#icon4');
let icon5 = document.querySelector('#icon5');
let icon6 = document.querySelector('#icon6');
let icon7 = document.querySelector('#icon7');
let icon8 = document.querySelector('#icon8');
let icon9 = document.querySelector('#icon9');
let icon10 = document.querySelector('#icon10');
let icon11 = document.querySelector('#icon11');
let icon12 = document.querySelector('#icon12');
let icon13 = document.querySelector('#icon13');
let icon14 = document.querySelector('#icon14');
let icon15 = document.querySelector('#icon15');
let icon16 = document.querySelector('#icon16');
let icon17 = document.querySelector('#icon17');
let icon18 = document.querySelector('#icon18');
let icon19 = document.querySelector('#icon19');
let icon20 = document.querySelector('#icon20');
let icon21 = document.querySelector('#icon21');
let icon22 = document.querySelector('#icon22');
let link = document.querySelectorAll("a");
let errors = document.querySelector("#errors")
link.forEach(el=>{
     el.addEventListener("click", (e)=>{
     	e.preventDefault();
          let attr = el.getAttribute("language");
          document.querySelector(".selected-lang").classList.remove("selected-lang");
          document.querySelector('#'+attr).classList.add("selected-lang");
          title.textContent = data[attr].title;
          pageTitle.textContent  = data[attr].titrePage;
        	ques1.textContent = data[attr].question1;
         	ques2.textContent = data[attr].question2;
         	ques3.textContent =data[attr].question3;
         	ques4.textContent = data[attr].question4;
         	ques5.textContent =data[attr].question5;
         	icon1.textContent = data[attr].icon1;
         	icon2.textContent = data[attr].icon2;
         	icon3.textContent = data[attr].icon3;
         	icon4.textContent = data[attr].icon4;
         	icon5.textContent = data[attr].icon5;
         	icon6.textContent = data[attr].icon6;
         	icon7.textContent = data[attr].icon7;
         	icon8.textContent = data[attr].icon8;
         	icon9.textContent = data[attr].icon9;
         	icon10.textContent = data[attr].icon10;
         	icon11.textContent = data[attr].icon11;
         	icon12.textContent = data[attr].icon12;
         	icon13.textContent = data[attr].icon13;
         	icon14.textContent = data[attr].icon14;
         	icon15.textContent = data[attr].icon15;
         	icon16.textContent = data[attr].icon16;
         	icon17.textContent = data[attr].icon17;
         	icon18.textContent = data[attr].icon18;
         	icon19.textContent = data[attr].icon19;
         	icon20.textContent = data[attr].icon20;
         	icon21.textContent = data[attr].icon21;
         	icon22.textContent = data[attr].icon22;
         	comment.setAttribute("placeHolder",data[attr].comment);
         	tel.setAttribute("placeHolder",data[attr].phone);
         	errors.textContent = data[attr].error;
     });
});

let data = {
	English:{
		title: "template",
		titrePage : "Customer Satisfation",
		aboutUs : "About us",
		question2 : "Question 2",
		question1 : "Question 1", 
		question3 : "Question 3",
		question4 : "Question 4", 
		question5	: "Question 5",
		comment : "Put your comments and suggestions her",
		phone : "Put your phone number her in this format: 695456852",
		submit : "Submit",
		icon1 : "Bank teller",
		icon2 : "Check",
		icon3 : "Account management",
		icon4 : "Claim",
		icon5 : "Other services",
		icon6 : "Bank teller 1",
		icon7 : "Bank teller 2",
		icon8 : "Bank teller 3",
		icon9 : "Bank teller 4",
		icon10 : "Head of agency",
		icon11 : "Not all satisfied",
		icon12 : "Not satisfied",
		icon13 : "Somewhat satisfied",
		icon14 : "Satisfied",
		icon15 :"Very satisfied",
		icon16 : "Not all",
		icon17 : "Not realy",
		icon18 : "rather well",
		icon19 : "Well",
		icon20 :"Very well",
		icon21 : "yes",
		icon22 :"no",
		error : "error: Please type a phone number like this:697582521"


	},
	Francais:{
		title : "model",
		titrePage : "Satisfation client",
		aboutUs : "à propos de nous",
		question2 : "Question 2",
		question1 : "Question 1",
		question3 : "Question 3",
		question4 : "Question 4", 
		question5	: "Question 5",
		comment : "Entrer vos remaque et suggestions ici",
		phone : "Entrer votre numerot dde téléphone en respecant le format:695254455",
		submit : "Envoyer",
		icon1 : "Caisse",
		icon2 : "Chèque",
		icon3 : "Gestion de porte feuille",
		icon4 : "Revendiction",
		icon5 : "Autres services",
		icon6 : "Caisse 1",
		icon7 : "Caisse 2",
		icon8 : "Caisse 3",
		icon9 : "Caisse 4",
		icon10 : "Chef agence",
		icon11 : "Pas du tout satisfait",
		icon12 : "Pas satisfait",
		icon13 : "Un peu satisfait",
		icon14 : "Satisfation",
		icon15 : "Très satisfait", 
		icon16 : "Pas du tout",
		icon17 : "Pas vraiment",
		icon18 : "plutôt bien",
		icon19 : "Bien",
		icon20 : "Très bien",
		icon21 : "oui",
		icon22 : "non",
		error : "Erreur: Veillez respecter ce format: 6954254254"
	}
}
