// Get quote from API 


let apiQuotes = [];
//show New Quote 

 function newQuotes() { 
 }
 
    

async function getQuotes() { 
    const apiUrl = 'https://type.fit/api/quotes'; 

    try { 
        
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes(); 
        console.log(apiQuotes[12]);
    }

    catch  (error)  { 
        alert(error)
        // Catch Error 
    }
}


//on Load 

getQuotes();