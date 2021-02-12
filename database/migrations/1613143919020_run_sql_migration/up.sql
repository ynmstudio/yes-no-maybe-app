CREATE OR REPLACE FUNCTION public.application_is_ready(application_row applications)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT (application_row.disclaimer IS NOT FALSE AND application_row.statement = '' IS NOT FALSE)
$function$;
