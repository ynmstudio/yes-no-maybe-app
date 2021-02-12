CREATE OR REPLACE FUNCTION public.application_state(application_row applications)
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
     SELECT 
     CASE WHEN
        (application_row.statement <> '') IS NOT FALSE THEN 
     '1' 
     ELSE 
     '2' 
     END
      || ''
$function$;
