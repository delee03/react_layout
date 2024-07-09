import React from "react";

const styleBtn =
    "d-block py-3 px-5 bg-sky-500 rounded-xl text-lg text-white my-3  hover:bg-sky-700";
const BannerComponent = () => {
    return (
        <section className="my-16">
            <div className="container">
                <div className="banner-content bg-gray-50 rounded-lg px-8 py-16 text-center">
                    <h1 className="text-title font-bold">A warm welcome!</h1>
                    <p className="text-xl py-5 ">
                        Bootstrap utility classes are used to create this
                        jumbotron since the old component has been removed from
                        the framework. Why create custom CSS when you can use
                        utilities?
                    </p>
                    <button className={styleBtn}>
                        <a href="#">Call To Action</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BannerComponent;
