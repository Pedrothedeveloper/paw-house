document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (menuToggle && mainNavigation) {
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

const productSearch = document.querySelector("#product-search");
const productsGrid = document.querySelector(".products-grid");
const productCards = Array.from(
    document.querySelectorAll(".product-card")
);
const filterButtons = document.querySelectorAll(".filter-button");
const productResults = document.querySelector(".product-results");

if (
    productSearch &&
    productCards.length > 0 &&
    filterButtons.length > 0 &&
    productResults
) {
    let selectedCategory = "todos";

    const normalizeText = (text) =>
        text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();

    const updateProductResults = () => {
        const searchTerm = normalizeText(productSearch.value);

        const visibleProducts = productCards.filter((card) => {
            const cardCategory = card.dataset.category;
            const cardContent = normalizeText(card.textContent);
            const matchesCategory =
                selectedCategory === "todos" ||
                cardCategory === selectedCategory;
            const matchesSearch = cardContent.includes(searchTerm);

            card.hidden = !(matchesCategory && matchesSearch);

            return !card.hidden;
        });

        const resultLabel = visibleProducts.length === 1
            ? "produto encontrado"
            : "produtos encontrados";

        productResults.textContent =
            `${visibleProducts.length} ${resultLabel}`;
    };

    productSearch.addEventListener("input", updateProductResults);

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            selectedCategory = button.dataset.category;

            filterButtons.forEach((filterButton) => {
                const isActive = filterButton === button;

                filterButton.classList.toggle("is-active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });

            updateProductResults();
        });
    });
}

if (productsGrid) {
    productsGrid.addEventListener("click", (event) => {
        const detailsButton = event.target.closest(
            ".product-details-toggle"
        );

        if (!detailsButton || !productsGrid.contains(detailsButton)) {
            return;
        }

        const detailsId = detailsButton.getAttribute("aria-controls");
        const detailsPanel = document.getElementById(detailsId);

        if (!detailsPanel) {
            return;
        }

        const isExpanded =
            detailsButton.getAttribute("aria-expanded") === "true";
        const detailsLabel = detailsButton.querySelector(
            ".product-details-label"
        );

        detailsButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );
        detailsPanel.classList.toggle("is-open", !isExpanded);

        if (detailsLabel) {
            detailsLabel.textContent = isExpanded
                ? "Ver detalhes"
                : "Ocultar detalhes";
        }
    });
}
