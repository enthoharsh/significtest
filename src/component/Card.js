import React, { useState, useEffect } from "react";
import api from "../api/colleges.json";
import Style from "./card.module.css";

const Card = () => {
  const [data, setData] = useState(api.colleges);
  useEffect(() => {
      
  console.log(window.scrollY);return () => {
      
    }
  }, )
  

//   const data2 = data[0];

  return (
    <>
    {
        data.slice(0,10).map((data2,ind) => {
            return(
                <div key={ind} className={Style.cardParent}>
                    {
                        data2.promoted ? <div className={Style.promotionDiv}>
                        <div className={Style.promotionArrow}>

                        </div><div className={Style.promotionTag}>PROMOTED</div>
                    </div> : ''
                    }
                    
        <div className={Style.imgbox}>
          <img src={data2.image} alternate="" />
          <div className={Style.afterimgboxdata}>
            <div className={Style.bottomheadings}>
              <div className={Style.headbox}>
                <span className={Style.headings}>{data2.tags[0]}</span>
                <span className={Style.headings}>{data2.tags[1]}</span>
              </div>
              <p className={Style.rankhead}> {data2.ranking} </p>
            </div>
            <div className={Style.topRatingBox}>
              <div className={Style.div1}>
                <h3>{data2.rating}</h3>
                <h4>/5</h4>
              </div>
              <h4 className={Style.ratingRemark}>{data2.rating_remarks}</h4>
            </div>
          </div>
        </div>
        <div>
          <div className={Style.clgHeadingDiv}>
            <div>
              <h2 className={Style.clgHead}>{data2.college_name}</h2>
              <span  className={Style.darkStar}>&#9733;&#9733;&#9733;&#9733;</span>
              <span className={Style.lightStar}>&#9733;</span>
            </div>
            <div className={Style.priceLabelDiv}>
              <span className={Style.oriPrice}><strike>₹ {data2.original_fees}</strike></span>
              <div className={Style.disPerDiv}><div className={Style.arrDiv}></div>
              <span>&bull; {data2.discount}</span></div>
            </div>
          </div>
          <div className={Style.nearestPlaceDiv}>
            <div>
              <p className={Style.nearestHead}>
                
                {data2.nearest_place[0]} | <span>{data2.nearest_place[1]}</span>
              </p>
            </div>
            <div>
              <h3 className={Style.cost}>{data2.discounted_fees}</h3>
              <p className={Style.perSem}>{data2.fees_cycle}</p>
            </div>
          </div>
          <div>
            <p className={Style.famousNear}>
              <span>93% Match : </span> {data2.famous_nearest_places}
            </p>
          </div>
          <div className={Style.lastDiv}>
            <div className={Style.lastLeftDiv}>
              <p> {data2.offertext} </p>
            </div>
            <div className={Style.lastRightDiv}>
              <p>
                
                {data2.amenties[0]} &bull; {data2.amenties[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
            )
        })
    }
      {
        window.scrollY ==1919 ?   data.slice(11).map((data2,ind) => {
          return(
              <div key={ind} className={Style.cardParent}>
                  {
                      data2.promoted ? <div className={Style.promotionDiv}>
                      <div className={Style.promotionArrow}>

                      </div><div className={Style.promotionTag}>PROMOTED</div>
                  </div> : ''
                  }
                  
      <div className={Style.imgbox}>
        <img src={data2.image} alternate="" />
        <div className={Style.afterimgboxdata}>
          <div className={Style.bottomheadings}>
            <div className={Style.headbox}>
              <span className={Style.headings}>{data2.tags[0]}</span>
              <span className={Style.headings}>{data2.tags[1]}</span>
            </div>
            <p className={Style.rankhead}> {data2.ranking} </p>
          </div>
          <div className={Style.topRatingBox}>
            <div className={Style.div1}>
              <h3>{data2.rating}</h3>
              <h4>/5</h4>
            </div>
            <h4 className={Style.ratingRemark}>{data2.rating_remarks}</h4>
          </div>
        </div>
      </div>
      <div>
        <div className={Style.clgHeadingDiv}>
          <div>
            <h2 className={Style.clgHead}>{data2.college_name}</h2>
            <span  className={Style.darkStar}>&#9733;&#9733;&#9733;&#9733;</span>
            <span className={Style.lightStar}>&#9733;</span>
          </div>
          <div className={Style.priceLabelDiv}>
            <span className={Style.oriPrice}><strike>₹ {data2.original_fees}</strike></span>
            <div className={Style.disPerDiv}><div className={Style.arrDiv}></div>
            <span>&bull; {data2.discount}</span></div>
          </div>
        </div>
        <div className={Style.nearestPlaceDiv}>
          <div>
            <p className={Style.nearestHead}>
              
              {data2.nearest_place[0]} | <span>{data2.nearest_place[1]}</span>
            </p>
          </div>
          <div>
            <h3 className={Style.cost}>{data2.discounted_fees}</h3>
            <p className={Style.perSem}>{data2.fees_cycle}</p>
          </div>
        </div>
        <div>
          <p className={Style.famousNear}>
            <span>93% Match : </span> {data2.famous_nearest_places}
          </p>
        </div>
        <div className={Style.lastDiv}>
          <div className={Style.lastLeftDiv}>
            <p> {data2.offertext} </p>
          </div>
          <div className={Style.lastRightDiv}>
            <p>
              
              {data2.amenties[0]} &bull; {data2.amenties[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
          )
      }) : ''
      }
    </>
  );
};

export default Card;
