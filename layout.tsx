import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Scripts />

      {/* ────────────────────────────────────────────────
          Your white sticky nav bar inserted here
      ──────────────────────────────────────────────── */}
      <nav
        style={{
          background: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <ul
            style={{
              display: 'flex',
              justifyContent: 'center',
              listStyle: 'none',
              padding: '18px 0',
              margin: 0,
            }}
          >
            <li style={{ margin: '0 28px' }}>
              <a
                href="https://finntranter.com"
                style={{
                  color: '#1f2a2e',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                }}
              >
                Home
              </a>
            </li>
            <li style={{ margin: '0 28px' }}>
              <a
                href="https://finntranter.com/cv.html"
                style={{
                  color: '#1f2a2e',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                }}
              >
                Resume
              </a>
            </li>
            <li style={{ margin: '0 28px' }}>
              <a
                href="/blog"  // links to the blog subpath root
                style={{
                  color: '#1f2a2e',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                }}
              >
                Blog
              </a>
            </li>
            <li style={{ margin: '0 28px' }}>
              <a
                href="https://www.instagram.com/finntranter/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1f2a2e',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                }}
              >
                Instagram
              </a>
            </li>
            <li style={{ margin: '0 28px' }}>
              <a
                href="https://www.facebook.com/p/Finn-Tranter-100013733239333/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1f2a2e',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                }}
              >
                Facebook
              </a>
            </li>
            <li style={{ margin: '0 28px' }}>
              <a
                href="https://www.linkedin.com/in/finn-tranter-b75877203/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1f2a2e',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                }}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <main>{children}</main>
      </div>

      <Analytics />
      <Integrations />
    </>
  );
};