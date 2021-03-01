import React from 'react';
import ShopTopsItem from "./ShopTopsItem";

const ShopTops = () => {
    return (
        <div className="devices__last">
            <div className="devices-brands">
                <ShopTopsItem type={"Brand"} name={"SAMSUNG"} />
                <ShopTopsItem type={"Brand"} name={"Lenovo"} />
                <ShopTopsItem type={"Brand"} name={"Apple"} />
            </div>
            <div className="devices-types">
                <ShopTopsItem type={"Type"} name={"Phones"} />
                <ShopTopsItem type={"Type"} name={"Computers"} />
                <ShopTopsItem type={"Type"} name={"Refrigerators"} />
            </div>
        </div>
    );
};

export default ShopTops;