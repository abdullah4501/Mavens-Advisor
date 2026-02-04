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
          
          {/* Info Card Overlay */}
          <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
            <div style={{
              backgroundColor: 'white',
              margin: '10px',
              padding: '1px',
              boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px',
              borderRadius: '2px'
            }}>
              <div className="place-card place-card-large">
                <div className="place-desc-large">
                  <div className="place-name">{placeName}</div>
                  <div className="address">{address}</div>
                </div>
                
                <div className="navigate">
                  <div className="navigate">
                    <a
                      aria-label="Get directions to this location on Google Maps."
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://maps.google.com/maps/dir//${encodedPlaceName}+${encodedAddress}/@${lat},${lng},${zoom}z/data=!4m5!4m4!1m0!1m2!1m1!1s${placeId}`}
                      className="navigate-link"
                    >
                      <div className="icon navigate-icon"></div>
                      <div className="navigate-text">Directions</div>
                    </a>
                  </div>
                  <div className="tooltip-anchor">
                    <div className="tooltip-tip-outer"></div>
                    <div className="tooltip-tip-inner"></div>
                    <div className="tooltip-content">
                      <div>Get directions to this location on Google Maps.</div>
                    </div>
                  </div>
                </div>
                
                <div className="review-box">
                  <div aria-hidden="true" className="review-number">
                    {rating.toFixed(1)}
                  </div>
                  <div
                    aria-label={`Rated ${rating} out of 5`}
                    role="img"
                    className="rating-stars"
                  >
                    {[...Array(fullStars)].map((_, i) => (
                      <div key={`full-${i}`} className="icon rating-star rating-full-star"></div>
                    ))}
                    {hasHalfStar && (
                      <div className="icon rating-star rating-half-star"></div>
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                      <div key={`empty-${i}`} className="icon rating-star rating-empty-star"></div>
                    ))}
                  </div>
                  <a
                    aria-label={`${reviewCount} reviews`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://search.google.com/local/reviews?placeid=${placeId}&q=${encodedLocation}&hl=en&gl=PK`}
                    className="review-box-link"
                  >
                    {reviewCount} reviews
                  </a>
                </div>
                
                <div className="bottom-actions">
                  <div className="google-maps-link">
                    <a
                      aria-label="View larger map"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://maps.google.com/maps?ll=${lat},${lng}&z=${zoom}&t=m&hl=en-US&gl=US&mapclient=embed&cid=${placeId}`}
                    >
                      View larger map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapEmbed;