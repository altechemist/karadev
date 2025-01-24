# Personal Portfolio

This is a personal portfolio website built with Next.js and styled using Tailwind CSS. It features a responsive design with various sections like Services, Work, Experience, and a Contact form.

## Tools Used

- **Next.js** - React framework for building the app with features like server-side rendering (SSR) and static site generation (SSG).
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **Axios** - For handling HTTP requests to send messages via an email API.
- **Lucide Icons** - For icons (used here for the "Send" icon in the Contact section).

## Features

- **Responsive Design**: Fully responsive across devices, utilizing Tailwind's grid system and utility classes.
- **Interactive Contact Form**: A contact form with modal functionality for users to submit their details (name, email, and message).
- **Email Integration**: Sends the form submission data to a specified email endpoint using Axios.
- **Dynamic Content**: Sections for services, work, and experience are dynamically rendered.
- **Animations & Interactivity**: Utilizes Tailwind CSS for smooth animations and styling.

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/altechemist/karadev.git
   ```

2. Install dependencies:
   ```bash
   cd portfolio
   npm install
   ```

3. Create an `.env.local` file in the root directory and set up the following environment variables:
   - `NEXT_PUBLIC_EMAIL_ENDPOINT`: The API endpoint for sending emails (configured to an email service).
   - `NEXT_PUBLIC_EMAIL`: Your email address to send messages to.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## File Structure

- `pages/`
  - `index.tsx`: The main page that renders the portfolio.
- `components/`
  - `Container.tsx`: A reusable layout container for sections.
  - `SocialLinks.tsx`: A component for social media links.
  - `Button.tsx`: A button component used throughout the app.
  - `Input.tsx`: A reusable input component for forms.
  - `Statistics.tsx`: Displays statistics or metrics (optional).
  - `Review.tsx`, `ReviewXL.tsx`: Components for displaying client reviews.
  - `ServicesPage.tsx`, `WorkPage.tsx`, `ExperiencePage.tsx`: Components for rendering the respective sections.
- `public/`: Contains static assets like images.
- `styles/`: Contains Tailwind configuration and any custom styles.

## How the App Works

### Hero Section

- Displays a brief introduction about the developer with an interactive call-to-action (`Let's Chat`) that opens a modal when clicked.
- The modal collects the user's name, email, and message.

### Modal Form

- When the user clicks the "Let's Chat" button, a modal appears to collect their details.
- The form has three fields: `name`, `email`, and `message`. The form uses validation to ensure all fields are filled and that the email format is correct.
- Upon successful form submission, the details are sent to an API (configured in `.env.local`) via an Axios request.

### Other Sections

- **Services Page**: Displays the services the developer offers.
- **Work Page**: Showcases the developer's projects and previous work.
- **Experience Page**: Displays work experience and skillset.

## Contributing

Feel free to fork and submit pull requests to improve this portfolio website.

## License

This project is open-source and available under the [MIT License](LICENSE).
