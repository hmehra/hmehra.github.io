
var movies = ["300", "Act of Valor", "Apocalypto", "Body Of Lies", "The Bourne Identity",
              "The Bourne Supermacy", "Bourne Ultimatum", "Con Air", "Die Hard I", "Die Hard II","Die Hard III","Die Hard 4.0",
              "Drive", "Gladiator", "Green Zone", "Inside Man", "Kick-Ass", "Kill Bill-I","Kill Bill-II",
              "Law Abiding Citizen", "Mission: Impossible",
              "Mission: Impossible II", "Mission: Impossible III",
              "Mr. and Mrs. Smith", "Savages", "Shooter", "Tears of the Sun",
              "Terminator","Terminator: Judgement Day", "Terminator:Rise of the Machines", "The Italian Job", "The Kingdom", "Traitor",
              "Transporter 1", "Transporter 2",
              "Transporter 3", "Troy", "Unthinkable", "Vantage Point", "Vertical Limit", "V for Vendetta",
              "Cars", "Ice Age", "Kung Fu Panda", "Madagascar", "Monsters Inc.", "Ratatouille", "Wreck It Ralph", "Comedy",
              "American Pie", "The Dictator", "Tropic Thunder", "Batman Begins", "The Dark Knight", "The Dark Knight Rises", 
              "Fantastic Four Series", "Harry Potter I", "Harry Potter II",
              "Harry Potter III", "Harry Potter IV", "Harry Potter V", "Harry Potter VI", "Harry Potter VII",
              "Iron Man", "Iron Man 2", "Pirates of the Carribean: At World's End",
              "Pirates of the Carribean: Dead Man's Chest", "Pirates of the Carribean: On Stranger Tides",
              "Pirates of the Carribean: The Curse of Black Pearl",
              "Prince of Persia The Sands of Time", "Resident Evil",
              "Sherlock Holmes", "Spiderman", "Superman Returns", "The Avengers", "The Hunger Games",
              "The Incredible Hulk", "The Lord Of The Rings: Fellowship of the Ring",
              "The Lord Of The Rings: The Two Towers",
              "Transformers: Dark Of The Moon", "Transformers: Revenge Of The Fallen",
              "Transformers", "Watchmen", "X-Men", "An Inconvenient Truth",
              "Gandhi", "Home", "Inside Job", "Too Big To Fail",
              "12 Angry Men", "A Beautiful Mind", "A Few Good Men", "American History X", "American Psycho",
              "Annapolis", "Apollo 13", "Argo", "Black Swan", "Blood Diamond", "Cast Away", "Catch Me If You Can",
              "Detachment", "Erin Brockovich", "Fight Club", "Finding Neverland", "Flash of Genius",
              "Flight", "Forrest Gump", "Gangs Of New York", "Glory Road", "Good Will Hunting",
              "Inglorious Basterds", "Into The Wild", "Invictus", "L.A.Confidential",
              "Life Of Pi", "Little Miss Sunshine", "Lord Of War", "Memento", "Munich", "Phone Booth",
              "Pirates of Silicon Valley", "Pulp Fiction", "Reservoir Dogs", "Schindler's List",
              "Searching for Bobby Fischer", "Seven Pounds", "Shutter Island", "Snatch", "Thank You For Smoking",
              "The Aviator", "The Blind Side", "The Boys Are Back", "The Departed", "The Devil's Double", "The Grey",
              "The Help", "The Ides of March", "The Last Samurai", "The Machinist", "The Pursuit Of HappYness",
              "The Shawshank Redemption", "The Social Network", "The Talented Mr Ripley", "The Terminal", "The Ultimate Gift",
              "The Way Back", "Top Gun", "Valkyrie",

              "3 Idiots", "Aamir", "Andaaz Apna Apna", "A Wednesday",
              "Band Baaja Baaraat", "Barfi", "Chak De India", "Delhi Belly", "Dev D", "Dhamaal", "Dil Chahta Hai",
              "English Vinglish", "Firaaq", "Gangs of Wasseypur", "Hera Pheri", "Iqbal", "Jab We Met", "Johny Gaddar",
              "Jo Jeeta Wohi Sikandar", "Kahaani", "Karthik Calling Karthik", "Khakee", "Khosla Ka Ghosla",
              "Love Aaj Kal", "Love, Sex Aur Dhokha", "Luck By Chance", "Mujhse Fraandship Karoge",
              "Mumbai Meri Jaan", "No One Killed Jessica", "Oh My God", "Oye Lucky Lucky Oye",
              "Paan Singh Tomar", "Pyaar Ka Punchnama", "Rang De Basanti", "Rock On",
              "Sarfaraosh", "Shaurya", "Shor In The City", "Slumdog Millionaire", "Swades",
              "Tanu Weds Manu", "Udaan", "Vicky Donor",

              "Ghost Ship", "Insidious", "Shutter", "Sinister",

              "The Grudge", "The Omen", "August Rush", "Final Destination", "School Of Rock", "Step Up",
              "Stranger Than Fiction", "The Truman Show",

              "10 Things I Hate About You", "500 Days Of Summer", "Notting Hill",

              "Contagion", "District 9", "Inception", "I Robot", "Looper", "The Matrix", "Minority Report",
              "Source Code", "Star Trek", "The Book of Eli",

              "21", "Donnie Darko", "Flightplan", "Following", "Fracture", "The Silence of the Lambs",
              "Lucky Number Slevin", "National Treasure", "Ocean's Eleven", "Runaway Jury", "Se7en",
              "Swordfish", "The Illusionist", "The Next Three Days", "The Prestige", "The Score",
              "The Sixth Sense", "The Usual Suspects", "Unbreakable", "Zodiac",

              "Black Hawk Down", "Charlie Wilson War", "Enemy At The Gates", "Flags of Our Fathers",
              "Pearl Harbour", "Saving Private Ryan", "The Hurt Locker", "Zero Dark Thirty" ]


