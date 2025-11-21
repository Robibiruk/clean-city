import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapView from './components/MapView';
import ReportsPage from './components/ReportsPage'


// --- 5. Main Application Component ---
export default function App() {
    // The main component now renders the structurally enhanced children.
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 font-sans text-white">
            <Header />

            <main className="flex-grow max-w-7xl w-full mx-auto py-6">
                {/* FIX: Removed lg:grid-cols-3 to force all main blocks to stack vertically (grid-cols-1) 
                    This ensures the Pitch Deck displays below the main features. 
                */}
                <div className="grid grid-cols-1 gap-6">
                    {/* BLOCK 1: Main Application Features (Map and Reports) */}
                    <div className="space-y-6">
                        <MapView />
                        <ReportsPage />
                    </div>

                    {/* BLOCK 2: Pitch Deck Embed (Iframe) - Now full width and below Block 1 */}
                    <div className="p-6 bg-gray-800 m-6 rounded-xl shadow-2xl flex flex-col">
                        <h2 className="text-xl font-semibold text-teal-400 mb-4">Project Overview (Pitch Deck)</h2>
                        {/* Fixed height (h-[550px]) maintained for readability */}
                        <div className="w-full h-[550px] overflow-hidden rounded-lg border-2 border-gray-700">
                            <iframe 
                                src="https://gamma.app/embed/8j4m5zhqo40wfqj" 
                                style={{ width: '100%', height: '100%' }} // Iframe takes 100% of the fixed parent height
                                allow="fullscreen" 
                                title="Clean City Pitch Deck"
                            ></iframe>
                        </div>
                        <p className="text-sm text-gray-500 mt-3 text-center">
                            The Clean City project deck, embedded via Gamma.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}