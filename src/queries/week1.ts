export const week1All = `SELECT 
    i.id AS 'ID',
    i.user_id AS 'User ID',
    i.name AS 'Name',
    MAX(CASE WHEN fm.field_id = 304 THEN fm.meta_value END) AS 'Email',
    -- Extract the grade value from the serialized string in Survey Grade
    MAX(CASE WHEN fm.field_id = 305 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) AS 'Survey Grade',
    MAX(CASE WHEN fm.field_id = 306 THEN fm.meta_value END) AS 'School Name',
    MAX(CASE WHEN fm.field_id = 309 THEN fm.meta_value END) AS 'Question 1 Response',
    MAX(CASE WHEN fm.field_id = 312 THEN fm.meta_value END) AS 'Question 2 Response',
    MAX(CASE WHEN fm.field_id = 315 THEN fm.meta_value END) AS 'Question 3 Response',
    MAX(CASE WHEN fm.field_id = 400 THEN fm.meta_value END) AS 'Question 4 Response',
    MAX(CASE WHEN fm.field_id = 401 THEN fm.meta_value END) AS 'Question 5 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm ON i.id = fm.item_id
WHERE 
    i.form_id = 23
GROUP BY 
    i.id, i.user_id, i.name;
;`

export const week1Filter = `SELECT 
    i.id AS 'ID',
    i.user_id AS 'User ID',
    i.name AS 'Name',
    MAX(CASE WHEN fm.field_id = 304 THEN fm.meta_value END) AS 'Email',
    -- Extract the grade value from the serialized string in Survey Grade
    MAX(CASE WHEN fm.field_id = 305 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) AS 'Survey Grade',
    MAX(CASE WHEN fm.field_id = 306 THEN fm.meta_value END) AS 'School Name',
    MAX(CASE WHEN fm.field_id = 309 THEN fm.meta_value END) AS 'Question 1 Response',
    MAX(CASE WHEN fm.field_id = 312 THEN fm.meta_value END) AS 'Question 2 Response',
    MAX(CASE WHEN fm.field_id = 315 THEN fm.meta_value END) AS 'Question 3 Response',
    MAX(CASE WHEN fm.field_id = 400 THEN fm.meta_value END) AS 'Question 4 Response',
    MAX(CASE WHEN fm.field_id = 401 THEN fm.meta_value END) AS 'Question 5 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm ON i.id = fm.item_id
WHERE 
    i.form_id = 23
GROUP BY 
    i.id, i.user_id, i.name
HAVING 
    -- Filter for Grade 
    MAX(CASE WHEN fm.field_id = 305 THEN 
        SUBSTRING(fm.meta_value, 
                  LOCATE('\"', fm.meta_value) + 1, 
                  LOCATE('\"', fm.meta_value, LOCATE('\"', fm.meta_value) + 1) - LOCATE('\"', fm.meta_value) - 1) 
        END) = ?
AND
    -- Filter for School Name 
    MAX(CASE WHEN fm.field_id = 306 THEN fm.meta_value END) = ?;
` 

