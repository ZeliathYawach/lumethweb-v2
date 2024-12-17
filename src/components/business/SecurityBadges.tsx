import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle } from 'lucide-react';

export function SecurityBadges() {
  return (
    <section className="py-12">
      <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
        <h3 className="text-xl font-semibold text-center mb-8 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Enterprise-Grade Security & Compliance
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4"
          >
            <Shield className="w-8 h-8 text-amber-400" />
            <div>
              <h4 className="font-semibold text-white">Secure Platform</h4>
              <p className="text-sm text-gray-400">256-bit SSL encryption</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <Lock className="w-8 h-8 text-amber-400" />
            <div>
              <h4 className="font-semibold text-white">Data Protection</h4>
              <p className="text-sm text-gray-400">GDPR & CCPA compliant</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <CheckCircle className="w-8 h-8 text-amber-400" />
            <div>
              <h4 className="font-semibold text-white">Verified Business</h4>
              <p className="text-sm text-gray-400">Identity verification</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}