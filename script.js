a = 0
b = 0
c = 0
d = 0
e = 0
f = 0
function keyboard(el) {
	if (a == 0) {
		document.images["keyboard1"].src = "images/WWHHHHYYYYYY.png"
		document.images["keyboard2"].src = "images/keyboard.png"
		a = 1
	}
	else if	(a == 1) {
		document.images["keyboard1"].src = "images/keyboard.png"
		document.images["keyboard2"].src = ""
		a = 0
	}
}
function mouse(el) {
	if (c == 0) {
		document.images["mouse"].src = "images/mouse2.png"
		c = 1
	}
	else if (c == 1) {
		document.images["mouse"].src = "images/mouse1.png"
		c = 0
	}
}
function nextImage(el){
	if (b == 0){
		document.images["picture1"].src = "images/x.png"
		b = 1
	}
	else if (b == 1){
		document.images["picture1"].src = "images/y.png"
		b = 2
	} 
	else if (b == 2){
		document.images["picture1"].src = "images/z.png"
		b = 3
	} 
	else if (b == 3){
		document.images["picture1"].src = ""
		b = 0
	}
	else {
		// do nothing
	}
}
function refresh(el) {
	if (document.images["picture1"].src.match("images/y.png")) {
		if (document.images["picture2"].src.match("images/e.png")) {
			if (document.images["picture3"].src.match("images/s.png")) {
				alert("password correct, you may continue");
				location.reload();
			}
			else {
				alert("PASSWORD INCORRECT");
				location.reload();
			}
		}
		else {
			alert("PASSWORD INCORRECT");
			location.reload();
		}
	}
	else {
		alert("PASSWORD INCORRECT");
		location.reload();
	}
}
function nextImage2(el){
	if (e == 0){
		document.images["picture2"].src = "images/a.png"
		e = 1
	}
	else if (e == 1){
		document.images["picture2"].src = "images/i.png"
		e = 2
	} 
	else if (e == 2){
		document.images["picture2"].src = "images/e.png"
		e = 3
	} 
	else if (e == 3){
		document.images["picture2"].src = ""
		e = 0
	}
	else {
		// do nothing
	}
}
function nextImage3(el){
	if (f == 0){
		document.images["picture3"].src = "images/s.png"
		f = 1
	}
	else if (f == 1){
		document.images["picture3"].src = "images/a.png"
		f = 2
	} 
	else if (f == 2){
		document.images["picture3"].src = "images/i.png"
		f = 3
	} 
	else if (f == 3){
		document.images["picture3"].src = ""
		f = 0
	}
	else {
		// do nothing
	}
}
function loadAlert(){
	alert("gotta login to this computer")
}
function H(el) {
	document.images["picture0"].src = "images/hint1.png"
}
