'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  command?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, command, children, className = '' }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-card border border-border rounded-lg overflow-hidden font-mono shadow-lg shadow-magenta/10 ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(59, 130, 246, 0.01) 100%)',
        borderColor: 'rgba(59, 130, 246, 0.3)',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.1), 0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Terminal Header */}
      <div 
        className="bg-secondary border-b px-4 py-3"
        style={{
          borderBottomColor: 'rgba(59, 130, 246, 0.2)',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.02) 100%)'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
            </div>
            {title && (
              <span className="text-sm text-muted-foreground ml-4">{title}</span>
            )}
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6">
        {command && (
          <div className="mb-4">
            <span className="text-magenta font-semibold">$ </span>
            <span className="text-primary font-medium">{command}</span>
          </div>
        )}
        <div className="text-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
}