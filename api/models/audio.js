import mysql from "mysql"
import dbconfig from "../config"

let audioModel = {}

audioModel.newAudio = (audioDetails, callback) => {
    let mysql = require('mysql')
    mysql = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    mysql.connect();
    let file = audioDetails.files.audioFile
    let filename
    let nombreArchivo = new Date()

    filename = "" + nombreArchivo.getFullYear() + nombreArchivo.getMonth() + nombreArchivo.getDate() + nombreArchivo.getHours() + nombreArchivo.getMinutes() + nombreArchivo.getSeconds() + nombreArchivo.getMilliseconds()

    file.mv("static/audios/" + filename + ".wav", (err) => {
        if (err) {
            console.log(err)
        }
    })
    mysql.query(`INSERT INTO audios (path) VALUES (${filename})`, (err, rows) => {
        if (err) throw console.log(err);;
    })
    callback()
}

audioModel.getAudios = (res, callback) => {
    let lista = new Array()
    let mysql = require('mysql')
    
    mysql = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    mysql.connect();

    mysql.query(`SELECT path FROM audios`, (err, rows) => {
        if (err) throw err
        for (let index = 0; index < rows.length; index++) {
            lista.push(rows[index].path)
        }
        res.end(JSON.stringify(lista))
    })

    callback()
}

export default audioModel