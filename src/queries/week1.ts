export const week1All = `SELECT 
    i.user_id AS 'User ID',
    i.name AS 'Name',
    fm1.meta_value AS 'Email',
    -- Extract the grade value from the serialized string in Survey Grade
    SUBSTRING(fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1, LOCATE('\"', fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1) - LOCATE('\"', fm3.meta_value) - 1) AS 'Survey Grade',
    fm4.meta_value AS 'School Name',
    fm5.meta_value AS 'Question 1 Response',
    fm6.meta_value AS 'Question 2 Response',
    fm7.meta_value AS 'Question 3 Response',
    fm8.meta_value AS 'Question 4 Response',
    fm9.meta_value AS 'Question 5 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm1 ON i.id = fm1.item_id AND fm1.field_id = 304  
JOIN 
    rpvk48mv_frm_item_metas fm3 ON i.id = fm3.item_id AND fm3.field_id = 305  
JOIN 
    rpvk48mv_frm_item_metas fm4 ON i.id = fm4.item_id AND fm4.field_id = 306  
JOIN 
    rpvk48mv_frm_item_metas fm5 ON i.id = fm5.item_id AND fm5.field_id = 309  
JOIN 
    rpvk48mv_frm_item_metas fm6 ON i.id = fm6.item_id AND fm6.field_id = 312 
JOIN 
    rpvk48mv_frm_item_metas fm7 ON i.id = fm7.item_id AND fm7.field_id = 315  
JOIN 
    rpvk48mv_frm_item_metas fm8 ON i.id = fm8.item_id AND fm8.field_id = 400  
JOIN 
    rpvk48mv_frm_item_metas fm9 ON i.id = fm9.item_id AND fm9.field_id = 401  
WHERE 
    i.form_id = 23
;`

export const week1Filter = `SELECT 
    i.user_id AS 'User ID',
    i.name AS 'Name',
    fm1.meta_value AS 'Email',
    -- Extract the grade value from the serialized string in Survey Grade
    SUBSTRING(fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1, 
        LOCATE('\"', fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1) - LOCATE('\"', fm3.meta_value) - 1) AS 'Survey Grade',
    fm4.meta_value AS 'School Name',
    fm5.meta_value AS 'Question 1 Response',
    fm6.meta_value AS 'Question 2 Response',
    fm7.meta_value AS 'Question 3 Response',
    fm8.meta_value AS 'Question 4 Response',
    fm9.meta_value AS 'Question 5 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm1 ON i.id = fm1.item_id AND fm1.field_id = 304  
JOIN 
    rpvk48mv_frm_item_metas fm3 ON i.id = fm3.item_id AND fm3.field_id = 305  
JOIN 
    rpvk48mv_frm_item_metas fm4 ON i.id = fm4.item_id AND fm4.field_id = 306  
JOIN 
    rpvk48mv_frm_item_metas fm5 ON i.id = fm5.item_id AND fm5.field_id = 309  
JOIN 
    rpvk48mv_frm_item_metas fm6 ON i.id = fm6.item_id AND fm6.field_id = 312 
JOIN 
    rpvk48mv_frm_item_metas fm7 ON i.id = fm7.item_id AND fm7.field_id = 315  
JOIN 
    rpvk48mv_frm_item_metas fm8 ON i.id = fm8.item_id AND fm8.field_id = 400  
JOIN 
    rpvk48mv_frm_item_metas fm9 ON i.id = fm9.item_id AND fm9.field_id = 401  
WHERE 
    i.form_id = 23
AND
    -- Extract the value from the serialized string and compare it to the passed parameter
    SUBSTRING(fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1, 
        LOCATE('\"', fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1) - LOCATE('\"', fm3.meta_value) - 1) = ?
AND
    fm4.meta_value = ?;  
` 

