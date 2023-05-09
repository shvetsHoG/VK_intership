document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
    const button = dropDownWrapper.querySelector('.dropdown__btn');
    const itemList = dropDownWrapper.querySelector('.dropdown__list');
    const items = dropDownWrapper.querySelectorAll('.dropdown__list-item');
    
    button.addEventListener("click", function() {
        itemList.classList.toggle("dropdown__list-visible");
        this.classList.add("dropdown__btn-active");
    });
    
    items.forEach(item => item.addEventListener("click", function(event) {
        button.innerText = this.innerText;
        button.focus();
        itemList.classList.remove("dropdown__list-visible");
        event.stopPropagation();
    }));
    
    document.addEventListener("click", (event) => {
        if (event.target !== button) {
            itemList.classList.remove("dropdown__list-visible");
            button.classList.remove("dropdown__btn-active");
        }
    });
    
    document.addEventListener("keydown", (event) => {
        if (event.key === "Tab" || event.key === "Escape") {
            itemList.classList.remove("dropdown__list-visible");
            button.classList.remove("dropdown__btn-active");
        }
    });
});


