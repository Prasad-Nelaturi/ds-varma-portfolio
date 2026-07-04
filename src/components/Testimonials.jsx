import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Sarah transformed our home beautifully. Her attention to detail and understanding of our needs was exceptional.",
      rating: 5,
      initial: "R",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "Professional, creative and delivered on time. Sarah is a true artist who brings visions to life.",
      rating: 5,
      initial: "P",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Amit Singh",
      role: "Architect",
      text: "One of the best interior designers I've worked with. Amazing detailing and creative solutions.",
      rating: 5,
      initial: "A",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Neha Gupta",
      role: "Interior Designer",
      text: "Incredible creativity and premium execution. Sarah's work always exceeds expectations.",
      rating: 5,
      initial: "N",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Kiran Reddy",
      role: "Villa Owner",
      text: "Amazing quality and premium finishing. Our villa looks like a dream come true.",
      rating: 5,
      initial: "K",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sneha Patel",
      role: "Homeowner",
      text: "Sarah's design transformed our entire living space. She understood exactly what we wanted.",
      rating: 5,
      initial: "S",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / visibleCount);

  // Wrap nextSlide and prevSlide in useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Update visible count based on window size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []); // Empty dependency array - runs once on mount

  const getVisibleTestimonials = () => {
    const start = currentIndex * visibleCount;
    const end = start + visibleCount;
    return testimonials.slice(start, end);
  };

  // Auto-scroll - Fixed dependencies
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging, nextSlide]); // Added nextSlide to dependencies

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 neumorph px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              What My Clients Say
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kind Words From Happy Clients
          </h2>
          <p className="text-gray-600">
            Don't just take my word for it — hear from the people I've had the
            pleasure of working with
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 neumorph p-3 rounded-full hover:shadow-neumorph-lg transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 neumorph p-3 rounded-full hover:shadow-neumorph-lg transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div
            ref={containerRef}
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 py-8 ${
                  visibleCount >= 2 ? "sm:grid-cols-2" : ""
                } ${visibleCount >= 3 ? "lg:grid-cols-3" : ""} gap-6`}
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="neumorph-card group p-6 sm:p-8 rounded-3xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-orange-500" />
                      </div>

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-orange-400 text-orange-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 leading-8 text-[15px] mb-4">
                      "{testimonial.text}"
                    </p>

                    {/* Footer */}
                    <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold">
                          {testimonial.initial}
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {testimonial.name}
                          </h4>

                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <Quote className="w-8 h-8 text-orange-200 group-hover:text-orange-400 transition-colors duration-300 rotate-180" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
