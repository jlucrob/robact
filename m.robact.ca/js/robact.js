var domReady = function (callback) {
    (document.readyState === "interactive" || document.readyState === "complete") ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {
	//Call the function contactImgHover only on page nousjoindre
	if(document.documentElement.id === "nousjoindreHTML"){
		contactImgHover();
	}
	//Call the function contactImgHover only on page equipe
	if(document.documentElement.id === "equipeHTML"){
		equipeImgHover();
	}
});

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