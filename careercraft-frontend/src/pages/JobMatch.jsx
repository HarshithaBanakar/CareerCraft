// src/pages/JobMatch.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock,
  Star,
  Filter,
  Search,
  Building
} from 'lucide-react';

const JobMatch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    salary: '',
    type: '',
    experience: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      experience: 'Mid-level',
      match: 95,
      posted: '2 days ago',
      logo: '/api/placeholder/40/40',
      skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team...'
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Contract',
      salary: '$80,000 - $100,000',
      experience: 'Senior',
      match: 88,
      posted: '1 week ago',
      logo: '/api/placeholder/40/40',
      skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
      description: 'Join our design team to create amazing user experiences...'
    },
    // Add more job objects...
  ];

  const MatchIndicator = ({ percentage }) => {
    let color = 'bg-red-500';
    if (percentage >= 80) color = 'bg-green-500';
    else if (percentage >= 60) color = 'bg-yellow-500';

    return (
      <div className="flex items-center space-x-2">
        <div className="w-16 bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${color} transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Job Matches
          </h1>
          <p className="text-lg text-gray-600">
            Discover opportunities that match your skills and preferences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn-secondary flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Jobs List */}
          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <MatchIndicator percentage={job.match} />
                    <span className="text-xs text-gray-500 mt-1 block">Match score</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.posted}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="btn-primary text-sm">
                    Apply Now
                  </button>
                  <button className="btn-secondary text-sm">
                    Save for Later
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar - Job Insights */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Job Match Insights
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Frontend Roles</span>
                    <span className="font-medium">95% match</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">UX/UI Roles</span>
                    <span className="font-medium">78% match</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Full-stack Roles</span>
                    <span className="font-medium">65% match</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Top Skills in Demand
              </h3>
              <div className="space-y-3">
                {[
                  { skill: 'React', demand: 'High', jobs: '12,345' },
                  { skill: 'TypeScript', demand: 'High', jobs: '8,765' },
                  { skill: 'Node.js', demand: 'Medium', jobs: '6,543' },
                  { skill: 'AWS', demand: 'High', jobs: '9,876' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{item.skill}</span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        item.demand === 'High' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.demand}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{item.jobs} jobs</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatch;