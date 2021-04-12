let textModel = {}

textModel.newTexto = function (newTexto, callback) {
    let mysql = require('mysql')
    mysql = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    mysql.connect();
    newTexto.replace('"', '\"')
    mysql.query(`INSERT INTO mensajes (mensaje) VALUES ("${newTexto}")`, (err, rows) => {
        if (err) throw console.log(err);;
    })
    callback()

}

textModel.getTexto = function (res, callback) {
    let lista = new Array()
    let mysql = require('mysql')

    mysql = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    mysql.connect();

    mysql.query(`SELECT mensaje FROM mensajes`, (err, rows) => {
        console.log(rows);
        res.end(JSON.stringify(rows))
    })
    callback()
}

textModel.getAll = function (res, callback) {
    let mysql = require('mysql')
    mysql = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    mysql.query(`SELECT path as path, type as type, fecha_creacion FROM audios
    UNION ALL
    SELECT mensaje as mensaje, type as type,fecha_creacion FROM mensajes
    ORDER BY fecha_creacion ASC`, (err, rows) => {
        res.end(JSON.stringify(rows))
    })

    callback()
}

textModel.subirArchivo = function (req, callback) {
    callback()
}
export default textModel