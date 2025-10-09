'use client';

import { useState } from 'react';

interface Location {
  id: string;
  name: string;
  city: string;
  region: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapUrl: string;
  streetViewUrl?: string;
}

interface GoogleMapProps {
  locations: Location[];
}

export function GoogleMap({ locations }: GoogleMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  return (
    <div className="w-full">
      {/* Map Display */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
        <div className="relative w-full" style={{ paddingBottom: '50%' }}>
          <iframe
            src={`https://www.google.com/maps/d/embed?mid=1KcvTubVu6jxFhGyJd&ehbc=2E312F`}
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Warehouse Locations Map"
          />
        </div>
      </div>

      {/* Location Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setSelectedLocation(location)}
            className={`text-left p-4 rounded-lg border-2 transition-all ${
              selectedLocation.id === location.id
                ? 'border-blue-600 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-start">
              <div className="text-2xl mr-3">📍</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.region}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Location Detail */}
      {selectedLocation && (
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md border border-blue-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            {selectedLocation.name}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-gray-600 font-medium w-24">City:</span>
              <span className="text-gray-900">{selectedLocation.city}</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-600 font-medium w-24">Region:</span>
              <span className="text-gray-900">{selectedLocation.region}</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-600 font-medium w-24">Address:</span>
              <span className="text-gray-900">{selectedLocation.address}</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-600 font-medium w-24">Coords:</span>
              <span className="text-gray-900 font-mono text-sm">
                {selectedLocation.coordinates.lat.toFixed(6)}, {selectedLocation.coordinates.lng.toFixed(6)}
              </span>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={selectedLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View on Google Maps
            </a>
            
            {selectedLocation.streetViewUrl && (
              <a
                href={selectedLocation.streetViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Street View
              </a>
            )}
            
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

