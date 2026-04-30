import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Filter, Search, ExternalLink } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Toast from '../components/Toast';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });
  
  const { addToCart, isInCart } = useCart();

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast({ ...toast, isVisible: false });
  };

  const products = [
    {
      id: 1,
      name: 'Green Radiance Serum',
      price: 20.70,
      originalPrice: 35,
      category: 'serums',
      image: '/images/product-images/Green Radiance Serum.jpg',
      rating: 4.8,
      reviews: 124,
      description: 'Vitamin C-rich serum that brightens and evens skin tone with natural botanical extracts.',
      ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Green Tea Extract'],
      benefits: ['Brightening', 'Anti-aging', 'Hydrating'],
      isNew: true,
      isBestseller: false,
      detailedReviews: [
        {
          id: 1,
          name: "Sarah M.",
          rating: 5,
          date: "2024-01-15",
          comment: "This serum is absolutely amazing! I've been using it for 3 months and my skin has never looked better. The vitamin C really brightens my complexion and the texture is so lightweight.",
          verified: true
        },
        {
          id: 2,
          name: "Emily R.",
          rating: 5,
          date: "2024-01-10",
          comment: "Love this product! It absorbs quickly and doesn't leave any sticky residue. I've noticed a significant improvement in my skin tone and fine lines.",
          verified: true
        },
        {
          id: 3,
          name: "Jessica L.",
          rating: 4,
          date: "2024-01-08",
          comment: "Great serum with natural ingredients. Takes a few weeks to see results but definitely worth it. My skin feels more hydrated and looks more radiant.",
          verified: true
        },
        {
          id: 4,
          name: "Amanda K.",
          rating: 5,
          date: "2024-01-05",
          comment: "This is my holy grail serum! The green tea extract is so soothing and the hyaluronic acid keeps my skin plump all day. Highly recommend!",
          verified: true
        }
      ]
    },
    {
      id: 2,
      name: 'Earth Glow Moisturizer',
      price: 35,
      originalPrice: null,
      category: 'moisturizers',
      image: '/images/product-images/Earth Glow Moisturizer.jpg',
      rating: 4.9,
      reviews: 93,
      description: 'Rich, nourishing moisturizer with organic shea butter and botanical oils.',
      ingredients: ['Shea Butter', 'Jojoba Oil', 'Aloe Vera'],
      benefits: ['Deep Hydration', 'Skin Barrier Repair', 'Anti-inflammatory'],
      isNew: false,
      isBestseller: true,
      detailedReviews: [
        {
          id: 1,
          name: "Maria G.",
          rating: 5,
          date: "2024-01-12",
          comment: "This moisturizer is incredibly rich and nourishing. Perfect for my dry skin, especially during winter. The organic ingredients make me feel good about what I'm putting on my skin.",
          verified: true
        },
        {
          id: 2,
          name: "Lisa T.",
          rating: 5,
          date: "2024-01-09",
          comment: "Amazing texture and absorption! The shea butter and jojoba oil combination is perfect. My skin feels soft and looks glowing all day long.",
          verified: true
        },
        {
          id: 3,
          name: "Rachel P.",
          rating: 4,
          date: "2024-01-06",
          comment: "Great moisturizer for mature skin. I've noticed improvement in my skin's elasticity and overall texture. The aloe vera is so soothing.",
          verified: true
        },
        {
          id: 4,
          name: "Jennifer W.",
          rating: 5,
          date: "2024-01-03",
          comment: "Love the natural glow this gives my skin! It's not greasy at all and works perfectly under makeup. Will definitely repurchase.",
          verified: true
        }
      ]
    },
    {
      id: 3,
      name: 'Ocean Breeze Cleanser',
      price: 22,
      originalPrice: null,
      category: 'cleansers',
      image: '/images/product-images/Ocean Breeze Cleanser.jpg',
      rating: 4.7,
      reviews: 162,
      description: 'Gentle foaming cleanser with sea minerals that purifies without stripping.',
      ingredients: ['Sea Salt', 'Coconut Oil', 'Chamomile'],
      benefits: ['Deep Cleansing', 'Gentle Formula', 'Pore Minimizing'],
      isNew: false,
      isBestseller: true,
      detailedReviews: [
        {
          id: 1,
          name: "Stephanie H.",
          rating: 5,
          date: "2024-01-14",
          comment: "This cleanser is so refreshing! The ocean breeze scent is amazing and it removes all my makeup without stripping my skin. Love the sea minerals!",
          verified: true
        },
        {
          id: 2,
          name: "Michelle D.",
          rating: 4,
          date: "2024-01-11",
          comment: "Great gentle cleanser that doesn't dry out my sensitive skin. The sea salt provides just the right amount of exfoliation. My pores look smaller!",
          verified: true
        },
        {
          id: 3,
          name: "Ashley C.",
          rating: 5,
          date: "2024-01-07",
          comment: "Perfect for my oily skin! It cleanses deeply without over-drying. The chamomile is so soothing and my skin feels balanced after each use.",
          verified: true
        },
        {
          id: 4,
          name: "Samantha J.",
          rating: 4,
          date: "2024-01-04",
          comment: "Love how clean and fresh my skin feels after using this. The coconut oil keeps it moisturized while the sea salt gently exfoliates. Great product!",
          verified: true
        }
      ]
    },
    {
      id: 4,
      name: 'SunKiss SPF 30',
      price: 30,
      originalPrice: null,
      category: 'suncare',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 78,
      description: 'Mineral sunscreen with zinc oxide and titanium dioxide for broad-spectrum protection.',
      ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Coconut Oil'],
      benefits: ['UV Protection', 'Non-greasy', 'Reef Safe'],
      isNew: true,
      isBestseller: false,
      detailedReviews: [
        {
          id: 1,
          name: "Christina M.",
          rating: 5,
          date: "2024-01-13",
          comment: "This sunscreen is amazing! No white cast and it doesn't feel heavy on my skin. I love that it's reef safe and the mineral formula is perfect for my sensitive skin.",
          verified: true
        },
        {
          id: 2,
          name: "Lauren S.",
          rating: 4,
          date: "2024-01-10",
          comment: "Great mineral sunscreen that doesn't break me out. The zinc oxide provides excellent protection and it works well under makeup. Non-greasy formula is a plus!",
          verified: true
        },
        {
          id: 3,
          name: "Megan F.",
          rating: 5,
          date: "2024-01-06",
          comment: "Perfect for daily use! I appreciate the reef-safe formula and the coconut oil keeps my skin moisturized. SPF 30 is just right for my needs.",
          verified: true
        },
        {
          id: 4,
          name: "Taylor R.",
          rating: 4,
          date: "2024-01-02",
          comment: "Good mineral sunscreen that doesn't irritate my skin. Takes a bit of blending but the protection is worth it. Love the eco-friendly aspect!",
          verified: true
        }
      ]
    },
    {
      id: 5,
      name: 'Night Repair Balm',
      price: 20.70,
      originalPrice: 48,
      category: 'treatments',
      image: '/images/product-images/Night Repair Balm.jpg',
      rating: 4.9,
      reviews: 98,
      description: 'Intensive overnight treatment with retinol alternative and peptides.',
      ingredients: ['Bakuchiol', 'Peptides', 'Rosehip Oil'],
      benefits: ['Anti-aging', 'Skin Renewal', 'Firming'],
      isNew: false,
      isBestseller: true,
      detailedReviews: [
        {
          id: 1,
          name: "Victoria L.",
          rating: 5,
          date: "2024-01-16",
          comment: "This night balm is incredible! I've been using it for 6 weeks and my fine lines have visibly reduced. The bakuchiol is a great retinol alternative without irritation.",
          verified: true
        },
        {
          id: 2,
          name: "Diana K.",
          rating: 5,
          date: "2024-01-12",
          comment: "Amazing overnight treatment! I wake up with plump, renewed skin every morning. The peptides really work and the rosehip oil is so nourishing.",
          verified: true
        },
        {
          id: 3,
          name: "Rebecca N.",
          rating: 5,
          date: "2024-01-08",
          comment: "Best anti-aging product I've ever used! My skin texture has improved dramatically and it's so much firmer. Worth every penny!",
          verified: true
        },
        {
          id: 4,
          name: "Catherine A.",
          rating: 4,
          date: "2024-01-05",
          comment: "Great night treatment that doesn't irritate my sensitive skin like retinol does. I can see improvement in my skin's overall appearance and firmness.",
          verified: true
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'serums', name: 'Serums' },
    { id: 'moisturizers', name: 'Moisturizers' },
    { id: 'cleansers', name: 'Cleansers' },
    { id: 'suncare', name: 'Sun Care' },
    { id: 'treatments', name: 'Treatments' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const ProductCard = ({ product }) => {
    const handleProductClick = () => {
      window.location.href = `/product/${product.id}`;
    };

    const handleQuickView = (e) => {
      e.stopPropagation();
      window.location.href = `/product/${product.id}`;
    };

    const handleAddToCart = (e) => {
      e.stopPropagation();
      
      try {
        addToCart(product, 1);
        showToast(`${product.name} added to cart!`, 'cart');
      } catch (error) {
        showToast('Failed to add item to cart', 'error');
        console.error('Error adding to cart:', error);
      }
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        className="card p-6 group relative overflow-hidden cursor-pointer"
        onClick={handleProductClick}
      >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        {product.isNew && (
          <span className="bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        {product.isBestseller && (
          <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            BESTSELLER
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
        <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Rating */}
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
          {product.rating} ({product.reviews})
        </span>
      </div>

      {/* Product Info */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {product.name}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {product.description}
      </p>

      {/* Benefits */}
      <div className="flex flex-wrap gap-1 mb-4">
        {product.benefits.slice(0, 2).map((benefit, index) => (
          <span
            key={index}
            className="bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-full"
          >
            {benefit}
          </span>
        ))}
      </div>

      {/* Price and Action */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <button 
          className={`bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-colors group-hover:scale-110 transform duration-300 ${
            isInCart(product.id) ? 'bg-green-600 hover:bg-green-700' : ''
          }`}
          onClick={handleAddToCart}
          title={isInCart(product.id) ? 'Already in cart - Click to add more' : 'Add to cart'}
        >
          <ShoppingBag className="h-5 w-5" />
        </button>
      </div>

      {/* Quick View Button */}
      <button 
        className="w-full mt-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center space-x-2"
        onClick={handleQuickView}
      >
        <span>Quick View</span>
        <ExternalLink className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-max text-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Our{' '}
              <span className="text-primary-600 dark:text-primary-400">Sustainable</span>{' '}
              Collection
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Discover our carefully crafted skincare products made with natural ingredients 
              and eco-friendly packaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <motion.div variants={itemVariants} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 w-full lg:w-64"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Results Count */}
            <motion.div variants={itemVariants} className="text-gray-600 dark:text-gray-400">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          {filteredProducts.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              variants={itemVariants}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EcoGlow?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Natural Ingredients',
                description: 'Only the finest organic and sustainably sourced ingredients',
                icon: '🌿'
              },
              {
                title: 'Eco-Friendly Packaging',
                description: '100% recyclable and biodegradable packaging materials',
                icon: '♻️'
              },
              {
                title: 'Cruelty-Free',
                description: 'Never tested on animals, certified by leading organizations',
                icon: '🐰'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Start Your Sustainable Beauty Journey
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have made the switch to eco-friendly skincare.
            </p>
            <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
              Shop All Products
            </button>
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

export default Products;