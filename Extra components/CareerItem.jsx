import React from 'react'

const CareerItem = ({ items }) => {
    return (
      <div className="col-lg-4 col-xxl-4 single-mega-item">
        <ul className="mega-menu-item">
          
            {/*  loop over lis */}
            {items.map((item, index) => (
                <li key={index}>
                {/* <a href={item.link}>{item.label} {item.isHot && <span className="rbt-badge-card">Hot</span>}</a> */}
                <a href={item.link}>{item.label}</a>
                </li>
            ))}

        </ul>
      </div>
    );
  };

export default CareerItem
