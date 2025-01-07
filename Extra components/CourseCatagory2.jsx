import React from 'react'
import CatagoryItem from './CatagoryItem';

  const cataRow1 = [
    { label: "Healthcare", link: "#" },
    { label: "Beauty & fashion", link: "#" },
    { label: "Education & Travel", link: "#" },
  ];
  const cataRow2 = [
    { label: "Kitchen", link: "#" },
      { label: "Medical & Entertainment", link: "#" },
      { label: "Medical & Science", link: "#" },
      { label: "Tour & Travel", link: "#" },
  ];
  const cataRow3 = [
    { label: "Kitchen", link: "#" },
    { label: "Featured", link: "#" },
    { label: "Popular", link: "#" },
    { label: "Latest", link: "#" },
  ];

const CourseCatagory = () => {
  return (
    <div className="rbt-course-category rbt-section-gap overflow-hidden">
        <div className="container">

            <div className="row mb--25">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <h5 className="subtitle bg-secondary-opacity">TecNsol Course Category</h5>
                    </div>
                </div>
            </div>
            

            <div className="row">
                <div className="col-12 col-lg-12 col-xl-12">
                    <div className="rbt-categori-leftbar"></div>
                        {/* <div>
                            <CourseCataItem categories={categories} />
                        </div> */}

                        <CatagoryItem catagories={cataRow1}/>
                        <CatagoryItem catagories={cataRow2}/>
                        <CatagoryItem catagories={cataRow3}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CourseCatagory
