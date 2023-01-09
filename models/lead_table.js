const { Sequelize} = require('sequelize');
const seq = new Sequelize('brightchamps_mini_project', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
  });
  try {
    seq.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
const lead_table=seq.define('lead_table',
{
  student_phone_no:{primaryKey:true,type:Sequelize.INTEGER}
}
)
module.exports=lead_table