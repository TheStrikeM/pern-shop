import React from 'react';
import Brand from '../../../assets/Type.svg'
import Type from '../../../assets/Brand.svg'
import Arrow from '../../../assets/Arrow.svg'

const ShopTopsItem = ({type, name}: {type: string, name: string}) => {

    const formattedType = `devices-${type.toLowerCase()}s__item`
    return (
        <div className={formattedType}>
            <div className={`${formattedType}__tag`}>
                <img src={type == "Brand" ? Brand : Type} alt=""/>
                <span>{type}</span>
            </div>

            <div className={`${formattedType}__name`}>
                {name}
            </div>

            <div className={`${formattedType}__view`}>
                <span>View</span>
                <img src={Arrow} alt=""/>
            </div>
        </div>
    );
};

export default ShopTopsItem;