import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-white">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-bold">NovaKart</h2>

          <p className="mt-3 text-slate-400">
            Built with React, Node.js, Express & MongoDB
          </p>

          <p className="mt-6 text-sm text-slate-500">
            © 2026 NovaKart. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;