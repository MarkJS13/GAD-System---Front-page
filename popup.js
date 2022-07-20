const popup = document.querySelector('#nav-bar > li.get-started');
const showStudent = document.querySelector('#student-form');
const showAdmin = document.querySelector('#admin-form');

popup.addEventListener('click', e => {
     e.preventDefault();
     if(e.target.classList.contains('get-started')) {
         showStudent.style.display = 'block';
    }
});

/* <-------- Close button ---------- > */

const exitStudent = document.querySelector('#student-form .container-form .close');
const exitAdmin = document.querySelector('#admin-form .container-form .close');

exitStudent.addEventListener('click', e => {
    e.preventDefault();
    showStudent.style.display = 'none'; 
});

exitAdmin.addEventListener('click', e => {
    e.preventDefault();
    showAdmin.style.display = 'none';
    
});


/* <------ Switch Login Form ------ > */
 const switchAdmin = document.querySelector('#student-form > div > form > div.switch-user > h1 > span');
 const switchStudent = document.querySelector('#admin-form > div > form > div.switch-user > h1 > span');

 switchAdmin.addEventListener('click', e => {
     e.preventDefault();
     showStudent.style.display = 'none';
     showAdmin.style.display = 'block';
 });

 switchStudent.addEventListener('click', e => {
     e.preventDefault();
     showAdmin.style.display = 'none';
     showStudent.style.display = 'block';
 })

