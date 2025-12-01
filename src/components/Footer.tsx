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
        </div>
      </div>
    </footer>
  );
};