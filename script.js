// Get quote from API 


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
//show New Quote 

 function newQuotes() { 

    //Pick a random quote from apiQuote array 

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )]

    // Check if Author field is blank and replace it with unknown 
    if(quote.author === null) {
        authorText.textContent = 'Unknown';
    } else {
         authorText.textContent = quote.author;
    }

    // authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
 }

async function getQuotes() { 
    const apiUrl = 'https://type.fit/api/quotes'; 

    try { 
        
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes(); 
    
    }

    catch  (error)  { 
        alert(error);
        // Catch Error 
    }
}

newQuoteBtn.addEventListener('click', function () { 
    getQuotes();
});


// //on Load

getQuotes();


