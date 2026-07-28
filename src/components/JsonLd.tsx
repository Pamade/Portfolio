export default function JsonLd({ data }: { data: object }) {
  const safeJson = JSON.stringify(data).replace(/<\//g, "<\\/");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
