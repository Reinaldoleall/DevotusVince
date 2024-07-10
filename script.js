document.addEventListener('DOMContentLoaded', function() {
    var dropdownButtons = document.querySelectorAll('.dropbtn');

    dropdownButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Toggle the display of the dropdown content
            var dropdownContent = button.nextElementSibling;
            var isVisible = dropdownContent.style.display === 'block';
            closeAllDropdowns();
            dropdownContent.style.display = isVisible ? 'none' : 'block';
        });
    });

    window.addEventListener('click', function() {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        var dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function(content) {
            content.style.display = 'none';
        });
    }
});