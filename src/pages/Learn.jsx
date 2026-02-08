import { Link } from "react-router-dom";

const Learn = () => {
    return (
        <section className="min-h-screen bg-indigo-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6 border border-indigo-100">

                <h2 className="text-2xl md:text-3xl font-bold text-indigo-700">
                    📘 Learn More About This Project
                </h2>

                <p className="text-indigo-900 leading-relaxed">
                    This project is created purely for educational purposes to demonstrate
                    how QR codes can be generated and handled in a modern frontend
                    application using React.
                </p>

                <p className="text-indigo-900 leading-relaxed">
                    The QR codes in this application are generated using the{" "}
                    <a
                        href="https://goqr.me/api/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-medium underline hover:text-indigo-800"
                    >
                        QR Code Generator API provided by qrserver.com
                    </a>
                    . This public API allows developers to dynamically create QR codes by
                    passing data such as text or URLs through a simple HTTP request. The API
                    instantly returns a QR image without requiring any backend processing.
                </p>

                <p className="text-indigo-900 leading-relaxed">
                    To ensure proper handling of special characters and URLs, the input
                    data is encoded before being sent to the API. This prevents broken links
                    or invalid QR codes and follows best practices when working with URLs.
                </p>

                <p className="text-indigo-900 leading-relaxed">
                    Once the QR code is generated, the application provides a download
                    feature implemented using the browser’s{" "}
                    <span className="font-mono bg-indigo-100 px-1 rounded">fetch</span> API
                    and{" "}
                    <span className="font-mono bg-indigo-100 px-1 rounded">Blob</span>{" "}
                    objects. The image is fetched as binary data, converted into an object
                    URL, and then programmatically downloaded using a temporary anchor
                    element. This approach provides better control over file naming and
                    download behavior and is commonly used in real-world applications.
                </p>

                <div>
                    <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                        Key Concepts Covered
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-indigo-900">
                        <li>API integration using query parameters</li>
                        <li>State management with React hooks</li>
                        <li>Conditional rendering and loading states</li>
                        <li>Handling file downloads using Blob APIs</li>
                        <li>Building clean and responsive UIs with Tailwind CSS</li>
                    </ul>
                </div>

                <p className="text-indigo-900 leading-relaxed">
                    By combining these concepts, the project simulates a practical
                    real-world use case while keeping the implementation simple and
                    beginner-friendly.
                </p>

                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="px-10 cursor-pointer bg-sky-500 text-white py-2 rounded-lg font-medium hover:bg-sky-700 disabled:opacity-50"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Learn;
