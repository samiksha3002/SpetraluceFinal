// app/components/MapSection.jsx

// app/components/MapSection.jsx

export const MapSection = () => {
  return (
    // This is a dark section, no vertical padding, so the map fills it
    <section className="bg-black">
      <div className="w-full h-[500px]">
        {/*
          IMPORTANT: Replace the src attribute with your ACTUAL Google Maps embed code.
          You can get this by:
          1. Going to Google Maps.
          2. Finding your location(s).
          3. Clicking 'Share', then 'Embed a map', and copying the iframe code.
        */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.259966144577!2d-73.98785318459424!3d40.74844057932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593b4f6b3e9f%3A0x6b49e392d84a7e94!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1628173456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Office Location on Google Maps"
        ></iframe>
      </div>
    </section>
  );
};