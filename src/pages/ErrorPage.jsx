import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-2">
            <h1 className="text-4xl font-semibold ">Page not found</h1>
            <p className="text-red-600 text-2xl pb-4 font-montserrat">ERROR 404</p>
            <Link to='/' className="bg-main text-white px-4 py-2 rounded-md font-montserrat">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;