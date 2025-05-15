export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((n) => (
          <div key={n} className="p-4 border rounded-lg shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Project {n}</h4>
            <p>A short description of the project. Highlight the technology used and what problem it solves.</p>
          </div>
        ))}
      </div>
    </section>
  );
}