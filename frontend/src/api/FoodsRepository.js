import axios from 'axios';


// const mysql = require('mysql');
// const express = require('express');
// const app = express();
// var connection = mysql.createConnection({
//     host: 'backend-db.czkrggrgqm0l.us-west-2.rds.amazonaws.com',
//     port: '3306',
//     user: 'mainuser',
//     password: 'Password',
//     database: 'food'
//   });


export class FoodsRepository {
    // host: 'backend-db.czkrggrgqm0l.us-west-2.rds.amazonaws.com',
    // port: '3306',
    // user: 'mainuser',
    // password: 'Password',
    // database: 'food'
    
    url = 'backend-db.czkrggrgqm0l.us-west-2.rds.amazonaws.com/products';

    config = {
        headers: {
            Authorization: '',
            user: 'mainuser',
            password: 'Password',
        }
    };

    getFoods() {
        
        return new Promise((resolve, reject) => {

            // app.get('/products', function (req, res) {
            //     connection.query("SELECT * FROM products",
            //     function (err, result, fields) {
            //       if (err) throw err;
            //       res.end(JSON.stringify(result)); // Result in JSON format
            //   });
            // })
            axios.get(`${this.url}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    

    getFood(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    addFood(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    updateFood(id, account) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${id}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    
    deleteFood(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${id}`, this.config)
            .then(() => resolve())
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
}

export default FoodsRepository;