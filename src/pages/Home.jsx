import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <header className="sticky top-0 flex justify-center pt-5 z-50">
                <nav className="flex items-center justify-between gap-40 px-6 md:px-12 py-3 md:py-4 rounded-[30px] bg-white/10 backdrop-blur-md text-indigo-500 shadow-lg">
                    <Link
                        to="/"
                        className="text-2xl font-bold font-mono tracking-wide hover:text-indigo-700"
                    >
                        Qrix
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center gap-10 font-semibold">
                        <Link
                            to="/qr"
                            className="hover:text-indigo-700 transition-colors"
                        >
                            Generate QR
                        </Link>
                    </div>
                </nav>
            </header>
            <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6">
                <div className=" md:max-w-3xl w-full md:px-0 px-10 flex flex-col items-center justify-center text-center gap-6">
                    <h1 className="text-3xl font-bold text-indigo-700">
                        👋 Learn QR Code Generation the Simple Way
                    </h1>

                    <p className="text-gray-600">
                        A beginner-friendly React project that demonstrates how to generate and download QR codes using modern web technologies.
                    </p>

                   <div className="flex items-center gap-4">
                     <Link
                        to="/qr"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Go to QR Generator
                    </Link>
                    <Link
                        to="/learn"
                        className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                    >
                        Learn more
                    </Link>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Home;
