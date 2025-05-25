pipeline {
  agent any

   parameters {
    string(name: 'VM_IP', defaultValue: '', description: 'IP pública de la VM')
    string(name: 'VM_USER', defaultValue: 'ubuntu', description: 'Usuario SSH en la VM')
  }
  environment {    
    VM_USER = "azureuser"     
    VM_SSH_KEY = credentials("ssh-key-azure") 
    FRONT_BUILD_DIR = "dist"  
    REMOTE_DIR = "/var/www/html"
  }

  stages {
    stage("Build Frontend") {
      steps {
        echo " Construyendo el Frontend"
        sh "npm install && npm run build"
      }
    }

    stage("Transferir Archivos por SCP") {
      steps {
        echo "🚀 Transferir build a la VM"
        sshagent (credentials: ['ssh-key-jenkins']) {
          sh """
            scp -o StrictHostKeyChecking=no -r ${FRONT_BUILD_DIR}/* ${VM_USER}@${VM_IP}:${REMOTE_DIR}/
          """
        }
      }
    }

    stage("Configurar Nginx") {
      steps {
        echo "🔧 Reiniciar Nginx en la VM"
        sshagent (credentials: ['ssh-key-jenkins']) {
          sh """
            ssh -o StrictHostKeyChecking=no ${VM_USER}@${VM_IP} '
              sudo systemctl restart nginx
            '
          """
        }
      }
    }
  }

  post {
    success {
      echo "✅ Despliegue completado"
    }
    failure {
      echo "❌ Falló el despliegue"
    }
  }
}
