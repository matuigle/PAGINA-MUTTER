document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            sidebar.classList.add('hide');
        } else {
            sidebar.classList.remove('hide');
            sidebar.classList.add('show');
        }
    });
});

