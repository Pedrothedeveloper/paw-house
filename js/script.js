const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (menuToggle && mainNavigation) {
    document.documentElement.classList.add("js");

    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNavigation.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        mainNavigation.classList.toggle(
            "is-open",
            !isExpanded
        );
    });

    const navigationLinks =
        mainNavigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    const mobileMediaQuery =
        window.matchMedia("(max-width: 700px)");

    mobileMediaQuery.addEventListener("change", (event) => {
        if (!event.matches) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (event.key === "Escape" && isExpanded) {
            closeMenu();
            menuToggle.focus();
        }
    });
}
