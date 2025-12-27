import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>
        {error?.statusText || error?.message || 'Page not found'}
      </p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default ErrorPage;
