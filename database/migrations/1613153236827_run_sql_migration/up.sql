CREATE OR REPLACE FUNCTION public.application_state(application_row applications)
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
    SELECT (application_row.disclaimer IS NOT FALSE AND
    (SELECT COUNT(*) FROM works_files f  WHERE f.application_id = application_row.id) > 0 AND
    (SELECT COUNT(*) FROM works_specifications s  WHERE s.application_id = application_row.id) > 0 AND
    (SELECT COUNT(*) FROM payments p  WHERE p.application_id = application_row.id) > 0 AND
    (application_row.statement <> '') IS NOT FALSE) || ''
$function$;
