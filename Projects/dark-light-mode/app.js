let body = document.querySelector('body')
let btn = document.querySelector("#checkbox");


// Approach 1 :When you need explicit control over what happens in each state.

btn.addEventListener('change', () => {
    if (btn.checked) {
        body.classList.add("dark-mode"); 
    } else {
        body.classList.remove("dark-mode");
    }
});


// Approach 2 : when you don't need extra checks or additional logic for each state.
// btn.addEventListener('change', () => {
//     body.classList.toggle("dark-mode")
// })



