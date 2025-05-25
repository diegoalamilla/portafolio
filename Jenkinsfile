pipeline {
  agent any

  parameters{
    string(name: 'VM_IP', defaultValue: '', description: 'IP pública de la VM')
  }
  
  environment {
    SSH_KEY_CRED_ID = 'ssh-key-vm'       // Credencial SSH en Jenkins          // IP o dominio del servidor remoto
    VM_USER = 'azureuser'              // Usuario SSH del servidor
    REMOTE_PATH = '/var/www/html'   
    FRONT_BUILD_DIR = "dist"  // Ruta donde va el frontend en el servidor
  }

  stages {
    stage('Build Frontend') {
      steps {
        echo 'Construyendo frontend...'
        sh '''
          # Aquí tu build real, ejemplo:
          npm install
          npm run build
        '''
      }
    }

    stage('Deploy Frontend') {
      steps {
        withCredentials([sshUserPrivateKey(credentialsId: SSH_KEY_CRED_ID, keyFileVariable: 'SSH_KEY', usernameVariable: 'azureuser')]) {
          // Copiar archivos con scp
          sh """
            echo 'Copiando archivos build al servidor...'
            scp -i ${SSH_KEY} -o StrictHostKeyChecking=no -r ${FRONT_BUILD_DIR}/* ${SSH_USER}@${REMOTE_HOST}:/tmp/frontend_build/
          """

          // Mover los archivos en el servidor a la carpeta final
          sh """
            echo 'Moviendo archivos en el servidor remoto...'
            ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no ${SSH_USER}@${REMOTE_HOST} '
              mkdir -p ${REMOTE_PATH}
              rm -rf ${REMOTE_PATH}/*
              mv /tmp/frontend_build/* ${REMOTE_PATH}/
              rm -rf /tmp/frontend_build
              echo "Despliegue finalizado."
            '
          """
        }
      }
    }
  }

  post {
    success {
      echo 'Despliegue completado exitosamente 🎉'
    }
    failure {
      echo 'Error en el despliegue'
    }
  }
}
