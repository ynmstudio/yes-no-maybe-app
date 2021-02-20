CREATE FUNCTION search_applications(search text) 
returns setof applications AS $$ 
SELECT   * 
FROM     applications 
WHERE    search <% ( INTERNAL_NAME ) 
ORDER BY similarity(search, ( INTERNAL_NAME )) DESC limit 5; 

$$ language sql stable;
