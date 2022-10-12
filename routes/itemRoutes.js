import express from 'express'
import { addItems, getAllItems } from '../controllers/itemController'

const routerItems = express.Router()

// Route method GET
routerItems.get('/get_items', getAllItems)

routerItems.post('/add_items', addItems)

export { routerItems}