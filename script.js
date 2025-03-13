// Set test mode to true to open all doors regardless of date
const testmode = true; // Set to false when not testing

// Door data with messages and inside images
const doorData = [
    { number: 1, message: "Welcome to the countdown! May this advent bring joy and surprises each day. 🎄", image: "images_inside/1.jpg" },
    { number: 2, message: "A little magic goes a long way! May your day be filled with warmth and happiness. ✨", image: "images_inside/2.jpg" },
    { number: 3, message: "The holiday season is all about spreading kindness. Do one small good deed today! ❤️", image: "images_inside/3.jpg" },
    { number: 4, message: "Only 20 days until Christmas! Have a cozy cup of hot chocolate and enjoy the moment. ☕", image: "images_inside/4.jpg" },
    { number: 5, message: "December is a month of wonder. Take a moment to appreciate the little joys around you. ❄️", image: "images_inside/5.jpg" },
    { number: 6, message: "Happy St. Nicholas Day! Maybe a little surprise is waiting for you today? 🎁", image: "images_inside/6.jpg" },
    { number: 7, message: "The weekend is here! Take some time to relax and enjoy the festive season. 🎶", image: "images_inside/7.jpg" },
    { number: 8, message: "It’s the second Advent! Light a candle, make a wish, and embrace the holiday spirit. 🕯️", image: "images_inside/8.jpg" },
    { number: 9, message: "Start the week with a smile! Christmas is getting closer. Keep the excitement alive! 😊", image: "images_inside/9.jpg" },
    { number: 10, message: "Have you written your Christmas wishlist yet? It’s never too late for a little magic. 🎅", image: "images_inside/10.jpg" },
    { number: 11, message: "A warm blanket, a good book, and some fairy lights – perfect December vibes! 📖", image: "images_inside/11.jpg" },
    { number: 12, message: "We’re halfway to Christmas! Time flies when you're filled with holiday cheer. 🎄", image: "images_inside/12.jpg" },
    { number: 13, message: "A little reminder: You are amazing, and this season is even brighter with you in it! 🌟", image: "images_inside/13.jpg" },
    { number: 14, message: "Ten days left! Maybe it's time to bake some Christmas cookies? 🍪", image: "images_inside/14.jpg" },
    { number: 15, message: "December nights feel extra cozy with a festive movie and a warm drink. 🎥", image: "images_inside/15.jpg" },
    { number: 16, message: "Only a few days left! Don’t forget to spread joy and kindness wherever you go. ❤️", image: "images_inside/16.jpg" },
    { number: 17, message: "A small act of kindness can make someone's day. Give a compliment or share a smile! 😊", image: "images_inside/17.jpg" },
    { number: 18, message: "Christmas magic is in the air! Take a deep breath and enjoy the festive atmosphere. ✨", image: "images_inside/18.jpg" },
    { number: 19, message: "5 days to go! Have you wrapped your presents yet? 🎁", image: "images_inside/19.jpg" },
    { number: 20, message: "The final countdown begins! May your heart be as warm as a Christmas fireplace. 🔥", image: "images_inside/20.jpg" },
    { number: 21, message: "Christmas is almost here! Time to wear your coziest sweater and embrace the season. 🧣", image: "images_inside/21.jpg" },
    { number: 22, message: "Two more days! Fill your day with laughter, love, and holiday spirit. 🎄", image: "images_inside/22.jpg" },
    { number: 23, message: "Tomorrow is the big day! Take a moment to reflect on all the wonderful memories this season brings. ❤️", image: "images_inside/23.jpg" },
    { number: 24, message: "Merry Christmas! May your day be filled with love, laughter, and joy. 🎅🎄", image: "images_inside/24.jpg" }
];

// The specific order of the doors
const doorOrder = [1, 2, 24, 18, 16, 19, 8, 11, 3, 10, 23, 20, 15, 17, 4, 12, 5, 14, 7, 13, 6, 22, 21, 9];

const calendar = document.querySelector('.calendar');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('closeBtn');

// Get the current date
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // December is month 11 (0-indexed)

// Generate the doors
doorOrder.forEach((doorNumber) => {
    const data = doorData.find(d => d.number === doorNumber);

    const door = document.createElement('div');
    door.classList.add('door');

    // Set the door image
    const doorImage = document.createElement('img');
    doorImage.src = `images/${doorNumber}.png`;
    doorImage.alt = `Door ${doorNumber}`;

    door.appendChild(doorImage);
    calendar.appendChild(door);

    // Doors can be reopened, so we don't prevent multiple clicks
    if (testmode || (currentMonth === 11 && doorNumber <= currentDay)) {
        door.addEventListener('click', () => openDoor(doorNumber));
        door.style.cursor = 'pointer';
    } else {
        doorImage.style.filter = 'grayscale(100%)';
        door.style.cursor = 'not-allowed';
    }
});

function openDoor(doorNumber) {
    // Display the modal with message and image
    const data = doorData.find(d => d.number === doorNumber);
    if (data) {
        modalMessage.textContent = data.message;
        modalImage.src = `images_inside/${doorNumber}.jpg`; // Use images from the 'images_inside' folder
    } else {
        modalMessage.textContent = "No message available.";
        modalImage.src = "";
    }
    modal.style.display = 'block';
}


// Close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Random horizontal position
    snowflake.style.left = `${Math.random() * 100}vw`;

    // Random size
    const size = Math.random() * 10 + 5; // Size between 5px and 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Random animation duration
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duration between 5s and 10s

    // Append snowflake to body
    document.body.appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 10000); // Matches the `fall` animation duration
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 500); // Adjust interval for more or fewer snowflakes
