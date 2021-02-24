CREATE OR REPLACE VIEW ratings_by_application AS
    SELECT A.id, A.edition_id, R.round_id, count(R) as ratings, avg(R.value) as avg_total
        FROM ratings AS R
    RIGHT JOIN applications AS A
    ON R.application_id = A.id
    LEFT JOIN editions AS E
    ON A.edition_id = E.id
    WHERE E.current IS TRUE AND A.eliminated IS NOT TRUE
    GROUP BY A.id, R.round_id
    ORDER BY round_id DESC, ratings ASC, ABS(5 - avg(R.value)) ASC;
