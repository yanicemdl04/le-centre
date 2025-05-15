import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Beef, Coffee, Wine } from 'lucide-react';

// Menu data
const menuData = {
  pates: [
    {
      name: "Bœuf Teriyaki",
      description: "Bœuf, carottes, poivre, nouilles, teriyaki, oignons verts, cajou",
      price: 19
    },
    {
      name: "Fettuccine Alfredo",
      description: "Fettuccine, sauce blanche, champignons, poulet, câpres, parmesan",
      price: 23
    },
    {
      name: "Spaghetti Bolognese",
      description: "Spaghetti, sauce bolognaise, persil, parmesan",
      price: 18
    },
    {
      name: "Quatre Fromages",
      description: "Penne, sauce blanche, quatre fromages",
      price: 23
    },
    {
      name: "Crevette au Curry Doux",
      description: "Fettuccine, crevettes, sauce crème au curry, noisettes",
      price: 23
    },
    {
      name: "Pesto Poulet",
      description: "Penne, sauce crème au pesto, poulet, noix, parmesan",
      price: 23
    },
    {
      name: "Ravioli Truffes",
      description: "Ravioli, sauce aux truffes, parmesan, tomates séchées, champignons",
      price: 28
    },
    {
      name: "Al Arrabiata",
      description: "Penne, sauce marinara, tomates cerises, parmesan",
      price: 18
    }
  ],
  platsPrincipaux: [
    {
      name: "Poulet Grillé au Citron",
      description: "Blanc de poulet grillé, légumes sautés, pommes de terre grillées, sauce à l'ail aux champignons",
      price: 22
    },
    {
      name: "Rib-Eye",
      description: "Rib-eye grillé, brocoli, pommes de terre épicées",
      price: 35
    },
    {
      name: "Cossaiea",
      description: "Crevettes à l'ail, au piment et citron",
      price: 35
    },
    {
      name: "Ribs de Bœuf",
      description: "Ribs de bœuf grillées, salade coleslaw, sauce BBQ",
      price: 28
    },
    {
      name: "Filet de Bœuf",
      description: "Filet grillé, légumes sautés, purée de pommes de terre",
      price: 36
    },
    {
      name: "Poisson Grillé",
      description: "Filet de capitaine, pico de gallo, légumes, purée de pommes de terre, sauce crémeuse au basilic",
      price: 28
    },
    {
      name: "Teriyaki de Saumon Grillé au Riz",
      description: "Saumon grillé, légumes, riz blanc servi avec sauce Teriyaki",
      price: 35
    },
    {
      name: "Fish n Chips",
      description: "Filet de poisson tempura, salade coleslaw, sauce tartare",
      price: 25
    },
    {
      name: "Chicken Butter",
      description: "Poulet grillé, sauce café de Paris, frites, salade verte, pain",
      price: 22
    },
    {
      name: "Steak Tomahawk",
      description: "Tomahawk grillé, brocoli, pomme de terre épicée",
      price: 59
    },
    {
      name: "Butter Chicken",
      description: "Poulet, riz, légumes, chips de Papadum servis avec une sauce au beurre",
      price: 20
    },
    {
      name: "Beef Butter Skillet",
      description: "Filet de bœuf, sauce café de Paris, légumes, salade verte, pain",
      price: 28
    }
  ],
  boissonsFroides: [
    {
      name: "Petite Bouteille d'Eau",
      price: 3
    },
    {
      name: "Grande Bouteille d'Eau",
      price: 6
    },
    {
      name: "Eau Sohat",
      price: 10
    },
    {
      name: "Eau Pétillante Eden",
      price: 4
    },
    {
      name: "Eau Pétillante Perrier",
      price: 6
    },
    {
      name: "Tonique",
      price: 5
    },
    {
      name: "Soft Drink",
      price: 3
    },
    {
      name: "Zero Soft Drink",
      price: 4
    },
    {
      name: "Redbull",
      price: 7
    },
    {
      name: "Thé Glacé",
      price: 5
    },
    {
      name: "Milkshake (Vanille, Fraise, Chocolat)",
      price: 12
    },
    {
      name: "Café Glacé",
      price: 9
    },
    {
      name: "Frappé au Caramel",
      price: 9
    },
    {
      name: "Coco Café",
      price: 9
    }
  ],
  boissonsChaudesEtJus: [
    {
      name: "Expresso",
      price: 4
    },
    {
      name: "Expresso Doppio",
      price: 5
    },
    {
      name: "Cappuccino",
      price: 7
    },
    {
      name: "Café Latte",
      price: 7
    },
    {
      name: "Café Mocha",
      price: 7
    },
    {
      name: "Thé & Infusions",
      price: 5
    },
    {
      name: "Chocolat Chaud",
      price: 7
    },
    {
      name: "Jus d'Orange",
      price: 7
    },
    {
      name: "Jus de Carotte",
      price: 7
    },
    {
      name: "Jus de Maracudja",
      price: 9
    },
    {
      name: "Jus d'Ananas",
      price: 7
    },
    {
      name: "Limonade",
      price: 9
    },
    {
      name: "Limonade à la Menthe",
      price: 10
    },
    {
      name: "Limonade à la Pastèque",
      price: 10
    }
  ]
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <>
      <div className="h-24"></div> {/* Spacer for fixed header */}
      
      <section className="py-16 bg-beige">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="section-title">Notre Menu</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Découvrez notre sélection de plats préparés avec passion par notre Chef. Des saveurs riches et des ingrédients de qualité pour satisfaire tous les palais.
            </p>
          </motion.div>

          {/* Menu Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-gold text-green-dark' 
                  : 'bg-white text-green-dark hover:bg-gold-light'
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setActiveCategory('pates')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeCategory === 'pates' 
                  ? 'bg-gold text-green-dark' 
                  : 'bg-white text-green-dark hover:bg-gold-light'
              }`}
            >
              <UtensilsCrossed size={16} /> Pâtes
            </button>
            <button
              onClick={() => setActiveCategory('platsPrincipaux')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeCategory === 'platsPrincipaux' 
                  ? 'bg-gold text-green-dark' 
                  : 'bg-white text-green-dark hover:bg-gold-light'
              }`}
            >
              <Beef size={16} /> Plats Principaux
            </button>
            <button
              onClick={() => setActiveCategory('boissonsFroides')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeCategory === 'boissonsFroides' 
                  ? 'bg-gold text-green-dark' 
                  : 'bg-white text-green-dark hover:bg-gold-light'
              }`}
            >
              <Wine size={16} /> Boissons Froides
            </button>
            <button
              onClick={() => setActiveCategory('boissonsChaudesEtJus')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeCategory === 'boissonsChaudesEtJus' 
                  ? 'bg-gold text-green-dark' 
                  : 'bg-white text-green-dark hover:bg-gold-light'
              }`}
            >
              <Coffee size={16} /> Boissons Chaudes & Jus
            </button>
          </div>
          
          {/* Pâtes Section */}
          {(activeCategory === 'all' || activeCategory === 'pates') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="menu-category flex items-center gap-2">
                <UtensilsCrossed size={24} className="text-gold" /> Pâtes
              </h2>
              <div className="menu-grid">
                {menuData.pates.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="menu-item"
                  >
                    <div className="flex justify-between gap-4">
                      <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                      <span className="text-gold font-semibold whitespace-nowrap">{item.price} LC</span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Plats Principaux Section */}
          {(activeCategory === 'all' || activeCategory === 'platsPrincipaux') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="menu-category flex items-center gap-2">
                <Beef size={24} className="text-gold" /> Plats Principaux
              </h2>
              <div className="menu-grid">
                {menuData.platsPrincipaux.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="menu-item"
                  >
                    <div className="flex justify-between gap-4">
                      <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                      <span className="text-gold font-semibold whitespace-nowrap">{item.price} LC</span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Boissons Froides Section */}
          {(activeCategory === 'all' || activeCategory === 'boissonsFroides') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="menu-category flex items-center gap-2">
                <Wine size={24} className="text-gold" /> Boissons Froides
              </h2>
              <div className="menu-grid">
                {menuData.boissonsFroides.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="menu-item"
                  >
                    <div className="flex justify-between gap-4">
                      <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                      <span className="text-gold font-semibold whitespace-nowrap">{item.price} LC</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Boissons Chaudes et Jus Section */}
          {(activeCategory === 'all' || activeCategory === 'boissonsChaudesEtJus') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="menu-category flex items-center gap-2">
                <Coffee size={24} className="text-gold" /> Boissons Chaudes & Jus Frais
              </h2>
              <div className="menu-grid">
                {menuData.boissonsChaudesEtJus.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="menu-item"
                  >
                    <div className="flex justify-between gap-4">
                      <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                      <span className="text-gold font-semibold whitespace-nowrap">{item.price} LC</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;