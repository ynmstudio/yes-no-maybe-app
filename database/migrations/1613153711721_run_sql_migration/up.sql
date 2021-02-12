CREATE OR REPLACE FUNCTION public.application_state(application_row applications)
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
    SELECT 
    CASE 
        WHEN (application_row.statement <> '') IS NOT FALSE THEN
            'no-statement'
        ELSE
            'complete'
    END
$function$;
