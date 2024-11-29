import React from 'react';
import Layout from "../components/Layout";
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white pt-[30vh]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
          
          <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Email</h2>
              <Link 
                href="mailto:edcsalter@gmail.com"
                className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                edcsalter@gmail.com
              </Link>
            </div>

            <div className="text-gray-300">
              <p className="mb-4">
                I&apos;m always interested in discussing new iOS development opportunities 
                and collaborations. Feel free to reach out!
              </p>
              <p>
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;