module.exports = (sequelize, DataTypes) =>{
    var Student = sequelize.define('Student', {
        studentID: {
            type:DataTypes.STRING,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        score: {
            type: DataTypes.DECIMAL.UNSIGNED.ZEROFILL,
            //defaultValue: 0.00,
        }

    })
    Student.sync({force:false}).then( () =>{
        console.log('synced table')
    })
    return Student
}