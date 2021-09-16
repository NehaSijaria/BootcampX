SELECT cohorts.name, count(students.*) as student_count
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
WHERE cohorts.start_date = students.start_date
GROUP BY cohorts.name
HAVING count(students.*) >= 18
ORDER BY student_count;
