//examle list of books 
const Books =[{id:"book1" , title:"Computer Architecture A Quantitative Approach" ,
            author:"John L. Hennessy ,David A. Patterson" , cover:"assets/71zrCDfb73S._SL1500_.jpg" },{id:"book2" , title:"Digital Design and Computer Architecture" ,
            author:"Author:David Money Harris ,Sarah L. Harris" , cover:"assets/images.jpeg"},{id:"book3" , title:"Inside The Machine" ,
            author:"Author:Jon Stokes" , cover:"assets/images (1).jpeg"}];
const formSearch =document.getElementById('searchBtn');
const foemSearch2 =document.getElementById('search-bar');
//get word or book name that entered in search bar
const par = new URLSearchParams(window.location.search);
const searchWord = par.get('search');  
const list = document.getElementById('bookList');
if(searchWord){ 
    const res = Books.filter(book => {
      return book.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    list.innerHTML = res.map(result => {
        return`
          <li>
             <div id="book">
               <img src="${result.cover}" height="183" width="120" alt="${result.title}"> 
               <div class="coverbookInfo">
                 <a href="BookDetail.html?key=${result.id}">${result.title}</a>
                 <h5>${result.author}</h5>
               </div>
             </div>                   
          </li>
            `
        }).join(' ');
  }
else{
    
    list.innerHTML = `<div>No search term provided.</div>`;
    }
   
       
   


     