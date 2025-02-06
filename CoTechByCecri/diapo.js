const ratio = 0.01

const options = {
    root : null,
    rootMargin : '0px',
    thershold: ratio
}

const handleIntersect =  function (entries, observer) {
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveler-Visible')
    console.log('Visible')  
    observer.unobserve(entry.target) 
}
})
}

const observer = new IntersectionObserver(handleIntersect, options)

document.querySelectorAll('[class*="reveler-"]').forEach(function(r){
    observer.observe(r)
})
