export default function PageBody({ html, ld = [] }) {
  return (
    <>
      {ld.map((j, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: j }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
