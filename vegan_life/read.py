import mysql.connector

conexao = mysql.connector.connect(
  host="localhost",
  user="root",
  password="262410",
  database="cadastro"
)

cursor = conexao.cursor()

sql = "SELECT * FROM empresas"

cursor.execute(sql)
results = cursor.fetchall()

cursor.close()
conexao.close()

for result in results:
  print(result)