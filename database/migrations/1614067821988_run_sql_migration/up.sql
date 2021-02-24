CREATE OR REPLACE FUNCTION public.application_state(application_row applications)
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
    SELECT 
    CASE 
        WHEN
            (SELECT (application_row.disclaimer IS NOT TRUE AND
            (SELECT COUNT(*) FROM works w  WHERE w.application_id = application_row.id) <= 0 AND
            (SELECT COUNT(*) FROM payments p  WHERE p.application_id = application_row.id) <= 0 AND
            (application_row.statement <> '') IS NOT TRUE)) THEN
            'pristine'
        WHEN (SELECT COUNT(*) FROM works w  WHERE w.application_id = application_row.id) <= 0 THEN
            'no-works'
        WHEN (SELECT COUNT(*) FROM work_specifications s  WHERE s.application_id = application_row.id) <= 0 THEN
            'no-specifications'
        WHEN (SELECT COUNT(*) FROM work_files f  WHERE f.application_id = application_row.id) <= 0 THEN
            'no-files'
        WHEN (SELECT COUNT(*) FROM payments p  WHERE p.application_id = application_row.id) <= 0 THEN
            'not-payed'
        WHEN (SELECT (application_row.disclaimer IS NOT TRUE)) THEN
            'unapproved-disclaimer'
        WHEN ((application_row.statement <> '') IS NOT TRUE) THEN
            'no-statement'
        ELSE
            'complete'
    END
$function$;
