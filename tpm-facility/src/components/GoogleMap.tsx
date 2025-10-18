"use client";

import { MapPin } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  // TPM Group office at Kompleks Dutamas Fatmawati - Using search-based embed URL
  const mapEmbedUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kompleks%20Dutamas%20Fatmawati%20Blok%20B2%20No.%2026,%20RT.1/RW.5,%20Cipete%20Utara,%20Kec.%20Kby.%20Baru,%20Kota%20Jakarta%20Selatan,%20Daerah%20Khusus%20Ibukota%20Jakarta%2012150&t=&z=16&ie=UTF8&iwloc=B&output=embed";

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TPM Group Office Location - Kompleks Dutamas Fatmawati"
          className="w-full h-full"
        />
      </div>

      {/* Map Overlay Info */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-sm">TPM Group Head Office</h3>
            <p className="text-xs text-gray-600 leading-tight">
              Kompleks Dutamas Fatmawati Blok B2 No. 26<br />
              Jakarta Selatan 12150
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/Kompleks+Dutamas+Fatmawati+Blok+B2+No.+26,+RT.1%2FRW.5,+Cipete+Utara,+Kec.+Kby.+Baru,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12150"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex-shrink-0"
          >
            Directions
          </a>
        </div>
      </div>
    </div>
  );
}