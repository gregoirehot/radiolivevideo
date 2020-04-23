import React, { useContext } from "react";
import renderHTML from "react-render-html";
import { getRadio } from "../utils";
import { maxIndex } from "../datas";
import { AppContext } from "../store";
import MyCarousel from "./Gallery";

function Home() {
  const { state, dispatch } = useContext(AppContext);

  const getPreviewIndex = () => {
    if (state.indexRadio !== 0) {
      dispatch({ type: "PREVIEW_INDEX_RADIO" });
    }
  };

  const getNextIndex = () => {
    if (state.indexRadio !== maxIndex) {
      dispatch({ type: "NEXT_INDEX_RADIO" });
    }
  };

  const getRandomIndex = () => {
    dispatch({ type: "RANDOM_INDEX_RADIO" });
  };

  const radio = getRadio(state.indexRadio);

  // TODO Favory (enregistrement index pour avoir sa radio au chargement)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mt-3 mb-5 card-radio">
            <h3 className="card-header">
              <span aria-label="Radio" role="img">
                📻
              </span>{" "}
              {radio?.name}
            </h3>
            <div className="embed-responsive embed-responsive-16by9">
              {radio && renderHTML(radio?.iframe)}
            </div>
            <div className="card-body">
              <button
                className="btn btn-secondary"
                onClick={getPreviewIndex}
                type="button"
              >
                <span aria-label="Previous" role="img">
                  ⏮️
                </span>{" "}
                Previous
              </button>{" "}
              <button
                className="btn btn-primary btn-lg"
                onClick={getRandomIndex}
                type="button"
              >
                <span aria-label="Zapping" role="img">
                  🔀
                </span>{" "}
                Zapping
              </button>{" "}
              <button
                className="btn btn-secondary"
                onClick={getNextIndex}
                type="button"
              >
                Next{" "}
                <span aria-label="Next" role="img">
                  ⏭️
                </span>
              </button>
            </div>
            <div className="card-footer text-muted">
              <div className="row">
                <div className="col">
                  <span
                    aria-label="Source Website"
                    role="img"
                    title="Source Website"
                  >
                    🌐
                  </span>
                  <a
                    href={radio?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {radio?.link}
                  </a>
                </div>
                {/* <div className="col">
                  <span
                    aria-label="Source Website"
                    role="img"
                    title="Share radio"
                  >
                    🔗
                  </span>
                  <a
                    href={`radio/${radio?.shareCode}`}
                    rel="noopener noreferrer"
                  >
                    radio/{radio?.shareCode}
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyCarousel />
    </>
  );
}

export default Home;
