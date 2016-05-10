
var movies = ["24",
              "30 Rock",
              "Death Note",
              "Dexter's Lab",
              "Swat Kats",
              "Arrow",
              "Boston Legal",
              "Breaking Bad",
              "Castle",
              "Community",
              "Coupling",
              "Dexter",
              "Friends",
              "Fringe",
              "Game of Thrones",
              "House M.D",
              "House Of Cards",
              "How I Met Your Mother",
              "Its Always Sunny In Philadelphia",
              "Lie To Me",
              "Modern Family",
              "New Girl",
              "Person Of Interest",
              "Prison Break",
              "Scrubs",
              "Sherlock",
              "Suits",
              "The Big Bang Theory",
              "The Mentalist",
              "The Newsroom",
              "Two And A Half Men" 
             ]

function getinfo(name)
{
    document.getElementById("test").innerHTML = "";
    document.getElementById("test").innerHTML += "<h1>" + name + "</h1>";
    url = encodeURI("http://www.omdbapi.com/?t=" + name
                    + "&y=&plot=short&r=json");
    
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

