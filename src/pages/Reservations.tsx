import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, Utensils, Check } from 'lucide-react';

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
}

const Reservations: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const onSubmit = (data: ReservationFormData) => {
    console.log(data);
    // In a real application, you'd send this data to your backend
    setIsSubmitted(true);
    reset();
    
    // Reset form state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  // Generate time slots from 11:00 to 22:00
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 22; hour++) {
      const hourFormatted = hour.toString().padStart(2, '0');
      slots.push(`${hourFormatted}:00`);
      if (hour < 22) {
        slots.push(`${hourFormatted}:30`);
      }
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  // Get tomorrow's date as the minimum date for reservations
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

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
            <h1 className="section-title">Réservez Votre Table</h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg">
              Réservez votre table au Centre et préparez-vous à vivre une expérience gastronomique inoubliable.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Reservation Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-green-dark mb-6">Informations de Réservation</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-lg mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500 rounded-full p-1">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Réservation Confirmée!</h3>
                  </div>
                  <p>
                    Merci pour votre réservation. Nous vous avons envoyé un email de confirmation.
                    Si vous avez des questions, n'hésitez pas à nous contacter au +243 81 234 5678.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", { required: "Le numéro de téléphone est requis" })}
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="date"
                        id="date"
                        min={minDate}
                        {...register("date", { required: "La date est requise" })}
                        className={`form-input ${errors.date ? 'border-red-500' : ''}`}
                      />
                      {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
                      <select
                        id="time"
                        {...register("time", { required: "L'heure est requise" })}
                        className={`form-input ${errors.time ? 'border-red-500' : ''}`}
                      >
                        <option value="">Sélectionnez une heure</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Nombre de personnes</label>
                      <select
                        id="guests"
                        {...register("guests", { required: "Le nombre de personnes est requis" })}
                        className={`form-input ${errors.guests ? 'border-red-500' : ''}`}
                      >
                        <option value="">Sélectionnez</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                        ))}
                        <option value="11">Plus de 10 personnes</option>
                      </select>
                      {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">Occasion (optionnel)</label>
                      <select
                        id="occasion"
                        {...register("occasion")}
                        className="form-input"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="Anniversaire">Anniversaire</option>
                        <option value="Anniversaire de mariage">Anniversaire de mariage</option>
                        <option value="Dîner d'affaires">Dîner d'affaires</option>
                        <option value="Fête">Fête</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Demandes spéciales (optionnel)</label>
                    <textarea
                      id="specialRequests"
                      rows={3}
                      {...register("specialRequests")}
                      className="form-input"
                      placeholder="Allergies, préférences diététiques, arrangements spéciaux..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Utensils size={18} />
                    Confirmer la Réservation
                  </button>
                </form>
              )}
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-dark p-8 rounded-lg text-white"
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-gold">Informations sur les Réservations</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gold-light">Disponibilité</h3>
                    <p>Nous acceptons les réservations jusqu'à 30 jours à l'avance. Pour les groupes de plus de 10 personnes, veuillez nous contacter directement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gold-light">Politique d'annulation</h3>
                    <p>Vous pouvez annuler ou modifier votre réservation jusqu'à 24 heures avant l'heure prévue sans frais. Pour toute annulation tardive, des frais peuvent s'appliquer.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gold-light">Événements privés</h3>
                    <p>Pour les événements privés ou les célébrations spéciales, nous offrons des options personnalisées. Contactez-nous directement pour discuter de vos besoins spécifiques.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gold mb-4">Réservations par téléphone</h3>
                <p className="mb-2">Si vous préférez réserver par téléphone, appelez-nous au:</p>
                <p className="text-xl font-semibold text-gold-light">+243 81 234 5678</p>
                <p className="mt-4 text-sm italic">Pendant nos heures d'ouverture</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservations;