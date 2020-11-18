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
        <g
          id="layer1"
          fillOpacity="1"
          fillRule="evenodd"
          display="inline"
          transform="translate(-14.717 -28.06)"
        >
          <path
            id="rect11"
            fill="#55f"
            strokeWidth="0.187"
            d="M20.538 156.174H40.193V279.394H20.538z"
          ></path>
          <path
            id="rect2"
            fill="#55f"
            strokeWidth="0.18"
            d="M49.718 -147.178H69.373V-33.028999999999996H49.718z"
            transform="scale(1 -1)"
          ></path>
          <path
            id="rect37"
            fill="#5fd35f"
            strokeWidth="0.187"
            d="M49.718 -279.394H69.373V-156.174H49.718z"
            transform="scale(1 -1)"
          ></path>
          <path
            id="rect12"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M173.385 -195.699H193.04V-81.55000000000001H173.385z"
            transform="rotate(89.91)"
          ></path>
          <path
            id="rect14"
            fill="#55f"
            strokeWidth="0.18"
            d="M202.036 81.536H221.691V195.685H202.036z"
            transform="scale(1 -1) rotate(-89.91)"
          ></path>
          <path
            id="rect3"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M81.821 32.65H101.476V146.799H81.821z"
          ></path>
          <path
            id="rect4"
            fill="#55f"
            strokeWidth="0.18"
            d="M112.589 -146.8H132.244V-32.65100000000001H112.589z"
            transform="scale(1 -1)"
          ></path>
          <path
            id="rect5"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M143.885 32.65H163.54V146.799H143.885z"
          ></path>
          <path
            id="rect6"
            fill="#55f"
            strokeWidth="0.18"
            d="M176.315 -146.621H195.97V-32.47200000000001H176.315z"
            transform="scale(1 -1)"
          ></path>


          <path
            id="rect1"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M20.009 -147.179H39.664V-33.03H20.009z"
            transform="scale(1 -1)"
          ></path>
          

          {/* <button type="button" className="btn" data-container="body" data-toggle="modal">
          Modal Test
          </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  *Put Aisle Preview Here*
                </div>
                <div class="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div> */}

          <path
            id="rect16"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M230.687 -195.671H250.342V-81.52199999999999H230.687z"
            transform="rotate(89.91)"
          ></path>
          <path
            id="rect18"
            fill="#55f"
            strokeWidth="0.18"
            d="M259.867 81.507H279.52200000000005V195.656H259.867z"
            transform="scale(1 -1) rotate(-89.91)"
          ></path>
          <path
            id="rect13"
            fill="#55f"
            strokeWidth="0.18"
            d="M173.947 -331.014H193.602V-216.865H173.947z"
            transform="rotate(89.91)"
          ></path>
          <path
            id="rect15"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M202.598 216.85H222.25300000000001V330.999H202.598z"
            transform="scale(1 -1) rotate(-89.91)"
          ></path>
          <path
            id="rect17"
            fill="#55f"
            strokeWidth="0.18"
            d="M231.249 -330.986H250.904V-216.837H231.249z"
            transform="rotate(89.91)"
          ></path>
          <path
            id="rect19"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M260.429 216.821H280.08399999999995V330.97H260.429z"
            transform="scale(1 -1) rotate(-89.91)"
          ></path>
          <path
            id="rect8"
            fill="#55f"
            strokeWidth="0.18"
            d="M247.904 -146.62H267.55899999999997V-32.471000000000004H247.904z"
            transform="scale(1 -1)"
          ></path>
          <path
            id="rect9"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M280.26 32.471H299.91499999999996V146.62H280.26z"
          ></path>
          <path
            id="rect10"
            fill="#55f"
            strokeWidth="0.18"
            d="M311.631 -146.443H331.28599999999994V-32.29400000000001H311.631z"
            transform="scale(1 -1)"
          ></path>
          <path
            id="rect7"
            fill="#5fd35f"
            strokeWidth="0.18"
            d="M217.136 -146.621H236.791V-32.47200000000001H217.136z"
            transform="scale(1 -1)"
          ></path>
        </g>
      </svg>
    </div>
    }
};
  
export default MapView;