document.getElementById("navToggle").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("active");
});

document.querySelectorAll('.nav-tab').forEach(function(tab) {
    tab.addEventListener('click', function () {
        const targetId = this.getAttribute('rel');

        // 1. Remove 'active' from all tabs
        document.querySelectorAll('.nav-tab').forEach(function(t) {
            t.classList.remove('active');
        });

        // 2. Remove 'show' from all sections
        document.querySelectorAll('.tap-section').forEach(function(section) {
            section.classList.remove('show');
        });

        // 3. Add 'active' to clicked tab
        this.classList.add('active');

        // 4. Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('show');
        }
    });
});
