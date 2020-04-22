import React, { useContext, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { AppContext } from "../store";
import { radios } from "../datas";

function MyCarousel() {
  const { state, dispatch } = useContext(AppContext);
  const [indexRadio, setIndexRadio] = useState(0);

  const onChange = (value) => {
    setIndexRadio(value);
  };

  const update = () => {
    dispatch({ type: "UPDATE_INDEX_RADIO", payload: indexRadio });
  };

  const getSlide = () => {
    return radios && radios.length > 0
      ? radios.map((radio) => {
          return (
            !radio.hide && (
              <button className="btn-logo" onClick={update} type="button">
                {radio && radio.logo ? (
                  <img
                    className="logo img-fluid"
                    src={radio?.logo}
                    alt={radio?.name}
                  />
                ) : (
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/150"
                    alt=""
                  />
                )}
              </button>
            )
          );
        })
      : "";
  };

  return (
    <div>
      <Carousel
        value={indexRadio === 0 ? state.indexRadio : indexRadio}
        onChange={onChange}
        slidesPerPage={3}
        arrows
        clickToChange
        slides={getSlide()}
      />
    </div>
  );
}

export default MyCarousel;
