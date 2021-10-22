const portfolio = {};

portfolio.init = () => {
    portfolio.topButton.addEventListener('click', portfolio.scrollTop)
    portfolio.observer = new IntersectionObserver(portfolio.showButton);
    portfolio.observer.observe(portfolio.target);
    portfolio.openButton.addEventListener('click', () => {
        portfolio.navBar.classList.toggle('active')
    })
    
}

portfolio.topButton = document.getElementById('topButton');
portfolio.rootElement = document.documentElement;
portfolio.target = document.querySelector('.projects');
portfolio.openButton = document.getElementById('openButton');
console.log(portfolio.openButton);
portfolio.navBar = document.querySelector('header .top-nav ul');
console.log(portfolio.navBar);





// function to display top button
portfolio.showButton = (entries) => {   
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            portfolio.topButton.classList.add('topButtonShow') 
        } else {
            portfolio.topButton.classList.remove('topButtonShow')
        }
    })
}

// function to bring page back to top
portfolio.scrollTop = () => {

    portfolio.rootElement.scrollTo({
        top: 0
    })
}


portfolio.op

portfolio.init()
