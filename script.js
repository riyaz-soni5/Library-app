
// for loading up dialog box for inputing Book name, author and pages

let dialog = document.querySelector("dialog");

let showDia = document.querySelector('#showModal');

let closeDia = document.querySelector("#closeModal");

// event to show the modal
showDia.addEventListener('click',function(){
    dialog.show();
});

// function to close the modal 
function closeModal(){
    dialog.close();


}


// array where all the books gets set 
let bookArray = [];


// constructor for new book object 
function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

//prototype for changing the read status
Book.prototype.changeReadStatus = function(){
    return this.read = !this.read;
    
}

// function to add book 
function addBook(){
    event.preventDefault();
    let title = document.getElementById("Book-title");
    let author = document.getElementById("Author");
    let numPages = document.getElementById("Pages");

    if(title.value != "" && author.value != "" && numPages!=0 ){
        let newBook = new Book(title.value,author.value,numPages.value);
        bookArray.push(newBook);
        makeBook();

    }
    else{
        alert("Please fill the form to add a book");
    }

    // resetting data after submission
    resetData(title,author,numPages);
    
}




// vaiable to grap the book self div 
const bookSelf = document.querySelector(".book-self");


// for changing read status
let readButtons= [];

// for grabbing all the delete button
let deleteButton = document.querySelectorAll(".deleteButton");



// function to make book element in the document
function makeBook(){
    
    let createElement = document.createElement("div");
    createElement.className = "book";
    
    let titleNew = document.createElement("div");
    let authorNew = document.createElement("div");
    let pagesNew = document.createElement("div");
    let readdiv = document.createElement("div");
    
    let insideButton1 = document.createElement("button");
    let insideButton2 = document.createElement("button");
    
    insideButton1.innerText = "Read";
    insideButton2.innerText = "Delete";
    insideButton1.classList.add("readButton");
    insideButton2.classList.add("deleteButton");
    
    
    
    titleNew.className = "book-details";
    authorNew.className = "book-details";
    pagesNew.className = "book-details";
    readdiv.className = "book-details";
    
    
    titleNew.innerText = bookArray.at(-1).title;
    authorNew.innerText = bookArray.at(-1).author;
    pagesNew.innerText = bookArray.at(-1).pages;
    
    bookSelf.appendChild(createElement);
    createElement.appendChild(titleNew);
    createElement.appendChild(authorNew);
    createElement.appendChild(pagesNew);
    readdiv.appendChild(insideButton1);
    readdiv.appendChild(insideButton2);
    createElement.appendChild(readdiv);
    
    readButtons = document.querySelectorAll(".readButton");
    deleteButton = document.querySelectorAll(".deleteButton");
    
    deleteBook();
    readStatus(bookArray);
    
    
}

// function to make changes in read status

function readStatus (bookArray){
    readButtons.forEach((element, index) => {
        element.addEventListener('click', (e)=>{
            let parentNode = e.target.parentNode.parentNode;
            if(parentNode.classList.contains("read")){
                parentNode.classList.remove("read");
                e.target.innerText = "Read";
               bookArray[index-1].changeReadStatus();
            }
            else{
                parentNode.classList.add("read");
                e.target.innerText = "Unread";
               bookArray[index-1].changeReadStatus();
            }
    
        })
        
        
    });
}


// function to delete book

function deleteBook(){
    deleteButton.forEach((element, index) => {
        element.addEventListener("click",(e)=>{
            bookSelf.removeChild(e.target.parentNode.parentNode)
            bookArray.splice(index-1,1);
        })
        
    });

}




// function to reset data of the book 
function resetData(title,author,pages){
    title.value = "";
    author.value = "";
    pages.value = 0;
    closeModal();
    
}