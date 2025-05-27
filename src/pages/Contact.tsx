import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        'service_ku8nqib', // Remplacez par votre Service ID
        'template_y7j7n7o', // Remplacez par votre Template ID
        formRef.current,
        'OMFrf84GFrC1C7-BT' // Remplacez par votre Public Key
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Votre message a été envoyé avec succès !'
        });
        formRef.current.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-black mb-12 font-coolvetica">
          Contactez-nous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Formulaire de contact */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-century">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-century"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-century">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-century"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-century">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-century"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-century">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-century"
                  placeholder="Votre message"
                ></textarea>
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 font-century ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800'
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-coolvetica">
                Nos coordonnées
              </h3>
              <p className="text-gray-600 font-century">
                Adresse de l'agence<br />
                Code postal, Ville<br />
                France
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-coolvetica">
                Contact
              </h3>
              <p className="text-gray-600 font-century">
                Téléphone : +33 X XX XX XX XX<br />
                Email : contact@narcisse.fr
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-coolvetica">
                Horaires
              </h3>
              <p className="text-gray-600 font-century">
                Lundi - Vendredi : 9h - 18h<br />
                Samedi - Dimanche : Fermé
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 