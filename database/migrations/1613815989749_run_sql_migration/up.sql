CREATE OR REPLACE FUNCTION application_rated_by_user(application_row applications, hasura_session json)
RETURNS boolean AS $$
SELECT EXISTS (
    SELECT 1
    FROM ratings R
    WHERE EXISTS (SELECT 1 FROM rating_rounds RR WHERE R.round_id = RR.id) AND R.created_by = hasura_session ->> 'x-hasura-user-id' AND R.application_id = application_row.id
);
$$ LANGUAGE sql STABLE;
