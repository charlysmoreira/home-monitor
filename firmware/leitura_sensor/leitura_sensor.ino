#define MYSQL_DEBUG_PORT    Serial
#define _MYSQL_LOGLEVEL_    1

#include <MySQL_Generic.h>

IPAddress server(192,168,1,67);   // Ip do servidor de banco de dados
char ssid[] = "Casa 57_(2.4g)";   // Rede wifi
char pass[] = "crvh12345";        // Senha da rede
char user[] = "root";             // Usuario banco de dados 
char password[] = "crvh1234";     // Senha criada com o usuário
uint16_t serverPort = 3307;       // Porta do banco MariaDb

MySQL_Connection conn((Client *)&client);

MySQL_Query *query_mem;

void setup(){
  Serial.begin(115200);
  while (!Serial && millis() < 5000);

  MYSQL_DISPLAY1("\nInitializing ", ARDUINO_BOARD);
  MYSQL_DISPLAY(MYSQL_MARIADB_GENERIC_VERSION);
  MYSQL_DISPLAY1("Conectando à rede: ", ssid);
  
  WiFi.begin(ssid, pass);
  
  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    MYSQL_DISPLAY0(".");
  }

  MYSQL_DISPLAY1("Conectado à rede. Endereço IP: ", WiFi.localIP());
  MYSQL_DISPLAY3("Conectando ao Banco de Dados @", server, ", Port =", serverPort);
}

void dataInsert(){
  MySQL_Query query_mem = MySQL_Query(&conn);

  if (conn.connected()){
    String sql_query = "insert into home_monitor.water(value) values(" + String(12.365) + ");";
    MYSQL_DISPLAY(sql_query);

    if (!query_mem.execute(sql_query.c_str())){
      MYSQL_DISPLAY("Error ao inserir o dado");
    }
    else{
      MYSQL_DISPLAY("Dado inserido com sucesso.");
    }
  }
  else{
    MYSQL_DISPLAY("Servidor desconectado.");
  }
}

void loop(){
  MYSQL_DISPLAY("Conectando...");
  
  if (conn.connectNonBlocking(server, serverPort, user, password) != RESULT_FAIL){
    delay(500);
    dataInsert();
    conn.close(); 
  } 
  else{
    MYSQL_DISPLAY("\nConexao falhou. Tente novamente.");
  }

  MYSQL_DISPLAY("\nAguardando...");
  MYSQL_DISPLAY("===============");
 
  delay(60000);
}