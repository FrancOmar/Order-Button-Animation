document.querySelectorAll('.truckbutton').forEach(button =>
    {button.addEventListener('click', e => {
        e.preventDefault();
        let box = button.querySelector('.box'),truck=button.querySelector('.truck');        
    })
})