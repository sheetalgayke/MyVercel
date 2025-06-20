import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  main: {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginBottom: '20px',
    opacity: 0.8,
  },
  code: {
    backgroundColor: '#111',
    padding: '2px 6px',
    borderRadius: '6px',
  },
  vercel: {
    fontSize: '14px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '2rem 0',
  },
  js: {
    color: '#ccc',
  },
  grid: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#111',
    padding: '1.5rem',
    borderRadius: '10px',
    border: '1px solid #222',
    textDecoration: 'none',
    color: '#fff',
    transition: 'transform 0.2s ease',
  },
};

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.topBar}>
        <span>
          Get started by editing&nbsp;
          <code style={styles.code}>app/page.tsx</code>
        </span>
        <span style={styles.vercel}>
          By <b>▲ Vercel</b>
        </span>
      </div>

      <h1 style={styles.title}>
        NEXT.<span style={styles.js}>JS</span>
      </h1>

      <div style={styles.grid}>
        <a href="https://nextjs.org/docs" style={styles.card}>
          <h3>Docs →</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" style={styles.card}>
          <h3>Learn →</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://nextjs.org/templates" style={styles.card}>
          <h3>Templates →</h3>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a href="https://vercel.com/new" style={styles.card}>
          <h3>Deploy →</h3>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
