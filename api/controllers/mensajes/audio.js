import { Router } from 'express'
import audioModel from '../../models/audio'

const router = Router()
const bodyParser = require('body-parser')
const upload = require("express-fileupload")

router.use(upload())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.post('/newAudio', (req, res, next) => {
    console.log(req.files);
    audioModel.newAudio(req, async (err) => {
        if (err) throw err
        res.end("Inserted")
    })
})

router.get('/getAudios', (req, res, next) => {
    audioModel.getAudios(res, async (err) => {
        if (err) throw err
    })   
})
export default router
