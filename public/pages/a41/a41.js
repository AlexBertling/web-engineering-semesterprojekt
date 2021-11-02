function addItem() {
            
    const text = input.value;
    
    if(text.length > 0) {
        input.value = "";
        
        const newListEl = document.createElement("li");
        newListEl.appendChild(document.createTextNode(text));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            newListEl.remove();
        });
        newListEl.appendChild(deleteButton);
        
        const upButton = document.createElement("button");
        upButton.textContent = "Up";
        upButton.addEventListener("click", () => {
            const i = [...list.children].indexOf(newListEl) - 1;
            const prev = list.children[i];
            list.removeChild(newListEl);
            list.insertBefore(newListEl, prev);
        });
        newListEl.appendChild(upButton);

        const downButton = document.createElement("button");
        downButton.textContent = "Down";
        downButton.addEventListener("click", () => {
            const i = ([...list.children].indexOf(newListEl) + 2);
            const next = list.children[i];
            list.removeChild(newListEl);
            list.insertBefore(newListEl, next);
        });
        newListEl.appendChild(downButton);
        
        list.appendChild(newListEl);
    }
    
}

const input = document.querySelector(".itemText");
const button = document.querySelector(".addItem");
const list = document.querySelector(".items");

button.addEventListener("click", addItem);