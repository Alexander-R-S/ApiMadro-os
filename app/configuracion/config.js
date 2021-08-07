module.exports={
    PORT: process.env.PORT || 3000,
    //necesario para el docker-compose build:
    BD: process.env.BD || 'mongodb://mongo/madroños'
     //BD: process.env.BD || 'mongodb://localhost:27017/madroños'
}