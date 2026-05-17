export default function PersonalSite() {
  return (
    <div className="min-h-screen font-mono text-sm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl text-center mb-8">
          welcome to my corner of the internet
        </h1>

        <div className="border border-dashed border-zinc-400 rounded p-4 mb-6">
          <h2 className="font-bold mb-2">about me</h2>
          <p>the non-professional version :)</p>
        </div>

        <div className="border border-dashed border-zinc-400 rounded p-4 mb-6">
          <h2 className="font-bold mb-2">blog</h2>
          <p>posts coming soon...</p>
        </div>
      </div>
    </div>
  );
}
