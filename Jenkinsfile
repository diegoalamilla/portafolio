pipeline {
    agent any
    parameters {
    string(name: 'VM_IP', defaultValue: '', description: 'IP de la VM de destino')
  }
  environment {
    SSH_FILE = credentials('azure-ssh-key')
    VM_USER = 'azureuser'
    PATH_TO_COPY = 'dist'
    NGINX_PATH = '/var/www/html/'
  }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
    
            }
        }
        stage('Deploy to VM') {
      steps {
          sh """
           cp "${SSH_FILE}" key.pem
            chmod 600 key.pem
            echo "put -r ${PATH_TO_COPY}" | sftp -o StrictHostKeyChecking=no -i key.pem -r ${VM_USER}@${params.VM_IP}:${NGINX_PATH}
          """
        
      }
    }