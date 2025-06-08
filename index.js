import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#000', color: '#ccc', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <motion.h1 
          style={{ fontSize: '3rem', color: '#1de9b6', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hamilton Lockhart
        </motion.h1>
        <p style={{ color: '#aaa', fontSize: '1.25rem', maxWidth: '600px', margin: 'auto' }}>
          Interior Design • Photography • Creative Consulting
        </p>
      </section>

      <section style={{ display: 'grid', gap: '2rem', padding: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {[
          {
            title: 'Interior Design',
            text: 'We transform spaces with bold, modern aesthetics, specializing in dark-themed interiors with a focus on mood, contrast, and flow.'
          },
          {
            title: 'Photography',
            text: 'Our photography captures the emotion and elegance of interior environments—perfect for portfolios, magazines, and branding.'
          },
          {
            title: 'Creative Consulting',
            text: 'We offer strategic design insight and creative direction to help your projects stand out and tell a compelling visual story.'
          }
        ].map((item, i) => (
          <div key={i} style={{ backgroundColor: '#111', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #333' }}>
            <h2 style={{ color: '#1de9b6', marginBottom: '0.5rem', fontSize: '1.5rem' }}>{item.title}</h2>
            <p style={{ color: '#aaa' }}>{item.text}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <button style={{
          backgroundColor: '#1de9b6',
          color: '#000',
          fontSize: '1rem',
          padding: '0.75rem 2rem',
          borderRadius: '1.5rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Contact Us
        </button>
      </section>
    </main>
  );
}
