import { useState } from "react";
import banner from '../assets/banner_3_1.png'
import { Mail, Phone, MapPin } from 'lucide-react';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaViber } from 'react-icons/fa';

interface FormData {
    fullName: string;
    workEmail: string;
    company: string;
    enquiryType: string;
    industry: string;
    message: string;
}
const ContactusPage = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        workEmail: '',
        company: '',
        enquiryType: '',
        industry: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Submitted:', formData);
    };


    return (
        <>

            <section
                className="relative text-white py-20 px-6 sm:px-12 md:px-24 min-h-120 flex items-center bg-blue-900 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: ` url(${banner})`
                }}
            >
                <div className="max-w-6xl mx-auto w-full">
                    {/* Your content (text, titles, buttons) goes here instead of the old img tag */}
                </div>
            </section>



            <section className="bg-blue-950 text-white py-16 px-6 sm:px-12 md:px-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Info Text & Contacts */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Updated headline text here */}
                            <p className="text-amber-400 uppercase tracking-widest text-lg font-semibold mb-4">
                                Contact Oxon Tech
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                                Tell us what you need to <span className="text-blue-500">Solve.</span>
                            </h2>
                            <p className="text-gray-300 text-base sm:text-sm md:text-md max-w-2xl leading-relaxed mb-12">
                                Give us a little context about your organisation and what you are looking to achieve.
                                Our team will direct your enquiry to the right people.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-5 pt-6 border-t border-blue-500">
                                {/* Existing Contact Info */}
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                                    <a href="mailto:sales@oxon.mv" className="hover:underline font-bold">
                                        sales@oxon.mv
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                                    <a href="tel:+9603333773" className="hover:underline font-bold ">
                                        +960 3333773 or +960 7543773
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                                    <span className="font-bold">Ma. Kandubalaage, Ground Floor, Nikagas Hingun, Male, Maldives</span>
                                </div>

                                {/* Social Media Row */}
                                <div className="flex items-center gap-4 pt-3 ">
                                    {/* Facebook */}
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300  hover:text-blue-600 hover:border-blue-600 border border-white  rounded-md p-1 transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <FiFacebook className="w-5 h-5" />
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300  border border-white hover:text-red-600 hover:border-red-600 rounded-md p-1 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram className="w-5 h-5" />
                                    </a>

                                    {/* Viber */}
                                    <a
                                        href="viber://chat?number=%2B9607543773"
                                        className="text-gray-300  border border-white hover:text-purple-600 hover:border-purple-600 rounded-md p-1 transition-colors"
                                        aria-label="Viber"
                                    >
                                        <FaViber className="w-5 h-5" />
                                    </a>

                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300  border border-white hover:text-green-400 hover:border-green-400 rounded-md p-1 transition-colors"
                                        aria-label="WhatsApp"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Box */}
                    <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-blue-800/50">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative border-b border-gray-600 focus-within:border-amber-400 transition-colors">
                                    <label className="block text-xs font-bold text-blue-900 mb-1">Full name <span className="text-amber-600">*</span></label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none"
                                    />
                                </div>

                                <div className="relative border-b border-gray-600 focus-within:border-amber-400 transition-colors">
                                    <label className="block text-xs font-bold text-blue-900 mb-1">Work email <span className="text-amber-600">*</span></label>
                                    <input
                                        type="email"
                                        name="workEmail"
                                        required
                                        value={formData.workEmail}
                                        onChange={handleChange}
                                        className="w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Company & Enquiry Type */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative border-b border-gray-600 focus-within:border-amber-400 transition-colors">
                                    <label className="block text-xs font-bold text-blue-900 mb-1">Company <span className="text-amber-600">*</span></label>
                                    <input
                                        type="text"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none"
                                    />
                                </div>

                                <div className="relative border-b border-gray-600 focus-within:border-amber-400 transition-colors">
                                    <label className="block text-xs font-bold text-blue-900 mb-1">Enquiry type <span className="text-amber-600">*</span></label>
                                    <select
                                        name="enquiryType"
                                        required
                                        value={formData.enquiryType}
                                        onChange={handleChange}
                                        className="w-full bg-transparent text-blue-900 pb-2 pt-1 text-sm focus:outline-none appearance-none cursor-pointer "
                                    >
                                        <option value="" disabled className="bg-blue-950 text-white">Select an enquiry type</option>
                                        <option value="partnership" className="bg-blue-950 text-white">Partnership</option>
                                        <option value="digital-solutions" className="bg-blue-950 text-white">Digital Solutions</option>
                                        <option value="customer-operations" className="bg-blue-950 text-white">Customer Operations</option>
                                    </select>
                                    <div className="absolute right-0 bottom-2 pointer-events-none text-xs text-blue-900">▼</div>
                                </div>
                            </div>

                            {/* Row 3: Industry */}
                            <div className="relative border-b border-gray-600 focus-within:border-amber-400 transition-colors">
                                <label className="block text-xs font-bold text-blue-900 mb-1">Industry</label>
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full bg-transparent  pb-2 pt-1 text-sm focus:outline-none appearance-none cursor-pointer text-blue-900"
                                >
                                    <option value="" className="bg-blue-950 text-white">Select your industry (optional)</option>
                                    <option value="tech" className="bg-blue-950 text-white">Technology</option>
                                    <option value="finance" className="bg-blue-950 text-white">Finance & Banking</option>
                                    <option value="telecom" className="bg-blue-950 text-white">Telecommunications</option>
                                </select>
                                <div className="absolute right-0 bottom-2 pointer-events-none text-xs text-blue-900">▼</div>
                            </div>

                            {/* Row 4: Message */}
                            <div className="relative border-b border-gray-600 focus-within:border-amber-400 transition-colors">
                                <label className="block text-xs font-bold text-blue-900 mb-1">Message <span className="text-amber-600">*</span></label>
                                <textarea
                                    name="message"
                                    required
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 bg-blue-900 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-blue-950  hover: border  transition-colors"
                                >
                                    Send enquiry <span>→</span>
                                </button>
                            </div>

                            {/* Privacy Disclaimer */}
                            <p className="text-[11px] text-blue-900 leading-normal font-bold">
                                By submitting this form, you agree to Oxon Tech processing your information in accordance with our{' '}
                                <a href="#" className="underline hover:text-white">Privacy Notice</a>.
                            </p>
                        </form>
                    </div>

                </div>
            </section>

        </>
    )
}

export default ContactusPage