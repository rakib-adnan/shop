import React from 'react';

const Rating = ({rat}) => {
  if(rat === '5' ){
       return(
        <span className="rating-stars">
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <span className="hidden-xs">(3 Reviews)</span>
        </span>
      )
  }else if(rat === '4'){
    return(
        <span className="rating-stars">
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star"></i>
            <span className="hidden-xs">(3 Reviews)</span>
        </span>
      )
  }else if(rat === '3'){
    return(
        <span className="rating-stars">
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <span className="hidden-xs">(3 Reviews)</span>
        </span>
      )
  }else if(rat === '2'){
    return(
        <span className="rating-stars">
            <i className="ti-star full"></i>
            <i className="ti-star full"></i>
            <i className="ti-star "></i>
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <span className="hidden-xs">(3 Reviews)</span>
        </span>
      )
  }else if(rat ==='1'){
    return(
        <span className="rating-stars">
            <i className="ti-star full"></i>
            <i className="ti-star"></i>
            <i className="ti-star "></i>
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <span className="hidden-xs">(3 Reviews)</span>
        </span>
      )
  }else if(rat === '0'){
    return(
        <span className="rating-stars">
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <i className="ti-star"></i>
            <span className="hidden-xs">(3 Reviews)</span>
        </span>
      )
  }
};

export default Rating;