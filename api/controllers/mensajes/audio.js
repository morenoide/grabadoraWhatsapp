import { Router } from 'express'
import audioModel from '../../models/audio'

const router = Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.post('/newAudio', (req, res, next) => {
    console.log(req.files);
    /*audioModel.newAudio(req, async (err) => {
        if (err) throw err
        res.end("Inserted")
    })*/
    res.end("inserted")
})

router.post('/testAudio', (req, res, next) => {
    console.log(req.files);
    res.end("end")
})

router.get('/getAudios', (req, res, next) => {
    audioModel.getAudios(res, async (err) => {
        if (err) throw err
    })   
})
export default router
