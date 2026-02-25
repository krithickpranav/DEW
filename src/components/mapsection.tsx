import React from 'react';

interface MapSectionProps {
  lat: number;
  lng: number;
}

const MapSection: React.FC<MapSectionProps> = ({ lat, lng }: MapSectionProps) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      {/* Map Placeholder */}
      <div className="h-96 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
          <p className="text-gray-600 mb-4">Location: Deepam Engineering Works</p>
          <p className="text-sm text-gray-500">Tiruchengode, Tamil Nadu</p>
        </div>
      </div>

      {/* Google Maps Button */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          <span className="mr-2">Open in Google Maps</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MapSection;
