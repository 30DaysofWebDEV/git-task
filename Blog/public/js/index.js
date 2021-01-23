console.log('Blog website');

const id2020 = document.getElementById('id2020');
const id2021 = document.getElementById('id2021');
const All = document.getElementById('All');

All.addEventListener('click',()=>{
    document.getElementById('NewArticles').style.display='block';
    document.getElementById('oldArticles').style.display='block';
})
id2020.addEventListener('click',()=>{
    document.getElementById('NewArticles').style.display='none';
    document.getElementById('oldArticles').style.display='block';
})
id2021.addEventListener('click',()=>{
    document.getElementById('NewArticles').style.display='block';
    document.getElementById('oldArticles').style.display='none';
});



let search=document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal=search.value;
    console.log(inputVal)
    let contents=document.getElementsByClassName('content');
    Array.from(contents).forEach(function(element){
        let cardTxt=element.querySelectorAll("p")[0].innerText;
        cardTxt=cardTxt.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display="flex";
        }else{
            element.style.display="none";
        }
    })
});

const db = firebase.database();
const add = document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let id = db.ref().child('users').push().key;
    let username=document.getElementById('username').value;
    db.ref('users/'+id).set({
        userName: username,
       
    })
    
    alert("Thanks for subscribing");
});
