document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    searchInput.addEventListener('focus', function() {
        searchContainer.classList.add('focused');
    });

    searchInput.addEventListener('blur', function() {
        searchContainer.classList.remove('focused');
    });
});


const listTab =  document.querySelectorAll(".list-tab li");
listTab.forEach(li => {
    li.addEventListener("click", function(){
        listTab.forEach((li2) => {
            li2.classList.remove("active");
        })
        li.classList.add("active");
    });
});




