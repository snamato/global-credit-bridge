'use client';

import React, { useState } from 'react';
import { Tabs } from '@radix-ui/react-tabs';
import { Globe, FileText, CheckCircle2, ChevronRight, Lock, Clock, DollarSign, Mail, Phone, School } from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [uploadedFiles, setUploadedFiles] = useState({
    passport: null,
    bankStatements: null,
    creditReport: null
  });
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: ''
  });

  const LandingPage = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">Bring Your Credit History to the U.S.</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Don't start from zero. Transform your international credit history into a U.S. credit score and unlock financial opportunities.
        </p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-orange-500 mt-1 mr-3" />
          <div>
            <h3 className="font-semibold text-orange-800">Starting Fresh Isn't Fair</h3>
            <p className="text-orange-700">
              As an international student, your existing credit history doesn't automatically transfer to the U.S. 
              This means no credit cards, difficult apartment applications, and high security deposits.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <Globe className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Import Your History</h3>
            <p className="text-gray-600">Connect your home country's banking data securely</p>
          </div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <DollarSign className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Get U.S. Credit Score</h3>
            <p className="text-gray-600">Your history is converted to U.S. credit standards</p>
          </div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <CheckCircle2 className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Unlock Opportunities</h3>
            <p className="text-gray-600">Access credit cards, apartments, and better rates</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <button 
          className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          onClick={() => setCurrentPage('upload')}
        >
          Start Building U.S. Credit Now
          <ChevronRight className="inline ml-2" />
        </button>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Lock className="h-4 w-4 mr-1" />
          Your data is encrypted and secure
        </div>
      </div>
    </div>
  );

  // ... I'll provide the rest of the code in the next message to make it easier to manage ...

  const DocumentUploadPage = () => {
    const requiredDocs = [
      {
        type: 'passport',
        title: 'Passport or Government ID',
        description: 'Upload a clear photo or scan of your valid ID',
        accepted: '.jpg, .png, .pdf'
      },
      {
        type: 'bankStatements',
        title: 'Bank Statements',
        description: 'Last 6 months of statements from your home country',
        accepted: '.pdf'
      },
      {
        type: 'creditReport',
        title: 'Credit Report (if available)',
        description: 'Credit report from your home country',
        accepted: '.pdf'
      }
    ];

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="border rounded-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center">Upload Your Documents</h2>
            <p className="text-center text-gray-600 mt-2">
              Help us understand your credit history by providing these documents
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Let's gather your documents</h3>
                  <p className="text-gray-700">
                    To accurately translate your credit history, we'll need a few documents from your home country.
                    All documents are encrypted and securely processed.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {requiredDocs.map(doc => (
                <div 
                  key={doc.type}
                  className={`border rounded-lg transition-all ${
                    uploadedFiles[doc.type] ? 'border-green-500 bg-green-50' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          Accepted formats: {doc.accepted}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {uploadedFiles[doc.type] ? (
                          <>
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <button 
                              className="px-3 py-1 border rounded hover:bg-gray-50"
                              onClick={() => setUploadedFiles(prev => ({...prev, [doc.type]: null}))}
                            >
                              Remove
                            </button>
                          </>
                        ) : (
                          <>
  <input
  type="file"
  id={`file-${doc.type}`}
  className="hidden"
  accept={doc.accepted}
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({...prev, [doc.type]: file}));
    }
  }}
/>
<button 
  className="px-3 py-1 border rounded hover:bg-gray-50"
  onClick={(e) => {
    const fileInput = e.currentTarget.previousElementSibling;
    if (fileInput) fileInput.click();
  }}
>
  Upload
</button>
</>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-50"
                onClick={() => setCurrentPage('landing')}
              >
                Back
              </button>
              <button
                className={`px-4 py-2 rounded text-white ${
                  Object.values(uploadedFiles).some(file => file)
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                onClick={() => setCurrentPage('contact')}
                disabled={!Object.values(uploadedFiles).some(file => file)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      setCurrentPage('success');
    };

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="border rounded-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center">Almost There!</h2>
            <p className="text-center text-gray-600 mt-2">
              Provide your contact details and we'll start processing your documents
            </p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="w-full p-2 border rounded-md"
                    value={contactDetails.firstName}
                    onChange={e => setContactDetails(prev => ({...prev, firstName: e.target.value}))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="w-full p-2 border rounded-md"
                    value={contactDetails.lastName}
                    onChange={e => setContactDetails(prev => ({...prev, lastName: e.target.value}))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border rounded-md"
                  value={contactDetails.email}
                  onChange={e => setContactDetails(prev => ({...prev, email: e.target.value}))}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-2 border rounded-md"
                  value={contactDetails.phone}
                  onChange={e => setContactDetails(prev => ({...prev, phone: e.target.value}))}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                  University
                </label>
                <input
                  id="university"
                  className="w-full p-2 border rounded-md"
                  value={contactDetails.university}
                  onChange={e => setContactDetails(prev => ({...prev, university: e.target.value}))}
                  required
                />
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  className="px-4 py-2 border rounded hover:bg-gray-50"
                  onClick={() => setCurrentPage('upload')}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded text-white ${
                    Object.values(contactDetails).every(value => value.trim())
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!Object.values(contactDetails).every(value => value.trim())}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const SuccessPage = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border rounded-lg p-12 text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Application Submitted!</h2>
          <p className="text-gray-600">
            We've received your documents and will begin processing them. You'll receive an email
            confirmation shortly with next steps.
          </p>
        </div>
        <button 
          className="px-4 py-2 border rounded hover:bg-gray-50"
          onClick={() => setCurrentPage('landing')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'upload':
        return <DocumentUploadPage />;
      case 'contact':
        return <ContactPage />;
      case 'success':
        return <SuccessPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      {renderPage()}
    </main>
  );
}