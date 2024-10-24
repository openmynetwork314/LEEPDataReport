const week3 = `SELECT 
    i.id AS 'ID',
    i.user_id AS 'User ID',
    i.name AS 'Name',
    MAX(CASE WHEN fm.field_id = 430 THEN fm.meta_value END) AS 'Email',
    -- Extract the grade value from the serialized string in Survey Grade
    MAX(CASE WHEN fm.field_id = 431 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) AS 'Survey Grade',
    MAX(CASE WHEN fm.field_id = 432 THEN fm.meta_value END) AS 'School Name',
    MAX(CASE WHEN fm.field_id = 435 THEN fm.meta_value END) AS 'Question 1 Response',
    MAX(CASE WHEN fm.field_id = 438 THEN fm.meta_value END) AS 'Question 2 Response',
    MAX(CASE WHEN fm.field_id = 441 THEN fm.meta_value END) AS 'Question 3 Response',
    MAX(CASE WHEN fm.field_id = 444 THEN fm.meta_value END) AS 'Question 4 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm ON i.id = fm.item_id
WHERE 
    i.form_id = 32
GROUP BY 
    i.id, i.user_id, i.name
HAVING 
     -- Filter for Grade 
    MAX(CASE WHEN fm.field_id = 431 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) = ?
AND 
    -- Filter for School Name 
    MAX(CASE WHEN fm.field_id = 432 THEN fm.meta_value END) = ?;

`
export default week3