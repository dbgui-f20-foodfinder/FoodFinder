import { SearchView } from './app/searchView' 
import { MapView } from "./app/mapView";
import { ItemView } from "./app/itemView";
import { CartView } from "./app/cartView";
import { Login } from "./app/login";
import { ItemEditView } from "./app/itemEditView"

export const ROUTES = [
    { path: '/login', component: Login },
    { path: '/cart', component: CartView },    
    { path: '/foods/:foodID/edit', component: ItemEditView },
    { path: '/foods/:foodID', component: ItemView },
    { path: '/search', component: SearchView },
    { path: '/map', component: MapView },
    { path: '/', component: Login },
]