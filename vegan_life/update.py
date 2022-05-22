import mysql.connector

conexao = mysql.connector.connect(
  host="localhost",
  user="root",
  password="262410",
  database="cadastro"
)

cursor = conexao.cursor()

sql = "UPDATE empresas SET nome=%s, cep=%s, logradouro=%s, numero=%s, bairro=%s, complemento=%s, email=%s, telefone=%s, site=%s, itensVenda=%s"
data = (
  ''
)

cursor.execute(sql, data)
conexao.commit()

recordsaffected = cursor.rowcount

cursor.close()
conexao.close()

print(recordsaffected, " registros alterados")