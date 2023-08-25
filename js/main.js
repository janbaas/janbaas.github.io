let photos = document.querySelectorAll(".photo")

photos.forEach((photo) => {
    photo.addEventListener("click", function () {
        photo.classList.toggle("enlarged")
        document.body.classList.toggle("scrollDisabled")
    })
})
