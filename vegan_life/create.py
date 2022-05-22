import mysql.connector

connection = mysql.connector.connect(
  host="localhost",
  user="root",
  password="262410",
  database="cadastro"
)

cursor = connection.cursor()

sql = "INSERT INTO empresas (nome, cep, logradouro, numero, bairro, complemento, email, telefone, site, itensVenda) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
data = (
  'amarelo veg',
  '14401-018',
  'R. Cósimo Traficante',
  '270',
  'Prolongamento Vila Duque de Caxias',
  '-',
  'amareloveg@gmail.com',
  '(16) 99050-1412',
  'https://www.instagram.com/amareloveg/',
  'tofu fresco e bolos'
)

cursor.execute(sql, data)
connection.commit()

cursor.close()
connection.close()

print("Um novo usuário foi cadastrado")
