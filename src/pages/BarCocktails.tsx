import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Martini, Beer, Coffee } from 'lucide-react';

// Cocktails data
const cocktails = [
  {
    name: "Aperol Spritz",
    ingredients: "Aperol, Prosecco, Eau pétillante, Orange",
    description: "Un cocktail rafraîchissant aux notes d'agrumes, parfait pour l'apéritif.",
    price: 15
  },
  {
    name: "Negroni",
    ingredients: "Gin, Vermouth rouge, Campari, Orange",
    description: "Un classique italien à la fois amer et doux, avec un équilibre parfait.",
    price: 15
  },
  {
    name: "Apple Martini",
    ingredients: "Vodka, Liqueur de pomme, Jus de citron, Pomme verte",
    description: "Un martini fruité et légèrement acidulé avec une touche de douceur.",
    price: 15
  }
];

// Beers data
const beers = [
  {
    name: "Heineken Local PM",
    description: "Bière blonde légère avec des notes fraîches et herbacées.",
    price: 8
  },
  {
    name: "Beaufort Local PM",
    description: "Bière locale avec un goût maltée et une finale rafraîchissante.",
    price: 8
  }
];

// Spirits data
const spirits = [
  {
    name: "Whisky Premium",
    description: "Sélection de whiskies premium servis avec ou sans glace.",
    price: "15-25"
  },
  {
    name: "Vodka",
    description: "Vodkas de qualité servies glacées ou en shot.",
    price: "12-18"
  },
  {
    name: "Rhum",
    description: "Une collection de rhums fins pour les connaisseurs.",
    price: "14-22"
  }
];

// Wine data
const wines = [
  {
    name: "Cabernet Sauvignon",
    description: "Vin rouge corsé aux arômes de cassis et de chêne.",
    origin: "Afrique du Sud",
    price: 35
  },
  {
    name: "Chardonnay",
    description: "Vin blanc sec avec des notes de fruits tropicaux et de vanille.",
    origin: "France",
    price: 40
  },
  {
    name: "Merlot",
    description: "Vin rouge aux tanins soyeux et aux arômes de prune et de chocolat.",
    origin: "Chili",
    price: 32
  }
];

const BarCocktails: React.FC = () => {
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
            <h1 className="section-title">Bar & Cocktails</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Découvrez notre sélection exquise de cocktails, vins et spiritueux. Notre équipe de barmans talentueux crée des boissons qui raviront vos papilles.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bar Introduction */}
      <section className="py-16 bg-green-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Notre Bar</h2>
              <p className="mb-4">
                Au cœur du Centre se trouve notre bar élégant, un espace convivial où l'art du cocktail est célébré. Nos barmans experts maîtrisent les classiques et innovent constamment pour créer des boissons uniques qui complètent parfaitement notre cuisine.
              </p>
              <p className="mb-4">
                Chaque détail compte, des ingrédients soigneusement sélectionnés à la présentation impeccable. Nous sommes fiers de proposer une carte de boissons qui satisfait tous les goûts, des amateurs de vins fins aux passionnés de spiritueux et de cocktails créatifs.
              </p>
              <p>
                Que vous veniez pour un apéritif avant le dîner, un digestif après votre repas ou simplement pour savourer un bon verre dans un cadre élégant, notre bar vous accueille dans une ambiance chaleureuse et sophistiquée.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Bar du restaurant Le Centre"
                className="rounded-lg shadow-lg h-[500px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Cocktails Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title flex items-center justify-center gap-2">
              <Martini className="h-8 w-8 text-gold" /> Cocktails Signature
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Nos cocktails sont préparés avec passion, utilisant des ingrédients frais et des spiritueux de qualité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cocktails.map((cocktail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-beige p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-green-dark">{cocktail.name}</h3>
                  <span className="text-gold font-semibold">{cocktail.price} LC</span>
                </div>
                <p className="text-gold-dark font-medium mb-3">{cocktail.ingredients}</p>
                <p className="text-gray-700">{cocktail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Beers Section */}
      <section className="py-16 bg-beige">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title flex items-center justify-center gap-2">
              <Beer className="h-8 w-8 text-gold" /> Bières
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Une sélection de bières locales et internationales pour accompagner votre repas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {beers.map((beer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-green-dark">{beer.name}</h3>
                  <span className="text-gold font-semibold">{beer.price} LC</span>
                </div>
                <p className="text-gray-700">{beer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wine & Spirits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Wines Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="section-title flex items-center justify-center gap-2">
                  <Wine className="h-8 w-8 text-gold" /> Vins
                </h2>
                <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
                <p className="text-lg">
                  Notre cave à vin propose une sélection raffinée pour accompagner vos plats.
                </p>
              </div>
              
              <div className="space-y-6">
                {wines.map((wine, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-beige pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-semibold text-green-dark">{wine.name}</h3>
                      <span className="text-gold font-semibold">{wine.price} LC</span>
                    </div>
                    <p className="text-gold-dark font-medium mb-1">{wine.origin}</p>
                    <p className="text-gray-700">{wine.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Spirits Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="section-title flex items-center justify-center gap-2">
                  <Coffee className="h-8 w-8 text-gold" /> Spiritueux
                </h2>
                <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
                <p className="text-lg">
                  Découvrez notre collection de spiritueux premium pour les connaisseurs.
                </p>
              </div>
              
              <div className="space-y-6">
                {spirits.map((spirit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-beige pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-semibold text-green-dark">{spirit.name}</h3>
                      <span className="text-gold font-semibold">{spirit.price} LC</span>
                    </div>
                    <p className="text-gray-700">{spirit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mixologist CTA */}
      <section className="py-16 bg-green-dark text-white text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Le Bar Vous Attend</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Venez découvrir notre bar et déguster nos créations. Nos barmans se feront un plaisir de vous conseiller et de préparer votre boisson préférée.
            </p>
            <a href="#" className="btn btn-primary">
              Voir la Carte Complète
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BarCocktails;