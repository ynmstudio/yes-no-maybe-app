alter table "public"."rating_rounds" add constraint "rating_starts_before_end" check (start_at < end_at);
