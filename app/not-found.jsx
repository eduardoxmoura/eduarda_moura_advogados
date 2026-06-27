import Link from 'next/link';

export const metadata = { title: 'Página não encontrada | Eduarda Moura' };

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '64px 24px',
        fontFamily: "'Poppins', system-ui, sans-serif",
        color: '#2E3D38',
      }}
    >
      <p style={{ fontSize: 13, letterSpacing: '2px', color: '#1FA15A', fontWeight: 600 }}>
        ERRO 404
      </p>
      <h1 style={{ fontWeight: 300, fontSize: 40, margin: '12px 0 16px' }}>
        Página não encontrada
      </h1>
      <p style={{ color: '#66756F', fontWeight: 300, maxWidth: 420, marginBottom: 28 }}>
        O conteúdo que você procura pode ter sido movido ou não existe mais.
      </p>
      <Link
        href="/"
        style={{
          background: 'linear-gradient(120deg,#157A48,#23B765)',
          color: '#fff',
          borderRadius: 999,
          padding: '14px 30px',
          fontSize: 13,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '.6px',
          textDecoration: 'none',
        }}
      >
        Voltar ao início
      </Link>
    </main>
  );
}
