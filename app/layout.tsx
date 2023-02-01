export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const header = (
        <header>
            <div>
                <h1>Sik's Blog</h1>
                <p>Welcome to my blog</p>
            </div>
        </header>
    )

    const footer = (
        <footer>
            <div>
                <br />
                <h3>Developed by sik</h3>
            </div>
        </footer>
    )

  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
