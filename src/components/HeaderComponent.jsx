import React from "react";

const HeaderComponent = () => {
    return (
        <header className="py-4 bg-black text-white">
            <div className="container">
                <div className=" flex justify-between">
                    <div className="text-2xl font-bold">Start Boostrap</div>
                    <nav>
                        <ul className="flex justify-between gap-3">
                            <li className="text-white">Home</li>
                            <li className="opacity-70">About</li>
                            <li className="opacity-70">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
