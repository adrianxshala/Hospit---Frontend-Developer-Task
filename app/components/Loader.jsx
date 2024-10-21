import React from "react";


const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="loader-container">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>

            <style jsx>{`
                .loader-container {
                    display: flex;
                    gap: 10px; /* Space between squares */
                }

                .square {
                    width: 30px; /* Width of the square */
                    height: 30px; /* Height of the square */
                    background-color: #3498db; /* Color of the square */
                    animation: scale 0.6s infinite alternate; /* Animation */
                }

                .square:nth-child(2) {
                    animation-delay: 0.2s; /* Delay for the second square */
                }

                .square:nth-child(3) {
                    animation-delay: 0.4s; /* Delay for the third square */
                }

                @keyframes scale {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.5); /* Increase size of squares */
                    }
                }
            `}</style>
        </div>
    );
};

export default Loader;
