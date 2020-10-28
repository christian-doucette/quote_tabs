//Chooses one of the three quote APIs randomly
choice = Math.floor(Math.random() * 3) + 1
console.log(choice)
if (choice==1) var quote_api_url = "http://quotes.stormconsultancy.co.uk/random.json"
else if (choice==2) var quote_api_url = "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en"
else var quote_api_url = "https://random-math-quote-api.herokuapp.com/"


//Makes API request
console.log("Attempting API request")
fetch(quote_api_url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      response.json().then(function(data) {
        console.log("Successful!")
        //Sets page based on quote API
        if (choice==1) set_quote_stormconsultancy(data)
        else if (choice==2) set_quote_programmingquotes(data)
        else set_quote_randommathquote(data)
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



function set_quote_stormconsultancy(response_json) {
  quote_text = response_json.quote.trim();
  quote_author = response_json.author.trim();
  document.getElementById("quote").innerHTML = `\"${quote_text}\"`
  document.getElementById("author").innerHTML = `-${quote_author}`;
}

function set_quote_programmingquotes(response_json) {
  quote_text = response_json.en.trim();
  quote_author = response_json.author.trim();
  document.getElementById("quote").innerHTML = `\"${quote_text}\"`
  document.getElementById("author").innerHTML = `-${quote_author}`;
}

function set_quote_randommathquote(response_json) {
  quote_text = response_json.quote.trim();
  quote_author = response_json.author.trim();
  document.getElementById("quote").innerHTML = `\"${quote_text}\"`
  document.getElementById("author").innerHTML = `-${quote_author}`;
}