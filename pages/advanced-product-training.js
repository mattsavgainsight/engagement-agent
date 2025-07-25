// pages/advanced-product-training.js
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { sender: 'agent', text: 'Dear Jane,\n\nCongratulations on your promotion! Sales Enablement is a huge part of our curriculum. Let’s chat!' },
  { sender: 'agent', text: 'Also, amazing pictures of the river. I’m sure Joe and Jane in the Community would love to hear more….' },
  { sender: 'jane', text: 'Thank you for reaching out. I’m very excited and would love to hear more. I’m most concerned about training my reps to move pipeline from consider to close.' },
  { sender: 'agent', text: 'Dear Jane,\n\nExcellent. I think our Course on “Pipeline Acceleration” would be very helpful. Can I sign you up?' },
  { sender: 'jane', text: 'Yes, please.' },
  { sender: 'agent', text: 'Dear Jane,\n\nYou are enrolled. ' },
  { sender: 'agent', text: 'Click here to begin. And welcome back!', isLink: true }
];

export default function AdvancedProductTraining() {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        setVisibleMessages((prev) => [...prev, messages[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md h-[36rem] rounded-3xl shadow-xl p-4 flex flex-col space-y-2 overflow-y-auto">
        <AnimatePresence>
          {visibleMessages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-xl px-4 py-3 text-sm whitespace-pre-wrap max-w-[85%] ${
                msg.sender === 'agent'
                  ? 'bg-gray-200 text-gray-900 self-start'
                  : 'bg-skilljar-blue text-white self-end'
              }`}
            >
              {msg.isLink ? (
                <span className="font-bold text-blue-600 underline cursor-pointer">
                  {msg.text}
                </span>
              ) : (
                msg.text
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
