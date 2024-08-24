-- https://www.hackerrank.com/challenges/the-company/problem?isFullScreen=true

SELECT 
    c.company_code, 
    MAX(c.founder) AS founder, 
    COUNT(DISTINCT lm.lead_manager_code) AS LM_CNT, 
    COUNT(DISTINCT sm.senior_manager_code) AS SM_CNT, 
    COUNT(DISTINCT m.manager_code) AS M_CNT, 
    COUNT(DISTINCT e.employee_code) AS E_CNT
FROM 
    Company c
JOIN 
    Lead_Manager lm ON lm.company_code =c.company_code 
JOIN 
    Senior_Manager sm ON sm.company_code =c.company_code 
JOIN 
    Manager m ON m.company_code =c.company_code 
JOIN 
    Employee e ON e.company_code =c.company_code 
GROUP BY 
    c.company_code
ORDER BY 
    c.company_code;

/* Sample Output
C1 Monika 1 2 1 2
C2 Samantha 1 1 2 2
*/