function getinfo(name)
{
    document.getElementById("test").innerHTML = "";
    document.getElementById("test").innerHTML += "<h1>" + name + "</h1>";
    url = encodeURI("https://www.omdbapi.com/?t=" + name
                    + "&y=&plot=short&r=json&apikey=f21b6971");
    
    if(window.XMLHttpRequest) {
	    try {
		    req = new XMLHttpRequest();
		} catch(e) {
			req = false;
		}
    } else if(window.ActiveXObject) {
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
	    	    req = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				req = false;
			}
		}
	}
	
	if(req)	{
		req.open("GET",url, false);
		req.onreadystatechange = processReqChange;
		req.send("");
	} else {
	    alert('Error Creating Connection');
	}
    
}

function print_info(doc)
{
    var string = "";
    string +=  doc.Actors + "<br><br>" + doc.Plot +  "<br><br>";
    string +=  doc.Year + "&nbsp;&nbsp;&nbsp;";
    string +=  doc.Runtime + "&nbsp;&nbsp;&nbsp;" + doc.Genre + "<br><br>";
    string +=  "IMDB Rating: " + doc.imdbRating + "<br><br>";
    string +=  "<img src=\"" + doc.Poster + "\"></img></p>";
    document.getElementById("test").innerHTML += string;
  
    $("div#test").dialog({
        closeOnEscape:true,
    });
}

function processReqChange() 
{
	if (req.readyState == 4) {
		if(req.status == 200) {
		  doc = JSON.parse(req.responseText);
		  if(doc.Response == "False") {
		  } else {
		    print_info(doc);	
		  } 
		} else {
		  alert('There was an error in retreving the data');
		}
	}
}

function print_movies() 
{
    var index = 0;
    var string = "";
    string += "<ul>";
    for (index = 0; index < movies.length; index++) {
        string = "<li><a style=\"hover {font-size:150%;}\" href=\"#\" id='movie_link' onclick=\"getinfo('"
                 + movies[index] + "');\">"
                 + movies[index] + "</a></li>";
        document.getElementById("list").innerHTML += string;
    }
    string += "</ul>";
}

