const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']["img-src"])



const anchorTags = document.querySelectorAll('a');
const anchorArr = Array.from(anchorTags)

document.querySelectorAll('a').forEach(element => {
  element.style.color = "green"
});

  anchorArr[0].innerText = siteContent.nav['nav-item-1']
  anchorArr[1].textContent = siteContent.nav['nav-item-2']
  anchorArr[2].innerText = siteContent.nav['nav-item-3']
  anchorArr[3].innerText = siteContent.nav['nav-item-4']
  anchorArr[4].innerText = siteContent.nav['nav-item-5']
  anchorArr[5].innerText = siteContent.nav['nav-item-6']
  
  document.querySelector('.cta-text H1').innerText = siteContent.cta.h1;
  document.querySelector('.cta-text button').innerText = siteContent.cta.button;
  let featSect = document.querySelectorAll(".top-content h4");
  let featSectArr = Array.from(featSect);
  featSectArr[0].innerText = siteContent['main-content']['features-h4'];
  featSectArr[1].innerText = siteContent['main-content']['about-h4'];
  let featSectText = document.querySelectorAll(".top-content p");
  let featSectTextArr = Array.from(featSectText);
  featSectTextArr[0].innerText = siteContent['main-content']['features-content']
  featSectTextArr[1].innerText = siteContent['main-content']['about-content']
  let botSect = document.querySelectorAll('.bottom-content h4');
  let botSectArr = Array.from(botSect);
  botSect[0].innerText = siteContent['main-content']['services-h4'];
  botSect[1].innerText = siteContent['main-content']['product-h4'];
  botSect[2].innerText = siteContent['main-content']['vision-h4'];
  let botTextSect = document.querySelectorAll(".bottom-content p");
  botTextSect[0].innerText = siteContent['main-content']['services-content']
  botTextSect[1].innerText = siteContent['main-content']['product-content']
  botTextSect[2].innerText = siteContent['main-content']['vision-content']
  let midImg = document.querySelector('.middle-img');
  midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

  let footerHeader = document.querySelector('.contact h4');
  footerHeader.innerText = siteContent['contact']['contact-h4']
  let footerText = document.querySelectorAll('.contact p');
  footerText[0].innerText = siteContent['contact']['address'];
  footerText[1].innerText = siteContent['contact']['phone'];
  footerText[2].innerText = siteContent['contact']['email'];

  let footer = document.querySelector('footer p');
  footer.innerText = siteContent.footer.copyright;

  var lastLink = document.createElement('A');
  var text = document.createTextNode('last link');
  lastLink.appendChild(text);
  document.querySelector('nav');

  


