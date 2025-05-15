import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
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
            <h1 className="section-title">À Propos du Centre</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Découvrez notre histoire, notre mission et ce qui fait du Centre un lieu unique à Gemena.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-green-dark mb-6">Notre Histoire</h2>
              <p className="mb-4">
                Fondé en 2019, Le Centre est né de la passion d'un groupe d'amis déterminés à transformer l'expérience gastronomique à Gemena. Face à l'absence d'un établissement proposant une cuisine raffinée dans un cadre élégant, l'idée d'un restaurant haut de gamme s'est imposée comme une évidence.
              </p>
              <p className="mb-4">
                Après des mois de préparation minutieuse, Le Centre a ouvert ses portes au cœur de la ville. Dès son inauguration, le restaurant s'est distingué par sa cuisine d'exception, son service attentionné et son ambiance chaleureuse. Le nom "Le Centre" reflète non seulement notre emplacement géographique, mais aussi notre ambition d'être le point central de la vie sociale et culinaire de Gemena.
              </p>
              <p>
                Au fil des années, nous avons tissé des liens précieux avec la communauté locale, les producteurs régionaux et les visiteurs internationaux. Aujourd'hui, Le Centre est fier d'être reconnu comme une destination incontournable pour tous ceux qui cherchent à vivre une expérience gastronomique mémorable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3964020/pexels-photo-3964020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Équipe du restaurant Le Centre"
                className="rounded-lg shadow-lg h-[500px] w-full object-cover"
              />
              <div className="absolute -bottom-6 right-8 bg-gold text-green-dark p-4 rounded-lg shadow-lg">
                <p className="font-serif italic text-xl">"TOUT MENE AU CENTRE"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-green-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6">Notre Mission & Nos Valeurs</h2>
            <p className="text-lg">
              Au Centre, nous sommes guidés par des principes forts qui façonnent chaque aspect de notre service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg border border-gold"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gold">Notre Mission</h3>
              <p className="mb-4">
                Notre mission est d'offrir une expérience culinaire d'exception qui célèbre la richesse des saveurs tout en créant un espace où les moments de convivialité se transforment en souvenirs inoubliables.
              </p>
              <p>
                Nous nous engageons à:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>Proposer des plats de qualité supérieure préparés avec passion</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>Fournir un service attentionné et personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>Créer une ambiance chaleureuse et élégante</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>Contribuer positivement à notre communauté</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg border border-gold"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gold">Nos Valeurs</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gold-light mb-1">Excellence</h4>
                    <p>Nous visons l'excellence dans chaque aspect de notre service, de la cuisine à l'accueil.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gold-light mb-1">Hospitalité</h4>
                    <p>Nous créons un environnement chaleureux où chaque client se sent spécial et bienvenu.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gold-light mb-1">Authenticité</h4>
                    <p>Nous restons fidèles à nos racines tout en innovant pour offrir des expériences uniques.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Chef Section */}
      <section className="py-16 bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-serif font-bold text-green-dark mb-6">Notre Chef</h2>
              <p className="mb-4">
                À la tête de notre cuisine, le Chef Jean-Pierre Mutombo apporte plus de 15 ans d'expérience culinaire internationale. Formé dans les cuisines des grands restaurants européens, il a développé un style unique qui marie techniques classiques et saveurs africaines.
              </p>
              <p className="mb-4">
                Sa philosophie culinaire repose sur l'utilisation de produits locaux de qualité supérieure, transformés avec créativité pour offrir des plats mémorables. Le Chef Mutombo travaille en étroite collaboration avec les producteurs locaux pour sélectionner les meilleurs ingrédients de saison.
              </p>
              <p>
                Sa passion pour la cuisine et son dévouement sans faille à l'excellence font de chaque repas au Centre une expérience extraordinaire. Sa signature se retrouve dans chaque plat, où tradition et innovation se rencontrent harmonieusement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Chef du restaurant Le Centre"
                className="rounded-lg shadow-lg h-[500px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;