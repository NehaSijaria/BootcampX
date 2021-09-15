-- Calculate  the current average time it takes to complete an assistance request

SELECT avg( started_at - completed_at) as average_assistance_request_duration
FROM assistance_requests
LIMIT 1;
