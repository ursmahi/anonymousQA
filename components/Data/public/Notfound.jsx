import React from 'react'
import Head from 'next/head'
export default function Notfound() {
  return (
    <div>
      <Head>
        <title>Question Not Found</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="Logo.png" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Question Not Found
            </h2>
          </div>
          <div>
            <ul>
              <li>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.293 14.707a1 1 0 010-1.414L9.586 8 4.293 2.707a1 1 0 111.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    Please check the url and try again.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <a href="/" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v7.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 11.586V4a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}