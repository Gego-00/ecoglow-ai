import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Award, Users, Globe, Droplets, Sun, Shield } from 'lucide-react';

const About = () => {
  const timelineItems = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to create sustainable skincare that doesn\'t compromise on quality.',
      icon: Leaf
    },
    {
      year: '2021',
      title: 'First Products',
      description: 'Launched our first line of organic serums and moisturizers with zero-waste packaging.',
      icon: Droplets
    },
    {
      year: '2022',
      title: 'Carbon Neutral',
      description: 'Achieved carbon neutrality across our entire supply chain and manufacturing process.',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Reached 10,000+ happy customers and partnered with environmental organizations.',
      icon: Users
    },
    {
      year: '2024',
      title: 'Innovation Award',
      description: 'Received the Green Beauty Innovation Award for our sustainable packaging solutions.',
      icon: Award
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'We source only the finest organic and natural ingredients from sustainable farms worldwide.'
    },
    {
      icon: Recycle,
      title: 'Zero Waste',
      description: 'Our packaging is 100% recyclable and biodegradable, minimizing environmental impact.'
    },
    {
      icon: Heart,
      title: 'Cruelty-Free',
      description: 'We never test on animals and are certified by leading cruelty-free organizations.'
    },
    {
      icon: Sun,
      title: 'Solar Powered',
      description: 'Our facilities run on 100% renewable energy, reducing our carbon footprint.'
    },
    {
      icon: Shield,
      title: 'Safe Formulas',
      description: 'All products are dermatologist-tested and free from harmful chemicals and toxins.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We donate 1% of profits to environmental conservation and reforestation projects.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Our Story of{' '}
                <span className="text-primary-600 dark:text-primary-400">Sustainable Beauty</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                EcoGlow was born from a simple belief: that beauty products should be as kind to your skin 
                as they are to the planet. Our journey began with a commitment to create skincare that 
                nurtures both you and the environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400">Natural Ingredients</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=700&fit=crop&crop=center"
                alt="Natural skincare founder"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-primary-600 text-white p-4 rounded-xl shadow-lg">
                <Leaf className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-sage-600 text-white p-4 rounded-xl shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to creating products that make you glow while protecting the planet we all call home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-8 text-center group"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                    <IconComponent className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From a small startup to a leading sustainable beauty brand, here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 dark:bg-primary-800 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:space-x-8`}
                  >
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:mb-0 mb-4`}>
                      <div className="card p-6">
                        <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Icon */}
                    <div className="relative z-10 bg-primary-600 p-4 rounded-full shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 hidden lg:block"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate individuals dedicated to creating a more sustainable future for beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400&h=400&fit=crop&crop=face',
                bio: 'Environmental scientist turned beauty entrepreneur with 10+ years in sustainable product development.'
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Head of R&D',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
                bio: 'Dermatologist and biochemist specializing in natural skincare formulations and ingredient safety.'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Sustainability Director',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
                bio: 'Environmental advocate ensuring our practices align with our mission for a greener planet.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 dark:bg-primary-800">
        <div className="container-max text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of the sustainable beauty revolution. Together, we can make a difference for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
                Shop Our Products
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;