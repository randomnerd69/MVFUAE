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
                                <a class="nav-link " href="/"  aria-expanded="false">
                                    Home
                                </a>
                               
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="about.html">About</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link scroll" href="services.html">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="index.html#portfolio">Our Work</a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link scroll" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
`;

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
// Find the header tag in the document
var header = document.querySelector("header");

// Check if header tag exists
if (header) {
    // Append the HTML content to the header using innerHTML
    header.innerHTML += headerContent;
}
});


var footerContent = `
<div class="footer-main ptb_100">
<div class="container">
    <div class="row">
        <div class="col-12 col-md-4 footer-sec">
            <!-- Contact Us -->
            <div class="footer-content contact-us">
                <p class="mb-2">Stay secure with MVF. Your trusted partner for cutting-edge security and IT solutions. Contact us today for peace of mind</p>
                <ul>
                    <li class="py-1">
                        <a class="d-flex align-items-center" href="index.html#">
                            <div class="social-icon si-dark mr-3">
                                <i class="fas fa-home"></i>
                            </div>
                            <span>Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002</span>
                        </a>
                    </li>
                    <li class="py-1">
                        <a class="d-flex align-items-center" href="index.html#">
                            <div class="social-icon si-dark mr-3">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <span>+1 230 456 789-012 345 6789</span>
                        </a>
                    </li>
                    <li class="py-1">
                        <a class="d-flex align-items-center" href="index.html#">
                            <div class="social-icon si-dark mr-3">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <span>exampledomain@domain.com</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-4 footer-sec">
            <!-- Footer Title -->
            <div class="footer-title">
                <h3 class="d-inline-block mb-4">Popular Tags</h3>
            </div>
            <!-- Tags Widget Items -->
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
            </div>
            <!-- Footer Title -->
            <div class="footer-title mt-4">
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
        <div class="col-12 col-md-4 footer-sec">
            <!-- Footer Title -->
            <div class="footer-title">
                <h3 class="d-inline-block mb-4">Latest News</h3>
            </div>
            <!-- Latest News -->
            <div class="footer-content latest-news">
                <ul>
                    <li class="py-2">
                        <!-- Single News -->
                        <div class="single-news media">
                            <!-- News Thumb -->
                            <div class="news-thumb">
                                <img class="avatar-lg rounded-lg" src="assets/img/blog/blog-4.jpg" alt="">
                            </div>
                            <!-- News Content -->
                            <div class="news-content media-body align-self-center pl-3">
                                <p class="pb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <!-- Meta Info -->
                                <div class="meta-info d-flex flex-wrap">
                                    <a class="pr-2" href="index.html#">19 January, 2020</a>
                                    <a class="px-2" href="index.html#"><i class="fas fa-comments pr-2"></i>05</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="py-2">
                        <!-- Single News -->
                        <div class="single-news media">
                            <!-- News Thumb -->
                            <div class="news-thumb">
                                <img class="avatar-lg rounded-lg" src="assets/img/blog/blog-4.jpg" alt="">
                            </div>
                            <!-- News Content -->
                            <div class="news-content media-body align-self-center pl-3">
                                <p class="pb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <!-- Meta Info -->
                                <div class="meta-info d-flex flex-wrap">
                                    <a class="pr-2" href="index.html#">19 January, 2020</a>
                                    <a class="px-2" href="index.html#"><i class="fas fa-comments pr-2"></i>19</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
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
document.addEventListener("DOMContentLoaded", function() {
// Find the header tag in the document
var footer = document.querySelector("footer");

// Check if header tag exists
if (footer) {
    // Append the HTML content to the header using innerHTML
    footer.innerHTML += footerContent;
}
});


function addAutoVersionToScriptsAndStyles() {
    var resources = document.querySelectorAll('script[src$=".js"], link[href$=".css"]');
    var version = Date.now(); // Use current timestamp as version

    resources.forEach(function(resource) {
        var src = resource.getAttribute('src') || resource.getAttribute('href');
        src += (src.indexOf('?') === -1 ? '?' : '&') + 'v=' + version;
        resource.setAttribute('src', src);
    });
}

// Call the function when the page loads
window.onload = addAutoVersionToScriptsAndStyles;