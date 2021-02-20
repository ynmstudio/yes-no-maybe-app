CREATE INDEX applications_name_gin_idx ON applications
USING GIN ((internal_name) gin_trgm_ops);
