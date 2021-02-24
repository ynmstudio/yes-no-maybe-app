CREATE OR REPLACE VIEW rating_rounds_sorted AS
        WITH RECURSIVE STARTING as (
        SELECT id, edition_id, prev_round_id, 0 AS level, start_at, end_at, goal, created_at, updated_at
        FROM rating_rounds
        WHERE prev_round_id IS NULL
    UNION all
        select RR.id, RR.edition_id, RR.prev_round_id, level+ 1, RR.start_at, RR.end_at, RR.goal, RR.created_at, RR.updated_at
        from starting s
        JOIN rating_rounds RR on s.id = RR.prev_round_id AND s.edition_id = RR.edition_id
    )
    SELECT *
    FROM starting
    ORDER  BY edition_id, level;
