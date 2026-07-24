import Container from "../ui/Container";

function Header() {
  return (
    <header className="bg-slate-900 text-white text-sm">
      <Container className="flex h-10 items-center justify-between">
        <p>🚚 Free Shipping on orders above ₹999</p>

        <div className="flex items-center gap-6">
          <span>📞 +91 98765 43210</span>
          <span>✉ support@novakart.com</span>
        </div>
      </Container>
    </header>
  );
}

export default Header;