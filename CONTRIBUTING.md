# Contributing to Status Kit

Thank you for your interest in contributing to Status Kit! This document provides guidelines and instructions for contributing to the project.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm or yarn
- Git

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/status-kit.git
   ```
3. Navigate to the project directory:
   ```bash
   cd status-kit
   ```
4. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Make your changes and test them locally

4. Run the linter and formatter:
   ```bash
   npm run lint
   npm run format
   # or
   yarn lint
   yarn format
   ```

## Code Style

This project uses:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Tailwind CSS for styling

Please ensure your code follows these standards:

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Write meaningful commit messages
- Keep components small and focused
- Use proper TypeScript types and interfaces

## Git Hooks

The project uses Husky for Git hooks. These hooks will automatically:

- Run ESLint and Prettier on staged files before commits
- Ensure code quality and consistency

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if you're changing functionality
3. Ensure all tests pass and there are no linting errors
4. Submit a pull request with a clear description of the changes

## Commit Message Guidelines

Please follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Questions and Support

If you have any questions or need help, please:

1. Check the existing issues
2. Create a new issue if your question hasn't been answered

## License

By contributing to Status Kit, you agree that your contributions will be licensed under the project's license.
