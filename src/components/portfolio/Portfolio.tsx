
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "The Farmer Was Replaced",
      description: "A Python game automation simulating farming tasks with intelligent decision-making algorithms and resource management.",
      technologies: ["Python", "Game Logic", "Automation", "Algorithms"],
      category: "Python Development",
      color: "from-green-400 to-emerald-400",
      githubUrl: "https://github.com/sonamchokss/the-farmer-was-replaced",
      demoUrl: "#"
    },
    {
      title: "Rail Fence Cipher Tool",
      description: "A classical encryption and decryption tool implementing the rail fence cipher algorithm for secure text encoding.",
      technologies: ["Python", "Cryptography", "Algorithms", "Security"],
      category: "Cybersecurity",
      color: "from-red-400 to-pink-400",
      githubUrl: "https://github.com/sonamchokss/rail-fence-cipher",
      demoUrl: "#"
    },
    {
      title: "College Canteen Food Ordering System",
      description: "Full-stack application with comprehensive backend logic, database management, and user-friendly interface for food ordering.",
      technologies: ["Full-stack", "Database", "API", "Web Development"],
      category: "Web Development",
      color: "from-blue-400 to-cyan-400",
      githubUrl: "https://github.com/sonamchokss/college-canteen-system",
      demoUrl: "#"
    },
    {
      title: "UI/UX Design Portfolio",
      description: "Creative designs including Facebook and Instagram clones, custom responsive layouts, and modern web interfaces.",
      technologies: ["Figma", "UI/UX", "Responsive Design", "Prototyping"],
      category: "Design",
      color: "from-purple-400 to-indigo-400",
      githubUrl: "https://github.com/sonamchokss/ui-ux-portfolio",
      demoUrl: "#"
    },
    {
      title: "Weather Application",
      description: "Modern weather app with real-time data, location-based forecasts, and intuitive user interface design.",
      technologies: ["JavaScript", "API Integration", "Responsive Design", "Weather API"],
      category: "Web Development",
      color: "from-yellow-400 to-orange-400",
      githubUrl: "https://github.com/sonamchokss/weather-app",
      demoUrl: "#"
    },
    {
      title: "Task Management System",
      description: "Comprehensive to-do list application with task prioritization, deadlines, and productivity tracking features.",
      technologies: ["JavaScript", "Local Storage", "CSS", "Productivity"],
      category: "Web Development",
      color: "from-teal-400 to-green-400",
      githubUrl: "https://github.com/sonamchokss/task-management-system",
      demoUrl: "#"
    }
  ];

  const handleViewAllProjects = () => {
    window.open('https://github.com/sonamchokss', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, UI/UX design, Python applications, and cybersecurity tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-700/50 text-teal-400 text-xs px-2 py-1 rounded border border-slate-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-teal-400/50 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
