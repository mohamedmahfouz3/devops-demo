export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>devops-demo</h1>
      <p>Deployed through CI/CD.</p>
      <p>Version: {process.env.APP_VERSION ?? "local"}</p>
    </main>
  );
}
