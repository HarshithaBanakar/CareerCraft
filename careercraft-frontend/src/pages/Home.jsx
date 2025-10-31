import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  Users, 
  Star, 
  CheckCircle,
  Shield,
  Zap,
  FileText,
  Target
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "AI Resume Builder",
      description: "Create professional, ATS-friendly resumes with smart templates and real-time feedback"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Resume Analysis",
      description: "Get instant optimization suggestions and keyword analysis powered by advanced AI"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Job Matching",
      description: "Discover perfect opportunities with our intelligent job matching algorithm"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "SkillSwap Community",
      description: "Learn from peers and mentors in our collaborative learning marketplace"
    }
  ];

  const stats = [
    { number: "10K+", label: "Resumes Built" },
    { number: "95%", label: "Interview Success" },
    { number: "500+", label: "Career Coaches" },
    { number: "50K+", label: "Users Empowered" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">
            CareerCraft
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className="btn-primary text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-1" />
                AI-Powered Career Platform
              </div>
              <div className="text-sm text-gray-500">Trusted by 50,000+ professionals</div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Your 
              <span className="gradient-text"> Dream Career </span>
              with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create stunning resumes, get AI-powered feedback, connect with mentors, 
              and land your dream job—all in one platform designed for your success.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/signup" 
                className="btn-primary flex items-center justify-center text-lg"
              >
                Start Building Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <button className="btn-secondary text-lg">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-blue-500" />
                <span>Secure & Private</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="card p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">John Doe</h3>
                    <p className="text-blue-100">Senior Product Designer</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Briefcase className="h-8 w-8" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-blue-200">Experience</p>
                    <p className="font-semibold">5+ Years</p>
                  </div>
                  <div>
                    <p className="text-blue-200">Location</p>
                    <p className="font-semibold">Remote</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Resume Score</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold text-sm transform rotate-12">
              ⚡ AI Optimized
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-semibold text-sm transform -rotate-12">
              ✅ ATS Friendly
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From resume building to job hunting and skill development—we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their career growth with CareerCraft
          </p>
          <Link 
            to="/signup" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;