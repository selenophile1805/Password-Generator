# Password Generator

A React-based application that allows users to generate secure, customizable passwords. Users can control the password length and include numbers or symbols as desired. The app also features a convenient copy-to-clipboard functionality.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

---

## Features

- **Password Length Adjustment**: Users can set the password length using a range slider (6 to 100 characters).
- **Include Numbers**: Toggle to include numeric characters in the password.
- **Include Symbols**: Toggle to include special characters like `!@#$%^&*()`.
- **Copy to Clipboard**: Easily copy the generated password with a single button click.
- **Dynamic Updates**: The password updates automatically when options are changed.

---

## Technologies Used

- **React**: For building the user interface.
- **CSS (TailwindCSS)**: For responsive and clean styling.
- **JavaScript**: For password generation logic and state management.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/selenophile1805/Password-Generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd password-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The app will run locally at `http://localhost:3000`.

---

## Usage

1. Open the application in your browser.
2. Adjust the password length using the slider.
3. Toggle the options to include numbers and/or symbols.
4. View the generated password in the text box.
5. Click the "Copy" button to copy the password to your clipboard.

---

## File Structure
```
/
|-- src/
    |-- App.css             # Styling for the app
    |-- App.jsx              # Main React component
    |-- index.jsx            # Entry point for React
|-- package.json            # Project configuration and dependencies
```

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!

