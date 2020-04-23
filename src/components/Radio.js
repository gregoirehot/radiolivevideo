import React from "react";
import renderHTML from "react-render-html";
import { getRadioByShareCode } from "../utils";

function Radio(props) {
  const { match } = props;
  const shareCode = match?.params?.shareCode;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mt-3 mb-5 card-radio">
            <h3 className="card-header">
              <span aria-label="Radio" role="img">
                📻
              </span>{" "}
              {getRadioByShareCode(shareCode)?.name}
            </h3>
            <div className="embed-responsive embed-responsive-16by9">
              {getRadioByShareCode(shareCode)
                ? renderHTML(getRadioByShareCode(shareCode)?.iframe)
                : "Not Available here"}
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
                    href={getRadioByShareCode(shareCode)?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getRadioByShareCode(shareCode)?.link}
                  </a>
                </div>
                <div className="col">
                  <span
                    aria-label="Source Website"
                    role="img"
                    title="Share radio"
                  >
                    🔗
                  </span>
                  <a
                    href={`radio/${getRadioByShareCode(shareCode)?.shareCode}`}
                    rel="noopener noreferrer"
                  >
                    radio/{getRadioByShareCode(shareCode)?.shareCode}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Radio;
