# Table of content
- [Table of content](#table-of-content)
- [BioGeneral](#biogeneral)
  - [Screenshot](#screenshot)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
  - [Future Improvements](#future-improvements)
  - [Contributing](#contributing)
  - [License](#license)
  - [Release Notes](#release-notes)
    - [\[1.0.0\] - 2024-09-05](#100---2024-09-05)
    - [\[1.1.0\] - 2024-09-10](#110---2024-09-10)
    - [\[1.1.1\] - 2024-09-11](#111---2024-09-11)
    - [\[1.1.3\] - 2024-09-13](#113---2024-09-13)
    - [\[2.0.0\] - 2024-09-17](#200---2024-09-17)
    - [Notes:](#notes)

# BioGeneral

**BioGeneral** is a web application designed to showcase biographies of famous individuals. It provides an interactive experience with biography cards on the home page, leading users to detailed pages about each celebrity.

## Screenshot
![screenshot of website](/screenshot.png)

## Features

- **Home Page**: Displays biography cards for various celebrities.
- **Celebrity Biographies**: Clicking on a biography card navigates to a dedicated page with detailed information about the selected celebrity.
- **Single Biography Page**: The previous version featured a biography page specifically for Taylor Swift.

## Project Structure

The project is organized as follows:

- **`public/`**: Contains all static assets including CSS, JavaScript, and images.
  - **`css/`**: Stylesheets for the application.
  - **`img/`**: Image assets, with folders named after each view for organization.
  - **`js/`**: JavaScript files for adding interactivity and functionality.
  - **`views/`**: Contains additional HTML pages for individual celebrity biographies.
    - **`[celebrity_name]/`**: Folder named after each view, containing images and other assets specific to that biography.
    - **`index.html`**: Containing the home page with biography cards.
  - **`index.js`**: The main entry point of the application.

## Getting Started

To run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/BioGeneral.git

2. **Navigate to the project directory:**
   ```bash
   cd BioGeneral
   
3. **Install the packages:**
   ```bash
   npm install

4. **Run application:**
   ```bash
   npm start
6. **Open the home page in your browser:**
   
   Nvigate to `http://localhost/3000` url in your browser

## Future Improvements
- Expand the collection of celebrity biographies.
- Enhance the design and user experience of the home page and biography pages.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Release Notes

### [1.0.0] - 2024-09-05
- Initial release featuring a biography page dedicated to Taylor Swift.

### [1.1.0] - 2024-09-10
- Introduced a Home page showcasing biography cards for various celebrities.
- Users can now navigate easily to individual biography pages from the Home page.

### [1.1.1] - 2024-09-11
- Refactored the layout to use relative units for the top header, improving responsiveness and consistency across different screen sizes.

### [1.1.3] - 2024-09-13
- Adjustment for nav and home page sizes.
- Apply animation for overflowing bio card titles.
- Refactoring: 
   - moving `home` page related css codes to `/assets/css/home.css` file.
   - document the `index.js` file in `/assets/js/` directory.
   - addition of `Arnold Schwarzenegger` page to show the effect of scrolling animation.
   - cutting redundant edges of move above btn.
   - choose of better taylor swift image.
   - fixing the bug of not applying `scroll-text` animation when window is resized to small width.
   - added `Table of content` and `Screenshot` section in README.md file.

### [2.0.0] - 2024-09-17
- Addition of back-end side with node js and express framework technologies.
- Configure the peges links and repositioning to adapt to the new directory structure.
- Package: use of `nodemon` as the project's start script runner.

### Notes:
- Replace `https://github.com/yourusername/BioGeneral.git` with the actual URL of your GitHub repository.
- Ensure that you have a `LICENSE` file if you mention licensing; otherwise, you can remove or modify that section.

Feel free to modify or expand this template to better fit the specifics of your project.
