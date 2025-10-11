export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="pt-15 lg:pt-50">
      <div className="px-4 py-6">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Ready to take <span className="text-ring">your</span> digital presence
          to the next level?
        </h2>
        <p className="text-center">
          Contact us today to learn more about our services and how we can help
          you achieve your goals.
        </p>
        {children}
        <p className="text-muted-foreground text-center text-xs">
          Copyright &copy;{new Date().getFullYear()} Eduardo Fortes.
          <br /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
