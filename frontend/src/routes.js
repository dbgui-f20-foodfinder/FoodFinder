import { SearchView } from './app/searchView' 
import { MapView } from "./app/mapView";
import { ItemView } from "./app/itemView";
import { CartView } from "./app/cartView";
import { Login } from "./app/login";

export const ROUTES = [
    { path: '/login', component: Login },
    { path: '/cart', component: CartView },
    { path: '/foods/:foodID', component: ItemView },
    { path: '/search', component: SearchView },
    { path: '/', component: MapView },
]