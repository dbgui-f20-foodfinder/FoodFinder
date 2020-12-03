import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import Header from './header';
import { Link } from 'react-router-dom'


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
  <div className="modal fade" id="aisle1Prev" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.aisle == 1) {
                  return <tr key={i}>
                    <td><Link className="text-decoration-underline text-primary" 
                    onClick={()=> {this.props.history.push('foods/' + x.id)}}
                    to={'foods/' + x.id}
                    data-dismiss="modal"> <u>{x.name}</u> </Link></td>
                    <td> {x.category} </td>
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      </div>
    </div>
  </div>
  </div>

  {/* Aisle 2 Preview */}
  <div className="modal fade" id="aisle2Prev" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 2 Preview</h5>
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
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.aisle == 2) {
                  return <tr key={i}>
                    <td><Link className="text-decoration-underline text-primary" 
                    onClick={()=> {this.props.history.push('foods/' + x.id)}}
                    to={'foods/' + x.id}
                    data-dismiss="modal"> <u>{x.name}</u> </Link></td>
                    <td> {x.category} </td>
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      </div>
    </div>
  </div>
  </div>

  {/* Aisle 3 Preview */}
  <div className="modal fade" id="aisle3Prev" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 3 Preview</h5>
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
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.aisle == 3) {
                  return <tr key={i}>
                    <td><Link className="text-decoration-underline text-primary" 
                    onClick={()=> {this.props.history.push('foods/' + x.id)}}
                    to={'foods/' + x.id}
                    data-dismiss="modal"> <u>{x.name}</u> </Link></td>
                    <td> {x.category} </td>
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      </div>
    </div>
  </div>
  </div>

  {/* Aisle 4 Preview */}
  <div className="modal fade" id="aisle4Prev" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 4 Preview</h5>
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
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.aisle == 4) {
                  return <tr key={i}>
                    <td><Link className="text-decoration-underline text-primary" 
                    onClick={()=> {this.props.history.push('foods/' + x.id)}}
                    to={'foods/' + x.id}
                    data-dismiss="modal"> <u>{x.name}</u> </Link></td>
                    <td> {x.category} </td>
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      </div>
    </div>
  </div>
  </div>

  {/* Aisle 5 Preview */}
  <div className="modal fade" id="aisle5Prev" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aisle 5 Preview</h5>
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
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.aisle == 5) {
                  return <tr key={i}>
                    <td><Link className="text-decoration-underline text-primary" 
                    onClick={()=> {this.props.history.push('foods/' + x.id)}}
                    to={'foods/' + x.id}
                    data-dismiss="modal"> <u>{x.name}</u> </Link></td>
                    <td> {x.category} </td>
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      </div>
    </div>
  </div>
  </div>

  {/* Aisle 0 (Unassigned) Preview */}
  <div className="modal fade" id="aisle0Prev" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Unassigned Preview</h5>
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
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            { this.state.foods.map((x,i) => {
                if(x.aisle == 0) {
                  return <tr key={i}>
                    <td><Link className="text-decoration-underline text-primary" 
                    onClick={()=> {this.props.history.push('foods/' + x.id)}}
                    to={'foods/' + x.id}
                    data-dismiss="modal"> <u>{x.name}</u> </Link></td>
                    <td> {x.category} </td>
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      </div>
    </div>
  </div>
  </div>

  <div className="container">
    <div className="row" id="row1">
      <div className="col aisle1 aisle2">
        <svg data-toggle="modal" data-target="#aisle1Prev"
          xmlns="http://www.w3.org/2000/svg"
          id="svg962"
          width="70%"//"691.217"
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
        <svg data-toggle="modal" data-target="#aisle2Prev"
          xmlns="http://www.w3.org/2000/svg"
          id="svg2799"
          width="17.3%"//"209.623"
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
                Aisle 2
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
    
    <div className="row" id="row2">
      <div className="col aisle3 aisle4 aisle5">
        <svg data-toggle="modal" data-target="#aisle3Prev"
          xmlns="http://www.w3.org/2000/svg"
          id="svg2186"
          width="49%"//"456.483"
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
                Aisle 3
              </tspan>
            </text>
          </g>
        </svg>
        <svg data-toggle="modal" data-target="#aisle4Prev"
          xmlns="http://www.w3.org/2000/svg"
          id="svg2799"
          width="25%"//"209.623"
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
                Aisle 4
              </tspan>
            </text>
          </g>
        </svg>
        <svg data-toggle="modal" data-target="#aisle5Prev"
          xmlns="http://www.w3.org/2000/svg"
          id="svg2799"
          width="26%"//"209.623"
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
                Aisle 5
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>

    <div className="row" id="row3">
      <svg data-toggle="modal" data-target="#aisle0Prev"
        xmlns="http://www.w3.org/2000/svg"
        id="svg1549"
        width="1199.4"
        height="281.475"
        version="1.1"
        viewBox="0 0 317.341 74.474"
      >
        <g id="layer1" transform="translate(36.206 -54.99)">
          <path
            id="grey0"
            fill="#b7bec8"
            strokeWidth="0.348"
            d="M-36.206 62.247H274.548V129.463H-36.206z"
            display="inline"
          ></path>
          <path
            id="blu0"
            fill=""
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="0.346"
            d="M-29.579 54.989H281.135V121.25999999999999H-29.579z"
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
            id="text131-3-8-4"
            x="72.585"
            y="88.885"
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
              id="tspan129-0-3-0"
              x="72.585"
              y="88.885"
              style={{
                InkscapeFontSpecification: "'sans-serif, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fill="#55f"
              strokeWidth="0.55"
              fontFamily="sans-serif"
              fontSize="22.005"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
            >
              Unassigned
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
  </>
}
};
  
export default MapView;