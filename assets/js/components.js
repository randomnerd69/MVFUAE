var headerContent = `
<div class="container position-relative">
                <a class="navbar-brand" href="index.html">
                    <img class="navbar-brand-regular" src="assets/img/logo/logo.svg" alt="brand-logo">
                    <img class="navbar-brand-sticky" src="assets/img/logo/logo.svg" alt="sticky brand-logo">
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-inner">
                    <!--  Mobile Menu Toggler -->
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <nav>
                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="index.html"  aria-expanded="false">
                                    Home
                                </a>
                               
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="services.html">Services</a>
                            </li>
                           
                           
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
`;

var header = document.querySelector("header");

// Check if header tag exists
if (header) {
	// Append the HTML content to the header using innerHTML
	header.innerHTML += headerContent;
}

var footerContent = `
<div class="footer-main ptb_100">
<div class="container">
    <div class="row">
        <div class="col-12 col-md-4 footer-sec">
            <div class="footer-title">
                <h3 class="d-inline-block mb-4">MVF Security</h3>
            </div>
            <!-- Contact Us -->
            <div class="footer-content contact-us">
                <p class="mb-2">Stay secure with MVF. Your trusted partner for cutting-edge security and IT solutions. Contact us today for peace of mind</p>
               
            </div>
        </div>
        <div class="col-12 col-md-4 footer-sec">
            <!-- Footer Title -->
            <div class="footer-title">
                <h3 class="d-inline-block mb-4">Contact Us</h3>
            </div>
            <!-- Latest News -->
            <div class="footer-content latest-news">
                <ul>
                    <li class="py-1">
                        <a class="d-flex align-items-center" href="index.html#">
                            <div class="social-icon si-dark mr-3">
                                <i class="fas fa-home"></i>
                            </div>
                            <span>MVF Security Equipment Installation & Maintenace LLC <br>
                            Office No: OFF4 - 0102, Dubai - UAE</span>
                        </a>
                    </li>
                    <li class="py-3">
                        <a class="d-flex align-items-center" href="">
                            <div class="social-icon si-dark mr-3">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <span>+971 585870275 <br> +971 585898275 </span>
                        </a>
                    </li>
                    <li class="py-3">
                        <a class="d-flex align-items-center" href="mailto:project@mvfuae.com">
                            <div class="social-icon si-dark mr-3">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <span>project@mvfuae.com</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-4 footer-sec">
            <!-- Footer Title -->
            <!-- <div class="footer-title">
                <h3 class="d-inline-block mb-4">Popular Tags</h3>
            </div>
            <div class="widget-content tags-widget-items">
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Corbus</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Bootstrap</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Multipurpose</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Corporate</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Landing Page</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Business</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Corporate</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Agency</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Lifestyle</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Wordpress</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Web Design</a>
                <a href="index.html#" class="d-inline-block px-2 py-1 mt-2 mr-1">Marketing</a>
            </div> -->
            <!-- Footer Title -->
            <div class="footer-title ">
                <h3 class="d-inline-block mb-4">Follow Us</h3>
            </div>
            <!-- Follow Us -->
            <div class="footer-content follow-us">
                <a class="p-2" href="index.html#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="p-2" href="index.html#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="p-2" href="index.html#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="p-2" href="index.html#">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
       
    </div>
</div>
</div>
<!-- Copyright Area -->
<div class="copyright-area">
<div class="container">
    <div class="row justify-content-center">
        MVF SECURITY &copy; 2024 All Rights Reserved
    </div>
</div>
</div>
`;

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
	// Find the header tag in the document
	var footer = document.querySelector("footer");

	// Check if header tag exists
	if (footer) {
		// Append the HTML content to the header using innerHTML
		footer.innerHTML += footerContent;
	}
});

function addVersionToResources() {
	var links = document.querySelectorAll('link[rel="stylesheet"], script[src]');

	links.forEach(function (link) {
		var href = link.href || link.src;
		link.href = href + "?v=" + new Date().getTime();
	});
}

// Call the function when the page loads
window.onload = addVersionToResources;

document.addEventListener("DOMContentLoaded", function () {
	// Wait for the DOM content to be fully loaded

	// Get the button element with the class "navbar-toggler"
	var navbarTogglerButton = document.querySelector(".navbar-toggler");

	// Add a click event listener to the button
	navbarTogglerButton.addEventListener("click", function () {
		// Log out a sentence when the button is clicked
		console.log("Navbar toggler button clicked!");
	});
});
