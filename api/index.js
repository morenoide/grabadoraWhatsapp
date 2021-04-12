import {Router} from "express"
import audio from "./controllers/mensajes/audio"
import texto from "./controllers/mensajes/texto"

const router = Router();

router.use(audio)
router.use(texto)


export default router