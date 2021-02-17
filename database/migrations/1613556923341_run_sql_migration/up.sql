CREATE OR REPLACE VIEW public."users_online" AS 
 SELECT "users".id,
    "users".name,
    "users".last_seen,
    "users".type
   FROM "users"
  WHERE ("users".last_seen > (now() - '00:01:00'::interval));
