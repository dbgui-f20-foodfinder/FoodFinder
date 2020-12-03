import axios from 'axios';
export class FoodsRepository {
    // url = 'http://3.137.163.61:8001';
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
            axios.put(`${this.url}/editproduct?productID=+${food.id}&name=${food.name}&price=+${food.price}&numSearches=+0&expirationDate=${food.expirationDate}
            &storeID=+1&locationID=+${food.aisle}&stock=+${food.stock}&category=${food.category}&isFresh=+${food.isFresh | 0}
            &isLocallyGrown=+${food.isLocallyGrown | 0}&rating=+${food.rating}&imageURL=${food.imageURL}&productDesc=${food.description}`)
            .then(x => {
                resolve(x.data)
            })
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    createFood(food) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/newproduct?name=${food.name}&price=+${food.price}&numSearches=+0&expirationDate=${food.expirationDate}&storeID=+1
                &locationID=+${food.aisle}&stock=+${food.stock}&category=${food.category}&isFresh=+${food.isFresh | 0}&
                isLocallyGrown=+${food.isLocallyGrown | 0}&rating=+5&imageURL=${food.imageURL}&productDesc=${food.description}`)
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
    createAccount(first, last, userName, password) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/newaccount?username=${userName}&password=${password}&firstName=${first}&lastName=${last}&accountTypeID=+1`)
            .then(x => resolve(x.data))
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

    getAlertsUser(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/notifications/user?userID=${id}`)
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

    getAllAlerts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/notifications`)
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

    sendAlert(id, text) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/newnotification/user?userID=${+id}&notifCategoryID=1&notifText=${text}`)
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

    sendAlertAll(text) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/newnotification/global?notifCategoryID=1&notifText=${text}`)
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

    deleteAlerts(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/deletenotification?userID=${id}`)
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

    sendCredit(id, credit) {
        console.log(credit)
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/give/instorecredit?userID=${id}&credit=${credit}`)
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

    sendCreditAll(credit) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/give/all/instorecredit?credit=${credit}`)
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