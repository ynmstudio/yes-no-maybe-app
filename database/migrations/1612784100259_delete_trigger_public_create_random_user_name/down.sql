CREATE TRIGGER "create_random_user_name"
BEFORE INSERT ON "public"."users"
FOR EACH ROW EXECUTE FUNCTION generate_random_string();
