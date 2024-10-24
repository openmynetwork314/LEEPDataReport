const week4 = `SELECT 
    i.id AS 'ID',
    i.user_id AS 'User ID',
    i.name AS 'Name',
    MAX(CASE WHEN fm.field_id = 456 THEN fm.meta_value END) AS 'Email',
    -- Extract the grade value from the serialized string in Survey Grade
    MAX(CASE WHEN fm.field_id = 457 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) AS 'Survey Grade',
    MAX(CASE WHEN fm.field_id = 458 THEN fm.meta_value END) AS 'School Name',
    MAX(CASE WHEN fm.field_id = 461 THEN fm.meta_value END) AS 'Question 1 Response',
    MAX(CASE WHEN fm.field_id = 464 THEN fm.meta_value END) AS 'Question 2 Response',
    MAX(CASE WHEN fm.field_id = 467 THEN fm.meta_value END) AS 'Question 3 Response',
    MAX(CASE WHEN fm.field_id = 470 THEN fm.meta_value END) AS 'Question 4 Response',
    MAX(CASE WHEN fm.field_id = 598 THEN fm.meta_value END) AS 'Question 5 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm ON i.id = fm.item_id
WHERE 
    i.form_id = 33
GROUP BY 
    i.id, i.user_id, i.name
HAVING 
    -- Filter for Grade 
    MAX(CASE WHEN fm.field_id = 457 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) = ? 
AND 
    -- Filter for School Name 
    MAX(CASE WHEN fm.field_id = 458 THEN fm.meta_value END) = ? ;  

`
export default week4