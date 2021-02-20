CREATE OR REPLACE FUNCTION edition_state(edition_row editions) 
RETURNS TEXT AS $$
SELECT 
    CASE 
        WHEN (edition_row.application_start > now()) THEN
            'open'
        WHEN edition_row.application_start <= now() AND edition_row.application_end >= now() THEN
            'submission'
        WHEN edition_row.application_end < now() AND edition_row.winner_id IS NULL THEN
            'rating'
        WHEN edition_row.winner_id IS NOT NULL THEN
            'closed'
        ELSE
            'idle'
    END
$$ LANGUAGE sql STABLE;
