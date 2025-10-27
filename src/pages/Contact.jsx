import React from 'react';
import { Mail } from 'lucide-react';
import Card from '../components/Card.jsx';
import pranavImg from '../assets/contacts/pranav.jpg';
import sangeethImg from '../assets/contacts/sangeeth.jpg';

function Contact() {
  const contacts = [
    {
      name: 'K Pranav Eswar',
      email: 'pranavartist1@gmail.com',
      linkedin: 'https://www.linkedin.com/in/k-pranav-eswar1/',
      photo: pranavImg,
    },
    {
      name: 'Sangeeth Santhosh',
      email: 'sangeethsanthoshsaa@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sangeethsanthoshsa/',
      photo: sangeethImg,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Have questions or need support? Reach out to the team.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 rounded-full overflow-hidden w-16 h-16 mr-4 border-2 border-cyan-500">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    {contact.name}
                  </a>
                </h2>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Contact;
