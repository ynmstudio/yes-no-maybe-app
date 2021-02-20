CREATE OR REPLACE FUNCTION application_is_winner(application_row applications)
RETURNS boolean AS $$
SELECT EXISTS (
    SELECT 1
    FROM editions E
    WHERE E.winner_id = application_row.id
);
$$ LANGUAGE sql STABLE;
