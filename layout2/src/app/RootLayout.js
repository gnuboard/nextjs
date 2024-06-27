export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <div>Header</div>
        <header>
          {/* Header content */}
        </header>
          <div>{children}</div>
        <footer>
          {/* Footer content */}
        </footer>
        </div>
      </body>
    </html>
  );
}