CREATE OR REPLACE FUNCTION rating_round_state(round_row rating_rounds)
RETURNS BOOLEAN AS $$
  SELECT round_row.start_at <= now() AND round_row.end_at >= now()
$$ LANGUAGE sql STABLE;
