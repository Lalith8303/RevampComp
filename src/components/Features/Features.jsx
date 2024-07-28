// components/Spl/Features.js
// import React from 'react';

const features = [
  {
    title: "Interactive 3D",
    description: "Create interactive 3D models directly in the browser.",
    icon: "🖥️"
  },
  {
    title: "Easy to Use",
    description: "User-friendly interface for designers and developers.",
    icon: "👍"
  },
  {
    title: "Real-time Collaboration",
    description: "Work with your team in real-time on the same project.",
    icon: "🤝"
  },
  {
    title: "High Performance",
    description: "Optimized for high performance and smooth interactions.",
    icon: "⚡"
  },
  {
    title: "Cross-Platform",
    description: "Works on all major operating systems and devices.",
    icon: "🌐"
  },
  {
    title: "Custom Animations",
    description: "Create custom animations to enhance your models.",
    icon: "🎨"
  },
  {
    title: "Extensive Library",
    description: "Access a library of pre-built models and assets.",
    icon: "📚"
  },
  {
    title: "Secure",
    description: "Ensure your projects are safe with top-notch security.",
    icon: "🔒"
  },
  {
    title: "Export Options",
    description: "Export your work in various formats for different uses.",
    icon: "📁"
  },
  {
    title: "Community Support",
    description: "Join a community of users and get help when you need it.",
    icon: "💬"
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
