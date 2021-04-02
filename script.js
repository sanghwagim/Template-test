// Get quote from API 


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// show Loading

function loading () { 
    loader.hidden =false;
    quoteContainer.hidden = true;
}

function complete () { 
    quoteContainer.hidden = false;
    loader.hidden = true;

}

let apiQuotes = [];
//show New Quote 

 function newQuotes() { 

    loading();

    //Pick a random quote from apiQuote array 

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )]

    // Check if Author field is blank and replace it with unknown 
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
         authorText.textContent = quote.author;
    }
// Check Quote Length to determine styling 

    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else { 
        quoteText.classList.remove('long-quote');

    }
    
    // set Quotes 
    quoteText.textContent = quote.text;
    complete();
 }
// set Quotes 

 

async function getQuotes() { 
    loading();
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

//Tweet Quote 

function tweetQuote () { 
    const twitterUrl = `https://twitter.com/intent/tweet?text= ${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


twitterBtn.addEventListener('click', tweetQuote);



newQuoteBtn.addEventListener('click', getQuotes);



// //on Load

getQuotes();




