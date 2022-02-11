const urlBase = 'http://thebenbowles.com/cop4331/lamp/';
const extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";

var searchList = "";
var searchIndex = 0;
var indexList = [0,1,2,3,4,5];

var updateId = "";
var updateFirst = "";
var updateLast = "";

var deleteId = "";
console.log("hi");

// -----Index.html-----
// Register a new user - works
function register()
{
	firstName = document.getElementById("newFirstName").value;
	lastName = document.getElementById("newLastName").value;
	let username = document.getElementById("newUsername").value;
	let password = document.getElementById("newPassword").value;
	document.getElementById("registerResult").innerHTML = "";

	if (firstName == "" || lastName == "" || username == "" || password == "")
	{
		document.getElementById("registerResult").innerHTML = "Please fill in all fields";
		return;
	}

	// Create new user
	tmp = {firstname:firstName,lastname:lastName,login:username,password:password};
	jsonPayload = JSON.stringify( tmp );

	url = urlBase + '/Register.' + extension;

	xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				console.log(userId);
				document.getElementById("registerResult").innerHTML = "User created successfully";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("registerResult").innerHTML = err.message;
	}



	// Login after user was created
	tmp = {login:username,password:password};
	jsonPayload = JSON.stringify( tmp );

	url = urlBase + '/Login.' + extension;

	xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	xhr.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			let jsonObject = JSON.parse( xhr.responseText );
			userId = jsonObject.id;

			saveCookie();

			window.location.href = "menu.html";
		}
	};
	xhr.send(jsonPayload);
}

// Login a user - works
function login()
{
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	document.getElementById("loginResult").innerHTML = "";

	let tmp = {login:username,password:password};
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

// Saves the logged in user - works
function saveCookie()
{
	let minutes = 20;
	let date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));
	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId;
}

// Reads the logged in user - works
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
		document.getElementById("headText").innerHTML = "Welcome " + firstName + " " + lastName;
	}
}



// -----Menu.html-----
// Logs user out - works
function logout()
{
	// Go back to main page
	userId = 0;
	firstName = "";
	lastName = "";
	window.location.href = "index.html";
}

