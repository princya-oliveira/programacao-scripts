import mysql.connector

conexao = mysql.connector.connect(
  host="localhost",
  user="root",
  password="262410",
  database="cadastro"
)

cursor = conexao.cursor()

sql = "DELETE FROM users WHERE id = %s"
data = (2,)

cursor.execute(sql, data)
conexao.commit()

recordsaffected = cursor.rowcount

cursor.close()
conexao.close()

print(recordsaffected, " registros excluídos")