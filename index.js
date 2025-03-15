

**HTML (index.html):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Animations</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="animatedBox" class="box"></div>
    <button id="startButton">Start Animation</button>
    <button id="saveButton">Save Count</button>
    <p id="countDisplay">Count: 0</p>
    <script src="script.js"></script>
</body>
</html>
```

**CSS (style.css):**

```css
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    position: relative;
}

@keyframes moveBox {
    0% { left: 0; }
    50% { left: 200px; background-color: lightgreen; }
    100% { left: 0; }
}

.animate {
    animation: moveBox 2s linear infinite;
}
```

**JavaScript (script.js):**

```javascript
const animatedBox = document.getElementById('animatedBox');
const startButton = document.getElementById('startButton');
const saveButton = document.getElementById('saveButton');
const countDisplay = document.getElementById('countDisplay');

let animationCount = parseInt(localStorage.getItem('animationCount')) || 0;
countDisplay.textContent = `Count: ${animationCount}`;

startButton.addEventListener('click', function() {
    animatedBox.classList.toggle('animate');
});

saveButton.addEventListener('click', function() {
    if (animatedBox.classList.contains('animate')) {
        animationCount++;
        localStorage.setItem('animationCount', animationCount);
        countDisplay.textContent = `Count: ${animationCount}`;
    }
});
```

**Explanation:**

* **HTML Structure:**
    * A `div` with the ID "animatedBox" for the CSS animation.
    * Two buttons: "startButton" to toggle the animation and "saveButton" to save the count.
    * A paragraph to display the animation count.
* **CSS Styling:**
    * The `.box` class sets the basic style for the animated box.
    * The `@keyframes moveBox` defines the CSS animation.
    * The `.animate` class applies the animation to the box.
* **JavaScript Functionality:**
    * **localStorage:**
        * Retrieves the animation count from `localStorage` or initializes it to 0.
        * Saves the animation count to `localStorage` when the "saveButton" is clicked.
    * **Animation Control:**
        * The "startButton" toggles the `.animate` class, which starts or stops the CSS animation.
    * **Count Saving:**
        * The "saveButton" increments the animation count if the box is animating and saves it to `localStorage`.
        * Displays the animation count.

**How to Test:**

1.  Save the HTML, CSS, and JavaScript files in the same directory.
2.  Open `index.html` in a web browser.
3.  Click the "Start Animation" button to start the animation.
4.  Click the "Save Count" button while the animation is running to increment and save the count.
5.  Refresh the page to see that the count is preserved using `localStorage`.
6.  Use browser developer tools to inspect elements, animations, and `localStorage`.

Citations: [[1]](https://www.google.com/search?q=https://github.com/190ibrahim/K-H-Parking-App), [[2]](https://www.google.com/search?q=https://github.com/Alexoswin/internet_programing), [[3]](https://www.google.com/search?q=https://github.com/1av22/Ethnus-MERN-Assignment2)

Citations: [[1]](https://forum.squarespace.com/topic/258515-how-can-i-set-up-a-organically-shaped-header/)
