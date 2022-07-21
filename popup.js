const popup = document.querySelector('#nav-bar > li.get-started');
const showStudent = document.querySelector('.form-wrapper #student-form');
const showAdmin = document.querySelector('.form-wrapper #admin-form');
const formWrapper = document.querySelector('.form-wrapper');

popup.addEventListener('click', e => {
     e.preventDefault();
     if(e.target.classList.contains('get-started')) {
        formWrapper.style.display = 'block';
        showStudent.style.display = 'block';
    }
});

/* <-------- Close button ---------- > */

const exitStudent = document.querySelector('.form-wrapper #student-form .container-form .close');
const exitAdmin = document.querySelector('.form-wrapper #admin-form .container-form .close');

exitStudent.addEventListener('click', e => {
    e.preventDefault();
    showStudent.style.display = 'none'; 
    formWrapper.style.display = 'none';
});

exitAdmin.addEventListener('click', e => {
    e.preventDefault();
    showAdmin.style.display = 'none';
    formWrapper.style.display = 'none';
});


/* <------ Switch Login Form ------ > */
 const switchAdmin = document.querySelector('.form-wrapper #student-form > div > form > div.switch-user > h1 > span');
 const switchStudent = document.querySelector('.form-wrapper #admin-form > div > form > div.switch-user > h1 > span');

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

