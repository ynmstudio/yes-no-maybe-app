
alter table "public"."ratings" drop constraint "ratings_created_by_fkey";

alter table "public"."ratings" drop constraint "ratings_round_id_fkey",
  add constraint "ratings_round_id_fkey"
  foreign key ("round_id")
  references "public"."rating_rounds"
  ("id") on update restrict on delete restrict;

alter table "public"."eliminations" drop constraint "eliminations_round_id_fkey",
  add constraint "eliminations_round_id_fkey"
  foreign key ("round_id")
  references "public"."rating_rounds"
  ("id") on update restrict on delete restrict;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.rating_round_state(round_row rating_rounds)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
  SELECT round_row.start_at <= now() AND round_row.end_at >= now() AND NOT round_row.closed
$function$;

alter table "public"."messages"
  add constraint "messages_id_fkey"
  foreign key ("id")
  references "public"."ratings"
  ("message_id") on update no action on delete cascade;

alter table "public"."messages" drop constraint "messages_id_fkey",
  add constraint "messages_id_fkey"
  foreign key ("round_id")
  references "public"."rating_rounds"
  ("id") on update cascade on delete cascade;

alter table "public"."messages" drop constraint "messages_id_fkey";

alter table "public"."rating_rounds" alter column "start_at" set default (now() + '01:00:00'::interval hour);

alter table "public"."rating_rounds" add constraint "rating_starts_before_end" check (CHECK (start_at < end_at));

alter table "public"."rating_rounds" drop constraint "rating_ends_in_future";
alter table "public"."rating_rounds" add constraint "rating_start_in_future" check (CHECK (start_at > created_at));

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION get_rating_round_level(rating_round_row rating_rounds)
RETURNS integer AS $$
 WITH RECURSIVE starting AS (
         SELECT rating_rounds.id,
            rating_rounds.edition_id,
            rating_rounds.prev_round_id,
            0 AS level
           FROM rating_rounds
          WHERE (rating_rounds.prev_round_id IS NULL)
        UNION ALL
         SELECT rr.id,
            rr.edition_id,
            rr.prev_round_id,
            (s.level + 1)
           FROM (starting s
             JOIN rating_rounds rr ON (((s.id = rr.prev_round_id) AND (s.edition_id = rr.edition_id))))
        )
SELECT starting.level
   FROM starting
   WHERE starting.id = rating_round_row.id
ORDER BY starting.edition_id, starting.level
  $$ LANGUAGE sql STABLE;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE VIEW "public"."rating_rounds_sorted" AS 
 WITH RECURSIVE starting AS (
         SELECT rating_rounds.id,
            rating_rounds.edition_id,
            rating_rounds.prev_round_id,
            0 AS level,
            rating_rounds.start_at,
            rating_rounds.end_at,
            rating_rounds.goal,
            rating_rounds.closed
           FROM rating_rounds
          WHERE (rating_rounds.prev_round_id IS NULL)
        UNION ALL
         SELECT rr.id,
            rr.edition_id,
            rr.prev_round_id,
            (s.level + 1),
            rr.start_at,
            rr.end_at,
            rr.goal,
            rr.closed
           FROM (starting s
             JOIN rating_rounds rr ON (((s.id = rr.prev_round_id) AND (s.edition_id = rr.edition_id))))
        )
 SELECT starting.id,
    starting.edition_id,
    starting.prev_round_id,
    starting.level,
    starting.start_at,
    starting.end_at,
    starting.goal,
    starting.closed
   FROM starting
  ORDER BY starting.edition_id, starting.level;

alter table "public"."applications" alter column "eliminated" set default false;
alter table "public"."applications" alter column "eliminated" drop not null;
alter table "public"."applications" add column "eliminated" bool;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."rating_rounds" add column "closed" boolean
 not null default 'false';

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE VIEW "public"."ratings_by_application" AS 
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
     LEFT JOIN eliminations el ON ((a.id = el.application_id))
  WHERE ((e.current IS TRUE) AND (el IS NULL))
  GROUP BY a.id, r.round_id
  ORDER BY r.round_id DESC, (count(DISTINCT r.id)), (abs(((5)::numeric - avg(r.value)))), (random());
