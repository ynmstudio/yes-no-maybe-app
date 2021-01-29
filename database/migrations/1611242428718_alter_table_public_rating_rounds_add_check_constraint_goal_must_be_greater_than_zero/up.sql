alter table "public"."rating_rounds" add constraint "goal_must_be_greater_than_zero" check (goal > 0);
