module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('users',{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'test@gmail'
        },
        gender:{
            type:DataTypes.STRING,
            
        }
    })
}