CREATE OR REPLACE FUNCTION public.application_is_ready(application_row applications)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT (application_row.disclaimer IS NOT FALSE AND (SELECT 1 FROM works_specifications s  WHERE s.application_id = application_row.id) > 0 AND (application_row.statement <> '') IS NOT FALSE)
$function$;