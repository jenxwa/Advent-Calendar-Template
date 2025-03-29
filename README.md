# 🎄 Advent Calendar Web App

This is a simple interactive Advent Calendar web app that allows users to open doors and reveal festive messages and images each day leading up to Christmas.

## 🌟 Features

- 24 interactive advent doors with random ordering.
- Daily unlock mechanism (doors unlock sequentially, based on the date).
- Test mode to open all doors regardless of date.
- Festive modal pop-up displaying messages and images.
- Animated falling snowflakes for a cozy holiday feel.

## 📜 Usage

### Running the Calendar

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/advent-calendar.git
   ```
2. Open `index.html` in your web browser.

### Test Mode

If you want to open all doors regardless of the date, set `testmode` to `true` in the JavaScript file:

```javascript
const testmode = true; // Set to false when not testing
```

## 📁 File Structure

- `index.html` – Main structure of the advent calendar.
- `styles.css` – Styling for the advent calendar and effects.
- `script.js` – JavaScript logic for door opening, modal handling, and snowflake animation.
- `images/` – Folder containing door images.
- `images_inside/` – Folder containing images revealed behind each door.

## w

## 🎨 Customization

You can customize:

- **Messages & Images:** Modify `doorData` in `script.js` to change the messages and images.
- **Door Order:** Change `doorOrder` array to reorder how the doors appear.
- **Styling:** Modify `styles.css` to tweak colors, animations, or fonts.

## 🚀 Future Improvements

- Add sound effects for door clicks and snowfall.
- Make doors permanently stay open once unlocked.
- Add more themes beyond Christmas (New Year, Halloween, etc.).

## 📜 License

This project is open-source under the MIT License.

## 🎁 Happy Holidays & Enjoy! 🎅🎄
