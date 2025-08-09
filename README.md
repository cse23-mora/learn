# CSE Learning Hub

A comprehensive learning platform for Computer Science and Engineering students, built with Astro and featuring organized course materials, notes, and resources.

## 📚 About

This learning hub contains educational materials for CSE students, organized by semester and subject. Currently includes content for:

### 2nd Semester
- **Communication Skills** - Grammar, formal communication, writing techniques
- **Computer Organization** - Digital design, logic circuits, memory organization, sequential logic
- **Data Structures & Algorithms** - Sorting algorithms, graphs, hash tables, competitive programming
- **Methods of Mathematics** - Numerical methods, interpolation, integration, differential equations
- **Program Construction** - Design patterns, OOP, memory management, multi-threading
- **Theory of Electricity** - Fourier transforms, Laplace transformations, transformers, mutual inductance

### 3rd Semester
- Additional subjects (structure in place for future content)

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cse23-mora/learn.git
cd learn

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 🛠️ Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 📁 Project Structure

```
learn/
├── public/          # Static assets (favicons, images)
├── src/
│   ├── content/     # Course materials and documentation
│   │   └── docs/    # Organized by semester/subject
│   ├── layouts/     # Astro layout components
│   ├── pages/       # Site pages and API routes
│   └── styles/      # Custom CSS
├── astro.config.mjs # Astro configuration
└── package.json     # Project dependencies
```

## ✨ Features

- **Organized Content**: Materials structured by semester and subject
- **Mathematical Support**: LaTeX/MathJax rendering for equations and formulas
- **Image Integration**: Support for diagrams, charts, and visual aids
- **API Endpoints**: JSON APIs for dynamic content access
- **Responsive Design**: Mobile-friendly interface
- **Search & Navigation**: Easy content discovery

## 📖 Content Structure

Content is organized in `src/content/docs/` following this pattern:
- `{semester}/` (e.g., `2nd-semester/`, `3rd-semester/`)
  - `{subject}/` (e.g., `computer-organization/`, `data-structures-algorithms/`)
    - `*.md` files with course materials
    - Asset folders for images and diagrams

## 🤝 Contributing

We welcome contributions! Please follow community guidelines when contributing.

### Adding Content

1. Navigate to the appropriate semester/subject directory
2. Create or edit `.md` files with your content
3. Use frontmatter for page metadata:
   ```yaml
   ---
   title: Your Page Title
   description: Optional description
   ---
   ```
4. Place images in subject-specific asset folders

### Technical Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source. Please ensure all contributed content is properly licensed and attributed.

## 🔧 Built With

- [Astro](https://astro.build/) - Static site generator
- [MathJax](https://www.mathjax.org/) - Mathematical notation rendering
- [Remark](https://remark.js.org/) - Markdown processing
- [Sharp](https://sharp.pixelplumbing.com/) - Image optimization

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Contact the maintainers
- Join our community discussions

---

Happy Learning! 🎓
