import React, { useState } from "react";

const AboutUs = () => {

    const new_style = {
        top_margin: {
            marginTop: '1%',
            marginLeft: '1%'
        },
        icons_margin: {
            marginTop: '1%',
            marginRight: '1%'
        }
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card flex-xl-column flex-sm-row flex-column">
                        <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                            <h2 className="text-primary mb-0" style={new_style.top_margin}> How we work? </h2>
                            <p style={new_style.top_margin}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Contact Us </h2>
                            <p style={new_style.top_margin}>
                                <ul>
                                    <li> <i className="fa fa-globe fa-2x" style={new_style.icons_margin}></i> www.example.com </li>
                                    <li> <i className="fa fa-phone fa-2x" style={new_style.icons_margin}></i> +92 123 123456789 </li>
                                    <li> <i className="fa fa-map-marker fa-2x" style={new_style.icons_margin}></i> Islamabad, Pakistan </li>
                                </ul>
                            </p>
                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Follow Us </h2>
                            <p style={new_style.top_margin}>
                                <ul>
                                    <li> <i className="fa fa-whatsapp fa-2x" style={new_style.icons_margin}></i> Whatsapp </li>
                                    <li> <i className="fa fa-instagram fa-2x" style={new_style.icons_margin}></i> Instagram </li>
                                    <li> <i className="fa fa-facebook-official fa-2x" style={new_style.icons_margin}></i> Facebook </li>
                                </ul>
                            </p>
                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Developed By </h2>
                            <p style={new_style.top_margin}>Infinity Bits</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutUs;
