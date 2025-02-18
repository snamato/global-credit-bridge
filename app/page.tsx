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
    <div className="container mx-auto px-4 py-8 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-blue-900">Transform Your International Credit History</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don&apos;t start from zero. Convert your international credit history into a U.S. credit score and unlock financial opportunities.</p>
      <div className="bg-orange-100 border-l-4 border-orange-500 p-4 text-orange-700 rounded-lg flex items-center">
        <Clock className="h-6 w-6 mr-2" /> <span>Your existing credit history does not automatically transfer to the U.S. This means challenges with credit cards, apartment applications, and higher security deposits.</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: 'Import Your History', description: 'Connect banking data from your home country securely' },
          { icon: DollarSign, title: 'Get U.S. Credit Score', description: 'Convert your history to U.S. credit standards' },
          { icon: CheckCircle2, title: 'Unlock Opportunities', description: 'Access credit cards, apartments, and better rates' }
        ].map(({ icon: Icon, title, description }) => (
          <div key={title} className="border rounded-lg p-6 text-center bg-white shadow">
            <Icon className="mx-auto mb-4 h-10 w-10 text-blue-500" />
            <h3 className="font-semibold mb-2 text-lg">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setCurrentPage('upload')}
        className="bg-blue-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center mx-auto"
      >
        Start Building U.S. Credit <ChevronRight className="ml-2" />
      </button>
    </div>
  );

  const UploadPage = () => (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Upload Your Documents</h2>
      {Object.entries(uploadedFiles).map(([key, file]) => (
        <div key={key} className="border rounded-lg p-4 mb-4">
          <p className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}</p>
          <input 
            type="file" 
            onChange={(e) => {
              const newFile = e.target.files?.[0] || null;
              setUploadedFiles(prev => ({ ...prev, [key]: newFile }));
            }} 
          />
          {file && <p className="text-green-600">Uploaded: {file.name}</p>}
        </div>
      ))}
      <button onClick={() => setCurrentPage('contact')} className="bg-blue-500 text-white px-6 py-2 rounded">Continue</button>
    </div>
  );

  const ContactPage = () => (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Almost There!</h2>
      <input type="text" placeholder="First Name" className="w-full mb-2 p-2 border rounded" />
      <input type="text" placeholder="Last Name" className="w-full mb-2 p-2 border rounded" />
      <input type="email" placeholder="Email Address" className="w-full mb-2 p-2 border rounded" />
      <input type="tel" placeholder="Phone Number" className="w-full mb-2 p-2 border rounded" />
      <input type="text" placeholder="University" className="w-full mb-2 p-2 border rounded" />
      <button onClick={() => setCurrentPage('success')} className="bg-blue-500 text-white px-6 py-2 rounded">Submit Application</button>
    </div>
  );

  const SuccessPage = () => (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Application Submitted!</h2>
      <p className="text-gray-600 mb-4">We have received your documents and will begin processing them. You will receive an email confirmation shortly.</p>
      <button onClick={() => setCurrentPage('landing')} className="bg-blue-500 text-white px-6 py-2 rounded">Back to Home</button>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'upload' && <UploadPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'success' && <SuccessPage />}
    </main>
  );
}
