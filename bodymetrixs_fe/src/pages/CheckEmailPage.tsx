import { Link } from 'react-router-dom';

const CheckEmailPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-50 p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="bg-white rounded-xl shadow-apple-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-4">Check Your Email</h2>
          <p className="text-neutral-600 mb-6">
            Thank you for registering! We've sent a confirmation link to your email address. Please click the link to activate your account.
          </p>
          <p className="text-neutral-500 text-sm mb-6">
            If you don't see the email, please check your spam folder.
          </p>
          <Link 
            to="/login" 
            className="w-full block text-center mt-2 py-3 rounded-lg border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-100 transition-colors"
          >
            Back to Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckEmailPage; 