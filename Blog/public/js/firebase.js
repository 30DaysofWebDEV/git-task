const db = firebase.database();
let name,email,phone, message,username;

const add = document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let id = db.ref().child('contact').push().key;
    name=document.getElementById('name').value;
    email=document.getElementById('email').value;
    phone=document.getElementById('phone').value;
    message=document.getElementById('message').value;

    db.ref('contact/'+id).set({
        Name: name,
        Email: email, 
        Phone: phone, 
        Message: message, 
    })
    alert("Your message has been send successfully");
         let ele = document.createElement("div");
         let Contact = document.getElementById('contact');
        ele.innerText = `Thanks For connecting.`;
        ele.setAttribute("class","alert alert-success");
        Contact.appendChild(ele);
});





