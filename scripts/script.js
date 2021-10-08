const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {

    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate');
        } else {
            element.classList.remove("animate");
        }
    })

}

animeScroll()

window.addEventListener("scroll", () => {
    animeScroll();
})

/* Desenvolvido e criado por Matheus Jhonatan dos Santos
User for Github: Matheusjkl35647 */