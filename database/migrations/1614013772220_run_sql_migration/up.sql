CREATE OR REPLACE VIEW "public"."ratings_by_application" AS 
 SELECT a.id,
    a.edition_id,
    r.round_id,
    count(DISTINCT r.id) AS count,
    avg(r.value) AS avg,
    avg(r_total.value) AS avg_total
   FROM (((ratings r
     JOIN ratings r_total ON ((r_total.application_id = r.application_id)))
     FULL JOIN applications a ON ((r.application_id = a.id)))
     LEFT JOIN editions e ON ((a.edition_id = e.id)))
  WHERE ((e.current IS TRUE) AND (a.eliminated IS NOT TRUE))
  GROUP BY a.id, r.round_id
  ORDER BY r.round_id DESC, (count(DISTINCT r.id)), (abs(((5)::numeric - avg(r.value)))), RANDOM();
