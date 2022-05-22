import mysql.connector

conexao = mysql.connector.connect(host='localhost', database='cadastro', user='root', password='262410')

if conexao.is_connected():
    db_info = conexao.get_server_info()
    print("Conectado ao servidor MySQL versão ",db_info)
    cursor = conexao.cursor()
    cursor.execute("select database();")
    linha = cursor.fetchone()
    print("Conectado ao banco de dados ",linha)

    sql = "INSERT INTO empresas (nome, cep, logradouro, numero, bairro, complemento, email, telefone, site, itensVenda) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    data = (
        'amarelo veg',
        '14401018',
        'R. Cósimo Traficante',
        '270',
        'Prolongamento Vila Duque de Caxias',
        '-',
        'amareloveg@gmail.com',
        '16990501412',
        'https://www.instagram.com/amareloveg/',
        'tofu fresco e bolos'
    )

cursor.execute(sql, data)
conexao.commit()

if conexao.is_connected():
    cursor.close()
    conexao.close()
    print("A conexão com MySQL foi encerrada.")

print("Uma nova empresa foi cadastrada.")