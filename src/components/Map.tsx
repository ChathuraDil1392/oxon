export default function Map() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white p-4'>
      {/* Container echoing standard Google Maps styling */}
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-slate-200'>
        {/* Map Header bar mimicking the UI text overlay */}
        <div className='p-4 bg-white border-b border-slate-100 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-semibold text-slate-800'>
              Oxon Maldives
            </h2>
            <p className='text-sm text-slate-500'>Nikagas Hingun, Male</p>
          </div>
          <a
            href='https://maps.app.goo.gl/3zBnVSxbTxkaGcAM9'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors'
            title='Open directly in Google Maps'
          >
            {/* Standard external link icon layout */}
            <svg
              xmlns='http://w3.org'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
              />
            </svg>
          </a>
        </div>

        {/* Embedded Interactive Map Canvas */}
        <div className='relative w-full aspect-[4/3] sm:aspect-video bg-slate-200'>
          <iframe
            src='https://google.com'
            className='absolute top-0 left-0 w-full h-full border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Nassau New Providence Map'
          ></iframe>
        </div>

        {/* Footer info panel */}
        <div className='p-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400'>
          <span>Map data ©2026 Google</span>
          <a
            href='https://maps.app.goo.gl/3zBnVSxbTxkaGcAM9'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            View Larger Map
          </a>
        </div>
      </div>
    </div>
  );
}
