
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "Zustand", "Responsive Design"],
      color: "from-teal-400 to-cyan-400"
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: ["Python", "API Integration", "File Handling", "PostgreSQL"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "UI/UX Design",
      icon: "🎯",
      skills: ["Figma", "Wireframing", "Prototyping", "Responsive Layouts"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["GitHub", "Git CLI", "GitHub Pages", "VS Code"],
      color: "from-green-400 to-emerald-400"
    }
  ];

  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with wireframing, prototyping, and responsive layouts.",
      icon: "🎨"
    },
    {
      title: "Web Development",
      description: "Building responsive web applications with modern frontend and backend technologies.",
      icon: "💻"
    },
    {
      title: "App Prototyping",
      description: "Developing interactive prototypes and demos to validate ideas and user experiences.",
      icon: "📱"
    },
    {
      title: "Full-stack Development",
      description: "End-to-end application development with API integrations and database management.",
      icon: "🔧"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-teal-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Constantly learning and expanding my technical toolkit to stay current with industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-slate-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm text-center border border-slate-600/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Services <span className="text-teal-400">Offered</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-teal-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;