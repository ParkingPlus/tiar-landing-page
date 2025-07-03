"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  ShoppingCart, 
  Code, 
  Globe, 
  Smartphone, 
  ChevronRight,
  Zap,
  BarChart3,
  Settings,
  Users,
  Shield,
  Plug
} from 'lucide-react';

const PlatformShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const platformSections = [
    {
      id: 'backend',
      title: 'Backend Platform',
      description: 'Comprehensive off-the-shelf backend solution with full industry protocol implementations, providing complete control over your EV charging business operations through a single interface.',
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Real-time monitoring', 'Protocol compliance', 'Business intelligence', 'Fleet management'],
      mockupType: 'dashboard'
    },
    {
      id: 'api',
      title: 'Developer API',
      description: 'Secure API to access all platform functionalities, create tailored EV charging experiences, and integrate seamlessly with other systems.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      features: ['RESTful API', 'WebSocket support', 'Comprehensive docs', 'SDK libraries'],
      mockupType: 'code'
    },
    {
      id: 'portal',
      title: 'Web Portal',
      description: 'User-friendly web portal for customers to manage accounts, locate stations, and make ad-hoc payments.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      features: ['Account management', 'Station locator', 'Payment processing', 'Usage analytics', 'Custom branding'],
      mockupType: 'web'
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      description: 'Customizable white-label iOS and Android apps for quick market entry. Seamlessly integrate with existing apps, extend our solutions with custom functionality, or develop your own mobile applications.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      features: ['White-label solution', 'Cross-platform', 'Custom branding', 'Native performance', 'Custom branding'],
      mockupType: 'mobile'
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Extensive pre-built dashboard for your business operations. ',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Real-time monitoring', 'Protocol compliance', 'Business intelligence', 'Fleet management'],
      mockupType: 'dashboard'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const renderMockup = (type: string, isHovered: boolean) => {
    const mockupVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { delay: 0.2 }
      }
    };

    switch (type) {
      case 'dashboard':
        return (
          <motion.div 
            className="w-full h-32 bg-white rounded-lg shadow-sm p-3 overflow-hidden"
            variants={mockupVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <BarChart3 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="w-16 h-2 bg-blue-200 rounded"></div>
                <div className="text-xs font-bold text-blue-600">103.2%</div>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded">
                <div className="w-3/4 h-full bg-blue-500 rounded"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>$14,932,089</span>
                <span>323,917.36</span>
                <span>1,003</span>
              </div>
            </div>
          </motion.div>
        );
      
      case 'grid':
        return (
          <motion.div 
            className="w-full h-32 bg-white rounded-lg shadow-sm p-3"
            variants={mockupVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-3 gap-2 h-full">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 'code':
        return (
          <motion.div 
            className="w-full h-32 bg-gray-900 rounded-lg shadow-sm p-3 text-xs font-mono overflow-hidden"
            variants={mockupVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <div className="text-green-400 mb-1">// EV Charging API</div>
            <div className="text-blue-400 mb-1">GET /api/v1/charging-sessions</div>
            <div className="text-gray-400 mb-1">{"{"}</div>
            <div className="text-white ml-2 mb-1">"sessionId": "cs_123",</div>
            <div className="text-white ml-2 mb-1">"status": "active",</div>
            <div className="text-white ml-2 mb-1">"power": 50.5,</div>
            <div className="text-white ml-2">"duration": 1847</div>
            <div className="text-gray-400">{"}"}</div>
          </motion.div>
        );
      
      case 'web':
        return (
          <motion.div 
            className="w-full h-32 bg-white rounded-lg shadow-sm p-3"
            variants={mockupVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-teal-500" />
                <div className="text-sm font-medium">My Account</div>
              </div>
              <Settings className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-teal-500" />
                <div className="text-xs text-gray-600">Last charge: 2 hours ago</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="w-2/3 h-full bg-teal-500 rounded"></div>
              </div>
              <div className="text-xs text-gray-500">Balance: $47.50</div>
            </div>
          </motion.div>
        );
      
      case 'mobile':
        return (
          <motion.div 
            className="w-full h-32 bg-white rounded-lg shadow-sm p-3 flex justify-center items-center"
            variants={mockupVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <div className="w-16 h-28 bg-gray-800 rounded-lg p-1">
              <div className="w-full h-full bg-white rounded-md p-1">
                <div className="w-full h-1 bg-gray-200 rounded mb-2"></div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-1">
                    <Plug className="w-2 h-2 text-orange-500" />
                    <div className="w-8 h-1 bg-orange-200 rounded"></div>
                  </div>
                  <div className="w-full h-1 bg-gray-100 rounded"></div>
                  <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                  <div className="w-full h-3 bg-orange-100 rounded mt-2"></div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your EV Charging Infrastructure.
          </h1>
          <p className="text-xl text-gray-600">
            Our Platform Approach.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {platformSections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={cardVariants}
              whileHover="hover"
              className={`${section.bgColor} rounded-xl p-6 cursor-pointer relative overflow-hidden group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onMouseEnter={() => setHoveredCard(section.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                    {section.icon}
                  </div>
                  <motion.div
                    animate={{ 
                      x: hoveredCard === section.id ? 4 : 0,
                      opacity: hoveredCard === section.id ? 1 : 0.6
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {section.description}
                </p>

                <AnimatePresence>
                  {hoveredCard === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex flex-wrap gap-2">
                        {section.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-xs px-2 py-1 bg-white/70 rounded-full text-gray-700"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                      
                      {renderMockup(section.mockupType, hoveredCard === section.id)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformShowcase;