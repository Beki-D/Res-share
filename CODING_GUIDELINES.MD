# Project Coding Guidelines

As a team, let's establish a consistent naming and file structure for our project to maintain clarity and uniformity throughout the codebase. These guidelines will help improve collaboration, readability, and maintainability of our project.

## Spellings

- Please try to avoid any spelling errors. Use autocorrect and other tools to keep your code in check and error free.

## Component Naming

- Components should be named in PascalCase, starting with a capital letter. For example: `CardMenu.jsx`, `Footer.jsx`.

- Avoid using underscores (\_) or kebab-case (-) in component names.

- Use descriptive and meaningful names for components to convey their purpose clearly.

Example:

```jsx
// Correct

import CardMenu from './components/CardMenu';

import Footer from './components/Footer';

// Avoid

import card_menu from './components/CardMenu';

import FOOTER from './components/Footer';
```

## Quotation Usage

- Prefer using single quotes (' ') for strings and most things in code.

- Use double quotes (" ") only in special cases or when the string contains single quotes within it.

Example:

```jsx
// Correct (consistent double quotes)

const message = 'Hello, world!';

const specialText = 'He said, "Welcome!"';

const sentenceWithApostrophe = "I can't believe it!";

// Avoid

const text = 'Hello, world!';

const quote = "He said, 'Welcome!'";
```

## Link Paths and Routes

- Link paths and route names should always be in lowercase.

- Avoid using uppercase letters or special characters in link paths.

- Use meaningful names for route paths to represent the corresponding content.

Example:

```jsx

// Correct

<Link  to='/home'>Home</Link>

<Link  to='/about-us'>About Us</Link>



// Avoid

<Link  to='/HomePage'>Home</Link>

<Link  to='/about_us'>About Us</Link>
```

## Folder Structure

- Group related components, pages, and assets in separate folders.

- Use meaningful names for folders that reflect their contents.

Example:

```css
src/
  ├── components/
  │   ├── Card.jsx
  │   ├── Navbar.jsx
  │   └── Sidebar.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── AboutUs.jsx
  │   └── Services.jsx
  ├── assets/
  │   ├── logo.png
  │   └── background.jpg
  ├── utils/
  │   ├── api.js
  │   └── helpers.js
  ├── styles/
  │   ├── global.css
  │   └── button.css
  └── ...

```

## Constants

- Define constants, such as colors, URLs, or other configuration values, in separate files under the `utils` folder.
- Export these constants to use throughout the project.

Example:

```jsx
// utils/colors.js
export const PRIMARY_COLOR = '#007bff';
export const SECONDARY_COLOR = '#6c757d';
// ...
```

## Commenting and Documentation

- Add comments to explain complex logic or functionality in the code.
- Document functions and components using JSDoc and try to follow the appropriate documentation formats.

Example:

```jsx
/**
 * A custom button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {function} props.onClick - The click event handler.
 * @returns {JSX.Element} - The rendered button element.
 */
function CustomButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
```

## Example of Clean Code: Card Component

Below is an example of a simple and well-structured Card component:

```jsx
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
      </a>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {description}
      </p>
    </div>
  );
};

export default Card;
```

By following these guidelines consistently, we can ensure that our codebase remains organized, easily understandable, and scalable. Let's collaborate and adhere to these conventions to streamline our development process and improve code maintenance in the long run.

I'll try to add more guides and rules to this doc as we progress. Hit me up on telegram `@bk25119` or comment here if you have any questions or ideas for improvements.
