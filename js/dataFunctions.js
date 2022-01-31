const urlBase = 'http://thebenbowles.com/cop4331/lampapi/';
const extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";
var searchList = "";
var searchIndex = 0;
var deleteId = "";
console.log("hi");

// -----Index.html-----
// Taken from LAMP - should work in theory
function register()
{
	firstName = document.getElementById("newFirstName").value;
	lastName = document.getElementById("newLastName").value;
	let username = document.getElementById("newUsername").value;
	let password = document.getElementById("newPassword").value;
	// Put login into database
	document.getElementById("registerResult").innerHTML = "";

	let tmp = {login:login,password:password,firstname:firstName,lastname:lastName};
	let jsonPayload = JSON.stringify( tmp );

	let url = urlBase + '/Register.' + extension;

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				document.getElementById("registerResult").innerHTML = "User created successfully";

				let jsonObject = JSON.parse( xhr.responseText );
				userId = jsonObject.id;

				saveCookie();

				window.location.href = "menu.html";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("registerResult").innerHTML = err.message;
	}
}

// Taken from LAMP - should work in theory
function login()
{
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	document.getElementById("loginResult").innerHTML = "";

	let tmp = {login:login,password:password};
	let jsonPayload = JSON.stringify( tmp );

	let url = urlBase + '/Login.' + extension;

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				let jsonObject = JSON.parse( xhr.responseText );
				userId = jsonObject.id;

				if( userId < 1 )
				{
					document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
					return;
				}

				firstName = jsonObject.firstName;
				lastName = jsonObject.lastName;

				saveCookie();

				window.location.href = "menu.html";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("loginResult").innerHTML = err.message;
	}
}

// Taken from LAMP - should work in theory
function saveCookie()
{
	let minutes = 20;
	let date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));
	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + date.toGMTString();
}

// Taken from LAMP - should work in theory
function readCookie()
{
	userId = -1;
	let data = document.cookie;
	let splits = data.split(",");
	for(var i = 0; i < splits.length; i++)
	{
		let thisOne = splits[i].trim();
		let tokens = thisOne.split("=");
		if( tokens[0] == "firstName" )
		{
			firstName = tokens[1];
		}
		else if( tokens[0] == "lastName" )
		{
			lastName = tokens[1];
		}
		else if( tokens[0] == "userId" )
		{
			userId = parseInt( tokens[1].trim() );
		}
	}

	if( userId < 0 )
	{
		window.location.href = "index.html";
	}
	else
	{
		document.getElementById("headText").innerHTML = "Logged in as " + firstName + " " + lastName;
	}
}



// -----Menu.html-----
// Taken from LAMP - should work in theory
function logout()
{
	// Go back to main page
	userId = 0;
	firstName = "";
	lastName = "";
	window.location.href = "index.html";
}

<<<<<<< Updated upstream:js/dataFunctions.js
// Taken from LAMP - should work in theory
=======
// Create a new contact - works
>>>>>>> Stashed changes:lampapi/js/dataFunctions.js
function create()
{
	let newName = document.getElementById("nameText").value;
	let newEmail = document.getElementById("emailText").value;
	let newPhone = document.getElementById("phoneText").value;
	document.getElementById("createResult").innerHTML = "";

<<<<<<< Updated upstream:js/dataFunctions.js
	let tmp = {name:newName,email:newEmail,phone:newPhone,userId:userId};
=======
	// Check valid email and phone
	if (newEmail.match(/\S+@\S+\.\S+/) == null)
	{
		document.getElementById("createResult").innerHTML = "Invalid email";
		return;
	}
	if (newPhone.match(/^\d+$/) == null)
	{
		document.getElementById("createResult").innerHTML = "Invalid phone number";
		return;
	}

	let tmp = {userId:userId,firstName:newFirst,lastName:newLast,email:newEmail,phone:newPhone};
>>>>>>> Stashed changes:lampapi/js/dataFunctions.js
	let jsonPayload = JSON.stringify( tmp );

	let url = urlBase + '/AddContact.' + extension;

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				document.getElementById("createResult").innerHTML = "Contact added successfully";

				document.getElementById("createFirstText").value = "";
				document.getElementById("createLastText").value = "";
				document.getElementById("createEmailText").value = "";
				document.getElementById("createPhoneText").value = "";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("createResult").innerHTML = err.message;
	}
}

