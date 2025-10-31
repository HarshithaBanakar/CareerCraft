// src/components/resume/ResumeTemplates.jsx
import React from 'react';
import { Check, Eye, Download } from 'lucide-react';

const ResumeTemplates = ({ onTemplateSelect, selectedTemplate }) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Clean, contemporary design perfect for tech and creative roles',
      category: 'Professional',
      color: 'from-blue-500 to-blue-600',
      preview: '/api/placeholder/300/400',
      features: ['Modern Layout', 'Skills Focus', 'Project Showcase']
    },
    {
      id: 'executive',
      name: 'Executive',
      description: 'Classic and sophisticated design for leadership positions',
      category: 'Executive',
      color: 'from-gray-600 to-gray-700',
      preview: '/api/placeholder/300/400',
      features: ['Professional', 'Experience Focus', 'Leadership Highlight']
    },
    {
      id: 'creative',
      name: 'Creative Portfolio',
      description: 'Visually striking design for designers and creatives',
      category: 'Creative',
      color: 'from-purple-500 to-pink-500',
      preview: '/api/placeholder/300/400',
      features: ['Visual Design', 'Portfolio Integration', 'Creative Layout']
    },
    {
      id: 'minimal',
      name: 'Minimalist',
      description: 'Simple, elegant design that focuses on content',
      category: 'Minimal',
      color: 'from-green-500 to-teal-500',
      preview: '/api/placeholder/300/400',
      features: ['Clean Layout', 'Content First', 'Easy to Read']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Resume Template
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select from professionally designed templates optimized for ATS and recruiter attention
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`card cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              selectedTemplate === template.id
                ? 'ring-2 ring-blue-500 ring-offset-2'
                : ''
            }`}
            onClick={() => onTemplateSelect(template.id)}
          >
            {/* Template Preview */}
            <div className="relative">
              <div className={`h-48 bg-gradient-to-r ${template.color} rounded-t-xl flex items-center justify-center`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <FileText className="h-12 w-12 text-white" />
                </div>
              </div>
              
              {selectedTemplate === template.id && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {template.name}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full mt-1">
                    {template.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {template.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {template.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 btn-secondary text-sm py-2">
                  <Eye className="h-4 w-4 mr-1 inline" />
                  Preview
                </button>
                <button className="flex-1 btn-primary text-sm py-2">
                  <Download className="h-4 w-4 mr-1 inline" />
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Template Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 card">
          <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
          <div className="text-gray-600">ATS Success Rate</div>
        </div>
        <div className="text-center p-6 card">
          <div className="text-2xl font-bold text-green-600 mb-2">4.8/5</div>
          <div className="text-gray-600">Recruiter Rating</div>
        </div>
        <div className="text-center p-6 card">
          <div className="text-2xl font-bold text-purple-600 mb-2">2.3x</div>
          <div className="text-gray-600">More Interviews</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;