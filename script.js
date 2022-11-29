document.body.innerHTML=`<div class="heading-container">
<h1 id="heading">Ice and Fire<h1>

</div>
<div id="mainContainer" class="main-container"></div>`;
 

const getData=async() => {              
    try{
    const data=await fetch("https://www.anapioficeandfire.com/api/books") // fetch API has only 10 books
    const books= await data.json()
    mainContainer.innerHTML="";
    books.forEach(book => {
        displayData(book)
        
    });
}catch(error) {
    console.log(error)
}
};
getData();
const displayData=(obj)=> {
    mainContainer.innerHTML+=`
    <div class="container">
    
    Name:<span>${obj.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISBN:<span>${obj.isbn}</span><br>
    Number of Pages:<span>${obj.numberOfPages}</span><br>
    Authors:<span>${obj.authors}</span><br>
    Publisher Name:<span>${obj.publisher}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Release Date:<span>${obj.released}</span><br>
    Characters:&nbsp;&nbsp;&nbsp;<span><a href="https://www.anapioficeandfire.com/api/characters" target="_blank">Click For Characters</a></span> 
    </div>`
}

