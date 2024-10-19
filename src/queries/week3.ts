const week3 = `SELECT 
    i.user_id AS 'User ID',
    i.name AS 'Name',
    fm1.meta_value AS 'Email',
     -- Extract the grade value from the serialized string in Survey Grade
    SUBSTRING(fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1, LOCATE('\"', fm3.meta_value, LOCATE('\"', fm3.meta_value) + 1) - LOCATE('\"', fm3.meta_value) - 1) AS 'Survey Grade',
    fm4.meta_value AS 'School Name',
    fm5.meta_value AS 'Question 1 Response',
    fm6.meta_value AS 'Question 2 Response',
    fm7.meta_value AS 'Question 3 Response',
    fm8.meta_value AS 'Question 4 Response'
FROM 
    rpvk48mv_frm_items i
JOIN 
    rpvk48mv_frm_item_metas fm1 ON i.id = fm1.item_id AND fm1.field_id = 430  
JOIN 
    rpvk48mv_frm_item_metas fm3 ON i.id = fm3.item_id AND fm3.field_id = 431  
JOIN 
    rpvk48mv_frm_item_metas fm4 ON i.id = fm4.item_id AND fm4.field_id = 432  
JOIN 
    rpvk48mv_frm_item_metas fm5 ON i.id = fm5.item_id AND fm5.field_id = 435  
JOIN 
    rpvk48mv_frm_item_metas fm6 ON i.id = fm6.item_id AND fm6.field_id = 438 
JOIN 
    rpvk48mv_frm_item_metas fm7 ON i.id = fm7.item_id AND fm7.field_id = 441  
JOIN 
    rpvk48mv_frm_item_metas fm8 ON i.id = fm8.item_id AND fm8.field_id = 444   
WHERE 
    i.form_id = 32;
`
export default week3