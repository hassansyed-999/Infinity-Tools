const stats = [
  {
    value: "50+",
    label: "AI Tools",
  },
  {
    value: "10K+",
    label: "Builders",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
  {
    value: "24/7",
    label: "AI Assistance",
  },
];

export function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-3xl border border-gray-200 bg-gray-50 p-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold text-blue-600">
                {stat.value}
              </p>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}