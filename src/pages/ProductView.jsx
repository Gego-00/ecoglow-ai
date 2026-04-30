import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  ShoppingBag, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Recycle,
  Plus,
  Minus,
  Check
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Toast from '../components/Toast';

const ProductView = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const { addToCart, isInCart } = useCart();

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast({ ...toast, isVisible: false });
  };

  // Sample product data - in a real app, this would come from an API
  const products = {
    1: {
      id: 1,
      name: 'Green Radiance Serum',
      price: 20.70,
      originalPrice: 39,
      images: [
        '/images/product-images/Green Radiance Serum.jpg',
        '/images/product-images/Green Radiance Serum2.jpg',
        '/images/product-images/Green Radiance Serum.jpg'
      ],
      rating: 4.8,
      reviews: 127,
      description: 'Transform your skin with our powerful Green Radiance Serum, packed with natural botanicals and vitamin C for a luminous, healthy glow.',
      ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Green Tea Extract', 'Aloe Vera', 'Jojoba Oil'],
      benefits: [
        'Brightens and evens skin tone',
        'Reduces fine lines and wrinkles',
        'Hydrates and plumps skin',
        'Protects against environmental damage'
      ],
      howToUse: 'Apply 2-3 drops to clean skin morning and evening. Gently pat until absorbed. Follow with moisturizer.',
      size: '30ml',
      category: 'Serum',
      customerReviews: [
        {
          name: "Sarah M.",
          rating: 5,
          comment: "Amazing serum! My skin looks so much brighter after just 2 weeks of use."
        },
        {
          name: "Emily R.",
          rating: 5,
          comment: "Love how lightweight this feels. No sticky residue and great results!"
        },
        {
          name: "Jessica L.",
          rating: 4,
          comment: "Good product with natural ingredients. Takes time to see results but worth it."
        }
      ]
    },
    2: {
      id: 2,
      name: 'Earth Glow Moisturizer',
      price: 35,
      originalPrice: 45,
      images: [
        '/images/product-images/Earth Glow Moisturizer.jpg',
        '/images/product-images/Earth Glow Moisturizer.jpg',
        '/images/product-images/Earth Glow Moisturizer.jpg'
      ],
      rating: 4.9,
      reviews: 93,
      description: 'Nourish your skin with our rich Earth Glow Moisturizer, formulated with organic ingredients for deep hydration and natural radiance.',
      ingredients: ['Shea Butter', 'Argan Oil', 'Ceramides', 'Peptides', 'Chamomile Extract'],
      benefits: [
        'Deep moisturization for 24 hours',
        'Improves skin texture and elasticity',
        'Soothes and calms irritated skin',
        'Anti-aging properties'
      ],
      howToUse: 'Apply to clean skin morning and evening. Massage gently until fully absorbed.',
      size: '50ml',
      category: 'Moisturizer',
      customerReviews: [
        {
          name: "Maria G.",
          rating: 5,
          comment: "Perfect for my dry skin! Rich texture but absorbs well. Love the organic ingredients."
        },
         {
          name: "Lisa T.",
          rating: 5,
          comment: "Best moisturizer I've tried. My skin feels so soft and looks glowing all day."
        },
        {
          name: "Rachel P.",
          rating: 4,
          comment: "Great for mature skin. I can see improvement in my skin's texture and firmness."
        }
      ]
    },
    3: {
      id: 3,
      name: 'Ocean Breeze Cleanser',
      price: 22,
      originalPrice: 28,
      images: [
        '/images/product-images/Ocean Breeze Cleanser.jpg',
        '/images/product-images/Ocean Breeze Cleanser.jpg',
        '/images/product-images/Ocean Breeze Cleanser.jpg'
      ],
      rating: 4.7,
      reviews: 162,
      description: 'Refresh and purify your skin with our gentle Ocean Breeze Cleanser, infused with marine extracts for a clean, revitalized complexion.',
      ingredients: ['Sea Salt', 'Algae Extract', 'Coconut Oil', 'Glycerin', 'Lavender Oil'],
      benefits: [
        'Gently removes makeup and impurities',
        'Balances skin pH',
        'Minimizes pores',
        'Leaves skin feeling fresh and clean'
      ],
      howToUse: 'Apply to damp skin, massage gently in circular motions, then rinse with warm water. Use morning and evening.',
      size: '150ml',
      category: 'Cleanser',
      customerReviews: [
        {
          name: "Stephanie H.",
          rating: 5,
          comment: "Love this cleanser! Removes all my makeup without drying out my skin. Fresh scent too."
        },
        {
          name: "Michelle D.",
          rating: 4,
          comment: "Gentle but effective. My pores look smaller and skin feels balanced after use."
        },
        {
          name: "Ashley C.",
          rating: 5,
          comment: "Perfect for oily skin. Cleanses deeply but doesn't strip natural oils."
        }
      ]
    },
    4: {
      id: 4,
      name: 'Pure Essence Toner',
      price: 18,
      originalPrice: 24,
      images: [
        '/images/product-images/Pure Essence Toner.jpg',
        '/images/product-images/Pure Essence Toner.jpg',
        '/images/product-images/Pure Essence Toner.jpg'
      ],
      rating: 4.6,
      reviews: 84,
      description: 'Balance and refresh your skin with our alcohol-free Pure Essence Toner, enriched with botanical extracts for optimal skin health.',
      ingredients: ['Rose Water', 'Witch Hazel', 'Niacinamide', 'Cucumber Extract', 'Aloe Vera'],
      benefits: [
        'Balances skin pH levels',
        'Minimizes appearance of pores',
        'Prepares skin for serums and moisturizers',
        'Provides gentle hydration'
      ],
      howToUse: 'Apply to clean skin using a cotton pad or gently pat with hands. Use morning and evening after cleansing.',
      size: '200ml',
      category: 'Toner',
      customerReviews: [
        {
          name: "Jennifer M.",
          rating: 5,
          comment: "This toner is amazing! Balances my oily skin perfectly and doesn't dry it out."
        },
        {
          name: "Sarah K.",
          rating: 4,
          comment: "Great for prepping skin for serums. My pores look smaller after using this."
        },
        {
          name: "Amanda R.",
          rating: 5,
          comment: "Love the rose water scent! Gentle but effective, perfect for sensitive skin."
        }
      ]
    },
    5: {
      id: 5,
      name: 'Night Repair Balm',
      price: 20.70,
      originalPrice: 48,
      images: [
        '/images/product-images/Night Repair Balm.jpg',
        '/images/product-images/Night Repair Balm.jpg',
        '/images/product-images/Night Repair Balm.jpg'
      ],
      rating: 4.9,
      reviews: 98,
      description: 'Intensive overnight treatment with retinol alternative and peptides for skin renewal and anti-aging benefits.',
      ingredients: ['Bakuchiol', 'Peptides', 'Rosehip Oil', 'Squalane', 'Vitamin E'],
      benefits: [
        'Reduces fine lines and wrinkles',
        'Improves skin texture and firmness',
        'Promotes overnight skin renewal',
        'Deeply nourishes and repairs'
      ],
      howToUse: 'Apply a thin layer to clean skin before bedtime. Allow to absorb fully. Use 2-3 times per week initially.',
      size: '50ml',
      category: 'Treatment',
      customerReviews: [
        {
          name: "Victoria L.",
          rating: 5,
          comment: "This night balm is incredible! I've been using it for 6 weeks and my fine lines have visibly reduced."
        },
        {
          name: "Diana K.",
          rating: 5,
          comment: "Best anti-aging product I've tried. Woke up with softer, plumper skin after first use."
        },
        {
          name: "Emma S.",
          rating: 4,
          comment: "Great alternative to retinol. No irritation but still effective for skin renewal."
        }
      ],
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
        },
        {
          id: 5,
          name: "Patricia M.",
          rating: 5,
          date: "2024-01-01",
          comment: "This balm has transformed my skin! The overnight renewal is real - I wake up with glowing, smoother skin. The natural ingredients are a huge plus.",
          verified: true
        }
      ]
    }
  };

  const product = products[id];

  useEffect(() => {
    if (!product) {
      // Navigate to products page if product not found
      window.location.href = '/products';
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    try {
      addToCart(product, quantity);
      showToast(`Added ${quantity} ${product.name} to cart!`, 'cart');
    } catch (error) {
      showToast('Failed to add item to cart', 'error');
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white dark:bg-gray-900 pt-20"
    >
      <div className="container-max section-padding">
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
                  isFavorite
                    ? 'bg-red-500 text-white'
                    : 'bg-white/80 text-gray-600 hover:bg-white'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg ${
                    selectedImage === index
                      ? 'ring-2 ring-primary-500'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {product.category} • {product.size}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                    isInCart(product.id)
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                  title={isInCart(product.id) ? 'Item is in cart' : 'Add to cart'}
                >
                  {isInCart(product.id) ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>In Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">On orders over $50</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">30-Day Return</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Money back guarantee</p>
              </div>
              <div className="text-center">
                <Recycle className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Eco-Friendly</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Sustainable packaging</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Ingredients
              </h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Benefits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                How to Use
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {product.howToUse}
              </p>
            </div>

            {/* Customer Reviews */}
            {product.detailedReviews && product.detailedReviews.length > 0 && (
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Customer Reviews ({product.detailedReviews.length})
                </h3>
                <div className="space-y-6">
                  {product.detailedReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {review.name}
                              </h4>
                              {review.verified && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  <Check className="h-3 w-3 mr-1" />
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300 dark:text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {new Date(review.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-13">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Simple Customer Reviews */}
            {product.customerReviews && product.customerReviews.length > 0 && (
              <div className="card p-6 lg:col-span-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Latest Reviews ({product.customerReviews.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.customerReviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {review.name}
                        </h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

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

export default ProductView;