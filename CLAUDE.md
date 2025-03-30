# CoderDojo Hirakata Website Guidelines

## Build Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server

## Code Style
- **React Components**: Use functional components with named exports
- **Imports**: Group React/library imports first, followed by local imports
- **Naming**: 
  - Components: PascalCase (e.g., `EventBanner.js`)
  - Variables/functions: camelCase
- **CSS**: Use Tailwind CSS classes for styling
- **State Management**: Use React hooks (useState, useEffect) and SWR for data fetching

## Project Structure
- `/components`: Reusable UI components
- `/pages`: Next.js pages and API routes
- `/public`: Static assets (images, icons)
- `/styles`: Global styles and CSS modules

## API Development
- Use next-connect for API routes
- Implement proper error handling
- Use dayjs for date manipulation

## Libraries
- Next.js for framework
- Tailwind CSS for styling
- SWR for data fetching
- Headless UI for accessible components