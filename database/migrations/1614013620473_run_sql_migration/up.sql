CREATE OR REPLACE VIEW "public"."ratings_by_application" AS 
SELECT A.id, A.edition_id, R.round_id, count(distinct R.id) as count, avg(R.value) as avg, avg(R_total.value) as avg_total
    FROM ratings AS R
JOIN ratings as R_total
ON R_total.application_id = R.application_id
FULL JOIN applications AS A
ON R.application_id = A.id
LEFT JOIN editions AS E
ON A.edition_id = E.id
WHERE E.current IS TRUE AND A.eliminated IS NOT TRUE
GROUP BY A.id, R.round_id
ORDER BY round_id DESC, count ASC, ABS(5 - avg(R.value)) ASC;
