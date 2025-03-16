import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/login', 'routes/auth/login.tsx'),
  route('/care-recipients', 'routes/care-recipient/list.tsx'),
  route('/care-recipients/overview/:id', 'routes/care-recipient/overview.tsx'),
] satisfies RouteConfig;
