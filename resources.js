let savedItems = [];
let commentHistory = [];

$(document).ready(function() {
	//function for accordion drop menu
	$("#accordion h3:first").animate({ 'background-color': 'rgb(0, 119, 255)' }, 200); 
	$("#accordion h3:first").css({ 'color': 'white' });
        $("#accordion").accordion({
        heightStyle: "content",
  });

   //to change the css styling of the accordion when clicked
    $("#accordion h3").click(function() {
        $("#accordion h3").animate({ 'background-color': 'white' }, 200);
        $("#accordion h3").css({ 'color': 'black' });
        $(this).animate({ 'background-color': 'rgb(0, 119, 255)' }, 200); 
        $(this).css({ 'color': 'white' });
    });
});

//comment function
function comment() {
	//below for each time the page is loaded, checks the local storage for the saved comments 
	let stored = window.localStorage.getItem("comments");
	commentHistory = JSON.parse(stored);
	if (commentHistory === null) {				//if there were no comments, make the commentHistory
		commentHistory = [];					//an empty array   - i was having a couple issues with this, so it's a work around
	}

	//for adding date to comment
	let date = new Date();
	//below is to get the minutes to show double digits even if the minutes are below 10   (eg:  13:05   vs   13:5)
	if (date.getMinutes < 10) {
	let today = `${date.getHours()}:0${date.getMinutes()} | ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
	} else {
		today = `${date.getHours()}:${date.getMinutes()} | ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
	}
	//add a span and populate with the date
	let userComment = document.getElementById("text").value;
	let comment = document.getElementById("comment");
	let span = document.createElement("span");
	$(span).addClass("date");
	span.textContent = today;
	comment.append(span);
	//add a p and populate with the comment
	let p = document.createElement("p");
	$(p).addClass("text");
	p.textContent = userComment;
	comment.append(p);
	//to clear the textbox after comment has been made
	document.getElementById("text").value = "";

	//push onto comment array as an object and store into local storage
	commentHistory.push({today, userComment});
	window.localStorage.setItem('comments', JSON.stringify(commentHistory));
}

function cancel() {
		//to cancel typed text in the box box
		document.getElementById("text").value = "";
}

//function to add saved items to array and store into local storage
$(document).ready(function() {
	let add = document.getElementsByClassName("add");
	for (i=0; i < add.length; i++) {
		add[i].addEventListener("click", function() {									//add event listener for the click
			alert(`You have ${savedItems.length + 1} items stored in your folder!`);	//alert for how many items stored in folder html page
			let name = this.parentNode.querySelector("a").innerHTML;				//storing name of link
			let url = this.parentNode.querySelector("a").href;						//storing url of link
			let item = {name, url};													//storing nam+url into an object
			savedItems.push(item);													//pushing that object onto array
		window.localStorage.setItem('item', JSON.stringify(savedItems));		//store array into local storage converted to JSON string
      }
	)
  }
});		

//function called when folder page is loaded (called within <script> in html)
function savedFolder() {
	//get the stored array 
	let saved = document.getElementById("saved");
	let stored = window.localStorage.getItem("item");
	let list = JSON.parse(stored);
	//creating each entry from the JSON array
	//css and innerHTML change
	for (i=0; i < list.length; i++) {
	   let p = document.createElement("h4");
	   $(p).css({"color":"white"});
	   p.innerHTML = `${list[i].name}    <a href="${list[i].url}" target="_blank">${list[i].url}</a>`;   //open in new tab
	   saved.append(p);
	}
  }

//on document ready function to populate the comments box
$(document).ready(function() {
	let comment = document.getElementById("comment");
	let stored = window.localStorage.getItem("comments");
	let list = JSON.parse(stored);
//below to populate time/date
	for (i=0; i < list.length; i++) {
	let span = document.createElement("span");
	$(span).addClass("date");
	span.textContent = list[i].today;
	comment.append(span);
//below to poopulate comment
	let p = document.createElement("p");
	$(p).addClass("text");
	p.textContent = list[i].userComment;
	comment.append(p);

	}
  }
);
//clear folder storage
function clearFolder() {
	localStorage.removeItem("item");
	window.location.reload(); 

}
//clear comments storage
function clearComments() {
	localStorage.removeItem("comments")
	window.location.reload(); 
}


// function for like onclick + css change and to toggle like/liked text 
function like(x) {
	$(x).toggleClass('like liked');
	if (x.textContent == "like") {
	x.textContent = "liked";
  }	else {
	x.textContent = "like";
 }
}