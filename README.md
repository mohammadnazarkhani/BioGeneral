# BioGeneral

**BioGeneral** is a web application designed to showcase biographies of famous individuals. It provides an interactive experience with biography cards on the home page, leading users to detailed pages about each celebrity.

## Features

- **Home Page**: Displays biography cards for various celebrities.
- **Celebrity Biographies**: Clicking on a biography card navigates to a dedicated page with detailed information about the selected celebrity.
- **Single Biography Page**: The previous version featured a biography page specifically for Taylor Swift.

## Project Structure

The project is organized as follows:

- **`index.html`**: The main entry point of the application, containing the home page with biography cards.
- **`assets/`**: Contains all static assets including CSS, JavaScript, and images.
  - **`css/`**: Stylesheets for the application.
  - **`img/`**: Image assets, with folders named after each view for organization.
  - **`js/`**: JavaScript files for adding interactivity and functionality.
  - **`views/`**: Contains additional HTML pages for individual celebrity biographies.
    - **`[celebrity_name]/`**: Folder named after each view, containing images and other assets specific to that biography.

## Getting Started

To run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/BioGeneral.git

2. **Navigate to the project directory:**
   ```bash
   cd BioGeneral
3. **Open `index.html` in your web browser.**

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

### Notes:
- Replace `https://github.com/yourusername/BioGeneral.git` with the actual URL of your GitHub repository.
- Ensure that you have a `LICENSE` file if you mention licensing; otherwise, you can remove or modify that section.

Feel free to modify or expand this template to better fit the specifics of your project.
