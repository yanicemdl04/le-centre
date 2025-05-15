import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    name: "Marie Lemba",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    date: "10 mars 2024",
    text: "Une expérience culinaire exceptionnelle ! Les plats sont préparés avec finesse et les saveurs sont incroyables. Le service est impeccable et l'ambiance très agréable. Je recommande vivement le filet de bœuf qui est un vrai délice."
  },
  {
    name: "Jean Mokolo",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    date: "27 février 2024",
    text: "Le Centre est devenu notre restaurant favori à Gemena. L'accueil est toujours chaleureux, les plats sont délicieux et le cadre est élégant sans être prétentieux. Les cocktails sont également excellents. Parfait pour un dîner romantique ou une soirée entre amis."
  },
  {
    name: "Sophie Mwamba",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    date: "15 février 2024",
    text: "Très bon restaurant avec une carte variée. J'ai particulièrement apprécié les pâtes au pesto poulet et le service attentionné. La seule petite déception était le dessert un peu trop sucré à mon goût, mais dans l'ensemble une très bonne expérience."
  },
  {
    name: "Pierre Bolamba",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    date: "8 février 2024",
    text: "J'ai organisé un dîner d'affaires au Centre et tout était parfait. L'équipe a été très accommodante pour nos demandes spéciales, la nourriture était excellente et l'ambiance idéale pour discuter. Mes clients étaient impressionnés. Je reviendrai certainement !"
  },
  {
    name: "Cécile Kiala",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    date: "20 janvier 2024",
    text: "Le Centre mérite vraiment son nom car c'est devenu le centre de la gastronomie à Gemena ! J'ai été bluffée par la qualité des plats et le professionnalisme du service. Le cadre est magnifique et l'ambiance très agréable. Un grand bravo au chef et à toute l'équipe !"
  },
  {
    name: "Michel Bomboko",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    date: "5 janvier 2024",
    text: "Très bonne découverte ! La cuisine est savoureuse et le personnel attentif. J'ai particulièrement apprécié le poisson grillé qui était parfaitement cuit. Les prix sont un peu élevés mais justifiés par la qualité. Je recommande pour les occasions spéciales."
  }
];

const Testimonials: React.FC = () => {
  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? "text-gold fill-gold" : "text-gray-300"}
      />
    ));
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
            <h1 className="section-title">Avis de nos Clients</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Découvrez ce que nos clients disent de leur expérience au Centre. Nous sommes fiers de créer des moments mémorables pour chacun de nos visiteurs.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card relative"
              >
                <Quote className="absolute top-4 right-4 text-gold opacity-20 h-10 w-10" />
                
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-green-dark text-white text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Partagez Votre Expérience</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Avez-vous visité Le Centre récemment? Nous serions ravis de connaître votre avis sur votre expérience.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                alert("Fonctionnalité en cours de développement. Merci de votre intérêt!");
              }}
            >
              Laisser un Avis
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;