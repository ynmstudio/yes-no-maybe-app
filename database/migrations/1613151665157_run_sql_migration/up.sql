CREATE OR REPLACE FUNCTION public.application_state(application_row applications)
RETURNS TEXT AS $$
    SELECT ('no-statement' || ' ' || application_row.statement);
$$ LANGUAGE sql STABLE;
