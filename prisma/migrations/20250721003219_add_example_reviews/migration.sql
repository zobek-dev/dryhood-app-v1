-- First, let's get the first beach ID
WITH first_beach AS (
  SELECT id, shop FROM Beach LIMIT 1
)
-- Now insert example reviews
INSERT INTO Review (id, shop, userId, userEmail, userName, title, content, stars, isPublished, beachId, createdAt, updatedAt)
SELECT 
  'rev_' || SUBSTR(HEX(RANDOMBLOB(4)), 1, 8),
  first_beach.shop,
  'user_' || SUBSTR(HEX(RANDOMBLOB(4)), 1, 8),
  'example' || rowid || '@example.com',
  'Test User ' || rowid,
  CASE rowid
    WHEN 1 THEN '¡Excelente playa para la familia!'
    WHEN 2 THEN 'Hermoso lugar para relajarse'
    WHEN 3 THEN 'Experiencia increíble'
  END,
  CASE rowid
    WHEN 1 THEN 'Visitamos esta playa con toda la familia y fue una experiencia maravillosa. El agua estaba perfecta y muy limpia. Hay buenos restaurantes cerca y estacionamiento disponible.'
    WHEN 2 THEN 'Un lugar perfecto para desconectar. La playa es tranquila y el paisaje es espectacular. Ideal para tomar fotos y disfrutar del atardecer.'
    WHEN 3 THEN 'Pasamos un día entero aquí y fue increíble. La arena es suave, el agua cristalina y hay buenas olas para surfear. Definitivamente volveremos.'
  END,
  CASE rowid
    WHEN 1 THEN 5
    WHEN 2 THEN 4
    WHEN 3 THEN 5
  END,
  CASE rowid
    WHEN 1 THEN true
    WHEN 2 THEN true
    WHEN 3 THEN false
  END,
  first_beach.id,
  DATETIME('now', '-' || (ABS(RANDOM() % 30) + 1) || ' days'),
  DATETIME('now', '-' || (ABS(RANDOM() % 30) + 1) || ' days')
FROM (SELECT ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) as rowid FROM Beach LIMIT 3), first_beach;