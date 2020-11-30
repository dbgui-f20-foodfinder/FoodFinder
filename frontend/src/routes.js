import { SearchView } from './app/searchView' 
import { MapView } from "./app/mapView";
import { ItemView } from "./app/itemView";
import { CartView } from "./app/cartView";
import { Login } from "./app/login";
import { ItemEditView } from "./app/itemEditView"
import { NewItemView } from "./app/newItemView"
import { Profile } from "./app/profile"

export const ROUTES = [
    { path: '/login', component: Login },
    { path: '/myProfile', component: Profile },
    { path: '/cart', component: CartView },    
    { path: '/foods/:foodID/edit', component: ItemEditView },
    { path: '/foods/newItem', component: NewItemView },
    { path: '/foods/:foodID', component: ItemView },
    { path: '/search', component: SearchView },
    { path: '/map', component: MapView },
    { path: '/', component: Login },
]