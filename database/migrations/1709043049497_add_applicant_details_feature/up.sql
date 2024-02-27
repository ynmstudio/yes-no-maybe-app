alter table "public"."users" alter column "type" set default 'user';

alter table "public"."applications" add column "applicant_details" jsonb
 null default '{}';

alter table "public"."applications" add column "applicant_details_valid" boolean
 null;

CREATE OR REPLACE FUNCTION public.application_is_ready(application_row applications)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT (application_row.disclaimer IS NOT FALSE AND
    (SELECT COUNT(*) FROM work_files f  WHERE f.application_id = application_row.id) > 0 AND
    (SELECT COUNT(*) FROM work_specifications s  WHERE s.application_id = application_row.id) > 0 AND
    application_row.applicant_details_valid IS NOT FALSE AND
    (application_row.statement <> '') IS NOT FALSE)
$function$;

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
        WHEN (SELECT (application_row.disclaimer IS NOT TRUE)) THEN
            'unapproved-disclaimer'
        WHEN (SELECT (application_row.applicant_details_valid IS NOT TRUE)) THEN
            'invalid-details'
        WHEN ((application_row.statement <> '') IS NOT TRUE) THEN
            'no-statement'
        ELSE
            'complete'
    END
$function$;