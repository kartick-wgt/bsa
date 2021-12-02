const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('sequelizedatabase','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
})

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch((err)=>{
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./users')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('synx')
}) 