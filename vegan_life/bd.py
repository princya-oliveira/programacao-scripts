import mysql.connector

conexao = mysql.connector.connect(host='localhost', database='cadastro', user='root', password='262410')

if conexao.is_connected():
    db_info = conexao.get_server_info()
    print("Conectado ao servidor MySQL versão ", db_info)
    cursor = conexao.cursor()
    cursor.execute("select database();")
    linha = cursor.fetchone()
    print("Conectado ao banco de dados ", linha)

if conexao.is_connected():
    cursor.close()
    conexao.close()
    print("A conexão com MySQL foi encerrada.")