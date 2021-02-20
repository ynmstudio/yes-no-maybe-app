alter table "public"."rating_rounds" drop constraint "rating_starts_before_end";
alter table "public"."rating_rounds" add constraint "rating_starts_before_end" check (CHECK (start_at >= now() AND start_at < end_at));
