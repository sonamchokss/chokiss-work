
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-block bg-teal-400/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Sonam Choki
            </span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-gray-300 mb-6 animate-fade-in">
            Software Engineering Student | Web Developer | UI/UX Designer
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl animate-fade-in">
            Passionate about creating innovative digital solutions and exploring the latest in technology. 
            Currently pursuing BE in Software Engineering at College of Science and Technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Right Content - Profile Picture */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-full flex items-center justify-center border-4 border-teal-400/30">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/10">
                <img 
                  src="https://i.postimg.cc/G9ncbPSg/5edcbee4-3303-4a9f-939c-f616c084eb2b.jpg" 
                  alt="Sonam Choki - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;