<<<<<<< Updated upstream:js/dataFunctions.js
// Taken from LAMP - should work in theory
=======
// Search for existing objects - THROWS BACK NAME COLUMN NOT FIRST + LAST NAMES
>>>>>>> Stashed changes:lampapi/js/dataFunctions.js
function search()
{
	// Search by name, email, OR phone
	let srch = document.getElementById("nameText").value;
	if(!srch)
	{
		let srch = document.getElementById("emailText").value;
	}
	if(!srch)
	{
		let srch = document.getElementById("phoneText").value;
	}
	document.getElementById("searchResult").innerHTML = "";

	let tmp = {search:srch,userId:userId};
	let jsonPayload = JSON.stringify( tmp );

	let url = urlBase + '/SearchContact.' + extension;

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				document.getElementById("searchResult").innerHTML = "Found contact(s)";
				let jsonObject = JSON.parse( xhr.responseText );
				searchList = jsonObject.results;

				let length = (jsonObject.results.length > 6) ? 6 : jsonObject.results.length;

				for( let i = 0; i < length; i++ )
				{
					document.getElementById("found" + (i+1)).innerHTML = jsonObject.results[i];
					searchIndex++;
				}

				if (jsonObject.results.length <= 6)
				{
					document.getElementById("prev").disabled = true;
					document.getElementById("next").disabled = true;
				}
				else {
					document.getElementById("next").disabled = false;
				}

				checkButtons(length);
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("searchResult").innerHTML = err.message;
	}
}

//function update()
{
	// ADD UPDATE
	//console.log("CONTACT UPDATED");
}

// Show delete popup - works
function popupVisible(contact)
{
	deleteId = contact.parentNode.parentNode.id;
	document.getElementById("deletePopup").style.display = "block";
	console.log("Delete " + deleteId + "?");
}

// Hide delete popup - works
function popupHidden()
{
	document.getElementById("deletePopup").style.display = "none";
}

// NEEDS DELETE CONNECTION TO API - hiding works
function deleteContact()
{
	// ADD DELETE
	document.getElementById(deleteId).style.display = "none";
	document.getElementById("deletePopup").style.display = "none";
	console.log(deleteId + " DELETED");

}

// Hides unnecessary contact boxes - works
function checkButtons(length)
{
	for (let i = 1; i <= 6; i++)
	{
		if (i <= length)
		{
			console.log("See box" + i);
			document.getElementById("box" + i).style.display = "flex";
		}
		else
		{
			document.getElementById("box" + i).style.display = "none";
		}
	}
	console.log("BUTTON CHECK COMPLETE")
}

// Grab next 6 contacts to display - NEED TEST
function searchNext()
{
	let length = (searchList.length-searchIndex > 6) ? 6 : (searchList.length-searchIndex) ;
	for (let i = 1; i <= length; i++)
	{
		document.getElementById("found" + i).innerHTML = searchList[searchIndex];
		searchIndex++;
	}
	checkButtons(length);

	if (searchIndex >= searchList.length - 6)
	{
		document.getElementById("next").disabled = true;
		document.getElementById("prev").disabled = false;
	}
	else
		document.getElementById("next").disabled = false;
	searchIndex--;
}

<<<<<<< Updated upstream:js/dataFunctions.js
// Grab last 6 contacts to display - NEED TEST
=======
// Grab last 6 contacts to display - NOT SHOWING
>>>>>>> Stashed changes:lampapi/js/dataFunctions.js
function searchPrev()
{
	for (let i = 6; i >= 1; i--)
	{
		document.getElementById("found" + i).innerHTML = searchList[searchIndex];
		searchIndex--;
	}
	checkButtons(length);

	if (searchIndex <= 6)
	{
		document.getElementById("next").disabled = false;
		document.getElementById("prev").disabled = true;
	}
	else
		document.getElementById("prev").disabled = false;
}
