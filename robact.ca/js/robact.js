var menuItems = [{text:"Accueil", link:"file:///C:/Users/Jean-Luc Robitaille/Documents/WebDev/robact/index.html", id:"index"}, 
				{text:"L'équipe", link:"file:///C:/Users/Jean-Luc Robitaille/Documents/WebDev/robact/pages/equipe.html", id:"equipe"},
				{text:"Les services", link:"file:///C:/Users/Jean-Luc Robitaille/Documents/WebDev/robact/pages/services.html", id:"services"},
				{text:"Nous joindre", link:"file:///C:/Users/Jean-Luc Robitaille/Documents/WebDev/robact/pages/nousjoindre.html", id:"nousjoindre"}];

/*//For prod
var menuItems = [{text:"Accueil", link:"//robact.com/index.html", id:"index"}, 
				{text:"L'Équipe", link:"//robact.com/pages/equipe.html", id:"equipe"},
				{text:"Les Services", link:"//robact.com/pages/services.html", id:"services"},
				{text:"Nous Joindre", link:"//robact.com/pages/nousjoindre.html", id:"nousjoindre"}];*/

var domReady = function (callback) {
    (document.readyState === "interactive" || document.readyState === "complete") ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {
	addMenuItems();

	highlightCurrentMenu();

	//Call the function contactImgHover only on page nousjoindre
	if(document.documentElement.id === "nousjoindreHTML"){
		contactImgHover();
	}
	//Call the function contactImgHover only on page equipe
	if(document.documentElement.id === "equipeHTML"){
		hideExp();
		equipeImgHover();
	}
});


//Create menu items and add to <nav> tag in HTML
function addMenuItems () {
	var ul = document.createElement('ul');

	for(items in menuItems){
		//Create the <a> tag for the link
		var aLink = document.createElement('a');
		aLink.href = menuItems[items].link;
		aLink.id = menuItems[items].id;
		aLink.appendChild(document.createTextNode(menuItems[items].text));

		//Create the <li> tag to inset the <a> tag in it.
		var liElement = document.createElement('li');
		liElement.appendChild(aLink);

		//Add the <li> element to the main <ul>
		ul.appendChild(liElement);
	}

	//Add the <ul> to the <nav> on the page
	document.getElementById("nav").appendChild(ul);
}

//Highlights the menu item depending on the current selected page
function highlightCurrentMenu () {
	var currentURL = window.location.href;

	if(currentURL.indexOf("nousjoindre") > -1){
		var menuItem = document.getElementById("nousjoindre");
	}
	else if(currentURL.indexOf("services") > -1){
		var menuItem = document.getElementById("services");
	}
	else if(currentURL.indexOf("equipe") > -1){
		var menuItem = document.getElementById("equipe");
	}
	else if(currentURL.indexOf("index") > -1){
		var menuItem = document.getElementById("index");
	}
	else
	{
		var menuItem = document.getElementById("index");
	}

	menuItem.className += " selectedPage"
}

/*This function receives a html img object and a path.
It changes the img object's image and returns the img object*/
function contactImgHover (htmlImg, path) {
	var emailPaul = document.getElementById("imgEmailPaul");
	var emailFrance= document.getElementById("imgEmailFrance"); 

	emailPaul.onmouseover = function(){emailPaul.src="../img/mailHover.png"};
	emailPaul.onmouseout = function(){emailPaul.src="../img/mail1.png"};

	emailFrance.onmouseover = function(){emailFrance.src="../img/mailHover.png"};
	emailFrance.onmouseout = function(){emailFrance.src="../img/mail1.png"};
}

function equipeImgHover (){
	var linkedInPaul = document.getElementById("imgLinkedInPaul");
	var linkedInFrance = document.getElementById("imgLinkedInFrance");

	linkedInPaul.onmouseover = function(){linkedInPaul.src="../img/linkedinHover.png"};
	linkedInPaul.onmouseout = function(){linkedInPaul.src="../img/linkedin.png"};

	linkedInFrance.onmouseover = function(){linkedInFrance.src="../img/linkedinHover.png"};
	linkedInFrance.onmouseout = function(){linkedInFrance.src="../img/linkedin.png"};
}

/*This function allows to show or hide the Experience texte on page equipe*/
function hideExp () {

	var showExpBtn = document.getElementById("showExpBtn");
	var hideExpBtn = document.getElementById("hideExpBtn");

	showExpBtn.onclick = function() { 
		document.getElementById("expPaul").classList.remove("displayNone");
		document.getElementById("expFrance").classList.remove("displayNone");

		showExpBtn.classList.remove("expBtnDiv");
		showExpBtn.classList.add("displayNone");

		hideExpBtn.classList.remove("displayNone");
		hideExpBtn.classList.add("expBtnDiv");
	};

	hideExpBtn.onclick = function() { 
		document.getElementById("expPaul").classList.add("displayNone");
		document.getElementById("expFrance").classList.add("displayNone");

		showExpBtn.classList.add("expBtnDiv");
		showExpBtn.classList.remove("displayNone");

		hideExpBtn.classList.add("displayNone");
		hideExpBtn.classList.remove("expBtnDiv");
	};
}