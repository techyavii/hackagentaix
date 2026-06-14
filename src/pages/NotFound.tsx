import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-12 shadow-card text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-earth-green mb-4">Page not found</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
