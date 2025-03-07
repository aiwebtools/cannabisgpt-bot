
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is Cannabis GPT?",
    answer: "Cannabis GPT is an AI-powered assistant that provides information about cannabis strains, potency calculations, regulatory information, and cultivation advice - all enhanced with web search capabilities and YouTube video integration."
  },
  {
    question: "Is Cannabis GPT legal to use?",
    answer: "Cannabis GPT is intended for educational and informational purposes only, to be used by adults 21+ in jurisdictions where cannabis is legal. Users must comply with all local, state, and federal laws regarding cannabis."
  },
  {
    question: "Who can use Cannabis GPT?",
    answer: "Cannabis GPT is restricted to adults aged 21 and older, and is intended for use only in jurisdictions where cannabis is legal."
  },
  {
    question: "What kind of information can Cannabis GPT provide?",
    answer: "Cannabis GPT can provide information about strain genetics, potency calculations, regulatory information, cultivation advice, and more. It combines AI knowledge with web search capabilities for comprehensive information."
  },
  {
    question: "Can Cannabis GPT help with Hemp farming and applications?",
    answer: "Absolutely! Since Hemp is Cannabis, Cannabis GPT is an excellent resource for Hemp farmers and businesses. It can provide valuable information on Hemp cultivation, processing, regulations, CBD extraction, industrial applications, textiles, and more Hemp-related topics."
  },
  {
    question: "Does using Cannabis GPT mean I'm using cannabis?",
    answer: "No. Cannabis GPT is an informational tool. Using it doesn't constitute using, possessing, distributing, or cultivating cannabis. It's designed for research and educational purposes only."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyber-dark to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-cyber-green mr-2" />
            <h2 className="text-3xl md:text-4xl font-cyber text-white">Frequently Asked Questions</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about Cannabis GPT, its features, and legal usage guidelines.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glassmorphism border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-4 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-cyber-green" />
                ) : (
                  <Plus className="h-5 w-5 text-cyber-green" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
            className="cyber-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GET STARTED WITH CANNABIS GPT
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyber-dark to-transparent"></div>
    </section>
  );
};

export default FAQ;
