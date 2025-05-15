import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { X } from 'lucide-react';

// Gallery images
const galleryImages = [
  {
    category: "food",
    src: "../../public/images/resto.jpg",
    alt: "Plat signature du Chef"
  },
  {
    category: "food",
    src: "../../public/images/resto1.jpg",
    alt: "Steak parfaitement cuit"
  },
  {
    category: "food",
    src: "../../public/images/resto2.jpg",
    alt: "Plat de pâtes gourmet"
  },
  {
    category: "food",
    src: "../../public/images/resto3.jpg",
    alt: "Salade fraîche et colorée"
  },
  {
    category: "interior",
    src: "../../public/images/resto4.jpg",
    alt: "Salle à manger élégante"
  },
  {
    category: "interior",
    src: "../../public/images/plat.jpg",
    alt: "Intérieur chaleureux du restaurant"
  },
  {
    category: "interior",
    src: "../../public/images/client.jpg",
    alt: "Bar du restaurant"
  },
  {
    category: "drinks",
    src: "../../public/images/plat2.jpg",
    alt: "Cocktail signature"
  },
  {
    category: "drinks",
    src: "../../public/images/plat3.jpg",
    alt: "Verre de vin rouge"
  },
  {
    category: "drinks",
    src: "../../public/images/menu.jpg",
    alt: "Assortiment de boissons"
  },
  {
    category: "events",
    src: "../../public/images/burger.jpg",
    alt: "Salle décorée pour un événement"
  },
  {
    category: "events",
    src: "../../public/images/serveur.jpg",
    alt: "Table dressée pour une célébration"
  }
];

const Gallery: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  const filteredImages = category === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="h-24"></div> {/* Spacer for fixed header */}
      
      {/* Hero Section */}
      <section className="py-16 bg-beige">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="section-title">Notre Galerie</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Parcourez notre galerie pour découvrir l'ambiance unique du Centre, nos plats signature et les moments mémorables partagés dans notre restaurant.
            </p>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setCategory("all")}
              className={`px-4 py-2 rounded-full transition-all ${
                category === "all" 
                  ? "bg-gold text-green-dark" 
                  : "bg-white text-green-dark hover:bg-gold-light"
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setCategory("food")}
              className={`px-4 py-2 rounded-full transition-all ${
                category === "food" 
                  ? "bg-gold text-green-dark" 
                  : "bg-white text-green-dark hover:bg-gold-light"
              }`}
            >
              Cuisine
            </button>
            <button
              onClick={() => setCategory("interior")}
              className={`px-4 py-2 rounded-full transition-all ${
                category === "interior" 
                  ? "bg-gold text-green-dark" 
                  : "bg-white text-green-dark hover:bg-gold-light"
              }`}
            >
              Intérieur
            </button>
            <button
              onClick={() => setCategory("drinks")}
              className={`px-4 py-2 rounded-full transition-all ${
                category === "drinks" 
                  ? "bg-gold text-green-dark" 
                  : "bg-white text-green-dark hover:bg-gold-light"
              }`}
            >
              Boissons
            </button>
            <button
              onClick={() => setCategory("events")}
              className={`px-4 py-2 rounded-full transition-all ${
                category === "events" 
                  ? "bg-gold text-green-dark" 
                  : "bg-white text-green-dark hover:bg-gold-light"
              }`}
            >
              Événements
            </button>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="image-gallery">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="image-gallery-item cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-5xl px-4">
            <Carousel
              selectedItem={currentImageIndex}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              useKeyboardArrows={true}
              showIndicators={false}
            >
              {filteredImages.map((image, index) => (
                <div key={index} className="h-[70vh] flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;