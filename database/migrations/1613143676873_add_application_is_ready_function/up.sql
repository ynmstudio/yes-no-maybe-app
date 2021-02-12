CREATE OR REPLACE FUNCTION application_is_ready(application_row applications)
RETURNS TEXT AS $$
    SELECT application_row.disclaimer || ' >> ' || application_row.statement
$$ LANGUAGE sql STABLE;
