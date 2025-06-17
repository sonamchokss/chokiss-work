
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate learner currently pursuing a BE in Software Engineering at the 
              College of Science and Technology (expected graduation: July 2028). My interests 
              include full-stack web development, UI/UX design, Python scripting, and cybersecurity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I love building creative digital solutions and continuously exploring the latest in tech. 
              My goal is to create meaningful applications that solve real-world problems while 
              maintaining beautiful, user-friendly interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {["Problem Solver", "Creative Thinker", "Team Player", "Tech Enthusiast"].map((trait) => (
                <span 
                  key={trait}
                  className="bg-slate-800/50 text-teal-400 px-4 py-2 rounded-full text-sm font-medium border border-teal-400/30"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400">Current Academic Journey</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="text-teal-400 mt-1" size={16} />
                  <div>
                    <p className="text-white font-medium">2024 - 2028</p>
                    <p className="text-gray-400 text-sm">Expected Graduation: July 2028</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-teal-400 mt-1" size={16} />
                  <div>
                    <p className="text-white font-medium">BE Software Engineering</p>
                    <p className="text-gray-400 text-sm">Bachelor's Degree Program</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-teal-400 mt-1" size={16} />
                  <div>
                    <p className="text-white font-medium">College of Science and Technology</p>
                    <p className="text-gray-400 text-sm">Phuentsholing, Bhutan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;