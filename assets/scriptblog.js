// Add the script elements to the HTML document's <head>

//head tags
function exscripts(){
var script1 = document.createElement('script');
script1.src = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js';

// Create a new <script> element for the second external script
var script2 = document.createElement('script');
script2.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';

var script3 = document.createElement('script');
script3.src = 'https://code.jquery.com/jquery-3.6.0.min.js';

var script4 = document.createElement('script');
script4.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6468410229386783';
script4.setAttribute('crossorigin', 'anonymous');


var script5 = document.createElement('script');
script5.src = 'https://www.googletagmanager.com/gtag/js?id=G-058C2GFCEQ';
script5.async = true ;

var script6 = document.createElement('script');
script6.src = 'https://unpkg.com/default-passive-events';
script6.type = 'text/javascript';


document.head.appendChild(script3);
document.head.appendChild(script2);
document.head.appendChild(script1);
document.head.appendChild(script4);
document.head.appendChild(script5);
// document.head.appendChild(script6);

}
var popup;
      window.addEventListener("load", function () {
        window.cookieconsent.initialise({
          type: "Implied Consent (opt-out)",
          theme: "classic",
          palette: {
            popup: {
              background: "#000",
              text: "#fff",
            },
            button: {
              background: "#198754",
              text: "#000",
            },
            theme: "edgeless",
            position: "bottom-left",
          },

          content: {
            message:
              "By continuing to use this website, you consent to the use of cookies by Google Analytics. The collected data is anonymized and doesn't identify you personally. ",
            link: "Find More.",
            href: "https://www.factyard.com/cookie_policy.html",
            policy: "Cookie Policy",
            cookieconsent_dismissed: "yes",
          },

          onInitialise: function (status) {
            if (status == cookieconsent.status.allow) setCookies();
          },
          onStatusChange: function (status) {
            var cookieConsentBanner = document.querySelector(".cc-window");
            if (cookieConsentBanner) {
              cookieConsentBanner.style.display = "none";
            }
            if (this.hasConsented()) setCookies();
            else deleteCookies(this.options.cookie.name);
          },

          function(p) {
            popup = p;
          },
        });
      });
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-058C2GFCEQ", { anonymize_ip: true });

      function setCookies() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = "true";
        s.src = "https://www.googletagmanager.com/gtag/js?id=G-058C2GFCEQ";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      }

      function deleteCookies(cookieconsent_name) {
        var keep = [cookieconsent_name, "DYNSRV"];

        document.cookie.split(";").forEach(function (c) {
          c = c.split("=")[0].trim();
          if (!~keep.indexOf(c))
            document.cookie =
              c + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
        });
      }
function loadSuggestedBlogs() {
         fetch("../../assets/testtd.json")
        .then(response => response.json())
        .then(data => {
            const suggestedBlogs = document.getElementById('suggestedBlogs');
            let html = '';

            if (data.length > 0) {
                for (let i = data.length - 1; i >= 0; i--) {
                const card = document.createElement('div');
                //card.classList.add('col-md-4', 'mb-4');
                    const item= data[i];
                card.innerHTML = `
                    <div class="sug-card rounded bg-white mt-1">
                        <img src="${item.image}" class="card-img" alt="${item.title}">
                        <div class="card-body ml-1">
                            <h6 class="card-title"><a href="/${item.dataPath}" target="_blank">${item.title}</a></h6>
                            <p class="card-text mt-2">Date: ${item.date}</p>
                        </div>
                    </div>
                `;
        
                // Append the card to the container
                suggestedBlogs.appendChild(card);
        
            }
        };

           // suggestedBlogs.innerHTML = html;
        })
        .catch(error => {
            console.error('Failed to load suggested blogs:', error);
        });
}

loadSuggestedBlogs();

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


//adsstera tag
function loadadsteraad() {
    // Create the first script element
    var script1 = document.createElement('script');
    script1.async = 'async';
    script1.setAttribute('data-cfasync', 'false');
    script1.src = '//pl20293264.highcpmrevenuegate.com/46ab8584ace2fa60ebf8b045b70155a1/invoke.js';

    // Create the div element for the first script's container
    var div1 = document.createElement('div');
    div1.id = 'container-46ab8584ace2fa60ebf8b045b70155a1';

    // Create the second script element
    var atOptions = {
        'key': '040283d785ebe35680d4f9d284af1661',
        'format': 'iframe',
        'height': 300,
        'width': 160,
        'params': {}
    };
    var script2 = document.createElement('script');
    // script2.type = 'text/javascript';
    var queryParams = Object.keys(atOptions).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(atOptions[key]);
    }).join('&');

    script2.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/040283d785ebe35680d4f9d284af1661/invoke.js?key=' + queryParams;

    // // Create the third script element
    // var script3 = document.createElement('script');
    // script3.type = 'text/javascript';
    // script3.innerHTML = 'atOptions = { ... }; document.write(\'<scr\' + \'ipt type="text/javascript" src="http\' + (location.protocol === \'https:\' ? \'s\' : \'\') + \'://www.profitablecreativeformat.com/04ba89effeeb625f60baaede0df36de9/invoke.js"></scr\' + \'ipt>\');';

    // Find the code container <div> by its id
    var codeContainer = document.getElementById('adsteradcode');
