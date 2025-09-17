// app/components/GeneralContactForm.jsx

export const GeneralContactForm = () => {
  return (
    // This new section is on a clean white background
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Centered Title */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold 
                         text-gray-900 dark:text-gray-100">
           Write Us A Message
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Can't find what you're looking for? Send us a general message and 
            our central team will route you to the right person.
          </p>
        </div>

        {/* Centered, "Designed" Form */}
        <form action="#" method="POST" className="mt-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name
              </label>
              <input type="text" id="first-name" className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500" />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name
              </label>
              <input type="text" id="last-name" className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500" />
            </div>

            {/* Email (Full Width) */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input type="email" id="email" className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500" />
            </div>

            {/* Message (Full Width) */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                How can we help?
              </label>
              <textarea
                id="message"
                rows="6"
                className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
              ></textarea>
            </div>
          </div>
          
          {/* Submit Button (Centered) */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-block 
                         bg-gray-900 text-white 
                         dark:bg-white dark:text-gray-900
                         px-10 py-3 text-sm font-medium uppercase tracking-wider 
                         hover:bg-gray-700 dark:hover:bg-gray-200 
                         transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};