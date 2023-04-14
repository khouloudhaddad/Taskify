import InputField from "components/fields/InputField";
import { Link } from "react-router-dom"

export default function ResetPassword() {
  return (
    <div className="mt-8 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Reset Password
        </h4>       
        
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />
        
        <button className="linear mt-2 w-full rounded-xl bg-amber-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-amber-600 active:bg-amber-700 dark:bg-amber-400 dark:text-white dark:hover:bg-amber-300 dark:active:bg-amber-200">
          Reset Password
        </button>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-amber-500 hover:text-amber-600 dark:text-white"
          >
            Login In
          </Link>
        </div>
      </div>
    </div>
  );
}
