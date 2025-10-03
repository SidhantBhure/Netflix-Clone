console.log("Netflix Clone Loaded ✅");
const rows = document.querySelectorAll('.row-posters');

rows.forEach(row => {
  row.addEventListener('wheel', (e) => {
    e.preventDefault();
    row.scrollLeft += e.deltaY; // scroll with mouse wheel
  });
});
// Banner element
const banner = document.getElementById("banner");

// Array of banner images
const bannerImages = [
  "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", // Stranger Things
  "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg", // Avengers Endgame
  "https://image.tmdb.org/t/p/original/pfAZP7JvTTxqgq7n6A1OYgkAdEW.jpg", // Money Heist
  "https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg"  // Breaking Bad
];

let currentIndex = 0;

// Function to change banner background
function changeBanner() {
  banner.style.backgroundImage = `url(${bannerImages[currentIndex]})`;
  currentIndex = (currentIndex + 1) % bannerImages.length;
}

// Initial call
changeBanner();

// Change every 5 seconds
setInterval(changeBanner, 5000);

console.log("Dynamic Banner Loaded ✅");
