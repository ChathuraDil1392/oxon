import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import banner from '../assets/banner_3_1.png';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaViber } from 'react-icons/fa';
import Map from './Map';

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  const fadeLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const fadeRight: Variants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFade: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <motion.section
        className="relative text-white py-20 px-6 sm:px-12 md:px-24 min-h-120 flex items-center bg-blue-900 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Your content */}
        </div>
      </motion.section>

      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}
      <section className='bg-[#000b2f] text-white py-16 px-6 sm:px-12 md:px-24'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <motion.div
            className='lg:col-span-5 flex flex-col justify-between'
            variants={fadeLeft}
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              {/* Heading */}
              <motion.div variants={itemFade}>
                <p className='text-amber-400 uppercase tracking-widest text-lg font-semibold mb-4'>
                  Contact Oxon Maldives
                </p>

                <motion.div
                  className='border-t-2 border-amber-500 h-2 w-10'
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 40,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className='text-3xl sm:text-4xl font-bold tracking-tight mb-6 mt-6'
                variants={itemFade}
              >
                Tell us what you need to{' '}
                <motion.span
                  className='text-blue-500 inline-block'
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  Solve.
                </motion.span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className='text-gray-300 text-base sm:text-sm md:text-md max-w-2xl leading-relaxed mb-12'
                variants={itemFade}
              >
                Give us a little context about your organisation and what you
                are looking to achieve. Our team will direct your enquiry to the
                right people.
              </motion.p>

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}
              <motion.div
                className='space-y-5 pt-6 border-t border-blue-500'
                variants={staggerContainer}
              >
                {/* Email */}
                <motion.div
                  className='flex items-center gap-3 text-sm text-gray-300'
                  variants={itemFade}
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Mail className='w-5 h-5 text-amber-400 shrink-0' />

                  <a
                    href='mailto:sales@oxon.mv'
                    className='hover:underline font-bold'
                  >
                    sales@oxon.mv
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className='flex items-center gap-3 text-sm text-gray-300'
                  variants={itemFade}
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Phone className='w-5 h-5 text-amber-400 shrink-0' />

                  <a
                    href='tel:+9603333773'
                    className='hover:underline font-bold'
                  >
                    +960 3333773 or +960 7543773
                  </a>
                </motion.div>

                {/* Address */}
                <motion.div
                  className='flex items-center gap-3 text-sm text-gray-300'
                  variants={itemFade}
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <MapPin className='w-5 h-5 text-amber-400 shrink-0' />

                  <span className='font-bold'>
                    Ma. Kandubalaage, Ground Floor, Nikagas Hingun, Male,
                    Maldives
                  </span>
                </motion.div>

                {/* =================================================
                    SOCIAL MEDIA
                ================================================= */}
                <motion.div
                  className='flex items-center gap-4 pt-3'
                  variants={itemFade}
                >
                  {/* Facebook */}
                  <motion.a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-blue-600 hover:border-blue-600 border border-white rounded-md p-1 transition-colors'
                    aria-label='Facebook'
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <FiFacebook className='w-5 h-5' />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 border border-white hover:text-red-600 hover:border-red-600 rounded-md p-1 transition-colors'
                    aria-label='Instagram'
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <FaInstagram className='w-5 h-5' />
                  </motion.a>

                  {/* Viber */}
                  <motion.a
                    href='viber://chat?number=%2B9607543773'
                    className='text-gray-300 border border-white hover:text-purple-600 hover:border-purple-600 rounded-md p-1 transition-colors'
                    aria-label='Viber'
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <FaViber className='w-5 h-5' />
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href='https://wa.me'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 border border-white hover:text-green-400 hover:border-green-400 rounded-md p-1 transition-colors'
                    aria-label='WhatsApp'
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <FaWhatsapp className='w-5 h-5' />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT COLUMN - FORM
          ===================================================== */}
          <motion.div
            className='lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-blue-800/50'
            variants={fadeRight}
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
              amount: 0.15,
            }}
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className='space-y-8'
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              {/* =================================================
                  ROW 1 - NAME & EMAIL
              ================================================= */}
              <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 gap-6'
                variants={itemFade}
              >
                {/* Full Name */}
                <div className='relative border-b border-gray-600 focus-within:border-amber-400 transition-colors'>
                  <label className='block text-xs font-bold text-blue-900 mb-1'>
                    Full name <span className='text-amber-600'>*</span>
                  </label>

                  <input
                    type='text'
                    name='fullName'
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className='w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none'
                  />
                </div>

                {/* Work Email */}
                <div className='relative border-b border-gray-600 focus-within:border-amber-400 transition-colors'>
                  <label className='block text-xs font-bold text-blue-900 mb-1'>
                    Work email <span className='text-amber-600'>*</span>
                  </label>

                  <input
                    type='email'
                    name='workEmail'
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    className='w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none'
                  />
                </div>
              </motion.div>

              {/* =================================================
                  ROW 2 - COMPANY & ENQUIRY TYPE
              ================================================= */}
              <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 gap-6'
                variants={itemFade}
              >
                {/* Company */}
                <div className='relative border-b border-gray-600 focus-within:border-amber-400 transition-colors'>
                  <label className='block text-xs font-bold text-blue-900 mb-1'>
                    Company <span className='text-amber-600'>*</span>
                  </label>

                  <input
                    type='text'
                    name='company'
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none'
                  />
                </div>

                {/* Enquiry Type */}
                <div className='relative border-b border-gray-600 focus-within:border-amber-400 transition-colors'>
                  <label className='block text-xs font-bold text-blue-900 mb-1'>
                    Enquiry type <span className='text-amber-600'>*</span>
                  </label>

                  <select
                    name='enquiryType'
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className='w-full bg-transparent text-blue-900 pb-2 pt-1 text-sm focus:outline-none appearance-none cursor-pointer'
                  >
                    <option
                      value=''
                      disabled
                      className='bg-blue-950 text-white'
                    >
                      Select an enquiry type
                    </option>

                    <option
                      value='partnership'
                      className='bg-blue-950 text-white'
                    >
                      Partnership
                    </option>

                    <option
                      value='digital-solutions'
                      className='bg-blue-950 text-white'
                    >
                      Digital Solutions
                    </option>

                    <option
                      value='customer-operations'
                      className='bg-blue-950 text-white'
                    >
                      Customer Operations
                    </option>
                  </select>

                  <div className='absolute right-0 bottom-2 pointer-events-none text-xs text-blue-900'>
                    ▼
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  ROW 3 - INDUSTRY
              ================================================= */}
              <motion.div
                className='relative border-b border-gray-600 focus-within:border-amber-400 transition-colors'
                variants={itemFade}
              >
                <label className='block text-xs font-bold text-blue-900 mb-1'>
                  Industry
                </label>

                <select
                  name='industry'
                  value={formData.industry}
                  onChange={handleChange}
                  className='w-full bg-transparent pb-2 pt-1 text-sm focus:outline-none appearance-none cursor-pointer text-blue-900'
                >
                  <option value='' className='bg-blue-950 text-white'>
                    Select your industry (optional)
                  </option>

                  <option value='tech' className='bg-blue-950 text-white'>
                    Technology
                  </option>

                  <option value='finance' className='bg-blue-950 text-white'>
                    Finance & Banking
                  </option>

                  <option value='telecom' className='bg-blue-950 text-white'>
                    Telecommunications
                  </option>
                </select>

                <div className='absolute right-0 bottom-2 pointer-events-none text-xs text-blue-900'>
                  ▼
                </div>
              </motion.div>

              {/* =================================================
                  ROW 4 - MESSAGE
              ================================================= */}
              <motion.div
                className='relative border-b border-gray-600 focus-within:border-amber-400 transition-colors'
                variants={itemFade}
              >
                <label className='block text-xs font-bold text-blue-900 mb-1'>
                  Message <span className='text-amber-600'>*</span>
                </label>

                <textarea
                  name='message'
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full bg-transparent text-blue-800 pb-2 pt-1 text-sm focus:outline-none resize-none'
                />
              </motion.div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}
              <motion.div variants={itemFade}>
                <motion.button
                  type='submit'
                  className='inline-flex items-center gap-2 bg-blue-900 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-blue-950 transition-colors'
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  Send Inquiry

                  <motion.span
                    initial={{
                      x: 0,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* =================================================
                  PRIVACY NOTICE
              ================================================= */}
              <motion.p
                className='text-[11px] text-blue-900 leading-normal font-bold'
                variants={itemFade}
              >
                By submitting this form, you agree to Oxon Maldives processing
                your information in accordance with our{' '}
                <a
                  href='#'
                  className='underline hover:text-white'
                >
                  Privacy Notice
                </a>
                .
              </motion.p>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAP SECTION
      ========================================================= */}
      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <Map />
      </motion.section>
    </>
  );
};

export default ContactusPage;
