import React from 'react'
import CareerItem from './CareerItem';

const CareerLink = () => {
    const items1 = [
        { label: 'Style Guide', link: 'style-guide.html' },
        { label: 'Accordion', link: 'accordion.html'  },
        { label: 'Advance Tab', link: 'advancetab.html'  },
        { label: 'Brand', link: 'brand.html'  },
        { label: 'Button', link: 'button.html'  },
        { label: 'Badge', link: 'badge.html'  },
        { label: 'Card', link: 'card.html'  },
        { label: 'Call To Action', link: 'call-to-action.html'  },
      ];
      const items2 = [
        { label: 'Counter', link: 'counterup.html' },
        { label: 'Categories', link: 'category.html' },
        { label: 'Header Style', link: 'header.html' },
        { label: 'Newsletter', link: 'newsletter.html' },
        { label: 'Team', link: 'team.html' },
        { label: 'Social', link: 'social.html' },
        { label: 'List Style', link: 'list-style.html' },
        { label: 'Gallery', link: 'gallery.html' },
      ];  

      const items3 = [
        { label: 'Pricing', link: 'pricing.html' },
        { label: 'Progressbar', link: 'progressbar.html' },
        { label: 'Testimonial', link: 'testimonial.html' },
        { label: 'Service', link: 'service.html' },
        { label: 'Split Area', link: 'split.html' },
        { label: 'Search Style', link: 'search.html' },
        { label: 'Instagram Style', link: 'instagram.html' },
        { label: '& More Coming', link: '#' },
      ];


      
  return (
    <li  className="with-megamenu has-menu-child-item position-static">
        <a href="#">Career <i  className="feather-chevron-down"></i></a>

        <div  className="rbt-megamenu grid-item-3">
            <div  className="wrapper">
                <div  className="row row--15 single-dropdown-menu-presentation">
                    <CareerItem items={items1} />
                    {/* <CareerItem items={items2} /> */}
                    {/* <CareerItem items={items3} /> */}

                    <div  className="row">
                        <div  className="col-lg-12">
                            <div  className="btn-wrapper">
                                <a  className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none" href="#">
                                    <span  className="icon-reverse-wrapper">
                            <span  className="btn-text">Visit TechNsol Career Page</span>
                                    <span  className="btn-icon"><i  className="feather-arrow-right"></i></span>
                                    <span  className="btn-icon"><i  className="feather-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </li>
  )
}

export default CareerLink
