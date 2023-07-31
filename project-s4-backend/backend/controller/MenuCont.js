import { menuSer } from "../services/MenuSer.js";

export const menuCont = (req, res) => {
    const day = req.params.day;
    menuSer(day).then(results => {
        res.json(results);
    }).catch((error) => {
        console.error('Failed to get menu items:', error);
        res.status(500).send('Failed to get menu items.');
    })

}