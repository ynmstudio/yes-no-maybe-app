CREATE OR REPLACE FUNCTION public.application_state(application_row applications)
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
    SELECT (application_row.disclaimer IS NOT FALSE) || 'no-statement';
$function$;
