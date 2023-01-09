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
const book_table=seq.define('book_table',
{
    student_name:Sequelize.STRING,
    student_phone_no:{type:Sequelize.INTEGER,primaryKey:true},
    book_date:{type:Sequelize.STRING},
    subject:{type:Sequelize.STRING}
}
)
module.exports=book_table