$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
  
  
  
  
  `template: {
    name: '',
    pic: '',
    liveDemo: '',
    srcCode: '',
    info:
  }`
const portProjects = {
  shortener: {
    name: 'URL Shortener API',
    pic: 'public/app-screenshots/shurl.png',
    liveDemo: 'https://coordinated-trollius.glitch.me/',
    srcCode: 'https://github.com/Edwin-F/urlShortenerAPI',
    info: `A microservice API that shortens URLs and redirects users using the short URLs. It is built with Express.js and MongoDB.`
  },
  gdpchart: {
    name: 'U.S. GPD chart',
    pic: 'public/app-screenshots/gdpchart.png',
    liveDemo: 'https://codepen.io/Ed1881/full/QrxBgd/',
    srcCode: 'https://github.com/Edwin-F/gdpchart',
    info: `A bar chart that visualizes U.S. Gross Domestic Product between the years 1947 to 2015. It is built using jquery and D3js libraries.`
  },
  flashcard: {
    name: 'React flash card app',
    pic: 'public/app-screenshots/flashback.png',
    liveDemo: 'public/flashback/index.html',
    srcCode: 'https://github.com/Edwin-F/flashback',
    info: `A single page interactive flash cards app
    about React. It is built without Bundlers or other
    build tools. It uses React 16 and in-browser Babel
    transformer.`
  },
  clock: {
    name: 'React Pomodoro Clock',
    pic: 'public/app-screenshots/pomodoro.png',
    liveDemo: 'public/pomodoro/index.html',
    srcCode: 'https://github.com/Edwin-F/pomodoroclock',
    info: `A single page pomodoro clock for productivity. It 
    is built without Bundlers or other build tools. It uses 
    React 16 and in-browser Babel transformer.`
  },
  todoster: {
    name: 'Todoster',
    pic: 'public/app-screenshots/todoster.png',
    liveDemo: 'https://todoster-edwin-f.herokuapp.com/',
    srcCode: 'https://github.com/Edwin-F/AppTodoster',
    info: `This single-page to-do application features a fluid user 
    interface that by using JavaScript allows users to rapidly 
    add dynamic content.`
  },
  grammable: {
    name: 'Grammable',
    pic: 'public/app-screenshots/grammable.png',
    liveDemo: 'https://grammable-edwin-f.herokuapp.com/',
    srcCode: 'https://github.com/Edwin-F/AppGrammable',
    info: `An Instagram clone that was built using industry-standard,
    test-driven development following numerous red/green/refactor cycles.`
  },
  flixter: {
    name: 'Two-Sided Market Place',
    pic: 'public/app-screenshots/flixter.png',
    liveDemo: 'https://flixter-edwin-f.herokuapp.com/',
    srcCode: 'https://github.com/Edwin-F/AppFlixter',
    info: `A two-sided, video-streaming marketplace platform that features credit card payment capabilities, user role management, complex user interfaces, and advanced database relationships.`
  },
  nomster: {
    name: 'Nomster',
    pic: 'public/app-screenshots/nomster.png',
    liveDemo: 'https://nomster-edwin-f.herokuapp.com/',
    srcCode: 'https://github.com/Edwin-F/AppNomster',
    info: `A Yelp clone that integrates with the Google Maps API and includes features like user comments, star ratings,
    image uploading, and user authentication.`
  },
  splurty: {
    name: 'Quote Generator',
    pic: 'public/app-screenshots/splurty.png',
    liveDemo: 'https://splurty-edwin-flores.herokuapp.com/',
    srcCode: 'https://github.com/Edwin-F/AppSplurty',
    info: 'A database-powered quote generator with a mobile-first design, using the Ruby on Rails framework, HTML, and CSS. Uses Git and GitHub for version control, and launched on Heroku.'
  }
};

function renderColProject(project) {
  return `
  <div class="col-sm-4">
    <div class="thumbnail">
      <div class="image-container">
        <img src="${project.pic}" alt="${project.name}">
        <div class="middle">
          <a href="${project.liveDemo}" class="text">Live Demo</a>
          <a href="${project.srcCode}" class="text">Source Code</a>
        </div>
      </div>
      <p><strong>${project.name}</strong></p>
      <p>${project.info}</p>
    </div>
  </div>
  `;
}

const markup = `
<h2>Portfolio</h2>
  <h4>What I have created.</h4>
  <div class="row text-center">
    ${renderColProject(portProjects.shortener)}
    ${renderColProject(portProjects.gdpchart)}
    ${renderColProject(portProjects.clock)}
  </div>
  <div class="row text-center">
    ${renderColProject(portProjects.grammable)}
    ${renderColProject(portProjects.todoster)}
    ${renderColProject(portProjects.flashcard)}
  </div>
  <div class="row text-center">
    ${renderColProject(portProjects.flixter)}
    ${renderColProject(portProjects.nomster)}
    ${renderColProject(portProjects.splurty)}
  </div>
`;

var portfolio = document.getElementById("portfolio");
portfolio.innerHTML = markup;

})
