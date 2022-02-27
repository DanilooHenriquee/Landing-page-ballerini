class MobileNavbar {

    constructor(mobileMenu, navMenu, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navMenu = document.querySelector(navMenu);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach( (link, index) => {
            link.style.animation 
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards
            ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navMenu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-menu",
    ".nav-menu li",
);

mobileNavbar.init();
