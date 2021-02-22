document.querySelectorAll(".controls a").forEach(a =>{                        // Select all a inside .controls
    a.addEventListener("click",(ev)=>{                                             // Add a event listener for clicks on the as
        const parent = a.parentNode;                                               // Obtain the a parent, it means: .controls
        const grantParent = parent.parentNode;                                          // Obtain the parent parent, it means: .tabs
        const container = grantParent.querySelector(".tabs-container");                 // Obtain .tabs-container
        const childrenList = Array.from(parent.children);                               // Force an array to search an a between the others
        const index = childrenList.indexOf(a);                                     // Search the clicked a position between the others
        container.style.transform = `translatex(-${index * 100}%)`;                     // Modifies the css propery "translateX"

        parent.querySelectorAll("a.active").forEach(activeBtn => activeBtn.classList.remove("active")); // Select the active a and took away the .active class
        a.classList.add("active");                                                 // Add the .active class to the clicked a
    })
})


