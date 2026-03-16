import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center text-white/70">
          <p className="font-display text-xl text-white mb-2">Nowtech Solutions</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Nowtech Solutions. Todos os direitos reservados.
          </p>
          <p className="text-sm mt-2">
            Transformando negócios através da tecnologia
          </p>
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              to="/analytics"
              className="inline-flex items-center gap-2 text-white/40 hover:text-orange transition-colors text-xs"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Análise de Acessos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};