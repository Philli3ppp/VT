export default function NotFound() {
  return (
    <div className="page-shell flex min-h-screen items-center justify-center text-center">
      <div className="card border border-[var(--border)] p-8">
        <h1 className="text-3xl font-semibold">404</h1>
        <p className="mt-2 text-[var(--text-muted)]">
          Страница не найдена. Проверьте URL.
        </p>
      </div>
    </div>
  );
}
