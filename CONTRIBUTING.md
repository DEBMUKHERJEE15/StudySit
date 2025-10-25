# Contributing to StudySit 🤝

Thank you for your interest in contributing to StudySit! We welcome contributions from developers of all skill levels. This guide will help you get started.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Issue Guidelines](#issue-guidelines)

## 🤗 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful** and inclusive in all interactions
- **Be constructive** in feedback and discussions
- **Be patient** with newcomers and different skill levels
- **Be collaborative** and help others learn and grow

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Git and GitHub account
- Text editor (VS Code recommended)
- Modern web browser

### Quick Start
1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your feature
4. **Make your changes**
5. **Test thoroughly**
6. **Submit a pull request**

## 💻 Development Setup

### 1. Fork and Clone
```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/StudySit.git
cd StudySit

# Add upstream remote
git remote add upstream https://github.com/DEBMUKHERJEE15/StudySit.git
```

### 2. Set Up Development Environment
```bash
# No build process required - simple HTML/CSS/JS
# Use a local server for development (recommended)

# Option 1: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 2: Python HTTP server
python -m http.server 8000

# Option 3: Node.js http-server
npx http-server
```

### 3. Keep Your Fork Updated
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

## 🛠️ How to Contribute

### Types of Contributions

#### 🐛 Bug Fixes
- Check existing issues first
- Create a clear bug report if none exists
- Fix the bug with minimal code changes
- Add tests if applicable

#### ✨ New Features
- Discuss larger features in issues first
- Keep features focused and well-scoped
- Follow existing patterns and conventions
- Update documentation

#### 📚 Documentation
- Fix typos and improve clarity
- Add examples and use cases
- Translate documentation
- Improve code comments

#### 🎨 Design Improvements
- Enhance user experience
- Improve visual design
- Optimize for accessibility
- Ensure responsive behavior

### Areas We Need Help With

#### High Priority
- [ ] Backend integration (Node.js/Express)
- [ ] Payment gateway integration
- [ ] User authentication system
- [ ] Admin dashboard
- [ ] Mobile app (React Native)

#### Medium Priority
- [ ] Advanced search and filters
- [ ] Review and rating system
- [ ] Real-time notifications
- [ ] Multi-language support
- [ ] Performance optimizations

#### Low Priority
- [ ] Additional animations
- [ ] Theme customization
- [ ] Social media integration
- [ ] Blog functionality
- [ ] SEO improvements

## 🔄 Pull Request Process

### 1. Create a Feature Branch
```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 2. Branch Naming Convention
- `feature/feature-name` - for new features
- `fix/bug-description` - for bug fixes
- `docs/update-description` - for documentation
- `style/design-improvement` - for UI/UX changes
- `refactor/code-improvement` - for code refactoring

### 3. Make Your Changes
```bash
# Make your changes
# Test thoroughly
# Commit with descriptive messages
git add .
git commit -m "Add interactive booking modal with validation"
```

### 4. Commit Message Guidelines
```bash
# Format: <type>: <description>

# Types:
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons, etc.
refactor: code refactoring
test: adding tests
chore: maintenance tasks

# Examples:
feat: add booking modal with form validation
fix: resolve responsive layout issue on mobile
docs: update installation instructions
style: improve button hover animations
```

### 5. Push and Create PR
```bash
# Push to your fork
git push origin feature/your-feature-name

# Create pull request on GitHub
# Use the provided PR template
# Link related issues
```

### 6. PR Requirements Checklist
- [ ] **Clear title** and description
- [ ] **Testing completed** across browsers
- [ ] **Responsive design** verified
- [ ] **Code follows** project standards
- [ ] **Documentation** updated if needed
- [ ] **No breaking changes** (or clearly marked)
- [ ] **Accessibility** considerations addressed

## 📝 Coding Standards

### HTML Guidelines
```html
<!-- Use semantic HTML5 elements -->
<section class="hero-section">
  <header>
    <h1>Page Title</h1>
  </header>
</section>

<!-- Include alt text for images -->
<img src="image.jpg" alt="Descriptive text" />

<!-- Use proper heading hierarchy -->
<h1>Main Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
```

### CSS Guidelines
```css
/* Use CSS custom properties for consistency */
:root {
  --primary-color: #10b981;
  --spacing-md: 1rem;
}

/* Use BEM-like naming convention */
.card {}
.card__header {}
.card__body {}
.card--featured {}

/* Mobile-first responsive design */
.element {
  /* Mobile styles first */
}

@media (min-width: 768px) {
  .element {
    /* Tablet and up */
  }
}
```

### JavaScript Guidelines
```javascript
// Use const/let instead of var
const apiUrl = 'https://api.example.com';
let userData = null;

// Use descriptive function names
function validateBookingForm(formData) {
  // Implementation
}

// Add error handling
try {
  const result = await apiCall();
} catch (error) {
  showNotification('Error occurred', 'error');
}

// Use modern ES6+ features
const { name, email } = formData;
const spaces = [...existingSpaces, newSpace];
```

### File Organization
```
StudySit/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Core functionality
├── components/             # Reusable components
├── assets/                 # Images and media
└── docs/                   # Documentation
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] **Cross-browser** testing (Chrome, Firefox, Safari, Edge)
- [ ] **Responsive** design on different screen sizes
- [ ] **Form validation** and error handling
- [ ] **Accessibility** with keyboard navigation
- [ ] **Performance** on slower connections

