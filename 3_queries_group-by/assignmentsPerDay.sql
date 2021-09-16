SELECT day, count(assignments.name) as total_assignments
FROM assignments GROUP BY day ORDER BY DAY;