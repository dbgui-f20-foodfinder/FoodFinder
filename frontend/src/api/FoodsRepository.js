import axios from 'axios';

export class FoodsRepository {
    url = 'http://ec2-3-137-163-61.us-east-2.compute.amazonaws.com';

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

    addToCart(){

    }

    // getFood(id) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.url}/${id}`)
    //         .then(x => resolve(x.data))
    //         .catch(e => {
    //             alert(e);
    //             reject();
    //         });
    //     });
    // }

    // addToCart(id, food) {
    //     return new Promise((resolve, reject) => {
    //         axios.post(`${this.url}`, account)
    //         .then(x => resolve(x.data))
    //         .catch(e => {
    //             alert(e);
    //             reject();
    //         });
    //     });
    // }

    // updateFood(food) {
    //     return new Promise((resolve, reject) => {
    //         axios.put(`${this.url}/${id}`, account)
    //         .then(x => resolve(x.data))
    //         .catch(e => {
    //             alert(e);
    //             reject();
    //         });
    //     });
    // }
    
    // deleteFood(id) {
    //     return new Promise((resolve, reject) => {
    //         axios.delete(`${this.url}/${id}`, this.config)
    //         .then(() => resolve())
    //         .catch(e => {
    //             alert(e);
    //             reject();
    //         });
    //     });
    // }
}

export default FoodsRepository;