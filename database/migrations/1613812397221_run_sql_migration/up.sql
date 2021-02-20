CREATE OR REPLACE FUNCTION edition_state(edition_row editions) 
RETURNS TEXT AS $$
SELECT edition_row.id || 'idle'
$$ LANGUAGE sql STABLE;
