async function simpleAdonisApiCall() {
  const res = await fetch("http://localhost:3333/");
  return res.json();
}

export default async function Home() {
  const data = await simpleAdonisApiCall();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="accent-white">{data.message}</h1>
    </main>
  );
}
