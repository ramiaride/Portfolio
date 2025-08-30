import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './ShowcaseItem.css';
import '@fontsource/montserrat/800.css';

function ShowcaseItem({
  title,
  subtitle,
  description,
  DescMaxWidth,
  mainImage = '',
  carouselImages,
  descMarginTop = 15
}) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    loop: false,
    containScroll: 'trimSnaps',
  });

  return (
    <div className="ShowcaseItem-container">
      <div className="ShowcaseItem-header">
        <div className="ShowcaseItem-text">
          <h1 className="ShowcaseItem-title">{title}</h1>
          <h2 className="ShowcaseItem-subtitle">{subtitle}</h2>
          <p
            className="ShowcaseItem-description"
            style={{
              marginTop: descMarginTop,
              maxWidth: DescMaxWidth == null ? "100%" : DescMaxWidth,
            }}
          >
            {description}
          </p>
        </div>

        {mainImage && (
          <div className="ShowcaseItem-main-image">
            <img src={mainImage} alt={title} />
          </div>
        )}
      </div>

      <div className="ShowcaseItem-carousel embla" ref={emblaRef}>
        <div className="embla__container">
          {carouselImages.map((img, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{ width: img.width || 400 }}
            >
              <div
                className="carousel-img-wrapper"
                style={{ height: (img.height || 300) + 50 }} // 50px reserved for title
              >
                {img.title && (
                  <div className="carousel-img-title">{img.title}</div>
                )}
                <img
                  src={img.src}
                  alt={img.alt || `carousel-${index}`}
                  className="carousel-img"
                  style={{
                    width: img.width || '100%',
                    height: img.height || '300px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseItem;
