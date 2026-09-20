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

    if ("IntersectionObserver" in window) {
        const sections = [];

        navigationLinks.forEach((link) => {
            const sectionSelector = link.getAttribute("href");
            const section = document.querySelector(sectionSelector);

            if (section) {
                sections.push(section);
            }
        });

        const updateActiveLink = (sectionId) => {
            navigationLinks.forEach((link) => {
                const isActive =
                    link.getAttribute("href") === `#${sectionId}`;

                link.classList.toggle("is-active", isActive);

                if (isActive) {
                    link.setAttribute("aria-current", "location");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        };

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

    document.addEventListener("keydown", (event) => {
        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (event.key === "Escape" && isExpanded) {
            closeMenu();
            menuToggle.focus();
        }
    });
}
