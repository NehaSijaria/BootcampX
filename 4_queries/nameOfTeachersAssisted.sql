-- Name of Teachers and Number of Assistances
-- This query will fatch the Name of Teachers and Number of Assistances to students during any cohort, and how many assistances they did for that cohort.

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;