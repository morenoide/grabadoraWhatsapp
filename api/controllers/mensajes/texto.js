import { Router } from 'express'
import textModel from '../../models/texto'

const router = Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get("/prueba", (req, res, next) => {
    console.log("Funciona");
    res.end("Funciona")
})

router.post("/newTexto", (req, res, next) => {
    textModel.newTexto(req.body.texto, async(err) => {
        res.end("String Inserted")
    })
})

router.get("/getTexto", (req, res, next) => {
    textModel.getTexto(res, async(err) => {})
})

router.get("/getAll", (req, res, next) => {
    textModel.getAll(res, async(err) => {
        if (err) throw err
    })
})

router.post("/subirArchivo", (req, res, next) => {

    console.log(req.files.archivo);

    textModel.subirArchivo(req, async(err) => {
        if (err) throw err
        res.end("Funciona")
    })

})

router.post("/BorrarDatos", (req, res, next) => {
    textModel.BorrarDatos(req, async(err) => {
        if (err) throw err
        res.end("Funciona")
    })
})

export default router