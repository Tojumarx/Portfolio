document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('projectContainer');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    const scrollAmount = 350;

    const header = document.getElementById('main-header');
    const root = document.documentElement;

    // Function to dynamically set the CSS variable for the header height
    const setHeaderHeight = () => {
        if (header) {
            const headerHeight = header.offsetHeight;
            root.style.setProperty('--header-height', `${headerHeight}px`);
        }
    };

    // Call the function on page load and window resize to handle responsiveness
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);

    scrollLeftBtn.addEventListener('click', () => {
        projectContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        projectContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    const updateScrollButtons = () => {
        if (projectContainer.scrollLeft > 0) {
            scrollLeftBtn.classList.remove('hidden');
        } else {
            scrollLeftBtn.classList.add('hidden');
        }

        if (projectContainer.scrollLeft + projectContainer.clientWidth >= projectContainer.scrollWidth - 1) {
            scrollRightBtn.classList.add('hidden');
        } else {
            scrollRightBtn.classList.remove('hidden');
        }
    };

    updateScrollButtons();
    projectContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
});