import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Utensils, GlassWater, Users, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-gold" />,
    title: "Cuisine Exquise",
    description: "Des plats préparés avec passion par nos chefs talentueux, utilisant les meilleurs ingrédients."
  },
  {
    icon: <GlassWater className="h-10 w-10 text-gold" />,
    title: "Bar Premium",
    description: "Une sélection raffinée de vins, cocktails et spiritueux pour accompagner votre repas."
  },
  {
    icon: <Users className="h-10 w-10 text-gold" />,
    title: "Service Attentionné",
    description: "Une équipe dévouée pour vous offrir une expérience mémorable à chaque visite."
  },
  {
    icon: <MapPin className="h-10 w-10 text-gold" />,
    title: "Cadre Élégant",
    description: "Un environnement chaleureux et sophistiqué pour vos dîners et événements spéciaux."
  }
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 hero-overlay flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-3">Le Centre</h1>
            <p className="text-xl md:text-2xl font-serif italic text-gold mb-6">TOUT MENE AU CENTRE</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Une expérience gastronomique d'exception au cœur de Gemena. Découvrez notre cuisine raffinée dans un cadre élégant et chaleureux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/menu" className="btn btn-primary">
                Découvrir le Menu
              </NavLink>
              <NavLink to="/reservations" className="btn btn-outline">
                Réserver une Table
              </NavLink>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Bienvenue au Centre</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="mb-4 text-lg">
                Situé au cœur de Gemena, Le Centre est bien plus qu'un simple restaurant – c'est une destination où la gastronomie rencontre l'élégance.
              </p>
              <p className="mb-6">
                Notre équipe passionnée s'engage à vous offrir une expérience culinaire inoubliable, où chaque plat raconte une histoire et chaque visite devient un moment précieux.
              </p>
              <p className="mb-6">
                Que vous veniez pour un dîner romantique, un repas d'affaires ou une célébration spéciale, notre ambiance chaleureuse et notre service attentionné vous feront sentir comme chez vous.
              </p>
              <NavLink to="/about" className="btn btn-primary">
                En Savoir Plus
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Intérieur du restaurant Le Centre"
                className="rounded-lg shadow-xl h-[500px] w-full object-cover"
              />
              <div className="absolute -bottom-10 -left-10 hidden md:block">
                <img
                  src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Plat signature du Chef"
                  className="rounded-lg shadow-xl w-48 h-48 object-cover border-4 border-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Une Expérience Exceptionnelle</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Au Centre, nous nous engageons à vous offrir bien plus qu'un simple repas. Découvrez ce qui rend notre restaurant unique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section className="section-padding bg-restaurant-interior bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-white">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-white">Nos Spécialités</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Découvrez quelques-uns de nos plats les plus appréciés, préparés avec passion par notre Chef.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-gold"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold">Rib-Eye</h3>
              <p className="mb-3 text-beige">Rib-eye grillé, brocoli, pommes de terre épicées</p>
              <p className="text-gold-light font-semibold">35 LC</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-gold"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold">Teriyaki de Saumon Grillé</h3>
              <p className="mb-3 text-beige">Saumon grillé, légumes, riz blanc servi avec sauce Teriyaki</p>
              <p className="text-gold-light font-semibold">35 LC</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-gold"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold">Ravioli Truffes</h3>
              <p className="mb-3 text-beige">Ravioli, sauce aux truffes, parmesan, tomates séchées, champignons</p>
              <p className="text-gold-light font-semibold">28 LC</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <NavLink to="/menu" className="btn btn-primary">
              Voir le Menu Complet
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-green-dark text-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Réservez Votre Table Dès Aujourd'hui</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ne manquez pas l'occasion de vivre une expérience gastronomique mémorable. Réservez votre table et laissez-nous vous accueillir au Centre.
            </p>
            <NavLink to="/reservations" className="btn btn-primary">
              Faire une Réservation
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;