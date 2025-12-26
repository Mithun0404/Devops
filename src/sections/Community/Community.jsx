export default function Community() {
  return (
    <section className="center" style={{ flexDirection: "column" }}>
      <h1 style={{ fontSize: "3rem" }}>THE OWNERS</h1>
      <p>Mustang is not owned. It is joined.</p>

      <div style={{ display: "flex", gap: 30, marginTop: 40 }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass" style={{ padding: 20 }}>
            <img src={`/assets/images/owner.webp`} width="200" />
          </div>
        ))}
      </div>
    </section>
  );
}
