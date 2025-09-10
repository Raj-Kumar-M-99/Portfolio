# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with smooth animations, dark/light theme support, and a comprehensive showcase of skills, projects, and professional experience.

## ✨ Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Sections**:
  - Hero section with animated gradient background
  - About section with personal information
  - Experience timeline with professional history
  - Projects showcase with detailed cards
  - Skills section with categorized technologies
  - Contact section with social links
- **Resume Download**: Built-in resume download functionality
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons, Custom Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── resume/                 # Resume files
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx   # Theme management
│   ├── data/
│   │   └── portfolioData.js   # Portfolio content
│   ├── icons/                 # Custom icon components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Personal Information
Update your personal information in `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline",
  bio: "Your bio",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

### Projects
Add your projects in the `projects` array in `portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    techStack: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project",
    demoLink: "https://yourproject.com",
  },
  // Add more projects...
];
```

### Experience
Update your work experience in the `experiences` array:

```javascript
export const experiences = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "2022 - Present",
    location: "City, Country",
    description: "Job description",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["React", "Node.js", "AWS"],
  },
  // Add more experiences...
];
```

### Resume
1. Place your resume PDF in `public/resume/`
2. Name it `Raj_Kumar_M_Resume.pdf` (or update the filename in `portfolioData.js`)
3. Update the `lastUpdated` date in `resumeInfo`

### Skills
Modify the skills in the `skills` object in `portfolioData.js`:

```javascript
export const skills = {
  "Frontend Development": [
    { name: "React", icon: "SiReact" },
    { name: "Vue.js", icon: "SiVuedotjs" },
    // Add more skills...
  ],
  // Add more categories...
};
```

### Custom Icons
Add custom icons in the `src/icons/` folder and import them in `Skills.jsx`:

```javascript
import CustomIcon from '../../icons/CustomIcon';

const iconMap = {
  SiCustom: CustomIcon,
  // Add more mappings...
};
```

## 🎨 Styling

The project uses Tailwind CSS with custom utilities:

- **Custom Colors**: Brand and accent color palettes
- **Glassmorphism**: Backdrop blur effects for modern look
- **Animations**: Custom keyframes and transitions
- **Responsive**: Mobile-first design approach

### Custom CSS Classes
- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.glass-card`: Glassmorphism card effect
- `.gradient-text`: Gradient text effect
- `.hover-lift`: Hover animation effect

## 🌙 Theme System

The website includes a complete dark/light theme system:

- **Theme Context**: React context for theme management
- **Local Storage**: Persists theme preference
- **System Preference**: Detects user's system theme
- **Smooth Transitions**: Animated theme switching

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind's responsive breakpoints
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Performance

- **Vite**: Fast build tool and dev server
- **Code Splitting**: Automatic code splitting
- **Tree Shaking**: Removes unused code
- **Optimized Images**: Compressed and optimized assets

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

- **Email**: rajkumar.mc1999@gmail.com
- **LinkedIn**: [Raj Kumar M](https://www.linkedin.com/in/raj-kumar-m/)
- **GitHub**: [raj-kumar-m](https://github.com/raj-kumar-m)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

---

⭐ Star this repository if you found it helpful!