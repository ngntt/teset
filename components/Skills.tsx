export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'];
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <span key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}