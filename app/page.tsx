'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Lock, 
  Clock, 
  DollarSign 
} from 'lucide-react';

// Types for better type safety
type DocumentType = 'passport' | 'bankStatements' | 'creditReport';
type ContactDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
};

export default function CreditTransferApp() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'upload' | 'contact' | 'success'>('landing');
  const [uploadedFiles, setUploadedFiles] = useState<Record<DocumentType, File | null>>({
    passport: null,
    bankStatements: null,
    creditReport: null
  });
  const [contactDetails, setContactDetails] = useState<ContactDetailsType>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: ''
  });

  const LandingPage = () => (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-900">
          Transform Your International Credit History
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Don&apos;t start from zero. Convert your international credit history 
          into a U.S. credit score and unlock financial opportunities.
        </p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start">
          <Clock className="h-8 w-8 text-orange-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-orange-800 mb-2">
              International Students Deserve Fair Credit
            </h3>
            <p className="text-orange-700">
              Your existing credit history does not automatically transfer to the U.S. 
              This means challenges with credit cards, apartment applications, 
              and higher security deposits.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[{
          icon: Globe,
          title: 'Import Your History',
          description: 'Connect banking data from your home country securely'
        }, {
          icon: DollarSign,
          title: 'Get U.S. Credit Score',
          description: 'Convert your history to U.S. credit standards'
        }, {
          icon: CheckCircle2,
          title: 'Unlock Opportunities',
          description: 'Access credit cards, apartments, and better rates'
        }].map(({ icon: Icon, title, description }) => (
          <div key={title} className="border rounded-lg p-6 text-center">
            <Icon className="mx-auto mb-4 h-10 w-10 text-blue-500" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <button 
          onClick={() => setCurrentPage('upload')}
          className="bg-blue-500 text-white px-10 py-4 rounded-lg text-lg 
          font-semibold hover:bg-blue-600 transition-colors flex 
          items-center justify-center mx-auto"
        >
          Start Building U.S. Credit
          <ChevronRight className="ml-2" />
        </button>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Lock className="mr-2 h-5 w-5" />
          Your data is encrypted and secure
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {currentPage === 'landing' && <LandingPage />}
    </main>
  );
}
