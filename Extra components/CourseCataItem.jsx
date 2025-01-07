import React from 'react'

const CourseCataItem = ({ categories }) => {
    return (
      <div className="rbt-categori-leftbar">
        {categories.map((category, index) => (
          <div key={index} className="rbt-categori-list">
            <a className="blank" href="#"></a> {/* Placeholder link */}
            {category.map((item, idx) => (
              <a key={idx} href={item.link}>
                {item.label}
              </a>
            ))}
            <a className="blank" href="#"></a> {/* Placeholder link */}
          </div>
        ))}
      </div>
    );
  };

export default CourseCataItem
