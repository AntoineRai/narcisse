import React from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-black mb-12 font-coolvetica">
          Contactez-nous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Formulaire de contact */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-century">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  name="email"
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
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-century"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-century"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
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