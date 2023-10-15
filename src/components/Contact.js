import {useState} from 'react';
export default function Contact()
{
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: '',
    });

    const formatPhoneNumber = (event) => {
        const inputValue = event.target.value.replace(/\D/g, '');
        const regex = /^(\d{0,3})(\d{0,3})(\d{0,4})/;
        const groups = inputValue.match(regex);

        if (groups) {
        const formattedNumber = groups
            .slice(1)
            .filter(Boolean)
            .join(' ')
            .replace(/(\d{3})(\d{4})/, '($1) $2-');
        setPhoneNumber(formattedNumber);
        } else {
        setPhoneNumber('');
        }
    };

    function validatePhoneNumber() {
        const phonePattern = /^\d{3}\s\d{3}\s\d{4}$/;
        if (phonePattern.test(phoneNumber) && phoneNumber.length === 12) {
            setError(null);
            return true;
        } 
        else {
          setError("Invalid phone number. Please enter a 10-digit number.");
          return false;
        }
    };

    const handleSubmit = () => {
        
        setSubmissionStatus('Response recorded');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });

        // Send the form data to a server here
    };

    return(
        <section id="Contact">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <form
                name="contact"
                className="lg:w-1/3 md:w-1/2 mx-auto flex flex-col w-full md:py-8 mt-8 md:mt-0"
                onSubmit={handleSubmit}>
                    <h2 className="text-white sm:text-4xl text-3xl mb-3 mt-4 font-medium title-font">
                        Hire Me
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-400">
                        Contact Number
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={phoneNumber}
                        onChange={formatPhoneNumber}
                        required
                        />
                        {error && <div className="text-red-600">{error}</div>}
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-black outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32  outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={validatePhoneNumber}
                        className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                    {submissionStatus && <div className="text-green-600">{submissionStatus}</div>}
                </form>
            </div>
      </section>
    );
}