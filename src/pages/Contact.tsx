import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, FacebookIcon, InstagramIcon } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // In a real application, you'd send this data to your backend
    alert("Message envoyé avec succès! Nous vous contacterons prochainement.");
    reset();
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
            <h1 className="section-title">Contactez-Nous</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Nous serions ravis d'entendre de vous. N'hésitez pas à nous contacter pour toute question, réservation ou commentaire.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-green-dark mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-6 mb-8">
                <div className="contact-info-item">
                  <MapPin className="h-6 w-6 text-gold" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p>Avenue Principale, Gemena, Sud-Ubangi, RDC</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <Phone className="h-6 w-6 text-gold" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p>+243 81 234 5678</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <Mail className="h-6 w-6 text-gold" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@lecentre-restaurant.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <Clock className="h-6 w-6 text-gold" />
                  <div>
                    <h3 className="font-semibold">Heures d'ouverture</h3>
                    <p>Lundi - Jeudi: 11h00 - 23h00</p>
                    <p>Vendredi - Samedi: 11h00 - 00h00</p>
                    <p>Dimanche: 12h00 - 22h00</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-green-dark mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-gold hover:bg-gold-dark text-white p-3 rounded-full transition-colors">
                  <FacebookIcon size={20} />
                </a>
                <a href="https://instagram.com" className="bg-gold hover:bg-gold-dark text-white p-3 rounded-full transition-colors">
                  <InstagramIcon size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-green-dark mb-6">Envoyez-nous un Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Le nom est requis" })}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email invalide"
                      }
                    })}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", { required: "Le sujet est requis" })}
                    className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Le message est requis" })}
                    className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Envoyer le Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-beige">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold text-green-dark mb-6 text-center">Notre Emplacement</h2>
          <div className="bg-white p-2 rounded-lg shadow-md">
            {/* In a real application, this would be an actual map embed */}
            <div className="h-96 bg-green-dark bg-opacity-10 rounded flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold">Le Centre Restaurant</h3>
                <p>Avenue Principale, Gemena, Sud-Ubangi, RDC</p>
                <p className="mt-4 text-sm italic">Carte interactive non disponible - Veuillez nous contacter pour des directions précises</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;