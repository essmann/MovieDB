import Header from "../components/Header";

import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiDotnet,
  SiJsonwebtokens,
  SiReactrouter,
} from "react-icons/si";

function HomePage() {
  const techStack = [
    {
      name: "React",
      description: "Frontend library for building UI",
      icon: <SiReact className="text-blue-400 w-5 h-5" />,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: <SiTailwindcss className="text-teal-400 w-5 h-5" />,
    },
    {
      name: "Vite",
      description: "Modern build tool for fast dev experience",
      icon: <SiVite className="text-purple-400 w-5 h-5" />,
    },
    {
      name: "ASP.NET Core",
      description: "Backend API service with C#",
      icon: <SiDotnet className="text-indigo-400 w-5 h-5" />,
    },
    {
      name: "JWT Auth",
      description: "Token-based secure authentication",
      icon: <SiJsonwebtokens className="text-orange-400 w-5 h-5" />,
    },
    {
      name: "React Router",
      description: "SPA navigation and routing",
      icon: <SiReactrouter className="text-pink-400 w-5 h-5" />,
    },
    {
      name: "PostgreSQL",
      description: "Robust relational database",
      icon: ""}
  ];

  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-80px)] bg-[#121212] text-white flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-5xl text-center">
          <h1 className="text-3xl font-semibold mb-3 tracking-wide text-yellow-400">
            IMDb Clone — Technology Stack
          </h1>
          <p className="text-gray-400 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Built for learning purposes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 bg-[#1e1e1e] rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">{tech.icon}</div>
                <div className="text-left">
                  <h2 className="text-lg font-medium text-yellow-400">
                    {tech.name}
                  </h2>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-xs text-gray-500">
            This project is for educational/demo purposes only. Not affiliated
            with IMDb.
          </p>
        </div>
      </main>
       
    </>
  );
}

export default HomePage;
