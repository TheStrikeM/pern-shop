import React from 'react'
import './shop.sass'
import SearchInfo from "./SearchInfo";
import ListCardDevices from "./cards/ListCardDevices";
import ShopTops from "./ShopTops";

const Shop = () => {
    return (
        <div className={"shop"}>
            {/*Slider*/}
            <div className="devices">
                <h1>Devices</h1>
                <SearchInfo />
                <ShopTops />
                <ListCardDevices />
            </div>
        </div>
    );
};

export default Shop;