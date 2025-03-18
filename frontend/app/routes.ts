import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/login', 'routes/auth/login.tsx'),
  route('/care-recipient', 'routes/care-recipient/list.tsx'),
  route('/care-recipient/overview/:id', 'routes/care-recipient/overview.tsx'),
] satisfies RouteConfig;
