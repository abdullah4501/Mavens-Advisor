import React from 'react';

interface GoogleMapEmbedProps {
  location: string;
  placeName?: string;
  address?: string;
  rating?: number;
  reviewCount?: string;
  placeId?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  location = "London Eye, London, United Kingdom",
  placeName = "London Eye",
  address = "Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom",
  rating = 4.5,
  reviewCount = "197,128",
  placeId = "ChIJc2nSALkEdkgRkuoJJBfzkUI",
  lat = 51.498057,
  lng = -0.023389,
  zoom = 10
}) => {
  const encodedLocation = encodeURIComponent(location);
  const encodedPlaceName = encodeURIComponent(placeName);
  const encodedAddress = encodeURIComponent(address.replace(/,/g, ''));

  // Generate full stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <section className="contact-iframe-section">
      <div className="container-fluid p-0">
        <div className="iframe-wrap">
          <iframe
            src={`https://maps.google.com/maps?q=${encodedLocation}&t=m&z=${zoom}&output=embed&iwloc=near`}
            title={location}
            aria-label={location}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          
          
        </div>
      </div>
    </section>
  );
};

export default GoogleMapEmbed;