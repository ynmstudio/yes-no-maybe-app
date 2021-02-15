CREATE OR REPLACE FUNCTION public.get_alias()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    IF NEW.internal_name IS NULL THEN
        NEW.internal_name := get_random_word() || '-' || get_random_word() || '-' || get_random_word() || '-' || get_random_word();
    END IF;
    RETURN NEW;
END
$function$;
