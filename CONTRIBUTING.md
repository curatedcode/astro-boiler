# Contributing to [Project Name]

Thank you for your interest in contributing to [Project Name]! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contribution Workflow](#contribution-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Communication](#communication)

## Code of Conduct

This project adheres to a code of conduct adapted from the [Contributor Covenant](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (>=22.16.0)
- **Git** (>=2.49)
- **Pnpm** (>=10.11.1)

### Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/curatedcode/astro-boiler.git
   cd astro-boiler
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Run the development server**:
	```bash
	pnpm dev
	```

The application will be available at `http://localhost:3000`.

## Contribution Workflow

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test additions/updates

Examples:
```bash
feature/user-authentication
bugfix/memory-leak-fix
docs/api-documentation-update
```

### Making Changes

1. **Create a new branch** from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes**:
   ```bash
   pnpm test
   ```

4. **Commit your changes** using conventional commit format:
   ```bash
   git add .
   git commit -m "feat: add user authentication"
   ```

### Commit Naming Conventions
- New feature `feat: add user authentication`
- Bug fix `fix: resolve memory leak in data processing`
- Documentation only changes `docs: update API documentation`
- Code change that neither fixes a bug nor adds a feature `refactor: convert variables to snake_case`
- Changes to the build process or auxiliary tools `chore: update vite config`
- Reverts a previous commit `revert: remove experimental feature`

## Coding Standards

### General Guidelines

- Write clean, readable, and maintainable code
- Follow the existing code style and patterns
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable and function names

### JavaScript/TypeScript Style

We use **ESLint** and **Prettier** for code formatting:

```bash
# Check linting
pnpm lint:check

# Fix linting issues
pnpm lint
```

## Testing Guidelines

### Test Requirements

- **Unit tests** for most functions
- **E2E tests** for user flows

### Running Tests

```bash
pnpm test
```

## Pull Request Process

### Before Submitting

1. **Ensure your branch is up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Update documentation** if needed

3. **Add/update tests** if needed

### Pull Request Template

When creating a pull request, include:

#### Description
- Brief summary of changes
- Motivation and context
- Link to related issues

#### Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

#### Checklist
- [ ] Tests pass
- [ ] Documentation updated

### Review Process

1. **Automated checks** must pass (CI/CD pipeline)
2. **Code review** by at least one maintainer
3. **Address feedback** and make necessary changes
4. **Squash commits** if requested
5. **Merge** once approved

## Issue Reporting

### Bug Reports

Use the bug report template and include:

- **Environment details** (OS, browser, Node.js version)
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Error messages** or screenshots
- **Minimal reproduction case** if possible

### Feature Requests

Include:

- **Problem statement** - what problem does this solve?
- **Proposed solution** - describe your ideal solution
- **Alternatives considered** - other approaches you've thought about
- **Additional context** - mockups, examples, etc.

### Security Issues

**Do not** create public issues for security vulnerabilities. Instead:

1. Email me@zackaryf.com
2. Include detailed description
3. Allow reasonable time for a response

## Communication

### Channels

- **GitHub Issues** - Bug reports, feature requests
- **GitHub Discussions** - Questions, ideas, general discussion
- **Email** - Security issues, private matters

### Guidelines

- **Search existing issues** before creating new ones
- **Use clear, descriptive titles**
- **Be respectful and constructive**
- **Provide context** and relevant information
- **Follow up** on your issues and PRs

## Release Process

Releases follow semantic versioning ([SemVer](https://semver.org/)):

- **MAJOR** incompatible changes
- **MINOR** added functionality (backwards-compatible)
- **PATCH** bug fixes (backwards-compatible)

## Recognition

Contributors are recognized in:

- **CONTRIBUTORS.md** file
- **Release notes** for significant contributions
- **GitHub contributors** graph
- **Special mentions** in project announcements

Thank you for contributing to Astro-Boiler! 🎉

---

For questions or clarifications, please:
- Check existing [GitHub Issues](https://github.com/curatedcode/astro-boiler/issues)
- Start a [GitHub Discussion](https://github.com/curatedcode/astro-boiler/discussions)
- Contact maintainers directly if needed