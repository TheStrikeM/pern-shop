import React from 'react'
import './shop.sass'
import SearchInfo from "./SearchInfo";

const Shop = () => {
    return (
        <div className={"shop"}>
            {/*Slider*/}
            <div className="devices">
                <h1>Devices</h1>
                <SearchInfo />
                <div className="devices__last">
                    <div className="devices-brands">
                        <div className="devices-brands__item">
                            <div className="devices-brands__item__tag">
                                <img src="" alt=""/>
                                <span>Brand</span>
                            </div>

                            <div className="devices-brands__item__name">
                                SAMSUNG
                            </div>

                            <div className="devices-brands__item__view">
                                <span>View</span>
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="devices-types">
                        <div className="devices-types__item">
                            <div className="devices-types__item__tag">
                                <img src="" alt=""/>
                                <span>Brand</span>
                            </div>

                            <div className="devices-types__item__name">
                                SAMSUNG
                            </div>

                            <div className="devices-types__item__view">
                                <span>View</span>
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;