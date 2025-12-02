# Git Hooks Configuration

This project uses Husky and commitlint to enforce code quality and commit message standards.

## Setup

- **Husky**: Git hooks management
- **Commitlint**: Enforces conventional commit format
- **Lint-staged**: Runs linting and formatting on staged files
- **Prettier**: Code formatting

## Commit Message Format

Follow the conventional commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

## Pre-commit Hooks

The following checks run automatically before each commit:
1. ESLint with auto-fix for JS/TS files
2. Prettier formatting for all supported files
3. Type checking for TypeScript files

## Testing the Setup

To verify commitlint is working:
```bash
echo "feat: add new feature" | pnpm exec commitlint
```