CREATE OR REPLACE FUNCTION get_alias() RETURNS TEXT AS $$
    SELECT get_random_word() || '-' || get_random_word() || '-' || get_random_word() || '-' || get_random_word()
$$ LANGUAGE sql STABLE;
