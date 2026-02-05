import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient-primary mb-4">404</h1>
        <p className="text-muted-foreground text-xl mb-8">Página não encontrada</p>
        <Link to="/" className="btn-primary-glow inline-block">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
