import { messcutSer } from "../services/MessCutSer.js"

export const messcutCont = (req, res) => {
    const sid = req.body.sid;
    const start = req.body.start;
    const end = req.body.end;
    const nod = req.body.nod;
    messcutSer(sid, 1, start, end,nod)
        .then((result) => {
            if (result) {
                res.json(result)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}