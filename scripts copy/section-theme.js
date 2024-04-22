let evenSections = document.querySelectorAll('section:nth-child(even)');

evenSections.forEach(function(section) {
    let children = section.querySelectorAll('*');
    children.forEach(function(child) {
        if ((/^h[1-6]$/.test(child.tagName.toLowerCase()) || child.tagName.toLowerCase() == 'p' || child.tagName.toLowerCase() == 'span' || child.tagName.toLowerCase() == 'a') && !child.parentElement.parentElement.parentElement.classList.contains('toast') && !child.parentElement.parentElement.parentElement.parentElement.classList.contains('toast')) { // j'ai trouver en ligne le /^h[1-6]$/ et sa semble marcher comme je veux. JSP comment sa marche, mais bon.
            child.style.color = '#fff';
        }
        if (child.classList.contains('toast')) {
            let toast = child;
            if (toast) {
                let childrenOfToast = toast.querySelectorAll('*');
                childrenOfToast.forEach(function(childOfToast) {
                    if (!childOfToast.tagName.toLowerCase('button')) {
                        childOfToast.style.color = '#024f22';
                    }
                });
            }
        }
    });
});
