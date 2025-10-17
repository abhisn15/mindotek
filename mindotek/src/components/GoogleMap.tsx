"use client";

import { useState } from "react";

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
  iframeUrl: string;
  streetViewUrl?: string;
}

interface GoogleMapProps {
  locations: Location[];
}

export function GoogleMap({ locations }: GoogleMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );

  return (
    <div className="w-full">
      {/* Location Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setSelectedLocation(location)}
            className={`group text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
              selectedLocation.id === location.id
                ? "border-red-600 bg-gradient-to-br from-red-50 to-orange-50 shadow-xl scale-105"
                : "border-red-100 bg-white hover:border-red-300 hover:shadow-lg hover:-translate-y-1"
            }`}
          >
            <div className="flex items-start">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 shadow-md transition-all duration-300 ${
                  selectedLocation.id === location.id
                    ? "bg-gradient-to-br from-red-500 to-red-600 scale-110"
                    : "bg-gradient-to-br from-red-400 to-red-500 group-hover:scale-110"
                }`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3
                  className={`font-bold mb-1 transition-colors ${
                    selectedLocation.id === location.id
                      ? "text-red-600"
                      : "text-gray-900 group-hover:text-red-600"
                  }`}
                >
                  {location.city}
                </h3>
                <p className="text-sm text-gray-600">{location.region}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Map Display */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg my-8">
        <div className="relative w-full" style={{ paddingBottom: "50%" }}>
          <iframe
            src={selectedLocation.iframeUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${selectedLocation.name} - Warehouse Location Map`}
            allowFullScreen
          />
        </div>
      </div>

      {/* Selected Location Detail */}
      {selectedLocation && (
        <div className="mt-8 bg-gradient-to-br from-red-50 via-orange-50 to-white rounded-2xl p-8 shadow-2xl border-2 border-red-100">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {selectedLocation.name}
              </h3>
              <p className="text-red-600 font-medium">Selected Location</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-red-100">
              <span className="text-gray-600 font-medium text-sm">City</span>
              <p className="text-gray-900 font-semibold text-lg">
                {selectedLocation.city}
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-red-100">
              <span className="text-gray-600 font-medium text-sm">Region</span>
              <p className="text-gray-900 font-semibold text-lg">
                {selectedLocation.region}
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-red-100 sm:col-span-2">
              <span className="text-gray-600 font-medium text-sm">Address</span>
              <p className="text-gray-900 font-semibold">
                {selectedLocation.address}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={selectedLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              View on Google Maps
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-red-600 border-2 border-red-200 rounded-xl hover:bg-red-50 hover:border-red-300 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
