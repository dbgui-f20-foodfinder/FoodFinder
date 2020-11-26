import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'

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
  return <div className="d-flex justify-content-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg783"
        width="1210.955"
        height="973.042"
        version="1.1"
        viewBox="0 0 320.399 257.451"
      >
        <defs id="defs777">
          <path
            id="rect125"
            d="M63.311 21.734H146.466V82.21000000000001H63.311z"
          ></path>
          <path id="rect115" d="M32.128 13.229H148.356V81.265H32.128z"></path>
        </defs>
        <g id="layer3" fill="#b7bec8" strokeWidth="0.265" display="inline">
          <path
            id="blu2"
            d="M201.361 -119.44H315.51099999999997V-5.469999999999999H201.361z"
            transform="scale(1 -1)"
          ></path>
          <path id="blu5" d="M201.361 146.606H315.632V252.564H201.361z"></path>
          <path id="blu3" d="M4.763 129.171H53.598V252.392H4.763z"></path>
          <path
            id="blu4"
            d="M65.698 146.47H179.97V252.428H65.698z"
            transform="rotate(-.1)"
          ></path>
          <path
            id="blu1"
            d="M3.903 6.509H179.864V120.1H3.903z"
            transform="rotate(-.3)"
          ></path>
        </g>
        <g id="layer4" display="inline">
          <path
            id="red1"
            fill="#55f"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="0.265"
            d="M10.861 -1.231H186.822V112.36H10.861z"
          ></path>
          <path
            id="red2"
            fill="#55f"
            strokeWidth="0.265"
            d="M207.988 -1.788H322.13800000000003V112.182H207.988z"
          ></path>
          <path
            id="rect4"
            fill="#55f"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="0.265"
            d="M72.673 138.997H186.945V244.955H72.673z"
          ></path>
          <path
            id="red5"
            fill="#55f"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="0.265"
            d="M207.989 139.348H322.26V245.306H207.989z"
          ></path>
          <path
            id="rect90"
            fill="#55f"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="0.265"
            d="M11.39 121.913H60.225V245.13400000000001H11.39z"
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
            x="100.371"
            y="186.426"
            fill="#cf0"
            fillOpacity="1"
            stroke="none"
            strokeWidth="0.55"
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
              x="100.371"
              y="186.426"
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
            x="67.494"
            y="60.871"
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
              x="67.494"
              y="60.871"
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
            x="248.283"
            y="62.325"
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
              x="248.283"
              y="62.325"
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
            x="247.912"
            y="186.26"
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
              x="247.912"
              y="186.26"
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
            x="-241.453"
            y="40.544"
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
              x="-241.453"
              y="40.544"
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
          <text
            xmlSpace="preserve"
            style={{ lineHeight: "1.25" }}
            id="text215"
            x="156.86"
            y="59.531"
            strokeWidth="0.265"
            fontFamily=".Al Bayan PUA"
            fontSize="22.005"
          ></text>
        </g>
      </svg>
    </div>
    }
};
  
export default MapView;