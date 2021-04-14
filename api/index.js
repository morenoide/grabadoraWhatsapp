import {Router} from "express"
import audio from "./controllers/mensajes/audio"
import texto from "./controllers/mensajes/texto"

const upload = require("express-fileupload")
const router = Router();

router.use(upload())
router.use(audio)
router.use(texto)


export default router