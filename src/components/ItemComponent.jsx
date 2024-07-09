import React from "react";
import ReactDOM from "react-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemCss.css";

// Thêm các icon vào thư viện
library.add(fas, far, fab);

const ItemComponent = () => {
    return (
        <section className="grid_item py-10">
            <div className="container">
                <div className="content grid grid-cols-3 gap-10 text-black">
                    <div className="item px-4 py-5 bg-gray-50 text-center">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon="fa-solid fa-box-archive"
                                // size="xl"
                            />
                        </div>
                        <h3 className="text-xl font-bold mt-10">
                            Fresh New Layout
                        </h3>
                        <p className="text-md pt-3 pb-6 ">
                            With Bootstrap 5, we've created a fresh new layout
                            for this template!
                        </p>
                    </div>
                    <div className="item px-4 py-5 bg-gray-50 text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
                        </div>
                        <h3 className="text-xl font-bold mt-10">
                            Fresh To Download
                        </h3>
                        <p className="text-md pt-3 pb-6 ">
                            As always, Start Bootstrap has a powerful collectin
                            of free templates.
                        </p>
                    </div>
                    <div className="item  px-4 py-5 bg-gray-50 text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-credit-card" />
                        </div>
                        <h3 className="text-xl font-bold mt-10">
                            Jumbotron hero header
                        </h3>
                        <p className="text-md pt-3 pb-6 ">
                            The heroic part of this template is the jumbotron
                            hero header!
                        </p>
                    </div>
                    <div className="item  px-4 py-5 bg-gray-50 text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
                        </div>
                        <h3 className="text-xl font-bold mt-10">
                            Feature boxes
                        </h3>
                        <p className="text-md pt-3 pb-6">
                            We've created some custom feature boxes using
                            Bootstrap icons!
                        </p>
                    </div>
                    <div className="item  px-4 py-5 bg-gray-50 text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-code" />
                        </div>
                        <h3 className="text-xl font-bold mt-10">
                            Simple clean code
                        </h3>
                        <p className="text-md pt-3 pb-6 ">
                            We keep our dependencies up to date and squash bugs
                            as they come!
                        </p>
                    </div>
                    <div className="item  px-4 py-5 bg-gray-50 text-center">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                        </div>
                        <h3 className="text-xl font-bold mt-10">
                            A name you trust
                        </h3>
                        <p className="text-md pt-3 pb-6 ">
                            Start Bootstrap has been the leader in free
                            Bootstrap templates since 2013!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemComponent;
