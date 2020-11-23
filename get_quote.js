//Chooses one of the three quote APIs randomly
const api_options = ["http://quotes.stormconsultancy.co.uk/random.json", "https://random-math-quote-api.herokuapp.com/"]
choice = Math.floor(Math.random() * api_options.length)
var quote_api_url = api_options[choice]



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
        set_quote(data)
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


function set_quote(response_json) {
  var quote_text = response_json.quote.trim();
  var quote_author = response_json.author.trim();
  document.getElementById("quote").innerHTML = `\"${quote_text}\"`
  document.getElementById("author").innerHTML = `-${quote_author}`;
}
