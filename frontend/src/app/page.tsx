// Aşama 0: frontend -> backend bağlantısını gösteren durum sayfası.
export const dynamic = "force-dynamic";

async function backendStatus(): Promise<string> {
  const base = process.env.BACKEND_INTERNAL_URL ?? "http://localhost:8080";
  try {
    const res = await fetch(`${base}/health`, { cache: "no-store", signal: AbortSignal.timeout(3000) });
    return res.ok ? "OK" : `Hata (${res.status})`;
  } catch {
    return "Ulaşılamıyor";
  }
}

export default async function Home() {
  const backend = await backendStatus();
  return (
    <main>
      <h1>Larcon-Sim</h1>
      <p>Frontend: OK</p>
      <p>Backend: {backend}</p>
    </main>
  );
}