// Create a new contact - works
function create()
{
	let newFirst = document.getElementById("createFirstText").value;
	let newLast = document.getElementById("createLastText").value;
	let newEmail = document.getElementById("createEmailText").value;
	let newPhone = document.getElementById("createPhoneText").value;
	document.getElementById("createResult").innerHTML = "";

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

	let tmp = {userId:userId,firstName:newFirst,lastName:newLast,Email:newEmail,Phone:newPhone};
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

// Search for existing objects - works
function search()
{
	// Search by first name
	searchIndex = 0;
	let srch = document.getElementById("searchText").value;
	document.getElementById("searchResult").innerHTML = "";

	let tmp = {userId:userId,search:srch};
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
				let jsonObject = JSON.parse( xhr.responseText );
				console.log(jsonObject);
				if (jsonObject.error) {
					document.getElementById("searchResult").innerHTML = jsonObject.error;
					checkButtons(0);
					return;
				}

				console.log(jsonObject.results);
				searchList = jsonObject.results;

				let length = (jsonObject.results.length > 6) ? 6 : jsonObject.results.length;

				for( let i = 0; i < length; i++ )
				{
					let infoList = jsonObject.results[i].split(" ");

					document.getElementById("found" + (i+1)).innerHTML =
						infoList[0] + " " + infoList[1] + "<br>" +
						infoList[2] + "<br>" +
						infoList[3];
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

				document.getElementById("searchResult").innerHTML = "Found contact(s)";
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

// Hides unnecessary contact boxes - works
function checkButtons(length)
{
	for (let i = 1; i <= 6; i++)
	{
		if (i <= length)
		{
			//console.log("See box" + i);
			document.getElementById("box" + i).style.display = "flex";
		}
		else
		{
			document.getElementById("box" + i).style.display = "none";
		}
	}
	//console.log("BUTTON CHECK COMPLETE")
}

// Grab next 6 contacts to display - works
function searchNext()
{
	console.log("NEXT");
	// If in on previous #, go forward to next column
	if (searchIndex % 2 != 0)
	{
		searchIndex += 7;
	}

	let length = (searchList.length-searchIndex > 6) ? 6 : (searchList.length-searchIndex);
	//console.log("Length: " + length);
	//console.log("Start at " + searchIndex);
	for (let i = 1; i <= length; i++)
	{
		indexList[i-1] = searchIndex;
		let infoList = searchList[searchIndex].split(" ");
		document.getElementById("found" + i).innerHTML =
			infoList[0] + " " + infoList[1] + "<br>" +
			infoList[2] + "<br>" +
			infoList[3];
		searchIndex++;
	}
	checkButtons(length);
	//console.log("Stopped at " + searchIndex);

	if (searchIndex >= searchList.length)	// At end
	{
		document.getElementById("next").disabled = true;
		document.getElementById("prev").disabled = false;
		searchIndex -= searchIndex % 6;
		searchIndex--;
	}
	else 	// At middle
	{
		document.getElementById("next").disabled = false;
		document.getElementById("prev").disabled = false;
	}
}

// Grab last 6 contacts to display - works
function searchPrev()
{
	console.log("PREVIOUS");
	// If on next #, go back to last column
	if (searchIndex % 2 == 0)
	{
		searchIndex -= 7;
	}

	//console.log("Start at " + searchIndex);
	for (let i = 6; i >= 1; i--)
	{
		indexList[i-1] = searchIndex;
		let infoList = searchList[searchIndex].split(" ");
		document.getElementById("found" + i).innerHTML =
			infoList[0] + " " + infoList[1] + "<br>" +
			infoList[2] + "<br>" +
			infoList[3];
		searchIndex--;
	}
	checkButtons(6);
	//console.log("Stopped at " + searchIndex);

	if (searchIndex <= 0)	// At beginning
	{
		document.getElementById("next").disabled = false;
		document.getElementById("prev").disabled = true;
		searchIndex += 7;
	}
	else	// In middle
	{
		document.getElementById("next").disabled = false;
		document.getElementById("prev").disabled = false;
	}
}

// Show delete popup - works
function popupVisible(contact)
{
	deleteId = contact.parentNode.parentNode.id;
	console.log("Delete " + deleteId + "?");
	if (confirm("ARE YOU SURE YOU WANT TO DELETE THIS CONTACT?")) {
		deleteContact();
	}
	else {
		console.log("Ok bye");
	}
}

// Deletes an existing contact - works
function deleteContact()
{
	let deleteValue = deleteId.substr(3, 1);
	let deleteData = searchList[indexList[deleteValue-1]];
	let id = deleteData.substring(deleteData.length - 4);

	let tmp = {ID:id};
	let jsonPayload = JSON.stringify( tmp );

	let url = urlBase + '/RemoveContact.' + extension;

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				document.getElementById("searchResult").innerHTML = "Contact deleted successfully";
				document.getElementById(deleteId).style.display = "none";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("searchResult").innerHTML = err.message;
	}
}



// -----Update.html-----
function updatingCookie()
{
	document.getElementById("updateFirstText").value = localStorage['firstName'] || "";
	document.getElementById("updateLastText").value = localStorage['lastName'] || "";
	document.getElementById("updateEmailText").value = localStorage['email'] || "";
	document.getElementById("updatePhoneText").value = localStorage['phone'] || "";
}

// Grab the name to update and redirect to update.html - works
function toUpdate(contact)
{
	updateId = contact.parentNode.parentNode.id;
	console.log("Update " + updateId);
	let updateValue = updateId.substr(3, 1);
	let updateData = searchList[indexList[updateValue-1]];

	let id = updateData.substring(updateData.length - 4);
	localStorage['contactID'] = id.trim();

	let infoList = updateData.split(" ", 4);
	localStorage['firstName'] = infoList[0];
	localStorage['lastName'] = infoList[1];
	localStorage['email'] = infoList[2];
	localStorage['phone'] = infoList[3];

	console.log("Info: " + infoList);
	console.log("ID: " + id);

	window.location.href = "update.html";
}

// Update an existing contact - works
function update()
{
	let updateFirst = document.getElementById("updateFirstText").value;
	let updateLast = document.getElementById("updateLastText").value;
	let updateEmail = document.getElementById("updateEmailText").value;
	let updatePhone = document.getElementById("updatePhoneText").value;
	let contactID = localStorage['contactID'] || -1;
	document.getElementById("updateResult").innerHTML = "";

	console.log(updateFirst + " " + updateLast + " " + updateEmail + " " + updatePhone);

	// Check valid email and phone
	if (updateEmail.match(/\S+@\S+\.\S+/) == null)
	{
		document.getElementById("updateResult").innerHTML = "Invalid email";
		return;
	}
	if (updatePhone.match(/^\d+$/) == null)
	{
		document.getElementById("updateResult").innerHTML = "Invalid phone number";
		return;
	}

	let tmp = {ID:contactID,firstName:updateFirst,lastName:updateLast,Phone:updatePhone,Email:updateEmail};
	let jsonPayload = JSON.stringify( tmp );

	let url = urlBase + '/EditContact.' + extension;

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				document.getElementById("updateResult").innerHTML = "Contact updated successfully";

				document.getElementById("updateFirstText").value = "";
				document.getElementById("updateLastText").value = "";
				document.getElementById("updateEmailText").value = "";
				document.getElementById("updatePhoneText").value = "";

				setTimeout(function(){
					window.location.href = "menu.html"
				}, 2.0*1000);
			}
		}
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("updateResult").innerHTML = err.message;
	}

	console.log("CONTACT UPDATED");
}
