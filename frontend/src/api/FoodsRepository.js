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

    updateFood(id, food) {
        // return new Promise((resolve, reject) => {
        //     axios.put(`${this.url}/${id}`, account)
        //     .then(x => resolve(x.data))
        //     .catch(e => {
        //         alert(e);
        //         reject();
        //     });
        // });
    }
    
    deleteFood(id) {
        // return new Promise((resolve, reject) => {
        //     axios.delete(`${this.url}/${id}`, this.config)
        //     .then(() => resolve())
        //     .catch(e => {
        //         alert(e);
        //         reject();
        //     });
        // });
    }
}

export default FoodsRepository;