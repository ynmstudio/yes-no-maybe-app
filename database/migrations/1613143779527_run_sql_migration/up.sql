DROP FUNCTION application_is_ready;
CREATE OR REPLACE FUNCTION application_is_ready(application_row applications)
RETURNS BOOLEAN AS $$
    SELECT application_row.disclaimer AND application_row.statement = '' IS NOT FALSE
$$ LANGUAGE sql STABLE;
