'use client';

import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DownloadPDFButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/carlos-marcial-resume.pdf';
    link.download = 'carlos-marcial-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="fixed top-4 right-4 z-50 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-md px-3 py-2 flex items-center gap-2 text-sm font-mono transition-colors duration-200 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Download size={16} />
      <span className="hidden sm:inline">Download PDF</span>
    </motion.button>
  );
}