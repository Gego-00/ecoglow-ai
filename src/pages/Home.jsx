import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Star, 
  ShoppingBag, 
  Heart, 
  ArrowRight, 
  CheckCircle, 
  Recycle
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Toast from '../components/Toast';

const Home = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const { addToCart, isInCart } = useCart();

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast({ ...toast, isVisible: false });
  };

  const featuredProducts = [
    {
      id: 1,
      name: 'Green Radiance Serum',
      price: 20.70,
      image: '/images/product-images/Green Radiance Serum.jpg',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Earth Glow Moisturizer',
      price: 35,
      image: '/images/product-images/Earth Glow Moisturizer.jpg',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Ocean Breeze Cleanser',
      price: 22,
      image: '/images/product-images/Ocean Breeze Cleanser.jpg',
      rating: 4.7,
      reviews: 156
    }
  ];

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    try {
      addToCart(product, 1);
      showToast(`Added ${product.name} to cart!`, 'cart');
    } catch (error) {
      showToast('Failed to add item to cart', 'error');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setName('');
        setEmail('');
      }, 3000);
    }
  };

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
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: 'url("images/EcoGlow Banner.jpg")'
           }}
         ></div>
        
        <div className="relative z-20 container-max text-center px-4">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-balance">
              Glow Naturally with{' '}
              <span className="text-primary-400">EcoGlow</span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance"
          >
            Sustainable skincare for a healthier planet. Discover the power of nature in every drop.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/products" className="inline-flex items-center btn-primary text-lg px-8 py-4">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="inline-flex items-center btn-secondary text-lg px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 text-primary-400 opacity-20"
        >
          <Leaf className="h-16 w-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 text-sage-400 opacity-20"
        >
          <Heart className="h-12 w-12" />
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most loved sustainable skincare essentials, created with love and responsibility. Each product is designed to bring out your natural glow while helping protect the Earth we all cherish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 group cursor-pointer"
                  onClick={() => window.location.href = `/product/${product.id}`}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ${product.price}
                    </span>
                    <button 
                      className={`p-2 rounded-lg transition-colors ${
                        isInCart(product.id)
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                      onClick={(e) => handleAddToCart(e, product)}
                      title={isInCart(product.id) ? 'Item is in cart' : 'Add to cart'}
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link to="/products" className="inline-flex items-center btn-primary">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Our Mission for a{' '}
                <span className="text-primary-600 dark:text-primary-400">Greener Future</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At EcoGlow, we believe that beauty and sustainability go hand in hand. 
                Our carefully crafted products are made with natural ingredients, 
                eco-friendly packaging, and a commitment to protecting our planet.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Natural</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">100% organic ingredients</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-sage-100 dark:bg-sage-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Recycle className="h-8 w-8 text-sage-600 dark:text-sage-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Sustainable</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Eco-friendly packaging</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Cruelty-Free</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Never tested on animals</p>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center btn-primary">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <img
                src="/images/Elegant skincare ingredients.jpg"
                alt="Natural skincare ingredients"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-600 dark:bg-primary-800">
        <div className="container-max">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Join Our Green Community
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get exclusive access to new products, sustainability tips, and special offers.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-white" />
                <span className="text-white font-medium">Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </motion.div>
  );
};

export default Home;