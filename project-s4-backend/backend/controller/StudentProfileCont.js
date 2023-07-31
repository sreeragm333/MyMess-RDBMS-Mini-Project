// StudentProfileCont.js
import { studentProfileSer } from "../services/StudentProfileSer.js";

export const studentProfileCont = (req, res) => {
    const sid = req.body.sid
  studentProfileSer(sid)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error('Failed to get student details', error);
      res.status(500).send('Failed to get student details.');
    });
};
