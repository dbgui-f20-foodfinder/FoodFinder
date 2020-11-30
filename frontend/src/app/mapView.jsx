import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import Header from './header';

export class MapView extends React.Component{
  foodRepository = new FoodRepository();

  state = {
    foods: []
  };

  componentWillMount(){
    this.foodRepository.getFoods()
    .then(rez => {
      let foods = [];
      rez.map((f) => {
          let curFood = new Food(f.productID, f.name, f.price, f.numSearches, f.expirationDate, f.storeID, f.locationID, f.stock, f.category, f.isFresh, 
            f.isLocallyGrown, f.rating, f.imageURL, f.productDesc);
          foods.push(curFood);
      });
      this.setState({
        foods: foods
      })
    });
  }

  render() { 
  return <>
  <Header></Header>

  {/* Aisle 1 Preview */}
  <div className="modal fade" id="aisle1Prev" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 1 Preview</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container bg-light">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.locationID == 1) {
                  return <tr key={i}>
                    <td>{x.name}</td>
                    <td>${parseFloat(x.price).toFixed(2)}</td>
                  </tr>
                }
              })
            }
        </tbody>
      </table>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">More...</button>
      </div>
    </div>
  </div>
  </div>

  {/* Aisle 2 Preview */}
  <div className="modal fade" id="aisle2Prev" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 2 Preview</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Modal content
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">More...</button>
      </div>
    </div>
  </div>
  </div>

  {/* Aisle 3 Preview */}
  <div className="modal fade" id="aisle3Prev" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 3 Preview</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Modal content
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">More...</button>
      </div>
    </div>
  </div>
  </div>

  {/* Aisle 4 Preview */}
  <div className="modal fade" id="aisle4Prev" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 4 Preview</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Modal content
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">More...</button>
      </div>
    </div>
  </div>
  </div>

  {/* Aisle 5 Preview */}
  <div className="modal fade" id="aisle5Prev" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 5 Preview</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Modal content
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">More...</button>
      </div>
    </div>
  </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-8 aisle1" data-toggle="modal" data-target="#aisle1Prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg962"
          width="691.217"
          height="458.492"
          version="1.1"
          viewBox="0 0 182.885 121.309"
        >
          <g id="layer1" transform="translate(-15.903 -70.881)">
            <path
              id="grey1"
              fill="#b7bec8"
              strokeWidth="0.265"
              d="M15.491 78.683H191.452V192.274H15.491z"
              display="inline"
              transform="rotate(-.3)"
            ></path>
            <path
              id="blu1"
              fill="#55f"
              strokeDasharray="none"
              strokeMiterlimit="4"
              strokeWidth="0.265"
              d="M22.827 70.881H198.788V184.47199999999998H22.827z"
              display="inline"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'sans-serif, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              id="text131-3"
              x="80.41"
              y="125.132"
              fill="#cf0"
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.55"
              display="inline"
              fontFamily="sans-serif"
              fontSize="22.005"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              transform="scale(.9159 1.09183)"
            >
              <tspan
                id="tspan129-0"
                x="80.41"
                y="125.132"
                style={{
                  InkscapeFontSpecification: "'sans-serif, Bold'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                fill="#cf0"
                strokeWidth="0.55"
                fontFamily="sans-serif"
                fontSize="22.005"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
              >
                Aisle 1
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <div className="col-3 aisle2" data-toggle="modal" data-target="#aisle2Prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg2186"
          width="456.483"
          height="458.186"
          version="1.1"
          viewBox="0 0 120.778 121.228"
        >
          <g id="layer1" transform="translate(-26.546 -67.142)">
            <path
              id="grey2"
              fill="#b7bec8"
              strokeWidth="0.265"
              d="M26.546 -188.37H140.696V-74.4H26.546z"
              display="inline"
              transform="scale(1 -1)"
            ></path>
            <path
              id="blu2"
              fill="#55f"
              strokeWidth="0.265"
              d="M33.173 67.142H147.323V181.112H33.173z"
              display="inline"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'sans-serif, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              id="text131-3-9"
              x="57.458"
              y="121.88"
              fill="#cf0"
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.55"
              display="inline"
              fontFamily="sans-serif"
              fontSize="22.005"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              transform="scale(.9159 1.09183)"
            >
              <tspan
                id="tspan129-0-1"
                x="57.458"
                y="121.88"
                style={{
                  InkscapeFontSpecification: "'sans-serif, Bold'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                fill="#cf0"
                strokeWidth="0.55"
                fontFamily="sans-serif"
                fontSize="22.005"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
              >
                Aisle 2
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
      
    <div className="row">
      <div className="col-auto aisle3" data-toggle="modal" data-target="#aisle3Prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg2799"
          width="209.623"
          height="493.148"
          version="1.1"
          viewBox="0 0 55.463 130.479"
        >
          <g id="layer1" transform="translate(-146.894 -107.118)">
            <path
              id="grey3"
              fill="#b7bec8"
              strokeWidth="0.265"
              d="M146.894 114.376H195.729V237.597H146.894z"
              display="inline"
            ></path>
            <path
              id="blu3"
              fill="#55f"
              strokeDasharray="none"
              strokeMiterlimit="4"
              strokeWidth="0.265"
              d="M153.521 107.118H202.356V230.339H153.521z"
              display="inline"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'sans-serif, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              id="text131-2"
              x="-225.09"
              y="171.167"
              fill="#cf0"
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.55"
              display="inline"
              fontFamily="sans-serif"
              fontSize="22.005"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              transform="matrix(0 -.9159 1.09183 0 0 0)"
            >
              <tspan
                id="tspan129-3"
                x="-225.09"
                y="171.167"
                style={{
                  InkscapeFontSpecification: "'sans-serif, Bold'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                fill="#cf0"
                strokeWidth="0.55"
                fontFamily="sans-serif"
                fontSize="22.005"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
              >
                Aisle 3
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <div className="col-auto aisle4" data-toggle="modal" data-target="#aisle4Prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg3410"
          width="457.292"
          height="428.28"
          version="1.1"
          viewBox="0 0 120.992 113.316"
        >
          <g id="layer1" transform="translate(-80.111 -55.223)">
            <path
              id="grey4"
              fill="#b7bec8"
              strokeWidth="0.265"
              d="M80.002 62.721H194.274V168.679H80.002z"
              display="inline"
              transform="rotate(-.1)"
            ></path>
            <path
              id="blu4"
              fill="#55f"
              strokeDasharray="none"
              strokeMiterlimit="4"
              strokeWidth="0.265"
              d="M86.831 55.223H201.103V161.18099999999998H86.831z"
              display="inline"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'sans-serif, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              id="text131"
              x="115.562"
              y="107.295"
              fill="#cf0"
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.55"
              display="inline"
              fontFamily="sans-serif"
              fontSize="22.005"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              transform="scale(.9159 1.09183)"
            >
              <tspan
                id="tspan129"
                x="115.562"
                y="107.295"
                style={{
                  InkscapeFontSpecification: "'sans-serif, Bold'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                fill="#cf0"
                strokeWidth="0.55"
                fontFamily="sans-serif"
                fontSize="22.005"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
              >
                Aisle 4{" "}
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <div className="col-4 aisle5" data-toggle="modal" data-target="#aisle5Prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg4033"
          width="456.939"
          height="427.904"
          version="1.1"
          viewBox="0 0 120.898 113.216"
        >
          <g id="layer1" transform="translate(-33.289 -33.35)">
            <path
              id="grey5"
              fill="#b7bec8"
              strokeWidth="0.265"
              d="M33.289 40.608H147.56V146.566H33.289z"
              display="inline"
            ></path>
            <path
              id="blu5"
              fill="#55f"
              strokeDasharray="none"
              strokeMiterlimit="4"
              strokeWidth="0.265"
              d="M39.917 33.35H154.188V139.308H39.917z"
              display="inline"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'sans-serif, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              id="text131-3-9-0"
              x="64.406"
              y="89.177"
              fill="#cf0"
              fillOpacity="1"
              stroke="none"
              strokeWidth="0.55"
              display="inline"
              fontFamily="sans-serif"
              fontSize="22.005"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              transform="scale(.9159 1.09183)"
            >
              <tspan
                id="tspan129-0-1-9"
                x="64.406"
                y="89.177"
                style={{
                  InkscapeFontSpecification: "'sans-serif, Bold'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                fill="#cf0"
                strokeWidth="0.55"
                fontFamily="sans-serif"
                fontSize="22.005"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
              >
                Aisle 5
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  </div>
  </>
}
};
  
export default MapView;