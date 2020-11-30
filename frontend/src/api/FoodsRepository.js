import axios from 'axios';
export class FoodsRepository {
    //url = 'http://3.137.163.61:8001';
    url = 'http://localhost:8001';
    getFoods() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/products`)
            .then(x => {
                resolve(x.data);
            }
            )
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    getFood(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/product/get?productID=${id}`)
            .then(x => {
                resolve(x.data);
            }
            )
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    updateFood(food) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/createproduct`, food)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    createFood(food) {
        return new Promise((resolve, reject) => {
            console.log(food)
            // axios.put(`${this.url}/newproduct?name=${food.name}&price=+${food.price}&numSearches=+0&expirationDate=${"2020-02-16"}&storeID=+1
            //     &locationID=+${food.aisle}&stock=+${food.stock}&category=${food.category}&isFresh=+${food.isFresh}&
            //     isLocallyGrown=+${food.isLocallyGrown}&rating=+0&imageURL=${food.imageURL}&productDesc=${food.description}`)
            axios.put(`${this.url}/newproduct?name=Apple&price=2.02&numSearches=0&expirationDate=2020-02-16&storeID=1&locationID=3&stock=300&category=2&isFresh=1&isLocallyGrown=1&rating=3&imageURL=https://en.wikipedia.org/wiki/Carrot%23/media/File:Vegetable-Carrot-Bundle-wStalks.jpg&productDesc=Good`)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    deleteFood(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/deleteproduct?productID=${id}`)
            .then(() => resolve())
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    validateLogin(userName, password){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/login?username=${userName}&password=${password}`)
            .then(x => {
                resolve(x.data);
            }
            )
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    getUserID(userName) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/userinfo?username=${userName}`)
            .then(x => {
                resolve(x.data);
            }
            )
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    getUserInfo(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/profileInfo?userID=${id}`)
            .then(x => {
                resolve(x.data);
            }
            )
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
}
export default FoodsRepository;