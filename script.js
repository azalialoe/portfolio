const imgContainer = document.querySelectorAll('.imgContainer img');

imgContainer.forEach((img) => {
    img.addEventListener('click', () => {
        imgContainer.classList.add('active');
    })
})

