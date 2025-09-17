// app/components/MapSection.jsx

export const MapSection = () => {
  return (
    // This is a dark section, no vertical padding, so the map fills it
    <section className="bg-black">
      <div className="w-full h-[500px]">
        {/*
          IMPORTANT: Replace this iframe src with your ACTUAL Google Maps embed code
          for a main map showing ALL your locations.
        */}
        <iframe
          src="http://googleusercontent.com/maps/embed?pb=!1m14!1m8!1m3!1d13904548.84711394!2d34.8517!3d38.9637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b51a5c6f6f36e1%3A0x33b9f4a0b8f0b1e!2sTurkey!5e0!3m2!1sen!2sus!4v1678886812345!5m2!1sen!2sus" // <-- REPLACE THIS
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} // Elegant styling: grayscale + inverted (dark mode)
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Spetraluce Global Office Map"
        ></iframe>
      </div>
    </section>
  );
};