### Browser Testing
```bash
# Test on these browsers and versions:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
```

### Device Testing
```bash
# Test on these viewport sizes:
- Desktop: 1920px, 1366px, 1024px
- Tablet: 768px, 1024px
- Mobile: 375px, 414px, 360px
```

### Accessibility Testing
- Use keyboard-only navigation
- Test with screen readers
- Verify color contrast ratios
- Check focus management
- Validate with WAVE or axe tools

## 🐛 Issue Guidelines

### Creating Issues

#### Bug Reports
```markdown
**Bug Description**
Brief description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen

**Actual Behavior**
What actually happened

**Environment**
- Browser: [e.g. Chrome 96]
- Device: [e.g. iPhone 12]
- OS: [e.g. iOS 15.1]

**Screenshots**
If applicable, add screenshots
```

#### Feature Requests
```markdown
**Feature Description**
Clear description of the requested feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other context, mockups, or examples
```

### Issue Labels
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation related
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `priority-high` - High priority issue
- `priority-low` - Low priority issue

## 🏆 Recognition

### Contributors
All contributors are recognized in:
- README.md contributors section
- Release notes
- Special mentions for significant contributions

### Types of Recognition
- **First-time contributors** get special welcome
- **Regular contributors** get maintainer status
- **Significant contributions** get featured in releases

## 📞 Getting Help

### Where to Ask Questions
- **GitHub Issues** - for bugs and feature requests
- **GitHub Discussions** - for general questions
- **Discord** - for real-time chat (coming soon)
- **Email** - contact@studysit.com for sensitive issues

### Mentorship Program
- New contributors can request mentorship
- Experienced contributors help guide newcomers
- Regular check-ins and code review support

## 📚 Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [Web.dev](https://web.dev/) - Modern web development practices
- [A11y Project](https://www.a11yproject.com/) - Accessibility guidelines
- [CSS Tricks](https://css-tricks.com/) - CSS tips and tricks

### Tools We Recommend
- **VS Code** - Code editor with great extensions
- **Chrome DevTools** - Debugging and testing
- **Figma** - Design collaboration
- **Lighthouse** - Performance and accessibility auditing

## ⚖️ License

By contributing to StudySit, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

## 🎉 Thank You!

Thank you for contributing to StudySit! Your contributions help make coworking spaces more accessible and user-friendly for students and professionals across India.

Every contribution, no matter how small, makes a difference. We appreciate your time and effort in helping improve this project.

Happy coding! 🚀

---

*Questions? Feel free to reach out to the maintainers or create an issue for clarification.*