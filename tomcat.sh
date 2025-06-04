# Step 1: Install Java 17 (Amazon Corretto)
sudo yum install java-17-amazon-corretto -y

# Step 2: Download and extract Tomcat 10.1.41
wget https://downloads.apache.org/tomcat/tomcat-10/v10.1.41/bin/apache-tomcat-10.1.41.tar.gz
tar -zxvf apache-tomcat-10.1.41.tar.gz

# Step 3: Configure tomcat-users.xml for manager access
sed -i '56 a\<role rolename="manager-gui"/>' apache-tomcat-10.1.41/conf/tomcat-users.xml
sed -i '57 a\<role rolename="manager-script"/>' apache-tomcat-10.1.41/conf/tomcat-users.xml
sed -i '58 a\<user username="tomcat" password="admin@123" roles="manager-gui,manager-script"/>' apache-tomcat-10.1.41/conf/tomcat-users.xml
sed -i '59 a\</tomcat-users>' apache-tomcat-10.1.41/conf/tomcat-users.xml
sed -i '56d' apache-tomcat-10.1.41/conf/tomcat-users.xml

# Step 4: Remove IP restriction from manager app context.xml
sed -i '21d' apache-tomcat-10.1.41/webapps/manager/META-INF/context.xml
sed -i '22d' apache-tomcat-10.1.41/webapps/manager/META-INF/context.xml

# Step 5: Start Tomcat
sh apache-tomcat-10.1.41/bin/startup.sh

~                                                                                                                                                   ~                                                 
