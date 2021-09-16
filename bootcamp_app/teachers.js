const { Pool } = require('pg')

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// SQL INJECTIONS

pool.query(queryString, values);(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
  .catch(err => console.error('query error', err.stack));
});


// pool.query(`
// SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
// FROM teachers
// JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
// JOIN students ON students.id = assistance_requests.student_id
// JOIN cohorts ON cohorts.id = students.cohort_id
// WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
// ORDER BY teacher;
// `)
// .then(res => {
//   // console.log(res.rows); // shows full result
//   res.rows.forEach(user => {
//     console.log(`${user.cohort} : ${user.teacher}`)
//   })
// })
// .catch(err => console.error('query error', err.stack));
