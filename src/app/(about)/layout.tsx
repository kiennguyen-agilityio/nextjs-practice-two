import React from 'react';
import { InSightRoll } from '@/components';

const insights = [
  '20+ Projects Completed',
  '3+ Years of Freelancing',
  '99% Client Satisfaction',
  '20K+ Subscribers',
  'Authored In-Depth Course on Educative',
  'Contributed as a Technical Course Reviewer 📝',
  'Recipient of the Hackernoon Noonies Award 🏆',
];

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InSightRoll insights={insights} />
      {children}
    </main>
  );
};

export default AboutLayout;
