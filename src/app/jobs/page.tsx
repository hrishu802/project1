'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';

// Mock job data
const MOCK_JOBS = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    postedAt: '2 days ago',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'Join our backend team to build scalable APIs and services...',
    postedAt: '1 week ago',
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'CreativeMinds',
    location: 'New York, NY',
    type: 'Contract',
    salary: '$70 - $90 per hour',
    description: 'Looking for a talented UX Designer to help create beautiful user experiences...',
    postedAt: '3 days ago',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines...',
    postedAt: '1 day ago',
  },
  {
    id: 5,
    title: 'Product Manager',
    company: 'InnovateCo',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'Lead product development and work with cross-functional teams...',
    postedAt: '5 days ago',
  },
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

  // Filter jobs based on search criteria
  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = jobType === '' || job.type === jobType;
    const matchesLocation = location === '' || job.location.includes(location);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Perfect Job</h1>
        
        {/* Search and filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Job title, company, or keywords"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                id="job-type"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="City, state, or remote"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Job listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                    <p className="text-gray-600">{job.company} • {job.location}</p>
                    <div className="mt-2 flex items-center">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {job.type}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">{job.postedAt}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-lg font-medium text-gray-900">{job.salary}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
                <div className="mt-6">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/apply/${job.id}`}
                    className="ml-6 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-lg text-gray-600">No jobs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setJobType('');
                  setLocation('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 