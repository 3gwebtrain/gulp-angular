module.exports = function(){

return {
    "development" : {
        "MONGO_URI": "mongodb://localhost/test",
        "MONGO_OPTIONS": { "db": { "safe": true } }
    },
    "production" : {
        "MONGO_URI": "mongodb://localhost/production",
        "MONGO_OPTIONS": { "db": { "safe": true } }
    }
}

}