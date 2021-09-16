SELECT day, count(assignments.name) as total_assignments
FROM assignments
GROUP BY day
HAVING count(assignments.name) >= 10
ORDER BY day;