import itemsModels from "../models/itemsModels"

// get all items
export const getAllItems = async (req, res) => {
    try {
        const items = await itemsModels.find()
        res.status(200).send(items)
    } catch (error) {
        console.log(error)
    }
} 

// insert items
export const addItems = async (req, res) => {
    try {
        const newItem = itemsModels(req.body)       
        await newItem.save()
        res.status(201).send('Item created successfully')
    } catch (error) {
        res.status(401).send('something goes wrong')
        console.log(error)
    }
}