//     <!-- <script async="async" data-cfasync="false"
//     src="//pl20293264.highcpmrevenuegate.com/46ab8584ace2fa60ebf8b045b70155a1/invoke.js"></script>
// <div><div id="container-46ab8584ace2fa60ebf8b045b70155a1"></div></div>
// <script type="text/javascript">
//     atOptions = {
//         'key': '040283d785ebe35680d4f9d284af1661',
//         'format': 'iframe',
//         'height': 300,
//         'width': 160,
//         'params': {}
//     };
//     document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/040283d785ebe35680d4f9d284af1661/invoke.js"></scr' + 'ipt>');
// </script>
// <script type="text/javascript">
//     atOptions = {
//         'key': '04ba89effeeb625f60baaede0df36de9',
//         'format': 'iframe',
//         'height': 600,
//         'width': 160,
//         'params': {}
//     };
//     document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/04ba89effeeb625f60baaede0df36de9/invoke.js"></scr' + 'ipt>');
// </script> 
    // Append the elements to the code container <div>
    codeContainer.appendChild(script1);
    codeContainer.appendChild(div1);
   //  codeContainer.appendChild(script2);
    // codeContainer.appendChild(script3);
}


// const adsteradiv = document.getElementById('adsterad');
// const adsterain1= document.createElement('script');
// adsterain1.src = '//pl20293264.highcpmrevenuegate.com/46ab8584ace2fa60ebf8b045b70155a1/invoke.js';
// adsterain1.async = true;
// const adsterain1div= document.createAttribute('script');

// adsterain.innerHTML==`<script async="async" data-cfasync="false"
// src="//pl20293264.highcpmrevenuegate.com/46ab8584ace2fa60ebf8b045b70155a1/invoke.js"></script>
// <div id="container-46ab8584ace2fa60ebf8b045b70155a1"></div>
// <script type="text/javascript">
// atOptions = {
    // 'key': '040283d785ebe35680d4f9d284af1661',
    // 'format': 'iframe',
    // 'height': 300,
    // 'width': 160,
    // 'params': {}
// };
// document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/040283d785ebe35680d4f9d284af1661/invoke.js"></scr' + 'ipt>');
// </script>
// <script type="text/javascript">
// atOptions = {
//     'key': '04ba89effeeb625f60baaede0df36de9',
//     'format': 'iframe',
//     'height': 600,
//     'width': 160,
//     'params': {}
// };
// document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/04ba89effeeb625f60baaede0df36de9/invoke.js"></scr' + 'ipt>');
// </script>`;

// adsteradiv.appendChild(adsterain);

//header
function insertContentNav() {
    var content = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand ml-4" href="/">
      <img width="22" height="30" src="../../assets/favicon2.png" alt="" />
      FactYard</a
    >
    <button
      class="navbar-toggler ml-auto"
      type="button"
      data-toggle="collapse"
      data-target=".navbar-collapse"
      style="float: right"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <a
            class="nav-link"
            href="www.factyard.com"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="www.factyard.com/blog"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >Blog</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="www.factyard.com/quizplay"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >Quiz</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="www.factyard.com/about"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >About</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="/contact"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
    `;
    
    // Find the target div by its ID
    var targetDiv = document.getElementById("nav-bar-content");

    // Insert the HTML content into the target div
    if (targetDiv) {
        targetDiv.innerHTML = content;
    } else {
        console.error("Target div not found.");
    }
}

//footer

function loadFooter() {
    var footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        // Define the footer HTML
        var footerHTML = `
        <footer class="bg-dark text-white mt-3">
        <div class="row pt-3 ml-3 mr-2">
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="/" target="_blank">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Legal</h5>
            <ul class="list-unstyled footer-links">
              <li>
                <a
                  href="https://www.factyard.com/cookie_policy.html"
                  target="_blank"
                  >Cookie Policy</a
                >
              </li>
              <li>
                <a
                  href="https://www.factyard.com/privacy_policies.html"
                  target="_blank"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a href="https://www.factyard.com/disclaimer.html" target="_blank"
                  >Disclaimer</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Contact Us</h5>
            <ul class="list-unstyled footer-links">
              <li>
                <a href="https://www.facebook.com/thefactyard" target="_blank"
                  >Facebook</a
                >
              </li>
              <li>
                <a href="mailto:thefactyard@gmail.com">thefactyard@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div style="text-align: center">
          <small>© [2023] factyard.com - All Rights Reserved.</small>
        </div>
      </footer>
  
        `;

        // Set the HTML content of the "footer-container" div
        footerContainer.innerHTML = footerHTML;
    } else {
        console.error('The footer container div is not found.');
    }
}

function ganalytics(){
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-058C2GFCEQ');
}

// // Add event listeners to the navigation links
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav ul li a');

//     navLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetSectionId = link.getAttribute('href');
//             scrollToSection(targetSectionId);
//         });
//     });
// });
addEventListener('touchstart', this.callPassedFuntion, { 
    passive: false 
  })
document.addEventListener('DOMContentLoaded', function() {
    // Your code to manipulate the DOM here
    exscripts();
    ganalytics();
    loadadsteraad();
    insertContentNav();
    loadFooter();

});